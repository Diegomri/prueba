import type { Metadata } from "next";
import { Dashboard } from "../components/dashboard";
export const metadata: Metadata = {
  title: "Dashboard demo",
  robots: { index: false, follow: true },
};
export default function DemoPage() {
  return (
    <main id="main" className="demo-page">
      <Dashboard />
    </main>
  );
}
