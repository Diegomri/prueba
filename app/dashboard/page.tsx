import { redirect } from "next/navigation";
// This route redirects instead of rendering an instant page shell.
export const instant = false;
export default function DashboardPage() {
  redirect("/demo");
}
