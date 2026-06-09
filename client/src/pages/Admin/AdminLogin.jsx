"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const LOGO = typeof window !== "undefined" ? window.LOGO_URI : "";

export default function AdminLogin() {
  const [pin, setPin] = useState("");
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    router.push("/admin");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        padding: 24,
        background: "var(--bg-2)",
      }}
    >
      <button
        onClick={() => router.push("/")}
        style={{
          position: "absolute",
          top: 32,
          left: 32,
          background: "none",
          border: "none",
          color: "var(--fg-2)",
          fontSize: 13,
          cursor: "pointer",
        }}
        className="mono"
      >
        ← Back to site
      </button>
      <form
        onSubmit={handleLogin}
        style={{
          width: "100%",
          maxWidth: 340,
          background: "var(--surface)",
          border: "1px solid var(--border)",
          borderRadius: 16,
          padding: 32,
          textAlign: "center",
        }}
      >
        <img
          src={LOGO}
          alt="212 Secure"
          width="48"
          height="48"
          style={{ display: "block", margin: "0 auto 24px" }}
        />
        <div style={{ fontSize: 18, fontWeight: 500, marginBottom: 4 }}>
          Dispatch Login
        </div>
        <div style={{ fontSize: 13, color: "var(--fg-2)", marginBottom: 24 }}>
          Enter your 6-digit operator PIN
        </div>
        <input
          type="password"
          value={pin}
          onChange={(e) => setPin(e.target.value)}
          placeholder="••••••"
          style={{
            width: "100%",
            padding: 14,
            background: "var(--surface-2)",
            border: "1px solid var(--border)",
            borderRadius: 8,
            fontSize: 24,
            letterSpacing: 8,
            textAlign: "center",
            color: "var(--fg)",
            marginBottom: 16,
            outline: "none",
            fontFamily: "monospace",
          }}
          autoFocus
        />
        <button
          disabled={pin.length < 4}
          style={{
            width: "100%",
            padding: 14,
            background: "var(--accent)",
            color: "white",
            borderRadius: 8,
            fontWeight: 600,
            fontSize: 14,
            cursor: "pointer",
            border: "none",
            opacity: pin.length < 4 ? 0.5 : 1,
          }}
        >
          Sign in
        </button>
      </form>
    </div>
  );
}
