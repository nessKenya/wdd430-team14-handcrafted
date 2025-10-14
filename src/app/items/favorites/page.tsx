import { Metadata } from "next";
import FavoriteListing from "./favorite-listing";

export const metadata: Metadata = {
  title: "HandCraftedHeaven | Favorites",
};

export default async function FavouriteProducts() {
  return <>
    <section>
      <div className="text-2xl font-black my-10 font-heading">
        Favorite Craft Items.
      </div>
      <FavoriteListing />
    </section>
  </>
}
