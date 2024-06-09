import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Blog Preview Card",
  description: "A blog preview card component built with Tailwind CSS.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#f5d04e] flex flex-col justify-center items-center min-h-screen py-20`}>{children}</body>
    </html>
  );
}
