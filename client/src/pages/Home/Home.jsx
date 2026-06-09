import { Nav, Footer } from "../../components/Layout";
import { Pill, Btn, SvcIcon } from "../../components/UI";
import {
  DispatchConsole,
  SectionHead,
  FaqSection,
  ContactSection,
  PaymentSection,
  PrivacySection,
  PricingSection,
} from "./Sections";

export default function Home({ onQuote }) {
  return (
    <>
      <Nav onQuote={onQuote} />

      {/* Hero Section */}
      <section
        style={{
          padding: "120px 48px 80px",
          position: "relative",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          minHeight: "85vh",
        }}
        className="page-pad"
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "var(--bg)",
            backgroundImage:
              "radial-gradient(ellipse at 80% 20%, rgba(74,208,92,0.08) 0%, transparent 50%), radial-gradient(ellipse at 20% 80%, rgba(74,222,128,0.06) 0%, transparent 50%)",
            zIndex: 0,
          }}
        />
        <div
          style={{
            position: "absolute",
            top: -160,
            right: -120,
            width: 600,
            height: 600,
            borderRadius: "50%",
            background:
              "radial-gradient(circle,var(--accent-glow) 0%,transparent 60%)",
            filter: "blur(40px)",
            opacity: 0.6,
          }}
        />
        <div
          style={{
            position: "relative",
            zIndex: 1,
            maxWidth: 1140,
            margin: "0 auto",
            width: "100%",
            display: "grid",
            gridTemplateColumns: "1fr 440px",
            gap: 80,
            alignItems: "center",
          }}
        >
          <div>
            <div style={{ marginBottom: 32, display: "flex", gap: 12 }}>
              <Pill tone="live" dot="pulse">
                Operations running
              </Pill>
              <Pill>
                <span style={{ color: "var(--fg)" }}>42</span> vehicles active
              </Pill>
            </div>
            <h1
              style={{
                fontSize: 72,
                lineHeight: 1.05,
                letterSpacing: -2,
                fontWeight: 500,
                margin: "0 0 24px",
              }}
            >
              Secure logistics &<br />
              <span style={{ color: "var(--fg-2)" }}>
                rapid response locks.
              </span>
            </h1>
            <p
              style={{
                fontSize: 22,
                color: "var(--fg-2)",
                lineHeight: 1.4,
                margin: "0 0 40px",
                maxWidth: 560,
              }}
            >
              London's only agency combining verified couriers with MLA-approved
              emergency locksmiths. Account or ad-hoc.
            </p>
            <div style={{ display: "flex", gap: 16 }}>
              <Btn kind="primary" big sub="60-second form" onClick={onQuote}>
                Request a quote →
              </Btn>
              <Btn kind="soft" big sub="Setup in 2 mins">
                Open account
              </Btn>
            </div>
          </div>

          <DispatchConsole />
        </div>
      </section>

      {/* Services Section */}
      <section
        style={{ padding: "120px 48px", background: "var(--surface)" }}
        className="page-pad"
      >
        <div style={{ maxWidth: 1140, margin: "0 auto" }}>
          <h2
            style={{
              fontSize: 40,
              fontWeight: 500,
              letterSpacing: -1,
              margin: "0 0 64px",
            }}
          >
            Two divisions. One standard.
          </h2>
          <div
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}
          >
            {/* Courier */}
            <div
              style={{
                background: "var(--surface-2)",
                border: "1px solid var(--border)",
                borderRadius: 24,
                padding: 48,
              }}
            >
              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: 12,
                  background: "var(--accent-soft)",
                  color: "var(--accent-2)",
                  display: "grid",
                  placeItems: "center",
                  marginBottom: 32,
                }}
              >
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="1" y="3" width="15" height="13" rx="2" />
                  <path d="M16 8h4l3 3v5h-7M5.5 21a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zm13 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
                </svg>
              </div>
              <h3 style={{ fontSize: 28, fontWeight: 500, marginBottom: 16 }}>
                Secure Courier
              </h3>
              <p
                style={{
                  fontSize: 16,
                  color: "var(--fg-2)",
                  lineHeight: 1.5,
                  marginBottom: 32,
                }}
              >
                From vital legal documents to medical specimens and high-value
                tech. Tracked, insured, and handled strictly by verified
                personnel.
              </p>
              <ul
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                  marginBottom: 40,
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                }}
              >
                {[
                  "Direct A-to-B delivery (No hub sorting)",
                  "Real-time GPS tracking link",
                  "Immediate digital Proof of Delivery",
                  "Up to £100k transit insurance available",
                ].map((li, i) => (
                  <li
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 12,
                      fontSize: 15,
                      color: "var(--fg-2)",
                    }}
                  >
                    <span style={{ color: "var(--accent-2)", marginTop: 2 }}>
                      ✓
                    </span>{" "}
                    {li}
                  </li>
                ))}
              </ul>
              <Btn kind="soft" onClick={onQuote}>
                Book courier
              </Btn>
            </div>
            {/* Locksmith */}
            <div
              style={{
                background: "var(--surface-2)",
                border: "1px solid var(--border)",
                borderRadius: 24,
                padding: 48,
              }}
            >
              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: 12,
                  background: "var(--urgent-soft)",
                  color: "var(--urgent-2)",
                  display: "grid",
                  placeItems: "center",
                  marginBottom: 32,
                }}
              >
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="3" y="11" width="18" height="11" rx="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
              </div>
              <h3 style={{ fontSize: 28, fontWeight: 500, marginBottom: 16 }}>
                Emergency Locksmith
              </h3>
              <p
                style={{
                  fontSize: 16,
                  color: "var(--fg-2)",
                  lineHeight: 1.5,
                  marginBottom: 32,
                }}
              >
                Rapid response for lockouts, break-in repairs, and commercial
                security upgrades. Fixed quotes before we dispatch.
              </p>
              <ul
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                  marginBottom: 40,
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                }}
              >
                {[
                  "30-60 minute emergency response",
                  "Non-destructive entry specialists",
                  "BS3621 insurance-approved locks",
                  "12-month guarantee on all parts & labor",
                ].map((li, i) => (
                  <li
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 12,
                      fontSize: 15,
                      color: "var(--fg-2)",
                    }}
                  >
                    <span style={{ color: "var(--urgent-2)", marginTop: 2 }}>
                      ✓
                    </span>{" "}
                    {li}
                  </li>
                ))}
              </ul>
              <Btn kind="soft" onClick={onQuote}>
                Request locksmith
              </Btn>
            </div>
          </div>
        </div>
      </section>

      <PricingSection onQuote={onQuote} />
      <ContactSection />
      <FaqSection />
      <PaymentSection />
      <PrivacySection />

      <Footer />
    </>
  );
}
