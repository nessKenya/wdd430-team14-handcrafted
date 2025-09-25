import ItemCard from "@/components/item-card"

export default function FavouriteProducts() {
  return <>
    <section>
      <div className="text-2xl font-black my-10">
        Favorite Craft Items.
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 my-8">

        {
          new Array(6)
            .fill('prodId')
            .map((product, i) => <ItemCard key={`${product}-${i}`} productId={`${product}`} />)
        }

      </div>
    </section>
  </>
}
