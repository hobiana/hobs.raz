import { useRef, useEffect } from "react";

export function useSessionId() {
  const sessionIdRef = useRef<string | null>(null);

  useEffect(() => {
    let stored = localStorage.getItem("sessionId");
    if (!stored) {
      stored = Date.now().toString();
      localStorage.setItem("sessionId", stored);
    }
    sessionIdRef.current = stored;
  }, []);

  return sessionIdRef.current!;
}
