"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, Send, X, Minus } from "lucide-react";
import { chatConfig, siteConfig } from "@/data/content";
import { cn } from "@/lib/utils";

interface ChatMessage {
  id: string;
  role: "user" | "agent";
  text: string;
  timestamp: Date;
}

function formatTime(date: Date) {
  return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

export function LiveChat() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [initialized, setInitialized] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  useEffect(() => {
    if (open && !initialized) {
      setInitialized(true);
      setMessages([
        {
          id: "welcome",
          role: "agent",
          text: chatConfig.welcomeMessage,
          timestamp: new Date(),
        },
      ]);
    }
  }, [open, initialized]);

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [open]);

  async function sendMessage(text: string) {
    const trimmed = text.trim();
    if (!trimmed || typing) return;

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      role: "user",
      text: trimmed,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setTyping(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: trimmed }),
      });

      const data = await response.json();
      const replyText =
        response.ok && data.reply
          ? data.reply
          : chatConfig.defaultReply;

      await new Promise((resolve) =>
        setTimeout(resolve, 800 + Math.random() * 700),
      );

      setMessages((prev) => [
        ...prev,
        {
          id: `agent-${Date.now()}`,
          role: "agent",
          text: replyText,
          timestamp: new Date(),
        },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: `agent-${Date.now()}`,
          role: "agent",
          text: chatConfig.defaultReply,
          timestamp: new Date(),
        },
      ]);
    } finally {
      setTyping(false);
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    sendMessage(input);
  }

  const showQuickReplies =
    messages.length === 1 && messages[0]?.id === "welcome" && !typing;

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-24 right-4 z-[60] flex w-[calc(100vw-2rem)] max-w-[380px] flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-[#14141a]/95 shadow-2xl shadow-black/50 backdrop-blur-xl sm:right-6"
            style={{ height: "min(520px, calc(100vh - 7rem))" }}
          >
            <header className="flex items-center gap-3 border-b border-white/[0.06] px-4 py-3">
              <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full border border-white/[0.08]">
                <Image
                  src={siteConfig.avatar}
                  alt={siteConfig.name}
                  fill
                  sizes="40px"
                  className="object-cover"
                />
                <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border-2 border-[#14141a] bg-emerald-500" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-semibold text-zinc-50">
                  {siteConfig.name}
                </p>
                <p className="text-xs text-emerald-400">
                  Online · {chatConfig.responseTime}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="flex h-8 w-8 items-center justify-center rounded-lg text-zinc-500 transition-colors hover:bg-white/[0.05] hover:text-zinc-300"
                aria-label="Minimize chat"
              >
                <Minus size={16} />
              </button>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="flex h-8 w-8 items-center justify-center rounded-lg text-zinc-500 transition-colors hover:bg-white/[0.05] hover:text-zinc-300"
                aria-label="Close chat"
              >
                <X size={16} />
              </button>
            </header>

            <div className="flex-1 space-y-4 overflow-y-auto px-4 py-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={cn(
                    "flex",
                    msg.role === "user" ? "justify-end" : "justify-start",
                  )}
                >
                  <div
                    className={cn(
                      "max-w-[85%] rounded-2xl px-4 py-2.5",
                      msg.role === "user"
                        ? "rounded-br-md bg-gradient-to-r from-sky-400 to-sky-500 text-white"
                        : "rounded-bl-md border border-white/[0.06] bg-white/[0.04] text-zinc-200",
                    )}
                  >
                    <p className="text-sm leading-relaxed">{msg.text}</p>
                    <p
                      className={cn(
                        "mt-1 text-[10px]",
                        msg.role === "user"
                          ? "text-white/70"
                          : "text-zinc-500",
                      )}
                    >
                      {formatTime(msg.timestamp)}
                    </p>
                  </div>
                </div>
              ))}

              {typing && (
                <div className="flex justify-start">
                  <div className="flex items-center gap-1 rounded-2xl rounded-bl-md border border-white/[0.06] bg-white/[0.04] px-4 py-3">
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-zinc-400 [animation-delay:0ms]" />
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-zinc-400 [animation-delay:150ms]" />
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-zinc-400 [animation-delay:300ms]" />
                  </div>
                </div>
              )}

              {showQuickReplies && (
                <div className="flex flex-wrap gap-2 pt-1">
                  {chatConfig.quickReplies.map((reply) => (
                    <button
                      key={reply.label}
                      type="button"
                      onClick={() => sendMessage(reply.message)}
                      className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-xs text-zinc-300 transition-colors hover:border-sky-500/30 hover:bg-sky-500/10 hover:text-sky-300"
                    >
                      {reply.label}
                    </button>
                  ))}
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            <form
              onSubmit={handleSubmit}
              className="border-t border-white/[0.06] p-4"
            >
              <div className="flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-1">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type a message..."
                  disabled={typing}
                  className="min-w-0 flex-1 bg-transparent py-2.5 text-sm text-zinc-200 outline-none placeholder:text-zinc-600 disabled:opacity-50"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || typing}
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-sky-400 to-sky-500 text-white transition-opacity disabled:opacity-40"
                  aria-label="Send message"
                >
                  <Send size={14} />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className={cn(
          "fixed bottom-6 right-4 z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-sky-400 to-sky-500 text-white shadow-lg shadow-sky-500/30 transition-shadow hover:shadow-sky-500/50 sm:right-6",
          open && "scale-0 opacity-0 pointer-events-none",
        )}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label={open ? "Close chat" : "Open live chat"}
      >
        {!open && (
          <span className="absolute inset-0 animate-ping rounded-full bg-sky-400/30" />
        )}
        {open ? <X size={22} /> : <MessageCircle size={22} />}
        {!open && (
          <span className="absolute right-1 top-1 h-3 w-3 rounded-full border-2 border-[#14141a] bg-emerald-500" />
        )}
      </motion.button>
    </>
  );
}
