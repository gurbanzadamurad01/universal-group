"use client";

import React from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

/** Animated three-dot typing indicator shown while the bot is "thinking". */
const TypingIndicator: React.FC = () => {
    const t = useTranslations("chatbot");

    return (
      <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 8 }}
          transition={{ duration: 0.2 }}
          className="flex items-start mb-3"
      >
        {/* Bot avatar */}
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#040404] flex items-center justify-center text-sm mr-2 mt-1 shadow-sm">
          <span role="img" aria-label="bot">🤖</span>
        </div>

        {/* Bubble */}
        <div className="bg-white border border-gray-100 rounded-2xl rounded-bl-sm px-4 py-3 shadow-sm flex items-center gap-1.5">
          {[0, 0.15, 0.3].map((delay, i) => (
              <motion.span
                  key={i}
                  className="w-2 h-2 rounded-full bg-gray-400 block"
                  animate={{ y: [0, -5, 0], opacity: [0.4, 1, 0.4] }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    repeatType: "loop",
                    delay,
                  }}
              />
          ))}
        </div>
      </motion.div>
  );
};

export default TypingIndicator;