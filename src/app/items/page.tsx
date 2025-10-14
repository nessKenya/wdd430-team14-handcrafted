import { Metadata } from "next";
import ItemCard from "@/components/item-card";
import { getItems } from "../lib/actions";

export const metadata: Metadata = {
  title: "HandCraftedHeaven | All Items",
};

export default async function Items() {
  const items = await getItems();

  return <>
    <section>
      <div className="text-2xl font-black my-10 font-heading">
        Craft Collection.
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 my-8">
        { items.map((item) => <ItemCard key={`item-${item.id}`} item={item} />)}
      </div>
    </section>
  </>
}
