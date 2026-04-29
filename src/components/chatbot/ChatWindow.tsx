"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { useTranslations } from "next-intl";
import { AnimatePresence, motion } from "framer-motion";
import { X, Send, RotateCcw, MessageSquare } from "lucide-react";

import ChatMessage, { Message } from "./ChatMessage";
import TypingIndicator from "./TypingIndicator";
import {
  chatbotConfig,
  faqData,
  categoryOrder,
  FaqItem,
} from "./chatbot.config";

interface ChatWindowProps {
  onClose: () => void;
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

function makeId() {
  return Math.random().toString(36).slice(2, 10);
}

function botMessage(text: string): Message {
  return { id: makeId(), role: "bot", text, timestamp: new Date() };
}

function userMessage(text: string): Message {
  return { id: makeId(), role: "user", text, timestamp: new Date() };
}

function loadHistory(): Message[] {
  if (!chatbotConfig.enableLocalStorage || typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(chatbotConfig.storageKey);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as Array<Omit<Message, "timestamp"> & { timestamp: string }>;
    return parsed.map((m) => ({ ...m, timestamp: new Date(m.timestamp) }));
  } catch {
    return [];
  }
}

function saveHistory(messages: Message[]) {
  if (!chatbotConfig.enableLocalStorage || typeof window === "undefined") return;
  try {
    localStorage.setItem(chatbotConfig.storageKey, JSON.stringify(messages));
  } catch {
    // ignore
  }
}

function groupedFaq(): Array<{ category: string; items: FaqItem[] }> {
  const map = new Map<string, FaqItem[]>();
  for (const item of faqData) {
    const cat = item.category ?? "General";
    if (!map.has(cat)) map.set(cat, []);
    map.get(cat)!.push(item);
  }
  const result: Array<{ category: string; items: FaqItem[] }> = [];
  for (const cat of categoryOrder) {
    if (map.has(cat)) result.push({ category: cat, items: map.get(cat)! });
  }
  for (const [cat, items] of map.entries()) {
    if (!categoryOrder.includes(cat)) result.push({ category: cat, items });
  }
  return result;
}

// ─── Scrollbar styles injected once ──────────────────────────────────────────

const SCROLL_STYLE_ID = "ug-chat-scrollbar";

function injectScrollStyles() {
  if (typeof document === "undefined") return;
  if (document.getElementById(SCROLL_STYLE_ID)) return;
  const style = document.createElement("style");
  style.id = SCROLL_STYLE_ID;
  style.textContent = `
    .ug-scroll {
      scrollbar-width: thin;
      scrollbar-color: rgba(0,0,0,0.15) transparent;
      scroll-behavior: smooth;
    }
    .ug-scroll::-webkit-scrollbar {
      width: 4px;
      height: 4px;
    }
    .ug-scroll::-webkit-scrollbar-track {
      background: transparent;
    }
    .ug-scroll::-webkit-scrollbar-thumb {
      background-color: rgba(0,0,0,0.15);
      border-radius: 100px;
      transition: background-color 0.2s ease;
    }
    .ug-scroll::-webkit-scrollbar-thumb:hover {
      background-color: rgba(0,0,0,0.3);
    }
    @media (prefers-color-scheme: dark) {
      .ug-scroll {
        scrollbar-color: rgba(255,255,255,0.15) transparent;
      }
      .ug-scroll::-webkit-scrollbar-thumb {
        background-color: rgba(255,255,255,0.15);
      }
      .ug-scroll::-webkit-scrollbar-thumb:hover {
        background-color: rgba(255,255,255,0.3);
      }
    }
  `;
  document.head.appendChild(style);
}

// ─── Component ───────────────────────────────────────────────────────────────

const ChatWindow: React.FC<ChatWindowProps> = ({ onClose }) => {
  const [messages, setMessages] = useState<Message[]>(() => {
    const history = loadHistory();
    if (history.length > 0) return history;
    return [botMessage(chatbotConfig.welcomeMessage)];
  });
  const [showSuggestions, setShowSuggestions] = useState(true);
  const [isTyping, setIsTyping] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>(categoryOrder[0]);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const grouped = groupedFaq();

  const t = useTranslations("chatbot");
  // Inject scrollbar CSS once on mount
  useEffect(() => {
    injectScrollStyles();
  }, []);

  // Auto-scroll to bottom on new messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  // Persist history
  useEffect(() => {
    saveHistory(messages);
  }, [messages]);

  // Focus input on mount
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // ── Bot response logic ────────────────────────────────────────────────────
  const sendBotReply = useCallback(async (replyText: string) => {
    setIsTyping(true);
    await new Promise((r) => setTimeout(r, chatbotConfig.typingDelayMs));
    await new Promise((r) => setTimeout(r, chatbotConfig.responseDelayMs));
    setIsTyping(false);
    setMessages((prev) => [...prev, botMessage(replyText)]);
  }, []);

  // ── FAQ click ─────────────────────────────────────────────────────────────
  const handleFaqClick = useCallback(
      (item: FaqItem) => {
        setMessages((prev) => [...prev, userMessage(item.question)]);

        if (chatbotConfig.enableApiMode) {
          setIsTyping(true);
          fetch(chatbotConfig.apiEndpoint, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ message: item.question }),
          })
              .then((r) => r.json())
              .then((data) => {
                setIsTyping(false);
                setMessages((prev) => [
                  ...prev,
                  botMessage(data.reply ?? "Sorry, I couldn't get a response."),
                ]);
              })
              .catch(() => {
                setIsTyping(false);
                setMessages((prev) => [
                  ...prev,
                  botMessage("Sorry, something went wrong. Please try again."),
                ]);
              });
        } else {
          sendBotReply(item.answer);
        }
        setShowSuggestions(false);
      },
      [sendBotReply]
  );

  // ── Free-text send ────────────────────────────────────────────────────────
  const handleSend = useCallback(() => {
    const text = inputValue.trim();
    if (!text) return;
    setInputValue("");
    setMessages((prev) => [...prev, userMessage(text)]);

    if (chatbotConfig.enableApiMode) {
      setIsTyping(true);
      fetch(chatbotConfig.apiEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text }),
      })
          .then((r) => r.json())
          .then((data) => {
            setIsTyping(false);
            setMessages((prev) => [
              ...prev,
              botMessage(data.reply ?? "Sorry, I couldn't get a response."),
            ]);
          })
          .catch(() => {
            setIsTyping(false);
            setMessages((prev) => [
              ...prev,
              botMessage("Sorry, something went wrong. Please try again."),
            ]);
          });
      return;
    }

    const lower = text.toLowerCase();
    const match = faqData.find(
        (f) =>
            f.question.toLowerCase().includes(lower) ||
            lower.includes(f.question.toLowerCase().split(" ").slice(0, 3).join(" "))
    );

    sendBotReply(
        match?.answer ??
        "I'm not sure about that. Please choose one of the suggested questions below, or contact us directly at info@universalgroup.az 📧"
    );
    setShowSuggestions(false);
  }, [inputValue, sendBotReply]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSend();
  };

  const handleClear = () => {
    const fresh = [botMessage(chatbotConfig.welcomeMessage)];
    setMessages(fresh);
    saveHistory(fresh);
  };
  // ─── Render ─────────────────────────────────────────────────────────────
  return (
      <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          transition={{ type: "spring", stiffness: 300, damping: 28 }}
          className="
        flex flex-col
        w-[370px] sm:w-[400px]
        h-[580px] sm:h-[620px]
        bg-gray-50 rounded-2xl shadow-2xl overflow-hidden
        border border-gray-200
      "
          style={{ maxHeight: "calc(100vh - 100px)" }}
      >
        {/* ── Header ── */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#040404] text-white flex-shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#ffe500] flex items-center justify-center text-lg shadow-sm">
              🤖
            </div>
            <div>
              <p className="font-semibold text-sm leading-tight">{t("ui.title")}</p>
              <div className="flex items-center gap-1.5 mt-0.5">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-[11px] text-gray-300">{t("ui.online")}</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <button
                onClick={handleClear}
                title="Clear chat"
                className="p-2 rounded-lg hover:bg-white/10 transition-colors text-gray-300 hover:text-white"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
            <button
                onClick={onClose}
                title="Close chat"
                className="p-2 rounded-lg hover:bg-white/10 transition-colors text-gray-300 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* ── Messages area ── */}
        <div className="ug-scroll flex-1 overflow-y-auto px-4 py-4">
          {showSuggestions ? (
              <div className="flex flex-col items-center justify-center h-full text-center gap-3">

                <p className="text-sm text-gray-500">
                  {t("ui.chooseQuestion")} 👇
                </p>

                <div className="flex flex-wrap justify-center gap-2 max-w-[300px]">
                  {faqData.slice(0, 6).map((item) => (
                      <button
                          key={item.id}
                          onClick={() => handleFaqClick(item)}
                          className="
              text-xs px-3 py-2 rounded-full
              bg-gray-100 hover:bg-[#ffe500]
              transition
            "
                      >
                        {item.question}
                      </button>
                  ))}
                </div>
              </div>
          ) : (
              <>
                <AnimatePresence initial={false}>
                  {messages.map((msg) => (
                      <ChatMessage key={msg.id} message={msg} />
                  ))}
                  {isTyping && <TypingIndicator />}
                </AnimatePresence>
                <div ref={messagesEndRef} />
              </>
          )}
        </div>

        {/* ── Input bar ── */}
        <div className="flex-shrink-0 px-3 pb-3 pt-2 bg-white border-t border-gray-100">
          <div className="flex items-center gap-2 bg-gray-100 rounded-xl px-3 py-2">
            <MessageSquare className="w-4 h-4 text-gray-400 flex-shrink-0" />
            <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={t("ui.placeholder")}
                disabled={isTyping}
                className="
              flex-1 bg-transparent text-sm text-gray-700 placeholder-gray-400
              outline-none disabled:opacity-50
            "
            />
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleSend}
                disabled={!inputValue.trim() || isTyping}
                className="
              w-8 h-8 rounded-lg bg-[#ffe500] flex items-center justify-center
              hover:bg-yellow-400 transition-colors
              disabled:opacity-40 disabled:cursor-not-allowed flex-shrink-0
            "
            >
              <Send className="w-3.5 h-3.5 text-[#040404]" />
            </motion.button>
          </div>
        </div>
      </motion.div>
  );
};

export default ChatWindow;