import ItemCard from "@/components/item-card";

export default function Products() {
  return <>
    <section>
      <div className="text-2xl font-black my-10">
        Craft Collection.
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 my-8">

        {
          new Array(24)
            .fill('prod')
            .map((product, i) => <ItemCard key={`${product}-${i}`} productId={`${product}`} />)
        }

      </div>
    </section>
  </>
}
