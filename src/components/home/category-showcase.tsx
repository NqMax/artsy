import { Button } from "@/components/ui/button";
import type { category } from "@/lib/types";
import { ArrowRight } from "lucide-react";

export function CategoryShowcase({ category }: { category: category }) {
  return (
    <section className="flex flex-col gap-y-4">
      <div className="flex justify-between">
        <h3 className="text-lg font-bold">{category.name}</h3>
        <Button variant="link">
          Explore more <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
      <div className="grid grid-cols-4 gap-x-5">
        {category.pieces.map((piece, index) => (
          <div key={index}>
            <img
              src={`/${category.publicFolder}/${index + 1}.jpg`}
              alt="Featured piece"
              className="mb-3 h-96 w-full rounded-lg object-cover"
            />
            <p className="font-medium">{piece.name}</p>
            <p className="mb-1">{piece.artist}</p>
            <p className="font-medium text-sm">${piece.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
