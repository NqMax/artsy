import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export function SearchBar() {
  return (
    <div className="flex gap-x-2">
      <Input type="text" placeholder="Search" className="w-96" />
      <Button type="submit" size="icon">
        <Search className="h-4 w-4" />
      </Button>
    </div>
  );
}
