import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CrushTip",
  description: "AI texting assistant for your crush",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
