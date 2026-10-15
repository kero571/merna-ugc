"use client";
import { useEffect, useRef, useState } from "react";
import Icon from "./ui/Icon";

export default function VideoModal({ src, title, cover, onClose }) {
  const closeRef = useRef(null);
  const [status, setStatus] = useState("loading"); // loading | ready | error

  useEffect(() => {
    const prev = document.activeElement;
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      prev?.focus?.();
    };
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={title}
      onClick={onClose}
      className="fixed inset-0 z-100 flex items-start justify-center overflow-hidden bg-black/85 p-4 backdrop-blur-sm"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative"
        style={{
          height: "min(82dvh, calc(92vw * 16 / 9))",
          aspectRatio: "9 / 16",
        }}
      >
        <button
          ref={closeRef}
          onClick={onClose}
          aria-label="Close video"
          className="absolute -top-11 right-0 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-white hover:bg-brand"
        >
          <Icon name="close" className="h-4 w-4" />
        </button>

        <div className="animate-pop relative h-full w-full overflow-hidden rounded-2xl bg-black">
          <video
            src={src}
            poster={cover}
            controls
            autoPlay
            playsInline
            preload="auto"
            onCanPlay={() => setStatus("ready")}
            onError={() => setStatus("error")}
            className={`h-full w-full object-contain transition-opacity duration-300 ${
              status === "ready" ? "opacity-100" : "opacity-0"
            }`}
          />

          {status === "loading" && (
            <div
              role="status"
              aria-live="polite"
              className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-black/60"
            >
              <span className="h-10 w-10 animate-spin rounded-full border-4 border-white/20 border-t-brand" />
              <span className="text-xs font-bold text-white/80">
                Loading video…
              </span>
            </div>
          )}

          {status === "error" && (
            <div
              role="alert"
              className="absolute inset-0 flex items-center justify-center p-6 text-center text-sm font-bold text-white/80"
            >
              Couldn't load the video. Please try again.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
