"use client"

import Image from "next/image";
import Link from "next/link";
import Rating from "./rating";
import { Item } from "@/types";
import FavoriteButton from "./favorite-button";

export default function ItemCard(props: {item: Item}) {
  const { item } = props;
  return <div>
    <Link href={`/items/${item.id}`}>
      <div className="p-card">
        <div className="relative w-full h-64">
          <Image
            src={item.img_url ? item.img_url: "/stool.png"}
            alt="My photo"
            fill
            className="rounded"
          />
        </div>
        <p className="font-extrabold mt-4 capitalize font-heading">{item.name}</p>
        <div className="flex flex-row justify-between">
          <small className="italic">by John Doe.</small>
          <Rating rating={item.rating} />
        </div>
      </div>
    </Link>
    <div className="flex justify-between mt-4">
      <span className="font-black mt-1 font-number">${item.price}</span>
      <span className="flex justify-between items-center cursor-pointer mr-1">
        <FavoriteButton itemId={item.id} favs={item.favs} />
      </span>
    </div>
  </div>
}
