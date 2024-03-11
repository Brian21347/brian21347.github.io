import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Activities from "@/components/Activities"
import Awards from "@/components/Awards";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <div className="absolute inset-0 h-max">
        <Navbar />
        <About />
        <Activities />
        <Awards />
        <Footer />
      </div>
    </main>
  );
}
