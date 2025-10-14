import { Metadata } from "next";
import Image from "next/image";
import Rating, { StarFilled } from "@/components/rating";
import ReviewCard from "./review-card";
import ReviewModal from "./review-modal-form";
import { getItem } from "@/app/lib/actions";
import RatingsBar from "./ratings-bar";
import OrderModal from "./order-modal";

export const metadata: Metadata = {
  title: "HandCraftedHeaven | Item",
};

export default async function ProductDetails({ params }: { params: { id: string } }) {
  const { id } = await params;
  const item = await getItem(Number(id))

  if (!item) {
    return <p className="text-center mt-10 text-rose-500">Item not found.</p>;
  }
  return <>
    <section className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-8">
      <div className="grid grid-rows-[1fr_auto] gap-4">
        <div className="relative w-full h-72">
          <Image
            src={`${item.img_url}`}
            alt="My photo"
            fill
            className="rounded"
          />
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div className="relative w-full h-20">
            <Image
              src={`${item.img_url}`}
              alt="My photo"
              fill
              className="rounded"
            />
          </div>
          <div className="relative w-full h-20">
            <Image
              src={`${item.img_url}`}
              alt="My photo"
              fill
              className="rounded"
            />
          </div>
          <div className="relative w-full h-20">
            <Image
              src={`${item.img_url}`}
              alt="My photo"
              fill
              className="rounded"
            />
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-between items-end">
          <p className="capitalize my-2 font-semibold text-xl md:text-2xl lg:text-3xl font-heading">{item.name}</p>
          <span className="font-black font-number">${item.price}</span>
        </div>
        <div className="flex mt-2">
          <Rating rating={item.rating} />
          <small className="text-gray-500 font-medium ml-4">{item.rating} | {item.reviews?.length ?? 0}review(s)</small>
        </div>
        <p className="my-4 text-gray-600">{item.description}</p>
        <div className="flex flex-col">
          <label htmlFor="quantiy" className="font-bold mb-2">Quantity</label>
          <select name="quantity" id="quantity" className="w-12 px-2 border-1 border-gray-300 rounded">
            <option value="1">1</option>
            <option value="1">2</option>
            <option value="1">3</option>
            <option value="1">4</option>
            <option value="1">5</option>
          </select>
          <OrderModal itemId={ item.id } />
        </div>
      </div>
    </section>

    <section className="divide-y divide-violet-300 mt-32">
      <p className="text-2xl font-black pb-2 font-heading">Reviews</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8">
        <div className="border-b-1 border-violet-300 pb-8 md:border-b-0">
          <p className="font-black text-xl">Share your experience</p>
          <p className="font-medium text-gray-600 my-2">
            Your unique perspective, lessons and moments of triumph can resonate deeply with others. Don&apos;t hesitate
            to contribute your story.
          </p>
          <ReviewModal itemId={item.id} />
        </div>
        <div className="flex flex-col items-center">
          <span className="text-2xl mb-2">
            <span className="font-black">{item.reviews?.length}</span><span className="text-gray-500"> Reviews</span>
          </span>
          <Rating rating={item.rating} />
        </div>
        <RatingsBar reviews={item.reviews} />
      </div>

      {
        item?.reviews && item.reviews.map(review => <ReviewCard key={review.id} review={review} />)
      }

    </section>
  </>
}
