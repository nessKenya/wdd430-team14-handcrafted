import { FavoriteFilled } from "@/components/item-card";
import ItemRecord from "@/components/item-record";
import { StarFilled } from "@/components/rating";
import Link from "next/link";

const items = [
  {
    "id": 1,
    "name": "Maasai Beaded Necklace",
    "price": 35,
    "rating": 4.7,
    "favs": 152,
    "img": "/images/artifacts/maasai-necklace.jpg",
    "description": "A traditional handmade beaded necklace crafted by Maasai artisans."
  },
  {
    "id": 2,
    "name": "Hand-Carved Wooden Mask",
    "price": 80,
    "rating": 4.9,
    "favs": 230,
    "img": "/images/artifacts/wooden-mask.jpg",
    "description": "An intricately carved mask representing tribal heritage and symbolism."
  },
  {
    "id": 3,
    "name": "Ceramic Pottery Vase",
    "price": 55,
    "rating": 4.5,
    "favs": 98,
    "img": "/images/artifacts/pottery-vase.jpg",
    "description": "A hand-molded pottery vase with natural clay finish and patterns."
  },
  {
    "id": 4,
    "name": "Traditional Woven Basket",
    "price": 42,
    "rating": 4.6,
    "favs": 120,
    "img": "/images/artifacts/woven-basket.jpg",
    "description": "A durable handwoven basket made with natural sisal and palm fibers."
  },
  {
    "id": 5,
    "name": "African Drum (Djembe)",
    "price": 120,
    "rating": 4.8,
    "favs": 275,
    "img": "/images/artifacts/djembe-drum.jpg",
    "description": "A traditional djembe drum used in ceremonies and musical gatherings."
  },
  {
    "id": 6,
    "name": "Bronze Tribal Sculpture",
    "price": 210,
    "rating": 4.9,
    "favs": 310,
    "img": "/images/artifacts/bronze-sculpture.jpg",
    "description": "A detailed bronze casting of a tribal figure, symbolizing strength."
  },
  {
    "id": 7,
    "name": "Handwoven Wool Rug",
    "price": 95,
    "rating": 4.4,
    "favs": 87,
    "img": "/images/artifacts/wool-rug.jpg",
    "description": "A soft and colorful wool rug handwoven using traditional patterns."
  }
]

export default function MyItems() {
  return(
  <section className="mb-16">
      <div className="flex justify-between items-center my-10">
        <p className="text-2xl font-black">My Items.</p>
        <Link href="/seller/items/create" className="btn-alt text-center">Add New Item</Link>
      </div>
      <div className="record record-header text-center">
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
          items.map((item) => <ItemRecord key={item.id} item={item} />)
        }
      </div>
    </section>
  )
}
