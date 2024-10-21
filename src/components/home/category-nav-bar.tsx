import { Button } from "@/components/ui/button";

export function CategoryNavBar() {
  return (
    <div className="border-b">
      <nav className="container mx-auto flex h-20 items-center justify-around p-2">
        <Button>Featured Pieces</Button>
        <Button>Abstract Art</Button>
        <Button>Oil Paintings</Button>
        <Button>Digital Photography</Button>
        <Button>Wall Sculpture</Button>
        <Button>Landscapes</Button>
        <Button>Graffiti Drawings</Button>
        <Button>Fine Arts Prints</Button>
        <Button>Installations</Button>
        <Button>Large Works</Button>
      </nav>
    </div>
  );
}
