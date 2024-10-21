import { Button } from "@/components/ui/button";
import { Twitter, Instagram, Facebook, Youtube } from "lucide-react";
import { footerData } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t py-12">
      <div className="container mx-auto flex gap-x-20">
        <div className="flex flex-col justify-between text-sm">
          <p className="font-bold">Artsy</p>
          <div className="flex gap-x-3">
            <Twitter className="h-5 w-5" />
            <Instagram className="h-5 w-5" />
            <Facebook className="h-5 w-5" />
            <Youtube className="h-5 w-5" />
          </div>
        </div>
        {footerData.map((section) => (
          <div
            key={section.title}
            className="flex flex-col text-sm"
          >
            <p className="mb-2 font-medium">
              {section.title}
            </p>
            {section.links.map((link) => (
              <Button
                key={link}
                variant="link"
                className="w-fit p-0 font-normal text-muted-foreground"
              >
                {link}
              </Button>
            ))}
          </div>
        ))}
      </div>
    </footer>
  );
}
