import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Record Animation",
  description: "AI Voice Input demo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen dark:bg-neutral-950" style={{ backgroundColor: "#EEF0F6" }}>
        {children}
      </body>
    </html>
  );
}
