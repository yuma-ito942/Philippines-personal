"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Mail,
  Phone,
  Send,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { contactContent, siteConfig } from "@/data/content";
import {
  hasContactErrors,
  validateContactForm,
  type ContactFieldErrors,
} from "@/lib/contact-validation";

function LinkedinIcon({ size = 24 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

const socialIcons = {
  LinkedIn: LinkedinIcon,
} as const;

const inputClassName =
  "w-full border-0 border-b bg-transparent py-3 text-sm text-zinc-200 outline-none transition-colors placeholder:text-zinc-600 focus:border-sky-500/50";

function fieldClassName(hasError: boolean) {
  return `${inputClassName} ${hasError ? "border-red-400/60" : "border-white/10"}`;
}

async function sendContactMessage(data: {
  name: string;
  email: string;
  message: string;
}) {
  const web3formsKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

  if (web3formsKey) {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        access_key: web3formsKey,
        subject: `New contact from ${data.name}`,
        from_name: "Portfolio Contact",
        name: data.name,
        email: data.email,
        message: data.message,
      }),
    });

    const result = (await response.json()) as { success?: boolean; message?: string };

    if (!response.ok || !result.success) {
      throw new Error(result.message ?? "Failed to send message.");
    }

    return;
  }

  const response = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  const result = (await response.json()) as { error?: string };

  if (!response.ok) {
    throw new Error(result.error ?? "Failed to send message.");
  }
}

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<ContactFieldErrors>({});

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      message: String(formData.get("message") ?? ""),
    };

    const validationErrors = validateContactForm(payload);
    setFieldErrors(validationErrors);

    if (hasContactErrors(validationErrors)) {
      return;
    }

    setIsSubmitting(true);

    try {
      await sendContactMessage({
        name: payload.name.trim(),
        email: payload.email.trim(),
        message: payload.message.trim(),
      });

      setSubmitted(true);
      setFieldErrors({});
      form.reset();
    } catch (submitError) {
      setError(
        submitError instanceof Error
          ? submitError.message
          : "Failed to send message.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="relative z-10 overflow-hidden py-32">

      <Container className="relative z-10">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <motion.div
              className="mb-6 flex items-center gap-3"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
            >
              <span className="h-px w-8 bg-sky-500" />
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-sky-400">
                {contactContent.label}
              </span>
            </motion.div>

            <motion.h2
              className="text-3xl font-bold tracking-tight text-zinc-50 sm:text-4xl lg:text-5xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {contactContent.title}{" "}
              <span className="text-sky-400">{contactContent.titleAccent}</span>
            </motion.h2>

            <motion.p
              className="mt-6 max-w-md text-base leading-relaxed text-zinc-400"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {contactContent.description}
            </motion.p>

            <motion.div
              className="mt-12 space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <a
                href={`mailto:${siteConfig.email}`}
                className="group flex items-center gap-4 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5 backdrop-blur-sm transition-colors hover:border-white/[0.1] hover:bg-white/[0.03]"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-sky-500/10 text-sky-400">
                  <Mail size={18} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs text-zinc-500">Email</p>
                  <p className="truncate text-sm font-semibold text-white">
                    {siteConfig.email}
                  </p>
                </div>
                <ArrowUpRight
                  size={16}
                  className="shrink-0 text-zinc-600 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-zinc-400"
                />
              </a>

              <a
                href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                className="group flex items-center gap-4 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5 backdrop-blur-sm transition-colors hover:border-white/[0.1] hover:bg-white/[0.03]"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-sky-500/10 text-sky-400">
                  <Phone size={18} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs text-zinc-500">Phone</p>
                  <p className="truncate text-sm font-semibold text-white">
                    {siteConfig.phone}
                  </p>
                </div>
                <ArrowUpRight
                  size={16}
                  className="shrink-0 text-zinc-600 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-zinc-400"
                />
              </a>

              {contactContent.socialCards.map((social) => {
                const Icon =
                  socialIcons[social.platform as keyof typeof socialIcons];

                return (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5 backdrop-blur-sm transition-colors hover:border-white/[0.1] hover:bg-white/[0.03]"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-sky-500/10 text-sky-400">
                      <Icon size={18} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs text-zinc-500">{social.platform}</p>
                      <p className="truncate text-sm font-semibold text-white">
                        {social.handle}
                      </p>
                    </div>
                    <ArrowUpRight
                      size={16}
                      className="shrink-0 text-zinc-600 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-zinc-400"
                    />
                  </a>
                );
              })}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            {submitted ? (
              <motion.div
                className="flex h-full min-h-[400px] flex-col items-center justify-center rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 text-center backdrop-blur-sm"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/10">
                  <Send size={20} className="text-emerald-400" />
                </div>
                <h3 className="text-xl font-medium text-zinc-50">
                  Message received
                </h3>
                <p className="mt-2 max-w-sm text-sm text-zinc-400">
                  Thanks for reaching out. I&apos;ll review your inquiry and get
                  back to you within 48 hours.
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 backdrop-blur-sm lg:p-10"
              >
                <div className="space-y-8">
                  <div className="grid gap-8 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-3 block text-sm text-zinc-400"
                      >
                        Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        aria-invalid={Boolean(fieldErrors.name)}
                        aria-describedby={fieldErrors.name ? "name-error" : undefined}
                        className={fieldClassName(Boolean(fieldErrors.name))}
                        placeholder="Your full name"
                        onChange={() => {
                          if (fieldErrors.name) {
                            setFieldErrors((prev) => ({ ...prev, name: undefined }));
                          }
                        }}
                      />
                      {fieldErrors.name && (
                        <p id="name-error" className="mt-2 text-xs text-red-400" role="alert">
                          {fieldErrors.name}
                        </p>
                      )}
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="mb-3 block text-sm text-zinc-400"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        aria-invalid={Boolean(fieldErrors.email)}
                        aria-describedby={fieldErrors.email ? "email-error" : undefined}
                        className={fieldClassName(Boolean(fieldErrors.email))}
                        placeholder="you@example.com"
                        onChange={() => {
                          if (fieldErrors.email) {
                            setFieldErrors((prev) => ({ ...prev, email: undefined }));
                          }
                        }}
                      />
                      {fieldErrors.email && (
                        <p id="email-error" className="mt-2 text-xs text-red-400" role="alert">
                          {fieldErrors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-3 block text-sm text-zinc-400"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      aria-invalid={Boolean(fieldErrors.message)}
                      aria-describedby={fieldErrors.message ? "message-error" : undefined}
                      className={`${fieldClassName(Boolean(fieldErrors.message))} resize-none`}
                      placeholder="Tell me about your project..."
                      onChange={() => {
                        if (fieldErrors.message) {
                          setFieldErrors((prev) => ({ ...prev, message: undefined }));
                        }
                      }}
                    />
                    {fieldErrors.message && (
                      <p id="message-error" className="mt-2 text-xs text-red-400" role="alert">
                        {fieldErrors.message}
                      </p>
                    )}
                  </div>

                  {error && (
                    <p className="text-sm text-red-400" role="alert">
                      {error}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-sky-400 to-sky-500 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-sky-500/30 transition-all duration-300 hover:shadow-sky-500/40 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {isSubmitting ? "Sending..." : "Submit"}
                    <ArrowRight
                      size={18}
                      className="transition-transform group-hover:translate-x-0.5"
                    />
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
