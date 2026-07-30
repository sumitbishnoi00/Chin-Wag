import Benefit from "@/components/home/Benefit";
import Conversations from "@/components/home/Conversations";
import Demo from "@/components/home/Demo";
import Faq from "@/components/home/Faq";
import Hero from "@/components/home/Hero";
import Reverse from "@/components/home/Reverse";
import Roadmap from "@/components/home/Roadmap";


export default function Home() {
  return (
    <>
      <Hero />
      <Benefit />
      <Reverse />
      <Demo />
      <div className=" bg-img">
        <Roadmap />
        <Conversations />
        <Faq />
      </div>
    </>
  );
}
