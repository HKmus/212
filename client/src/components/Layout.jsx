"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { PhoneIcon, Btn } from "./UI";

const LOGO = typeof window !== "undefined" ? window.LOGO_URI : "";

export function Nav({ onQuote }) {
  const [scrolled, setScrolled] = useState(false);
  const [mob, setMob] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", f);
    return () => window.removeEventListener("scroll", f);
  }, []);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        borderBottom: scrolled
          ? "1px solid var(--border)"
          : "1px solid transparent",
        background: scrolled ? "rgba(10,12,11,0.90)" : "transparent",
        backdropFilter: scrolled ? "blur(16px) saturate(140%)" : "none",
        transition: "all .25s ease",
      }}
    >
      <div
        style={{
          padding: "20px 48px",
          display: "grid",
          gridTemplateColumns: "auto 1fr auto",
          alignItems: "center",
          gap: 40,
        }}
        className="page-pad"
      >
        <Link href="/">
          <img
            src={LOGO}
            alt="212 Secure"
            width="52"
            height="52"
            style={{
              display: "block",
              filter: "drop-shadow(0 6px 14px rgba(41,168,58,0.18))",
            }}
          />
        </Link>
        <nav
          className="desktop-nav"
          style={{ display: "flex", justifyContent: "center", gap: 4 }}
        >
          {["Services", "Coverage", "For business", "About"].map((l, i) => (
            <span
              key={i}
              style={{
                padding: "10px 18px",
                fontSize: 14.5,
                color: "var(--fg-2)",
                borderRadius: 999,
                fontWeight: 450,
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "var(--surface)";
                e.currentTarget.style.color = "var(--fg)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = "var(--fg-2)";
              }}
            >
              {l}
            </span>
          ))}
        </nav>
        <div
          className="desktop-nav"
          style={{ display: "flex", alignItems: "center", gap: 14 }}
        >
          <button
            onClick={() => router.push("/portal")}
            style={{
              background: "transparent",
              border: "none",
              padding: "10px 16px",
              fontSize: 14.5,
              color: "var(--fg-2)",
              borderRadius: 999,
              fontWeight: 450,
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "var(--surface)";
              e.currentTarget.style.color = "var(--fg)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = "var(--fg-2)";
            }}
          >
            Sign in
          </button>
          <a
            href="tel:02034880664"
            style={{
              display: "inline-flex",
              textDecoration: "none",
              alignItems: "center",
              gap: 10,
              padding: "10px 16px",
              borderRadius: 999,
              color: "var(--fg)",
              fontSize: 14.5,
              fontWeight: 500,
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = "var(--surface)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = "transparent")
            }
          >
            <PhoneIcon />
            020 3488 0664
          </a>
          <Btn kind="primary" onClick={onQuote}>
            Get a quote
          </Btn>
        </div>
        <button
          className="mobile-nav-btn"
          onClick={() => setMob(!mob)}
          style={{
            display: "none",
            flexDirection: "column",
            gap: 5,
            padding: 8,
            borderRadius: 8,
            background: "var(--surface)",
            border: "1px solid var(--border)",
            cursor: "pointer",
          }}
        >
          <span
            style={{
              width: 18,
              height: 2,
              background: "var(--fg)",
              borderRadius: 99,
            }}
          />
          <span
            style={{
              width: 18,
              height: 2,
              background: "var(--fg)",
              borderRadius: 99,
            }}
          />
          <span
            style={{
              width: 18,
              height: 2,
              background: "var(--fg)",
              borderRadius: 99,
            }}
          />
        </button>
      </div>
      {mob && (
        <div
          style={{
            padding: "16px 20px",
            background: "var(--bg-2)",
            borderBottom: "1px solid var(--border)",
            display: "flex",
            flexDirection: "column",
            gap: 4,
          }}
        >
          {["Services", "Coverage", "For business", "About"].map((l, i) => (
            <span
              key={i}
              style={{
                padding: "12px 16px",
                borderRadius: 8,
                color: "var(--fg-2)",
                fontSize: 15,
                cursor: "pointer",
              }}
            >
              {l}
            </span>
          ))}
          <button
            onClick={() => router.push("/portal")}
            style={{
              background: "transparent",
              border: "none",
              padding: "12px 16px",
              borderRadius: 8,
              color: "var(--fg-2)",
              fontSize: 15,
              textAlign: "left",
              cursor: "pointer",
            }}
          >
            Sign in
          </button>
          <a
            href="tel:02034880664"
            style={{
              padding: "12px 16px",
              borderRadius: 8,
              textDecoration: "none",
              color: "var(--accent-2)",
              fontSize: 15,
              display: "flex",
              gap: 8,
              alignItems: "center",
            }}
          >
            <PhoneIcon />
            020 3488 0664
          </a>
        </div>
      )}
    </header>
  );
}

export function Footer() {
  const router = useRouter();
  return (
    <footer
      style={{ padding: "80px 48px 40px", background: "var(--bg-2)" }}
      className="page-pad"
    >
      <div
        className="footer-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "1.4fr repeat(4,1fr)",
          gap: 48,
          paddingBottom: 64,
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div>
          <img
            src={LOGO}
            alt="212 Secure Services"
            width="56"
            height="56"
            style={{ display: "block", marginBottom: 20 }}
          />
          <div
            style={{
              fontSize: 17,
              lineHeight: 1.4,
              fontWeight: 500,
              letterSpacing: -0.3,
              marginBottom: 6,
            }}
          >
            212 Secure Services
          </div>
          <div
            className="mono"
            style={{
              fontSize: 11,
              color: "var(--muted)",
              letterSpacing: 0.6,
              textTransform: "uppercase",
              marginBottom: 24,
            }}
          >
            Couriers · Locksmiths · London
          </div>
          <div style={{ fontSize: 13, color: "var(--fg-2)", lineHeight: 1.7 }}>
            <a
              href="tel:02034880664"
              style={{
                color: "var(--accent-2)",
                textDecoration: "none",
                borderBottom: "1px dashed currentColor",
              }}
              className="mono"
            >
              020 3488 0664
            </a>
            <br />
            <span className="mono">info@212secure.co.uk</span>
          </div>
        </div>
        {[
          {
            h: "Courier",
            links: [
              "Same-day London",
              "UK-wide overnight",
              "Legal & probate",
              "Medical specimens",
              "Time-critical",
              "International",
            ],
          },
          {
            h: "Locksmith",
            links: [
              "Emergency entry",
              "Lock change",
              "Burglary repair",
              "UPVC specialist",
              "Safe opening",
              "Auto locksmith",
            ],
          },
          {
            h: "For business",
            links: [
              "Account opening",
              "Master-key registers",
              "Audit logs",
              "Monthly invoicing",
              "Contact ops",
            ],
          },
          {
            h: "Company",
            links: ["About", "Coverage", "Contact", "Sign in", "Admin"],
          },
        ].map((c, i) => (
          <div key={i}>
            <div
              className="mono"
              style={{
                fontSize: 11,
                color: "var(--muted)",
                letterSpacing: 1,
                textTransform: "uppercase",
                marginBottom: 16,
              }}
            >
              {c.h}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {c.links.map((l, j) => (
                <button
                  key={j}
                  onClick={() => {
                    if (l === "Sign in") router.push("/portal");
                    else if (l === "Admin") router.push("/admin/login");
                  }}
                  style={{
                    background: "transparent",
                    border: "none",
                    cursor: "pointer",
                    padding: 0,
                    fontSize: 13.5,
                    color: "var(--fg-2)",
                    textAlign: "left",
                  }}
                >
                  {l}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div
        style={{
          marginTop: 32,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontSize: 11.5,
          color: "var(--muted)",
          flexWrap: "wrap",
          gap: 12,
        }}
        className="mono"
      >
        <div>
          © 2026 212 Secure Services Ltd · Registered in England & Wales
        </div>
        <div style={{ display: "flex", gap: 18 }}>
          <span style={{ cursor: "pointer" }}>Privacy</span>
          <span style={{ cursor: "pointer" }}>Terms</span>
          <span style={{ cursor: "pointer" }}>Cookies</span>
        </div>
      </div>
    </footer>
  );
}
