// import About from "@/components/ui/About/About";
import Audience from "@/components/ui/Audience/Audience";
import Contact from "@/components/ui/Contact/Contact";
import Hero from "@/components/ui/Hero/Hero";
import Metodology from "@/components/ui/Metodology/Metodology";
import Services from "@/components/ui/Services/Services";
import Testimonials from "@/components/ui/Testimonials/Testimonials";
import VideoSection from "@/components/ui/Testimonials/TestimonialsVideo";

export default function Home() {
  return (
    <>
      <Hero />
      {/* <Divider /> */}
      <Metodology />
      {/* <Class /> */}
      <Services />
      <Audience />
      <Testimonials />
      <VideoSection />
      {/* <About /> */}
      <Contact />
    </>
  );
}
