import { Hero } from "@/components/sections/Hero";
import { ShowcaseSlider } from "@/components/sections/ShowcaseSlider";
import { Services } from "@/components/sections/Services";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { Skills } from "@/components/sections/Skills";
import { Process } from "@/components/sections/Process";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <ShowcaseSlider />
   
      <Services />
      <FeaturedProjects />
      {/* <Skills /> */}
      {/* <Process /> */}
      <Testimonials />
      <Contact />
    </>
  );
}
