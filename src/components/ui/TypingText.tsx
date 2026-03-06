import React from 'react';
import { motion } from 'motion/react';

interface TypingTextProps {
  text: string;
  delay?: number;
  showCursor?: boolean;
}

export const TypingText: React.FC<TypingTextProps> = ({ text, delay = 0, showCursor = false }) => {
  return (
    <span className="inline-flex items-center">
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.01,
            delay: delay + i * 0.05,
            ease: "linear"
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
      {showCursor && (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            ease: "steps(2)",
            delay: delay + text.length * 0.05
          }}
          className="inline-block w-[3px] h-[0.8em] bg-indigo-500 ml-1 align-middle"
        />
      )}
    </span>
  );
};
