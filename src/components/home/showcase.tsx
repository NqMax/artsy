import { CategoryShowcase } from "@/components/home/category-showcase";
import { artInventory } from "@/lib/data";

export function Showcase() {
  return (
    <div className="container mx-auto flex flex-col gap-y-10 py-5">
      {artInventory.map((category) => (
        <CategoryShowcase key={category.name} category={category} />
      ))}
    </div>
  );
}
