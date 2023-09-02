// Components
import { Header } from "@/app/components/Header";
import { About } from "./components/About";
import { Presentation } from "./components/Presentation";
import { Knowledge } from "./components/Knowledge";
import { Experience } from "./components/Experience";
import { Project } from "./components/Project";
// import { Footer } from "@/app/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Presentation />
      <About />
      <Knowledge />
      <Experience />
      <Project />
    </main>
  );
}
