import { Header } from "@/components/header/header";
import { Hero } from "@/components/home/hero";
import { CategoryNavBar } from "@/components/home/category-nav-bar";
import { Showcase } from "@/components/home/showcase";
import { Footer } from "@/components/footer/footer";

export default function Home() {
  return (
    <>
      <div className="h-screen">
        <Header />
        <Hero />
        <CategoryNavBar />
      </div>
      <Showcase />
      <Footer />
    </>
  );
}
