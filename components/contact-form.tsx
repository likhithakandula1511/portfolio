"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";

type SubmitState = "idle" | "submitting" | "success" | "error";

const inputClasses =
  "glass mt-1.5 w-full rounded-xl px-4 py-2.5 text-sm text-text-primary placeholder:text-text-muted shadow-sm transition-colors focus:border-accent/60 focus:outline-none";

export function ContactForm() {
  const [status, setStatus] = useState<SubmitState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      message: String(formData.get("message") ?? ""),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => null);
        throw new Error(data?.error ?? "Something went wrong. Please try again.");
      }

      setStatus("success");
      form.reset();
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-text-secondary"
        >
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          maxLength={200}
          autoComplete="name"
          className={inputClasses}
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-text-secondary"
        >
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className={inputClasses}
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-text-secondary"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          maxLength={5000}
          className={inputClasses}
        />
      </div>

      <Button
        type="submit"
        variant="primary"
        disabled={status === "submitting"}
        className="w-full disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? "Sending..." : "Send Message"}
      </Button>

      <div role="status" aria-live="polite">
        {status === "success" && (
          <p className="rounded-[10px] border border-success/30 bg-success/10 px-4 py-3 text-sm font-medium text-success">
            Your message has been sent successfully. I&apos;ll get back to you soon.
          </p>
        )}
        {status === "error" && (
          <p className="rounded-[10px] border border-error/30 bg-error/10 px-4 py-3 text-sm font-medium text-error">
            {errorMessage}
          </p>
        )}
      </div>
    </form>
  );
}
