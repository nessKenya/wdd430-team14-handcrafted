import Image from "next/image";

export default function Home() {
  return (
    <>
      <header>
        <nav className="flex justify-between items-center p-8">
          <div>
            <span className="text-xl">HandCrafted Haven</span>
            <a href="#" className="mx-16">Featured</a>
            <a href="#">Favourites</a>
          </div>
          {/*<span>LOGO</span>*/}
          <a href="#" className="mx-16">Login</a>
        </nav>
      </header>
      <main>
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
          </div>
        </section>
        <section>
          <div className="grid grid-cols-4 gap-4 p-4">
            <div className="h-40 bg-violet-200 p-4 rounded">Product 1</div>
            <div className="bg-violet-200 p-4 rounded">Product 2</div>
            <div className="bg-violet-200 p-4 rounded">Product 3</div>
            <div className="bg-violet-200 p-4 rounded">Product 4</div>
          </div>
        </section>
      </main>
      <footer className="bg-violet-500 text-white p-8">
        <p className="font-bold italic">Handcrafted Haven 2025</p>
      </footer>
    </>
  );
}
