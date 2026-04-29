"use client";

import React from "react";
import { motion } from "framer-motion";

export type MessageRole = "user" | "bot";

export interface Message {
  id: string;
  role: MessageRole;
  text: string;
  timestamp: Date;
}

interface ChatMessageProps {
  message: Message;
}

/** Renders a single chat bubble (user = right, bot = left). */
const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const isUser = message.role === "user";
  const lines = message.text.split("\n");

  return (
      <motion.div
          initial={{ opacity: 0, y: 12, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className={`flex w-full ${isUser ? "justify-end" : "justify-start"} mb-3`}
      >
        {/* Bot avatar */}
        {!isUser && (
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#040404] flex items-center justify-center text-sm mr-2 mt-1 shadow-sm">
              <span role="img" aria-label="bot">🤖</span>
            </div>
        )}

        <div className={`flex flex-col ${isUser ? "items-end" : "items-start"} max-w-[78%]`}>
          <div
              className={`
            px-4 py-2.5 rounded-2xl text-sm leading-relaxed shadow-sm
            ${isUser
                  ? "bg-[#ffe500] text-[#040404] rounded-br-sm font-medium"
                  : "bg-white text-[#1a1a1a] rounded-bl-sm border border-gray-100"
              }
          `}
          >
            {lines.map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  {i < lines.length - 1 && <br />}
                </React.Fragment>
            ))}
          </div>

          {/* Timestamp */}
          <span className="text-[10px] text-gray-400 mt-1 px-1">
          {message.timestamp.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </span>
        </div>

        {/* User avatar */}
        {isUser && (
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#ffe500] flex items-center justify-center text-sm ml-2 mt-1 shadow-sm">
              <span role="img" aria-label="user">👤</span>
            </div>
        )}
      </motion.div>
  );
};

export default ChatMessage;