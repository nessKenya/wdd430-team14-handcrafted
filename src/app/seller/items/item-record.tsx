import Link from "next/link";
import Rating from "@/components/rating";
import { Item } from '@/types';

export default function ItemRecord(props: {item: Item}) {
  return <div className="record text-center">
      <span className="min-w-60 flex-grow record-item text-left capitalize whitespace-nowrap">{props.item.name}</span>
      <span className="min-w-40 text-center record-item font-number">{props.item.price}</span>
      <span className="min-w-40 record-item">
        <Rating rating={props.item.rating} />
      </span>
      <span className="min-w-40 record-item">{props.item.favs}</span>
      <span className="min-w-40 record-item">
        <Link href={`/items/${props.item.id}`} className="mr-4 border-b-2 border-violet-500">
          view
        </Link>
        <Link href={`/seller/items/update/${props.item.id}`} className="border-b-2 border-violet-500">
          edit
        </Link>
      </span>
  </div>
}
