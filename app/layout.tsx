import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./styles/globals.scss";
import { ThemeProvider } from "./components/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Brian's Personal Website",
  description: "Built with react, typescript, and next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>
          <ThemeProvider>{children}</ThemeProvider>
        </main>
      </body>
    </html>
  );
}
