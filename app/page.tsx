import Navbar from '@/components/navbar';
import Hero from '@/components/hero';
import About from '@/components/about';
import Services from '@/components/services';
import Contest from '@/components/contest';
import Trainers from '@/components/trainers';
import Pricing from '@/components/pricing';
import Gallery from '@/components/gallery';
import Contact from '@/components/contact';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Contest />
      <Pricing />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}
