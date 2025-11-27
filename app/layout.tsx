import "./globals.css";
import { ReactNode } from "react";

const sansFont = {
  fontFamily:
    "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif"
};

export const metadata = {
  title: "Logic Gates in Proteus 8",
  description:
    "Interactive reference for AND / OR circuits and Proteus 8 simulation workflow."
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body style={sansFont}>{children}</body>
    </html>
  );
}
