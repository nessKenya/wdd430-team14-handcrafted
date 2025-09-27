"use client";

import Image from "next/image";
import Rating, { StarFilled } from "@/components/rating";
import ReviewCard from "@/components/review-card";
import { useState } from "react";

export default function ProductDetails({ params }: { params: { id: string } }) {
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [message, setMessage] = useState("");

  const handleUpdate = async () => {
    const res = await fetch(`/api/products/${params.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ price: Number(price), image }),
    });
    const data = await res.json();
    setMessage(res.ok ? "Product updated!" : data.error);
  };

  const handleArchive = async () => {
    const res = await fetch(`/api/products/${params.id}`, { method: "DELETE" });
    const data = await res.json();
    setMessage(res.ok ? "Product archived!" : data.error);
  };

  return (
    <>
      {/* Product details section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-8">
        <div className="grid grid-rows-[1fr_auto] gap-4">
          <div className="relative w-full">
            <Image src="/stool.png" alt="My photo" fill className="rounded" />
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="relative w-full h-20">
              <Image src="/stool.png" alt="My photo" fill className="rounded" />
            </div>
            <div className="relative w-full h-20">
              <Image src="/stool.png" alt="My photo" fill className="rounded" />
            </div>
            <div className="relative w-full h-20">
              <Image src="/stool.png" alt="My photo" fill className="rounded" />
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
            <small className="text-gray-500 font-medium ml-4">4 | 50 reviews</small>
          </div>
          <p className="my-4 text-gray-600">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam culpa soluta repellendus harum,
            et voluptatem sed a sit, aperiam possimus expedita dignissimos tempora! Quidem recusandae nesciunt molestias,
            eos vitae labore, commodi mollitia cumque adipisci, aspernatur ut.
          </p>
          <div className="flex flex-col">
            <label htmlFor="quantity" className="font-bold mb-2">Quantity</label>
            <select id="quantity" className="w-12 px-2 border rounded">
              {[1,2,3,4,5].map(n => <option key={n} value={n}>{n}</option>)}
            </select>
            <button className="btn mt-4">Order Item</button>
          </div>
        </div>
      </section>

      {/* Product update / archive section */}
      <section className="mt-16 p-4 border rounded bg-gray-50">
        <h2 className="font-bold text-xl mb-4">Admin: Update Product</h2>

        <div className="mb-4">
          <label className="block mb-1">New Price</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="border rounded px-2 py-1 w-40"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1">New Image URL</label>
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="border rounded px-2 py-1 w-full"
          />
        </div>

        <button onClick={handleUpdate} className="bg-blue-600 text-white px-4 py-2 rounded mr-2">
          Update
        </button>
        <button onClick={handleArchive} className="bg-red-600 text-white px-4 py-2 rounded">
          Archive
        </button>

        {message && <p className="mt-2 text-green-600">{message}</p>}
      </section>

      {/* Reviews section */}
      <section className="divide-y divide-violet-300 mt-32">
        <p className="text-2xl font-black pb-2">Reviews</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8">
          <div className="border-b pb-8 md:border-b-0">
            <p className="font-black text-xl">Share your experience</p>
            <p className="font-medium text-gray-600 my-2">
              Your unique perspective, lessons and moments of triumph can resonate deeply with others.
              Don't hesitate to contribute your story.
            </p>
            <button className="btn">Write a review</button>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl mb-2">
              <span className="font-black">78</span>
              <span className="font-extralight text-gray-500"> Reviews</span>
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
  );
}
