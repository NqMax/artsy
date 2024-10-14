import { Header } from "@/components/header/header";
import { Hero } from "@/components/home/hero";
import { CategoryNavBar } from "@/components/home/category-nav-bar";

export default function Home() {
  return (
    <div className="h-screen">
      <Header />
      <Hero />
      <CategoryNavBar />
    </div>
  );
}
