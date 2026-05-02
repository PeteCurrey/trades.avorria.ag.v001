import { Metadata } from "next";

export const metadata: Metadata = {
  title: "What's Included | Avorria Trades — Premium Website Features",
  description: "Every Avorria Trades website includes bespoke design, trade-specific features, local SEO, hosting, accreditation display, and TradeDesk platform integration.",
};

export default function WhatsIncludedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
