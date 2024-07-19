import { Inter } from "next/font/google";
import { Ubuntu } from "next/font/google";
import "./globals.css";

const ubuntu = Ubuntu({
  weight: ['400','500','700'],
  subsets: ['latin'],
})

export const metadata = {
  title: "Multi-step Form",
  description: "Advanced challenge from frontendmentor.io",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={ubuntu.className}>{children}</body>
    </html>
  );
}
