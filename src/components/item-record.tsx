import Link from "next/link";
import Rating from "./rating";
import { FavoriteFilled } from "./item-card";
import { Item } from '@/types/item';

export default function ItemRecord(props: {item: Item}) {
  return <div className="record text-center">
      <span className="flex-grow record-item text-left">{props.item.name}</span>
      <span className="w-40 text-center record-item">{props.item.price}</span>
      <span className="w-40 record-item">
        <Rating rating={props.item.rating} />
      </span>
      <span className="w-40 record-item">{props.item.favs}</span>
      <span className="w-40 record-item">
        <Link href={`/items/${props.item.id}`} className="mr-4 border-b-2 border-violet-500">
          view
        </Link>
        <Link href={`/seller/items/update/${props.item.id}`} className="border-b-2 border-violet-500">
          edit
        </Link>
      </span>
  </div>
}
