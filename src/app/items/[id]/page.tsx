import Image from "next/image";
import Rating, { StarFilled } from "@/components/rating";
import ReviewCard from "@/components/review-card";
import ReviewModal from "@/components/review-modal";

export default function ProductDetails() {
  return <>
    <section className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-8">
      <div className="grid grid-rows-[1fr_auto] gap-4">
        <div className="relative w-full">
          <Image
            src="/stool.png"
            alt="My photo"
            fill
            className="rounded"
          />
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div className="relative w-full h-20">
            <Image
              src="/stool.png"
              alt="My photo"
              fill
              className="rounded"
            />
          </div>
          <div className="relative w-full h-20">
            <Image
              src="/stool.png"
              alt="My photo"
              fill
              className="rounded"
            />
          </div>
          <div className="relative w-full h-20">
            <Image
              src="/stool.png"
              alt="My photo"
              fill
              className="rounded"
            />
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-between items-end">
          <p className="font-light text-xl md:text-2xl lg:text-3xl">Item Name XYZ</p>
          <span className="font-black">$42.99</span>
        </div>
        <div className="flex mt-2">
          <Rating rating={4} />
          <small className="text-gray-500 font-medium ml-4">4 | 50reviews</small>
        </div>
        <p className="my-4 text-gray-600">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam culpa soluta repellendus harum,
          et voluptatem sed a sit, aperiam possimus expedita dignissimos tempora! Quidem recusandae nesciunt molestias,
          eos vitae labore, commodi mollitia cumque adipisci, aspernatur ut. Accusamus neque expedita, perferendis odio
          repellat impedit, suscipit atque eum natus ex enim placeat.
        </p>
        <div className="flex flex-col">
          <label htmlFor="quantiy" className="font-bold mb-2">Quantity</label>
          <select name="quantity" id="quantity" className="w-12 px-2 border-1 border-gray-300 rounded">
            <option value="1">1</option>
            <option value="1">2</option>
            <option value="1">3</option>
            <option value="1">4</option>
            <option value="1">5</option>
          </select>
          <button className="btn">Order Item</button>
        </div>
      </div>
    </section>

    <section className="divide-y divide-violet-300 mt-32">
      <p className="text-2xl font-black pb-2">Reviews</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8">
        <div className="border-b-1 border-violet-300 pb-8 md:border-b-0">
          <p className="font-black text-xl">Share your experience</p>
          <p className="font-medium text-gray-600 my-2">
            Your unique perspective, lessons and moments of triumph can resonate deeply with others. Don't hesitate
            to contribute your story.
          </p>
          <ReviewModal/>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-2xl mb-2">
            <span className="font-black">78</span><span className="font-extralight text-gray-500"> Reviews</span>
          </span>
          <Rating rating={3} />
        </div>
        <div>
          {[5,4,3,2,1].map(item =>
          <div key={item} className="flex items-center gap-4">
              <span>{item}</span>
            <StarFilled className="w-8 h-8 text-violet-600"/>
            <div className="w-full bg-violet-300 rounded-full h-2">
              <div className="bg-violet-600 h-2 rounded-full w-1/2"></div>
            </div>
            <span>75%</span>
          </div>
          )}
        </div>
      </div>
      <ReviewCard />
      <ReviewCard />
      <ReviewCard />
    </section>
  </>
}
