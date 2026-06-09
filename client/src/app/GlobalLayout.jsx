"use client";

import { useState } from "react";
import { CookieBanner, WhatsAppBtn, QuoteModal } from "../components/UI";

export function GlobalLayout({ children }) {
  // To handle the global quote modal state if needed via context, or just render UI.
  // Actually, since QuoteModal is used by Home, we can export a Context or just handle it.

  return (
    <>
      {children}
      <CookieBanner />
      <WhatsAppBtn />
    </>
  );
}
