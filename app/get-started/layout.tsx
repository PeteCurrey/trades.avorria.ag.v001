import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get Started | Avorria Trades — Build Your Trade Website",
  description: "Tell us about your trade business and we'll come back to you within one business day with a tailored proposal.",
};

export default function GetStartedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
