import "./globals.css";
import { Inter } from "next/font/google";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Analytics } from "@vercel/analytics/react";
import logo from "../public/logo.jpg";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Boda Michelle y Salvador",
  description:
    "Página de confirmación de asistencia a la boda de Michelle y Salvador",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta property="og:image" content={logo} />
      <link rel="icon" href="/icon.png" sizes="any" />
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
