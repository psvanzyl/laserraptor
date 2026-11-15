"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const ENDPOINT = "https://broomy.laserraptor.eu/api/demo/chat";
const MAX_TURNS = 4;
const SESSION_MESSAGES = 6;

type Msg = { role: "user" | "assistant"; content: string };

const SUGGESTIONS = [
  "Wat betekent soevereine AI?",
  "Schrijf een korte privacyclausule voor mijn SaaS.",
  "Leg uit wat een token is, in twee zinnen.",
];

/**
 * The public Broomy demo. No signup, no key, rate limited server side.
 * It streams plain text from /api/demo/chat and never touches the API v1 path.
 */
export default function BroomyChat() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [msgs, setMsgs] = useState<Msg[]>([]);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [used, setUsed] = useState(0);
  const panelRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const logRef = useRef<HTMLDivElement>(null);

  const exhausted = used >= SESSION_MESSAGES;

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    inputRef.current?.focus();
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    const el = logRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [msgs, busy]);

  const send = useCallback(
    async (text: string) => {
      const clean = text.trim();
      if (!clean || busy || exhausted) return;
      setError(null);
      setBusy(true);
      setInput("");

      const next: Msg[] = [...msgs, { role: "user", content: clean }];
      const payload = next.slice(-MAX_TURNS);
      setMsgs([...next, { role: "assistant", content: "" }]);
      setUsed((u) => u + 1);

      try {
        const res = await fetch(ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ messages: payload }),
        });

        if (!res.ok || !res.body) {
          let message = "The demo is not reachable right now.";
          try {
            const j = (await res.json()) as { message?: string };
            if (j?.message) message = j.message;
          } catch {
            /* keep the default */
          }
          setMsgs(next);
          setError(message);
          setBusy(false);
          return;
        }

        const reader = res.body.getReader();
        const decoder = new TextDecoder();
        let acc = "";
        for (;;) {
          const { done, value } = await reader.read();
          if (done) break;
          acc += decoder.decode(value, { stream: true });
          setMsgs([...next, { role: "assistant", content: acc }]);
        }
        acc += decoder.decode();
        setMsgs([...next, { role: "assistant", content: acc.trim() }]);
      } catch {
        setMsgs(next);
        setError("The connection dropped. Try again, or write to info@laserraptor.eu.");
      } finally {
        setBusy(false);
      }
    },
    [busy, exhausted, msgs],
  );

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="broomy-chat-panel"
        className="fixed bottom-4 right-4 z-[60] flex items-center gap-2.5 rounded-full border border-magenta/50 bg-panel/95 px-4 py-3 font-mono text-[11px] uppercase tracking-[0.18em] text-ink shadow-neon backdrop-blur transition-colors hover:border-cyan hover:text-cyan sm:bottom-6 sm:right-6"
      >
        <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-magenta shadow-[0_0_8px_var(--color-magenta)]" />
        Ask the raptor
      </button>

      {open ? (
        <div
          id="broomy-chat-panel"
          ref={panelRef}
          role="dialog"
          aria-modal="false"
          aria-label="Broomy demo chat"
          className="fixed bottom-20 right-3 z-[60] flex h-[min(560px,72vh)] w-[min(380px,calc(100vw-24px))] flex-col overflow-hidden rounded-xl border border-line bg-canvas/98 shadow-panel backdrop-blur sm:bottom-24 sm:right-6"
        >
          <div className="flex items-start justify-between gap-3 border-b border-line px-4 py-3">
            <div>
              <p className="font-display text-sm tracking-[0.1em] text-ink">BROOMY DEMO</p>
              <p className="mt-1 font-mono text-[9.5px] uppercase tracking-[0.18em] text-muted">
                sensei · 262k · EU-hosted
              </p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="rounded border border-line px-2 py-1 font-mono text-[10px] text-muted transition-colors hover:border-cyan hover:text-cyan"
            >
              ESC
            </button>
          </div>

          <div ref={logRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4" aria-live="polite">
            {msgs.length === 0 ? (
              <div className="space-y-3">
                <p className="text-[13.5px] leading-relaxed text-body">
                  This is a live model on Dutch hardware. No signup, no card. Ask it anything; it
                  answers in your language.
                </p>
                <div className="space-y-2">
                  {SUGGESTIONS.map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => send(s)}
                      className="block w-full rounded border border-line-soft bg-panel/60 px-3 py-2 text-left text-[12.5px] text-muted transition-colors hover:border-magenta/50 hover:text-ink"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              msgs.map((m, i) => (
                <div key={i} className={m.role === "user" ? "flex justify-end" : "flex justify-start"}>
                  <p
                    className={
                      m.role === "user"
                        ? "max-w-[85%] rounded-lg rounded-br-sm bg-magenta/15 px-3 py-2 text-[13.5px] leading-relaxed text-ink"
                        : "max-w-[92%] whitespace-pre-wrap rounded-lg rounded-bl-sm border border-line-soft bg-panel px-3 py-2 text-[13.5px] leading-relaxed text-body"
                    }
                  >
                    {m.content || (busy ? "…" : "")}
                  </p>
                </div>
              ))
            )}
            {error ? (
              <p className="rounded border border-amber/40 bg-amber/[0.06] px-3 py-2 text-[12.5px] text-body">
                {error}
              </p>
            ) : null}
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              void send(input);
            }}
            className="border-t border-line px-3 py-3"
          >
            <div className="flex items-end gap-2">
              <textarea
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    void send(input);
                  }
                }}
                rows={2}
                maxLength={1500}
                disabled={busy || exhausted}
                placeholder={exhausted ? "Session limit reached" : "Type a question…"}
                className="min-h-[44px] flex-1 resize-none rounded border border-line bg-panel px-3 py-2 text-[13.5px] text-ink placeholder:text-muted/70 focus:border-cyan focus:outline-none disabled:opacity-60"
              />
              <button
                type="submit"
                disabled={busy || exhausted || !input.trim()}
                className="rounded bg-magenta px-3 py-2 font-mono text-[10px] uppercase tracking-[0.16em] text-canvas transition-colors hover:bg-cyan disabled:opacity-40"
              >
                Send
              </button>
            </div>
            <p className="mt-2 font-mono text-[9px] uppercase tracking-[0.14em] text-muted/80">
              {exhausted
                ? "Done for this session. Plans from EUR 39/mo."
                : `${SESSION_MESSAGES - used} left · no prompt storage · `}
              <a href="https://laserraptor.eu/legal/privacy" className="underline decoration-magenta underline-offset-2 hover:text-cyan">
                privacy
              </a>
            </p>
          </form>
        </div>
      ) : null}
    </>
  );
}
