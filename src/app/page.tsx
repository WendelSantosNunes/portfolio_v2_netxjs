// Components
import { Header } from "@/app/components/Header";
import { About } from "./components/About";
import { Presentation } from "./components/Presentation";
import { Knowledge } from "./components/Knowledge";
import { Experience } from "./components/Experience";
import { Project } from "./components/Project";
import { Certificates } from "./components/Certificates";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { switchThemeDuration } from "./constants/switch-theme-duration";

export default function Home() {
  return (
    <main>
      <Header />
      <Presentation />
      <About />
      <Knowledge />
      <Experience />
      <Project />
      <Certificates />
      <Contact />
      <Footer />
    </main>
  );
}
