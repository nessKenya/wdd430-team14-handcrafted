import ItemCard from "@/components/item-card";

export default function Home() {
  return (
    <>
        <section className="flex flex-col justify-center p-8 h-96 bg-center bg-cover bg-no-repeat bg-[url('/banner.webp')] text-white">
          <div className="bg-black/10 p-8 rounded-2xl">
            <span className="text-4xl font-black pb-8">Where Craft Meets Story <br />— Every Piece Tells One.</span>
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
        <section className="p-8">
          <div className="text-2xl font-black my-10">
            Discover featured items.
          </div>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 my-8">

            {
              new Array(8)
                .fill('product')
                .map((product, i) => <ItemCard key={`${product}-${i}`} productId={`${product}`} />)
            }

          </div>
        </section>
    </>
  );
}
