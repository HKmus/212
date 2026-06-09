"use client";

import { useState } from "react";
import Home from "../views/Home/Home";
import { QuoteModal } from "../components/UI";

export default function Page() {
  const [quoteOpen, setQuoteOpen] = useState(false);

  return (
    <>
      <Home onQuote={() => setQuoteOpen(true)} />
      {quoteOpen && <QuoteModal onClose={() => setQuoteOpen(false)} />}
    </>
  );
}
