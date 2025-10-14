import { Metadata } from "next";
import { getItem } from "@/app/lib/actions";
import UpdateItemForm from "./update-item-form";

export const metadata: Metadata = {
  title: "HandCraftedHeaven | Update Item",
};

export default async function UpdateItemPage({ params }: { params: { id: string } }) {
  const { id } = await params;
  const item = await getItem(Number(id))

  if (!item) {
    return <p className="text-center mt-10 text-rose-500">Item not found.</p>;
  }

  return <>
    <section className="w-11/12 lg:w-1/2 mx-auto h-11/12">
      <UpdateItemForm item={item} />
    </section>
  </>
}
