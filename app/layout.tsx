import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  weight: "400",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "EASY IELTS",
  description: "Cùng EASY IELTS chứng kiến sự thay đổi rõ rệt điểm số của bạn!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
