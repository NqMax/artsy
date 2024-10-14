import { cn } from "@/lib/utils";

export function ArtistQuote({
  children,
  author,
  layout = "left",
}: {
  children: React.ReactNode;
  author: string;
  layout?: "left" | "right";
}) {
  return (
    <blockquote
      className={cn(
        "flex w-4/6 flex-col rounded-lg border p-5 bg-[linear-gradient(135deg,#f5f5f5_0%,#ffffff_100%)]",
        layout === "right" && "ml-auto bg-[linear-gradient(-135deg,#f5f5f5_0%,#ffffff_100%)]",
      )}
    >
      <p className={`${layout === "right" && "text-end"}`}>{children}</p>
      <cite className={cn("font-medium", layout === "left" && "ml-auto")}>
        - {author}
      </cite>
    </blockquote>
  );
}
