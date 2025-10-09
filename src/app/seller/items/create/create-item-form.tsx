"use client"

import { useState } from "react";
import Image from "next/image";
import { createItem } from "@/app/lib/actions";

export default function CreateItemForm() {
  const [imgPath, setImgPath] = useState("");

  async function handleUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("image", file);
    console.log('image grabbed!', formData)

    const res = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    setImgPath(data.publicUrl);
  }

  return  <form action={createItem} className="my-12">
    <div className="form-item">
      <label htmlFor="name">Name</label>
      <input id='name' name='name' type="text" required />
    </div>
    <div className="form-item">
      <label htmlFor="price">Price</label>
      <input id='price' name='price' type="number" step="0.01" required />
    </div>
    <div className="form-item">
      <label htmlFor="description">Description</label>
      <textarea id='description' name='description' rows={4} required></textarea>
    </div>
    <div className="form-item">
      <label htmlFor="img">Photo/Picture</label>
      <input type="file" id="image" onChange={handleUpload} />
      {imgPath && (
        <>
          <input type="hidden" name="img" value={imgPath} />
          <div className="relative w-24 h-24 my-4 ml-4">
            <Image src={imgPath} alt="preview" fill className="rounded" />
          </div>
        </>
      )}
    </div>
    <button className="btn-alt" type="submit">Add Item</button>
  </form>
}
