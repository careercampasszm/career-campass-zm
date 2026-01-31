"use client";

import { useState } from "react";

type FormState = {
  name: string;
  email: string;
  service: string;
  message: string;

  // honeypot (bots fill it, humans don’t)
  company: string;
};

export default function ContactForm() {
  // ✅ DEBUG: set to true only when you want to TEST honeypot visually
  const SHOW_HONEYPOT_FOR_TESTING = false;

  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    service: "Career Services",
    message: "",
    company: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [statusMsg, setStatusMsg] = useState<string>("");

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setStatus("idle");
    setStatusMsg("");

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus("error");
      setStatusMsg("Please fill in your name, email, and message.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        setStatus("error");
        setStatusMsg(
          data?.error ||
            "Something went wrong while sending your message. Please try again."
        );
        return;
      }

      setStatus("success");
      setStatusMsg(
        "Message sent successfully ✅ Thank you — we’ll get back to you shortly."
      );

      setForm({
        name: "",
        email: "",
        service: "Career Services",
        message: "",
        company: "",
      });
    } catch {
      setStatus("error");
      setStatusMsg("Network error — please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className="mt-12 grid gap-6 rounded-3xl border border-gray-200 bg-white p-8 md:p-10 shadow-sm"
    >
      {/* ✅ HONEYPOT */}
      <div
        className={SHOW_HONEYPOT_FOR_TESTING ? "" : "hidden"}
        aria-hidden={!SHOW_HONEYPOT_FOR_TESTING}
      >
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Company (Honeypot Test Field)
        </label>
        <input
          name="company"
          type="text"
          value={form.company}
          onChange={(e) => update("company", e.target.value)}
          autoComplete="off"
          tabIndex={SHOW_HONEYPOT_FOR_TESTING ? 0 : -1}
          placeholder="(Leave empty - bots fill this)"
          className="w-full border border-red-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-400"
        />
        <p className="mt-2 text-xs text-red-600">
          Debug mode is ON — this field should normally be hidden.
        </p>
      </div>

      {/* STATUS */}
      {status !== "idle" && (
        <div
          className={`rounded-2xl border p-4 text-sm font-semibold ${
            status === "success"
              ? "border-green-200 bg-green-50 text-green-800"
              : "border-red-200 bg-red-50 text-red-800"
          }`}
        >
          {statusMsg}
        </div>
      )}

      <div className="grid gap-6 md:grid-cols-2">
        <input
          type="text"
          value={form.name}
          onChange={(e) => update("name", e.target.value)}
          placeholder="Full Name"
          className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0F2A44]"
        />

        <input
          type="email"
          value={form.email}
          onChange={(e) => update("email", e.target.value)}
          placeholder="Email Address"
          className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0F2A44]"
        />
      </div>

      <select
        value={form.service}
        onChange={(e) => update("service", e.target.value)}
        className="w-full border border-gray-300 rounded-xl px-4 py-3 text-[#374151] focus:outline-none focus:ring-2 focus:ring-[#0F2A44]"
      >
        <option>Career Services</option>
        <option>Business & Compliance</option>
        <option>Technical Services</option>
        <option>Corporate Documentation</option>
      </select>

      <textarea
        rows={6}
        value={form.message}
        onChange={(e) => update("message", e.target.value)}
        placeholder="Your message"
        className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0F2A44]"
      />

      <button
        type="submit"
        disabled={loading}
        className={`w-full rounded-xl py-4 font-semibold text-white shadow-lg transition
        bg-[#0F2A44] hover:bg-[#0B2034] hover:-translate-y-[1px]
        disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0`}
      >
        {loading ? "Sending..." : "Send Message"}
        <span className="ml-2 text-[#D4AF37]">→</span>
      </button>

      <p className="text-xs text-gray-500 text-center">
        By submitting, you agree to be contacted by Career Compass ZM.
      </p>
    </form>
  );
}