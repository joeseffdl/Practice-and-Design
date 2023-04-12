import Image from "next/image";
import { LoginComponent } from "./";

export default function Home() {
  return (
    <main className="min-h-screen w-screen grid place-content-center">
      <LoginComponent />
    </main>
  );
}
