"use client";

import React, { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, X } from "lucide-react";


import ChatWindow from "./ChatWindow";
import { chatbotConfig } from "./chatbot.config";

const OPEN_KEY = "ug_chat_open";

const ChatbotWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasUnread, setHasUnread] = useState(false);

  const t = useTranslations("chatbot");

  // Load state + unread badge
  useEffect(() => {
    try {
      const saved = sessionStorage.getItem(OPEN_KEY);
      if (saved === "true") setIsOpen(true);
    } catch {}

    const timer = setTimeout(() => {
      setHasUnread(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  // Persist open state
  useEffect(() => {
    try {
      sessionStorage.setItem(OPEN_KEY, String(isOpen));
    } catch {}
  }, [isOpen]);

  const handleOpen = () => {
    setIsOpen(true);
    setHasUnread(false);
  };

  const handleClose = () => setIsOpen(false);

  return (
      <div
          className="fixed bottom-half right-6 z-[9999] flex flex-col items-end gap-3"
          aria-label="Chat with Universal Group"
      >
        {/* ── Chat window ── */}
        <AnimatePresence>
          {isOpen && <ChatWindow onClose={handleClose} />}
        </AnimatePresence>

        {/* ── Floating button ── */}
        <div className="relative">
          {/* Pulse animation */}
          {!isOpen && (
              <motion.span
                  className="absolute inset-0 rounded-full bg-[#ffe500] opacity-40"
                  animate={{ scale: [1, 1.5, 1], opacity: [0.4, 0, 0.4] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
              />
          )}

          {/* Unread badge */}
          <AnimatePresence>
            {hasUnread && !isOpen && (
                <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-red-500 text-white text-[10px] font-bold flex items-center justify-center z-10 shadow-md"
                >
                  1
                </motion.span>
            )}
          </AnimatePresence>

          {/* Main button */}
          <motion.button
              onClick={isOpen ? handleClose : handleOpen}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.93 }}
              aria-label={isOpen ? "Close chat" : "Open chat"}
              className="relative w-14 h-14 rounded-full shadow-xl bg-[#040404] hover:bg-[#1a1a1a] flex items-center justify-center"
          >
            <AnimatePresence mode="wait" initial={false}>
              {isOpen ? (
                  <motion.span
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                  >
                    <X className="w-6 h-6 text-[#ffe500]" />
                  </motion.span>
              ) : (
                  <motion.span
                      key="open"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                  >
                    <MessageCircle className="w-6 h-6 text-[#ffe500]" />
                  </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* ── Tooltip ── */}
        <AnimatePresence>
          {!isOpen && (
              <motion.div
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ delay: 0.5 }}
                  className="absolute right-0 bg-[#040404] text-white text-xs px-3 py-1.5 rounded-lg shadow-lg"
                  style={{ bottom: "calc(100% + 8px)" }}
              >
                {t('ui.title')}
              </motion.div>
          )}
        </AnimatePresence>
      </div>
  );
};

export default ChatbotWidget;