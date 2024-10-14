import { Button } from "@/components/ui/button";
import { HeaderNavigationMenu } from "@/components/header/header-nav-menu";
import { ShoppingCart, Heart } from "lucide-react";
import { SearchBar } from "@/components/header/search-bar";

export function Header() {
  return (
    <header className="flex h-20 items-center justify-between border-b px-20 py-5">
      <div className="text-xl font-bold">Artsy 🎨</div>
      <SearchBar />
      <HeaderNavigationMenu />
      <div className="flex items-center">
        <Button variant="link">Sign In</Button>
        <div> | </div>
        <Button variant="link">Join</Button>
        <Heart className="mx-3 h-5 w-5" />
        <ShoppingCart className="h-5 w-5" />
      </div>
    </header>
  );
}
