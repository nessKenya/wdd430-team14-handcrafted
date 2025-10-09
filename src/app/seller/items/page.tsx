import { FavoriteFilled } from "@/components/item-card";
import ItemRecord from "./item-record";
import { StarFilled } from "@/components/rating";
import Link from "next/link";
import { getSellerItems } from "@/app/lib/actions";

export default async function MyItems() {
  const sellerItems = await getSellerItems();

  return(
  <section className="mb-16">
      <div className="flex justify-between items-center my-10">
        <p className="text-2xl font-black font-heading">My Items.</p>
        <Link href="/seller/items/create" className="btn-alt text-center">Add New Item</Link>
      </div>
      <div className="record record-header text-center font-heading">
        <span className="flex-grow text-left">Name</span>
        <span className="w-40">Price $</span>
        <span className="w-40 flex justify-center items-center">
          Rating <StarFilled className="w-6 h-6 mx-1"/>
        </span>
        <span className="w-40 flex justify-center items-center">
          Favs <FavoriteFilled className="w-6 h-6 mx-1"/>
        </span>
        <span className="w-40 ">Actions</span>
      </div>
      <div>
        {
          sellerItems.map((item) => <ItemRecord key={item.id} item={item} />)
        }
      </div>
    </section>
  )
}
