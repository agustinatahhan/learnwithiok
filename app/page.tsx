import Audience from "@/components/ui/Audience/Audience";
import Class from "@/components/ui/Class/Class";
import Contact from "@/components/ui/Contact/Contact";
import Divider from "@/components/ui/Divider/Divider";
import Hero from "@/components/ui/Hero/Hero";
import Metodology from "@/components/ui/Metodology/Metodology";
import Services from "@/components/ui/Services/Services";

export default function Home() {
  return (
    <>
      <Hero />
      <Divider />
      <Metodology />
      <Class />
      <Services />
      <Audience />
      <Contact />
    </>
  );
}
