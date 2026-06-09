import { useState, useEffect } from 'react';
import { PhoneIcon, Toast } from '../../components/UI';

export function DispatchConsole() {
  const [now, setNow] = useState(new Date());
  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(t);
  }, []);
  const hh = String(now.getHours()).padStart(2, "0"),
    mm = String(now.getMinutes()).padStart(2, "0"),
    ss = String(now.getSeconds()).padStart(2, "0");
  return (
    <div
      className="dispatch-console"
      style={{
        background:
          "linear-gradient(180deg,var(--surface) 0%,var(--bg-2) 100%)",
        border: "1px solid var(--border-2)",
        borderRadius: 14,
        boxShadow:
          "0 32px 80px -32px rgba(0,0,0,0.8),inset 0 1px 0 rgba(255,255,255,0.04)",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "14px 18px",
          borderBottom: "1px solid var(--border)",
          background: "var(--bg-2)",
        }}
      >
        <div style={{ display: "flex", gap: 5 }}>
          <span
            style={{
              width: 9,
              height: 9,
              borderRadius: 99,
              background: "#ff5f57",
            }}
          />
          <span
            style={{
              width: 9,
              height: 9,
              borderRadius: 99,
              background: "#febc2e",
            }}
          />
          <span
            style={{
              width: 9,
              height: 9,
              borderRadius: 99,
              background: "#28c840",
            }}
          />
        </div>
        <span
          className="mono"
          style={{
            fontSize: 10.5,
            color: "var(--muted)",
            letterSpacing: 0.6,
            textTransform: "uppercase",
          }}
        >
          preview
        </span>
      </div>
      <div style={{ padding: 22 }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 6,
          }}
        >
          <span
            className="mono"
            style={{
              fontSize: 11,
              color: "var(--muted)",
              letterSpacing: 0.8,
              textTransform: "uppercase",
            }}
          >
            Tracking link · sent by SMS
          </span>
          <span
            className="mono"
            style={{
              fontSize: 11,
              padding: "3px 9px",
              borderRadius: 99,
              background: "rgba(74,208,92,0.12)",
              color: "var(--accent-2)",
              letterSpacing: 0.6,
            }}
          >
            ● ON THE WAY
          </span>
        </div>
        <div
          style={{
            fontSize: 22,
            fontWeight: 500,
            letterSpacing: -0.5,
            marginBottom: 2,
          }}
        >
          Locksmith — emergency entry
        </div>
        <div
          style={{ fontSize: 14, color: "var(--fg-2)", marginBottom: 22 }}
        >
          Camden, NW1 · ETA in{" "}
          <span style={{ color: "var(--accent-2)", fontWeight: 500 }}>
            11 minutes
          </span>
        </div>
        <div
          style={{
            position: "relative",
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            marginBottom: 26,
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 11,
              left: "12.5%",
              right: "12.5%",
              height: 2,
              background: "var(--border)",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: 11,
              left: "12.5%",
              width: "37.5%",
              height: 2,
              background: "var(--accent)",
            }}
          />
          {[
            { l: "Booked", t: "12:31", on: true },
            { l: "Dispatched", t: "12:33", on: true },
            { l: "On the way", t: "now", on: "active" },
            { l: "On site", t: "~12:44", on: false },
          ].map((s, i) => (
            <div
              key={i}
              style={{
                position: "relative",
                textAlign: "center",
                zIndex: 2,
              }}
            >
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 24,
                  height: 24,
                  borderRadius: 99,
                  background: s.on ? "var(--accent)" : "var(--surface-2)",
                  border: `2px solid ${s.on === "active" ? "var(--accent-2)" : s.on ? "var(--accent)" : "var(--border-2)"}`,
                  boxShadow:
                    s.on === "active"
                      ? "0 0 0 6px var(--accent-soft)"
                      : "none",
                }}
              >
                {s.on === true && (
                  <svg
                    viewBox="0 0 24 24"
                    width="12"
                    height="12"
                    fill="none"
                    stroke="white"
                    strokeWidth="3"
                  >
                    <path d="M5 12l5 5L20 7" />
                  </svg>
                )}
              </span>
              <div
                style={{
                  fontSize: 12.5,
                  color: s.on ? "var(--fg)" : "var(--muted)",
                  marginTop: 8,
                  fontWeight: s.on === "active" ? 500 : 400,
                }}
              >
                {s.l}
              </div>
              <div
                className="mono"
                style={{
                  fontSize: 10.5,
                  color: "var(--muted)",
                  marginTop: 2,
                }}
              >
                {s.t}
              </div>
            </div>
          ))}
        </div>
        <div
          style={{
            padding: 14,
            background: "var(--surface-2)",
            borderRadius: 10,
            border: "1px solid var(--border)",
            display: "grid",
            gridTemplateColumns: "44px 1fr auto",
            gap: 14,
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: 99,
              background:
                "linear-gradient(135deg,var(--accent),var(--accent-2))",
              display: "grid",
              placeItems: "center",
              color: "white",
              fontWeight: 600,
            }}
          >
            MV
          </div>
          <div>
            <div style={{ fontSize: 14, fontWeight: 500 }}>
              Your operator — Marek
            </div>
            <div
              className="mono"
              style={{
                fontSize: 11,
                color: "var(--muted)",
                marginTop: 2,
                letterSpacing: 0.4,
              }}
            >
              DBS-checked · MLA · van LR23 KXP
            </div>
          </div>
          <a
            href="tel:02034880664"
            style={{
              width: 36,
              height: 36,
              borderRadius: 99,
              background: "var(--surface)",
              border: "1px solid var(--border-2)",
              color: "var(--fg-2)",
              display: "grid",
              placeItems: "center",
            }}
          >
            <PhoneIcon />
          </a>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: 18,
            paddingTop: 14,
            borderTop: "1px solid var(--border)",
          }}
        >
          <span
            className="mono"
            style={{
              fontSize: 11,
              color: "var(--muted)",
              letterSpacing: 0.5,
            }}
          >
            BOOKING REF · 212-LK-1102
          </span>
          <span
            className="mono"
            style={{ fontSize: 11, color: "var(--fg-2)" }}
          >
            {hh}:{mm}
            <span style={{ opacity: 0.4 }}>:{ss}</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export function SectionHead({ kicker, title, body }) {
  return (
    <div
      className="section-head-grid"
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1.4fr",
        gap: 64,
        alignItems: "end",
      }}
    >
      <div>
        <div
          className="mono"
          style={{
            fontSize: 11,
            color: "var(--accent-2)",
            letterSpacing: 1.4,
            textTransform: "uppercase",
            marginBottom: 14,
          }}
        >
          <span
            style={{
              display: "inline-block",
              width: 24,
              height: 1,
              background: "var(--accent)",
              verticalAlign: "middle",
              marginRight: 10,
            }}
          />
          {kicker}
        </div>
        <h2
          style={{
            margin: 0,
            fontSize: 64,
            lineHeight: 0.96,
            letterSpacing: -2,
            fontWeight: 600,
          }}
        >
          {title}
        </h2>
      </div>
      {body && (
        <p
          style={{
            margin: 0,
            fontSize: 17,
            lineHeight: 1.55,
            color: "var(--fg-2)",
            maxWidth: 560,
          }}
        >
          {body}
        </p>
      )}
    </div>
  );
}

export function FaqSection() {
  const [open, setOpen] = useState(null);
  const faqs = [
    {
      q: "How quickly can you get a locksmith to me?",
      a: "Our average response time across London zones 1–4 is under 35 minutes. Zones 5–6 can take up to 60 minutes. We'll give you an accurate ETA on the call before you commit.",
    },
    {
      q: "What areas do you cover for courier deliveries?",
      a: "We cover all six London zones and can run to any address in England and Wales for same-day or next-day delivery. Call us for exact pricing outside the M25.",
    },
    {
      q: "Is there a call-out fee for the locksmith?",
      a: "No. We quote a single fixed price on the phone that covers everything — labour, parts, and VAT. That's the number you pay. Nothing more.",
    },
    {
      q: "Can I track my courier delivery in real time?",
      a: "Yes. The moment your driver sets off, you receive an SMS with a live GPS tracking link. You can share that link with whoever is receiving the delivery.",
    },
    {
      q: "Do you work with businesses and law firms?",
      a: "Absolutely. We have business accounts with monthly billing, a dedicated account manager, and volume pricing. Legal firms, estate agents, and healthcare providers are among our regulars.",
    },
    {
      q: "Are your operators DBS checked and insured?",
      a: "Every operator on our books has passed a DBS enhanced check, holds public liability insurance, and carries our ID cards. We can provide documentation on request for regulated clients.",
    },
    {
      q: "Can I pay by card or invoice?",
      a: "Private customers pay by card via our secure Stripe payment link. Business accounts receive a monthly invoice with 30-day terms. We accept all major cards.",
    },
    {
      q: "What if the locksmith can't open my door without damage?",
      a: "We always try non-destructive entry first. If drilling is the only option, we'll explain that before starting and factor a replacement lock into the fixed quote.",
    },
  ];
  return (
    <section
      id="faq"
      style={{
        padding: "120px 48px",
        borderBottom: "1px solid var(--border)",
      }}
      className="page-pad"
    >
      <div style={{ maxWidth: 720, margin: "0 auto" }}>
        <div
          className="mono"
          style={{
            fontSize: 11,
            color: "var(--accent-2)",
            letterSpacing: 1,
            textTransform: "uppercase",
            marginBottom: 12,
            textAlign: "center",
          }}
        >
          FAQ
        </div>
        <h2
          style={{
            fontSize: 48,
            fontWeight: 600,
            letterSpacing: -1.2,
            marginBottom: 48,
            textAlign: "center",
            lineHeight: 1.05,
          }}
        >
          Common questions
        </h2>
        {faqs.map((f, i) => (
          <div
            key={i}
            style={{ borderBottom: "1px solid var(--border)" }}
          >
            <button
              onClick={() => setOpen(open === i ? null : i)}
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "20px 0",
                background: "none",
                border: "none",
                cursor: "pointer",
                textAlign: "left",
              }}
            >
              <span
                style={{
                  fontSize: 16,
                  fontWeight: 500,
                  color: "var(--fg)",
                  paddingRight: 24,
                  lineHeight: 1.4,
                }}
              >
                {f.q}
              </span>
              <span
                style={{
                  color: "var(--accent-2)",
                  fontSize: 22,
                  flexShrink: 0,
                  transition: "transform .2s ease",
                  transform: open === i ? "rotate(45deg)" : "rotate(0)",
                }}
              >
                +
              </span>
            </button>
            {open === i && (
              <div
                style={{
                  paddingBottom: 20,
                  animation: "slideUp .2s ease",
                }}
              >
                <p
                  style={{
                    fontSize: 15,
                    color: "var(--fg-2)",
                    lineHeight: 1.65,
                  }}
                >
                  {f.a}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    msg: "",
  });
  const [toast, setToast] = useState(null);
  const [sending, setSending] = useState(false);
  const set = (k) => (e) =>
    setForm((p) => ({ ...p, [k]: e.target.value }));
  const send = async () => {
    setSending(true);
    await new Promise((r) => setTimeout(r, 1000));
    setSending(false);
    setForm({ name: "", email: "", phone: "", msg: "" });
    setToast(
      "We got your message — someone from our team will be in touch within 2 hours.",
    );
  };
  const inp = {
    width: "100%",
    padding: "12px 14px",
    background: "var(--surface-2)",
    border: "1px solid var(--border)",
    borderRadius: 8,
    color: "var(--fg)",
    fontSize: 14,
    marginBottom: 16,
    display: "block",
  };
  return (
    <section
      id="contact"
      style={{
        padding: "120px 48px",
        borderBottom: "1px solid var(--border)",
      }}
      className="page-pad"
    >
      {toast && <Toast msg={toast} onClose={() => setToast(null)} />}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 64,
          alignItems: "start",
        }}
        className="section-head-grid"
      >
        <div>
          <div
            className="mono"
            style={{
              fontSize: 11,
              color: "var(--accent-2)",
              letterSpacing: 1,
              textTransform: "uppercase",
              marginBottom: 16,
            }}
          >
            Get in touch
          </div>
          <h2
            style={{
              fontSize: 52,
              fontWeight: 600,
              letterSpacing: -1.5,
              lineHeight: 1,
              marginBottom: 20,
            }}
          >
            Not sure what
            <br />
            you need?
          </h2>
          <p
            style={{
              fontSize: 17,
              color: "var(--fg-2)",
              lineHeight: 1.6,
              marginBottom: 32,
            }}
          >
            Drop us a message and our operations team will call you back
            within 2 hours during business hours, or first thing next
            morning.
          </p>
          <div
            style={{ display: "flex", flexDirection: "column", gap: 12 }}
          >
            {[
              {
                icon: "📞",
                label: "Phone (24/7)",
                val: "020 3488 0664",
                href: "tel:02034880664",
              },
              {
                icon: "✉️",
                label: "Email",
                val: "dispatch@212secureservices.co.uk",
                href: "mailto:dispatch@212secureservices.co.uk",
              },
              {
                icon: "💬",
                label: "WhatsApp",
                val: "Chat with us now",
                href: "https://wa.me/442034880664",
              },
            ].map((c, i) => (
              <a
                key={i}
                href={c.href}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  padding: "14px 18px",
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  borderRadius: 12,
                  transition: "border-color .15s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.borderColor = "var(--border-2)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.borderColor = "var(--border)")
                }
              >
                <span style={{ fontSize: 20 }}>{c.icon}</span>
                <div>
                  <div
                    className="mono"
                    style={{
                      fontSize: 10.5,
                      color: "var(--muted)",
                      letterSpacing: 0.8,
                      textTransform: "uppercase",
                      marginBottom: 2,
                    }}
                  >
                    {c.label}
                  </div>
                  <div style={{ fontSize: 14, fontWeight: 500 }}>
                    {c.val}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
        <div
          style={{
            background: "var(--surface)",
            border: "1px solid var(--border)",
            borderRadius: 16,
            padding: 32,
          }}
        >
          <div
            style={{ fontWeight: 600, fontSize: 18, marginBottom: 20 }}
          >
            Send us a message
          </div>
          <label
            style={{
              fontSize: 12,
              color: "var(--fg-2)",
              marginBottom: 4,
              display: "block",
              fontFamily: "monospace",
            }}
          >
            Your name
          </label>
          <input
            style={inp}
            value={form.name}
            onChange={set("name")}
            placeholder="Full name"
          />
          <label
            style={{
              fontSize: 12,
              color: "var(--fg-2)",
              marginBottom: 4,
              display: "block",
              fontFamily: "monospace",
            }}
          >
            Email
          </label>
          <input
            style={inp}
            value={form.email}
            onChange={set("email")}
            placeholder="you@example.com"
            type="email"
          />
          <label
            style={{
              fontSize: 12,
              color: "var(--fg-2)",
              marginBottom: 4,
              display: "block",
              fontFamily: "monospace",
            }}
          >
            Phone
          </label>
          <input
            style={inp}
            value={form.phone}
            onChange={set("phone")}
            placeholder="07700 900000"
            type="tel"
          />
          <label
            style={{
              fontSize: 12,
              color: "var(--fg-2)",
              marginBottom: 4,
              display: "block",
              fontFamily: "monospace",
            }}
          >
            Message
          </label>
          <textarea
            style={{ ...inp, minHeight: 100, resize: "vertical" }}
            value={form.msg}
            onChange={set("msg")}
            placeholder="Tell us what you need..."
          />
          <button
            onClick={send}
            disabled={sending || !form.name || !form.email || !form.msg}
            style={{
              width: "100%",
              padding: "14px",
              background: "var(--accent)",
              color: "white",
              borderRadius: 999,
              fontWeight: 600,
              fontSize: 15,
              cursor: "pointer",
              border: "none",
              opacity:
                sending || !form.name || !form.email || !form.msg
                  ? 0.5
                  : 1,
            }}
          >
            {sending ? "Sending..." : "Send message →"}
          </button>
          <p
            style={{
              fontSize: 11,
              color: "var(--muted)",
              textAlign: "center",
              marginTop: 12,
            }}
          >
            We reply within 2 hours during business hours.
          </p>
        </div>
      </div>
    </section>
  );
}

export function PaymentSection() {
  return (
    <section
      id="pay"
      style={{
        padding: "80px 48px",
        borderBottom: "1px solid var(--border)",
        background: "var(--bg-2)",
      }}
      className="page-pad"
    >
      <div
        style={{ maxWidth: 540, margin: "0 auto", textAlign: "center" }}
      >
        <div
          className="mono"
          style={{
            fontSize: 11,
            color: "var(--accent-2)",
            letterSpacing: 1,
            textTransform: "uppercase",
            marginBottom: 12,
          }}
        >
          Pay your invoice
        </div>
        <h2
          style={{
            fontSize: 36,
            fontWeight: 600,
            letterSpacing: -0.8,
            marginBottom: 12,
          }}
        >
          Secure online payment
        </h2>
        <p
          style={{
            fontSize: 15,
            color: "var(--fg-2)",
            lineHeight: 1.6,
            marginBottom: 32,
          }}
        >
          Pay your invoice online using our secure Stripe payment link.
          All major cards accepted. Receipt sent instantly.
        </p>
        <div
          style={{
            background: "var(--surface)",
            border: "1px solid var(--border)",
            borderRadius: 16,
            padding: 32,
            marginBottom: 20,
          }}
        >
          <div
            style={{
              display: "flex",
              gap: 8,
              justifyContent: "center",
              marginBottom: 20,
              flexWrap: "wrap",
            }}
          >
            {["VISA", "MC", "AMEX", "GOOGLE PAY", "APPLE PAY"].map(
              (c, i) => (
                <div
                  key={i}
                  style={{
                    padding: "5px 9px",
                    background: "var(--surface-2)",
                    border: "1px solid var(--border)",
                    borderRadius: 5,
                    fontSize: 10,
                    fontWeight: 700,
                    color: "var(--fg-2)",
                    letterSpacing: 0.5,
                  }}
                >
                  {c}
                </div>
              ),
            )}
          </div>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <button
              style={{
                width: "100%",
                padding: "16px",
                background: "var(--accent)",
                color: "white",
                borderRadius: 999,
                fontWeight: 700,
                fontSize: 16,
                cursor: "pointer",
                border: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 10,
              }}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
              >
                <rect x="1" y="4" width="22" height="16" rx="2" />
                <line x1="1" y1="10" x2="23" y2="10" />
              </svg>
              Pay invoice securely →
            </button>
          </a>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 6,
              marginTop: 12,
            }}
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="var(--muted)"
              strokeWidth="2"
            >
              <rect x="3" y="11" width="18" height="11" rx="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
            <span style={{ fontSize: 11, color: "var(--muted)" }}>
              Powered by Stripe · 256-bit SSL · PCI DSS compliant
            </span>
          </div>
        </div>
        <p style={{ fontSize: 13, color: "var(--muted)" }}>
          Questions about your invoice? Call{" "}
          <a href="tel:02034880664" style={{ color: "var(--fg-2)" }}>
            020 3488 0664
          </a>{" "}
          or email{" "}
          <a
            href="mailto:accounts@212secureservices.co.uk"
            style={{ color: "var(--fg-2)" }}
          >
            accounts@212secureservices.co.uk
          </a>
        </p>
      </div>
    </section>
  );
}

export function PrivacySection() {
  return (
    <section
      id="privacy"
      style={{
        padding: "80px 48px",
        borderBottom: "1px solid var(--border)",
      }}
      className="page-pad"
    >
      <div style={{ maxWidth: 720, margin: "0 auto" }}>
        <div
          className="mono"
          style={{
            fontSize: 11,
            color: "var(--muted)",
            letterSpacing: 1,
            textTransform: "uppercase",
            marginBottom: 12,
          }}
        >
          Legal
        </div>
        <h2
          style={{
            fontSize: 36,
            fontWeight: 600,
            letterSpacing: -0.8,
            marginBottom: 32,
          }}
        >
          Privacy Policy
        </h2>
        <div
          style={{
            fontSize: 14,
            color: "var(--fg-2)",
            lineHeight: 1.7,
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
        >
          <p>
            <strong style={{ color: "var(--fg)" }}>
              212 Secure Services Ltd
            </strong>{" "}
            is committed to protecting your personal data in compliance
            with the UK GDPR and Data Protection Act 2018.
          </p>
          <p>
            <strong style={{ color: "var(--fg)" }}>
              Data we collect:
            </strong>{" "}
            Name, phone number, email address, delivery/service address,
            and job details you provide when requesting a quote or
            booking. Analytics data (pages visited, time on site) if you
            consent to non-essential cookies.
          </p>
          <p>
            <strong style={{ color: "var(--fg)" }}>How we use it:</strong>{" "}
            To fulfil your service request, send job confirmations, and
            improve our service. We do not sell your data to third
            parties.
          </p>
          <p>
            <strong style={{ color: "var(--fg)" }}>Retention:</strong> Job
            records are kept for 7 years for accounting purposes. Contact
            enquiries are deleted after 2 years if no ongoing
            relationship.
          </p>
          <p>
            <strong style={{ color: "var(--fg)" }}>Payments:</strong>{" "}
            Payment processing is handled entirely by Stripe. We do not
            store card details. Stripe's privacy policy applies to payment
            data.
          </p>
          <p>
            <strong style={{ color: "var(--fg)" }}>Your rights:</strong>{" "}
            You have the right to access, correct, or delete your data.
            Email{" "}
            <a
              href="mailto:privacy@212secureservices.co.uk"
              style={{ color: "var(--accent-2)" }}
            >
              privacy@212secureservices.co.uk
            </a>{" "}
            to exercise these rights. You can also lodge a complaint with
            the ICO at ico.org.uk.
          </p>
          <p>
            <strong style={{ color: "var(--fg)" }}>Cookies:</strong> We
            use essential cookies (session management) and, with your
            consent, analytics cookies. Withdraw consent anytime by
            clearing cookies in your browser settings.
          </p>
          <p style={{ fontSize: 12, color: "var(--muted)" }}>
            Last updated: May 2026
          </p>
        </div>
      </div>
    </section>
  );
}

export function PricingSection({ onQuote }) {
  const plans = [
    {
      name: "Express Courier",
      price: "from £35",
      unit: "per job",
      tag: "Most popular",
      features: [
        "Same-day London delivery",
        "Sealed tamper-evident bag",
        "Live GPS tracking link",
        "Signature on delivery",
        "30-min pickup window",
      ],
      cta: "Get a quote",
      accent: false,
    },
    {
      name: "Emergency Locksmith",
      price: "from £65",
      unit: "call-out",
      tag: "24/7 available",
      features: [
        "On the road within minutes",
        "Non-destructive entry first",
        "Fixed price on the phone",
        "British Standard locks stocked",
        "No surge pricing, ever",
      ],
      cta: "Call now",
      accent: true,
      href: "tel:02034880664",
    },
    {
      name: "Business Account",
      price: "Custom",
      unit: "monthly",
      tag: "Best for teams",
      features: [
        "Dedicated account manager",
        "Monthly consolidated billing",
        "Priority dispatch queue",
        "API & webhook integration",
        "Volume discounts from job 1",
      ],
      cta: "Talk to sales",
      accent: false,
    },
  ];
  return (
    <section
      id="pricing"
      style={{
        padding: "120px 48px",
        borderBottom: "1px solid var(--border)",
        background: "var(--bg-2)",
      }}
      className="page-pad"
    >
      <div style={{ textAlign: "center", marginBottom: 64 }}>
        <div
          className="mono"
          style={{
            fontSize: 11,
            color: "var(--accent-2)",
            letterSpacing: 1,
            textTransform: "uppercase",
            marginBottom: 12,
          }}
        >
          Transparent pricing
        </div>
        <h2
          style={{
            fontSize: 52,
            fontWeight: 600,
            letterSpacing: -1.5,
            lineHeight: 1,
          }}
        >
          No surprises. Ever.
        </h2>
        <p
          style={{
            marginTop: 12,
            fontSize: 17,
            color: "var(--fg-2)",
            maxWidth: 480,
            margin: "12px auto 0",
          }}
        >
          Every job is quoted before we move. The price we say is the
          price you pay.
        </p>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: 20,
        }}
        className="steps-grid"
      >
        {plans.map((p, i) => (
          <div
            key={i}
            style={{
              background: p.accent
                ? "linear-gradient(180deg,var(--urgent-soft),var(--surface))"
                : "var(--surface)",
              border: `1px solid ${p.accent ? "rgba(230,63,66,0.25)" : "var(--border)"}`,
              borderRadius: 16,
              padding: 32,
              display: "flex",
              flexDirection: "column",
              gap: 20,
            }}
          >
            <div>
              <span
                className="mono"
                style={{
                  fontSize: 11,
                  color: p.accent ? "var(--urgent-2)" : "var(--accent-2)",
                  letterSpacing: 0.8,
                  textTransform: "uppercase",
                  display: "block",
                  marginBottom: 12,
                }}
              >
                {p.tag}
              </span>
              <div
                style={{ fontWeight: 600, fontSize: 22, marginBottom: 4 }}
              >
                {p.name}
              </div>
              <div
                style={{
                  fontSize: 36,
                  fontWeight: 700,
                  letterSpacing: -1,
                }}
              >
                {p.price}
              </div>
              <div
                className="mono"
                style={{
                  fontSize: 11,
                  color: "var(--muted)",
                  letterSpacing: 0.5,
                }}
              >
                {p.unit}
              </div>
            </div>
            <div style={{ flex: 1 }}>
              {p.features.map((f, j) => (
                <div
                  key={j}
                  style={{
                    display: "flex",
                    gap: 10,
                    padding: "8px 0",
                    borderTop: "1px solid var(--border)",
                    alignItems: "flex-start",
                  }}
                >
                  <span
                    style={{
                      color: p.accent
                        ? "var(--urgent-2)"
                        : "var(--accent-2)",
                      fontSize: 14,
                      marginTop: 1,
                    }}
                  >
                    ✓
                  </span>
                  <span
                    style={{
                      fontSize: 13.5,
                      color: "var(--fg-2)",
                      lineHeight: 1.4,
                    }}
                  >
                    {f}
                  </span>
                </div>
              ))}
            </div>
            {p.href ? (
              <a href={p.href}>
                <button
                  style={{
                    width: "100%",
                    padding: "13px",
                    background: "var(--urgent)",
                    color: "white",
                    borderRadius: 999,
                    fontWeight: 600,
                    fontSize: 14,
                    cursor: "pointer",
                    border: "none",
                  }}
                >
                  {p.cta}
                </button>
              </a>
            ) : (
              <button
                onClick={onQuote}
                style={{
                  width: "100%",
                  padding: "13px",
                  background: p.accent
                    ? "var(--urgent)"
                    : "var(--accent)",
                  color: "white",
                  borderRadius: 999,
                  fontWeight: 600,
                  fontSize: 14,
                  cursor: "pointer",
                  border: "none",
                }}
              >
                {p.cta}
              </button>
            )}
          </div>
        ))}
      </div>
      <p
        style={{
          textAlign: "center",
          marginTop: 28,
          fontSize: 13,
          color: "var(--muted)",
        }}
      >
        All prices exclude VAT where applicable. Congestion zone
        surcharges may apply. Ask when quoting.
      </p>
    </section>
  );
}
