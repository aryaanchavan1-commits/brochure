import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsStrip from "@/components/StatsStrip";
import Philosophy from "@/components/Philosophy";
import ServicesCatalogue from "@/components/ServicesCatalogue";
import MarketBenchmark from "@/components/MarketBenchmark";
import Packages from "@/components/Packages";
import Process from "@/components/Process";
import Terms from "@/components/Terms";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <StatsStrip />
        <Philosophy />
        <ServicesCatalogue />
        <MarketBenchmark />
        <Packages />
        <Process />
        <Terms />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
