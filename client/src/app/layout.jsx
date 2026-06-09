import "../styles/global.css";
import { GlobalLayout } from "./GlobalLayout";

export const metadata = {
  title: "212 Secure Services — London Courier & Locksmith",
  description:
    "Two trades, one dispatch room. London's secure courier and emergency locksmith — vetted operators, sealed-bag chain-of-custody, 24/7.",
  viewport: "width=device-width, initial-scale=1.0, maximum-scale=5.0",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Geist:wght@300;400;450;500;600;700&family=Geist+Mono:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <GlobalLayout>{children}</GlobalLayout>
      </body>
    </html>
  );
}
