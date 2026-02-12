"use client";

import { Mic } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface AIVoiceInputProps {
  onStart?: () => void;
  onStop?: (duration: number) => void;
  visualizerBars?: number;
  demoMode?: boolean;
  demoInterval?: number;
  className?: string;
}

export function AIVoiceInput({
  onStart,
  onStop,
  visualizerBars = 6,
  demoMode = false,
  demoInterval = 3000,
  className
}: AIVoiceInputProps) {
  const [submitted, setSubmitted] = useState(false);
  const [time, setTime] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const [isDemo, setIsDemo] = useState(demoMode);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (submitted) {
      onStart?.();
      intervalId = setInterval(() => {
        setTime((t) => t + 1);
      }, 1000);
    } else {
      onStop?.(time);
      setTime(0);
    }

    return () => clearInterval(intervalId);
  }, [submitted, time, onStart, onStop]);

  useEffect(() => {
    if (!isDemo) return;

    let timeoutId: NodeJS.Timeout;
    const runAnimation = () => {
      setSubmitted(true);
      timeoutId = setTimeout(() => {
        setSubmitted(false);
        timeoutId = setTimeout(runAnimation, 1000);
      }, demoInterval);
    };

    const initialTimeout = setTimeout(runAnimation, 100);
    return () => {
      clearTimeout(timeoutId);
      clearTimeout(initialTimeout);
    };
  }, [isDemo, demoInterval]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const handleClick = () => {
    if (isDemo) {
      setIsDemo(false);
      setSubmitted(false);
    } else {
      setSubmitted((prev) => !prev);
    }
  };

  return (
    <div className={cn("w-full py-4", className)}>
      <div className="relative max-w-xl w-full mx-auto flex items-center flex-col gap-20">

        <div
          className="h-10 w-64 flex items-center justify-center gap-2"
          style={{ imageRendering: "pixelated" }}
        >
          {[...Array(visualizerBars)].map((_, i) => (
            <div
              key={i}
              className={cn(
                "w-7 rounded-full transition-all duration-300 flex-shrink-0",
                submitted ? "" : "h-1"
              )}
              style={{
                backgroundColor: submitted ? "#859933" : "rgba(133, 153, 51, 0.25)",
                ...(submitted && isClient
                  ? {
                      height: `${Math.round((100 + Math.random() * 200) / 30) * 30}%`,
                    }
                  : {}),
              }}
            />
          ))}
        </div>

        <span
          className={cn(
            "transition-opacity duration-300",
            submitted
              ? "text-black/70 dark:text-white/70"
              : "text-black dark:text-white"
          )}
          style={{
            fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
            fontSize: "24px"
          }}
        >
          {formatTime(time)}
        </span>

        <button
          className={cn(
            "group w-16 h-16 rounded-xl flex items-center justify-center transition-colors",
            submitted
              ? "bg-none"
              : "bg-none hover:bg-black/10 dark:hover:bg-white/10"
          )}
          type="button"
          onClick={handleClick}
        >
          {submitted ? (
            <div
              className="w-6 h-6 rounded-sm animate-spin bg-black dark:bg-white cursor-pointer pointer-events-auto"
              style={{ animationDuration: "3s" }}
            />
          ) : (
            <Mic className="w-6 h-6 text-black/70 dark:text-white/70" />
          )}
        </button>

        {/* <p className="h-4 text-xs text-black/70 dark:text-white/70">
          {submitted ? "Listening..." : "Click to speak"}
        </p> */}
      </div>
    </div>
  );
}
