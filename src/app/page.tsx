import { redirect } from "next/navigation";

export default function Home() {
  const authenticated = false;

  if (!authenticated) {
    redirect("/authent/login");
  }
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      Hello
    </div>
  );
}
