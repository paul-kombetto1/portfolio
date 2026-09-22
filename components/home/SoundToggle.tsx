"use client";

import { useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function SoundToggle({ label, playingLabel }: { label: string; playingLabel: string }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (playing) {
      audio.pause();
      setPlaying(false);
      return;
    }

    audio
      .play()
      .then(() => setPlaying(true))
      .catch(() => setPlaying(false));
  };

  return (
    <>
      <audio ref={audioRef} loop preload="none">
        <source src={`${BASE_PATH}/media/audio/main-theme.mp3`} type="audio/mpeg" />
        <source src={`${BASE_PATH}/media/audio/main-theme.m4a`} type="audio/mp4" />
      </audio>
      <button
        type="button"
        onClick={toggle}
        aria-pressed={playing}
        className="group fixed bottom-6 right-6 z-40 flex items-center gap-2 rounded-full border border-white/20 bg-black/80 px-4 py-2.5 text-xs uppercase tracking-[0.14em] text-white backdrop-blur transition-colors hover:border-white/50"
      >
        {playing ? (
          <>
            <span className="flex items-end gap-0.5" aria-hidden="true">
              <span className="h-2 w-0.5 animate-pulse bg-blue-400" style={{ animationDelay: "0ms" }} />
              <span className="h-3 w-0.5 animate-pulse bg-blue-400" style={{ animationDelay: "150ms" }} />
              <span className="h-1.5 w-0.5 animate-pulse bg-blue-400" style={{ animationDelay: "300ms" }} />
            </span>
            {playingLabel}
          </>
        ) : (
          <>
            <VolumeX size={14} />
            {label}
          </>
        )}
        {playing ? <Volume2 size={14} className="hidden group-hover:block" /> : null}
      </button>
    </>
  );
}
