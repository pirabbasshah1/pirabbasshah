"use client";

import { useState } from "react";

export default function HireMeForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    try {
      const response = await fetch("https://formspree.io/f/xyzdodqw", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" }
      });
      
      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    
    <div className="mt-8 p-6 rounded-lg border border-black/5 dark:border-white/10 bg-zinc-50 dark:bg-zinc-900">
      <h3 className="text-lg font-semibold mb-4 text-zinc-900 dark:text-zinc-100">
  Let’s Connect
</h3><p className="text-sm text-zinc-600 dark:text-zinc-400">
  Feel free to reach out for collaborations & opportunities!
</p>

      
      {status === "success" && (
        <p className="mb-4 text-sm text-green-600 dark:text-green-400">Message sent successfully!</p>
      )}
      
      {status === "error" && (
        <p className="mb-4 text-sm text-red-600 dark:text-red-400">Failed to send message. Please try again.</p>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full px-3 py-2 text-sm rounded border border-black/10 dark:border-white/20 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-500 dark:placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <div>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full px-3 py-2 text-sm rounded border border-black/10 dark:border-white/20 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-500 dark:placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <div>
          <textarea
            name="message"
            placeholder="Your Message"
            rows={4}
            required
            className="w-full px-3 py-2 text-sm rounded border border-black/10 dark:border-white/20 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-500 dark:placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          />
        </div>
        
        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full px-4 py-2 text-sm font-medium text-white bg-black dark:bg-white dark:text-black rounded hover:opacity-80 disabled:opacity-50 transition-opacity"
        >
          {status === "loading" ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
}