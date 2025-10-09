import Image from "next/image";
import Link from "next/link";
import Rating from "./rating";
import { Item } from "@/types";

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
        <Favorite className="w-6 h-6 text-gray-500"/>
        <span className="ml-1 text-gray-500 text-sm italic">{item.favs} <span className="italic text-sm">favs</span></span>
      </span>
    </div>
  </div>
}

export const FavoriteFilled = (props: {className: string}) => <svg className={props.className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.45067 13.9082L11.4033 20.4395C11.6428 20.6644 11.7625 20.7769 11.9037 20.8046C11.9673 20.8171 12.0327 20.8171 12.0963 20.8046C12.2375 20.7769 12.3572 20.6644 12.5967 20.4395L19.5493 13.9082C21.5055 12.0706 21.743 9.0466 20.0978 6.92607L19.7885 6.52734C17.8203 3.99058 13.8696 4.41601 12.4867 7.31365C12.2913 7.72296 11.7087 7.72296 11.5133 7.31365C10.1304 4.41601 6.17972 3.99058 4.21154 6.52735L3.90219 6.92607C2.25695 9.0466 2.4945 12.0706 4.45067 13.9082Z" fill="currentColor" stroke="currentColor" strokeWidth="2"/>
</svg>

const Favorite = (props: {className: string}) => <svg className={props.className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.45067 13.9082L11.4033 20.4395C11.6428 20.6644 11.7625 20.7769 11.9037 20.8046C11.9673 20.8171 12.0327 20.8171 12.0963 20.8046C12.2375 20.7769 12.3572 20.6644 12.5967 20.4395L19.5493 13.9082C21.5055 12.0706 21.743 9.0466 20.0978 6.92607L19.7885 6.52734C17.8203 3.99058 13.8696 4.41601 12.4867 7.31365C12.2913 7.72296 11.7087 7.72296 11.5133 7.31365C10.1304 4.41601 6.17972 3.99058 4.21154 6.52735L3.90219 6.92607C2.25695 9.0466 2.4945 12.0706 4.45067 13.9082Z" stroke="currentColor" strokeWidth="1"/>
</svg>
