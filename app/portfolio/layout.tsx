import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio | Avorria Trades — UK Trade Websites",
  description: "A selection of premium websites built for UK tradespeople — electricians, plumbers, gas engineers, builders, and more. See what we deliver.",
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
