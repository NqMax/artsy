import { Button } from "@/components/ui/button";
import { ArtistQuote } from "./artist-quote";

export function Hero() {
  return (
    <main className="relative h-[calc(100%-10rem)] overflow-hidden border-b">
      <section className="absolute flex w-[calc(100%-847px)] flex-col justify-center p-20">
        <h1 className="mb-5 text-5xl font-bold">Art that you will love</h1>
        <p className="mb-3 w-3/4">
          Unleash your creativity on a platform built{" "}
          <span className="font-medium">for artists, by artists</span>. Showcase
          your work, connect with a global audience, and collaborate with fellow
          creators from every corner of the world. Our platform empowers you to
          tell your story, grow your fanbase, and turn{" "}
          <span className="font-medium">passion into possibility</span>. Join a
          community where art meets innovation, and take your craft to the next
          level with tools designed to promote, sell, and protect your
          creations—all in one place.
        </p>
        <Button className="w-fit">Start browsing</Button>
        <div className="mt-20 flex w-3/4 flex-col gap-y-5">
          <ArtistQuote author="Aristotle">
            “The aim of art is to represent not the outward appearance of
            things, but their inward significance.”
          </ArtistQuote>
          <ArtistQuote author="Eric Gill" layout="right">
            “The artist is not a different kind of person, but every person is a
            different kind of artist.”
          </ArtistQuote>
        </div>
      </section>
      <div className="animate-hero absolute right-0">
        <img src="/hero.png" alt="Assortment of art pieces" />
        <img src="/hero.png" alt="Assortment of art pieces" />
      </div>
    </main>
  );
}
