import { Metadata } from "next";
import ItemCard from "@/components/item-card";
import { getItems } from "./lib/actions";

export const metadata: Metadata = {
  title: "HandCraftedHeaven | Home",
};

export default async function Home() {
  const items = await getItems();

  return (
    <>
        <section className="flex flex-col justify-center p-4 md:p-8 h-auto bg-center bg-cover bg-no-repeat bg-[url('/banner.webp')] text-white">
          <div className="bg-black/10 p-2 md:p-8 rounded-2xl">
            <span className="text-4xl font-black pb-8 font-heading">Where Craft Meets Story <br />— Every Piece Tells One.</span>
            <div className="py-4"></div>
            <span className="font-bold text-xl py-2">
              Discover a curated collection of hand-crafted artifacts that celebrate tradition,
              artistry, and innovation. Each piece is uniquely designed, carrying the story of its
              maker and the culture that inspired it. Explore, admire, and bring home a creation that
              speaks to you.
            </span>
            <div className="py-4"></div>
            <div>
              <a href="/auth/signup" className="btn-alt mt-8">SignUp</a>
            </div>
          </div>
        </section>
        <section className="p-1 md:p-8">
          <div className="text-2xl font-black my-10 font-heading">
            Discover featured items.
          </div>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 my-8">

            {
                items.map((item, i) => <ItemCard key={item.id} item={item} />)
            }

          </div>
        </section>
    </>
  );
}
