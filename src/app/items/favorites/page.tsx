import { getItems } from "@/app/lib/actions"
import ItemCard from "@/components/item-card"

export default async function FavouriteProducts() {
  const items = await getItems();

  return <>
    <section>
      <div className="text-2xl font-black my-10 font-heading">
        Favorite Craft Items.
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 my-8">

        {
            items.map((item) => <ItemCard key={item.id} item={item} />)
        }

      </div>
    </section>
  </>
}
