import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Projects from "@/components/Projects"
import Activities from "@/components/Activities"
import Awards from "@/components/Awards";
import Footer from "@/components/Footer";

export default function Home() {
  return (
      <div className="absolute inset-0 h-max">
        <Navbar />
        <About />
        <Projects />
        <Activities />
        <Awards />
        <Footer />
      </div>
  );
}

