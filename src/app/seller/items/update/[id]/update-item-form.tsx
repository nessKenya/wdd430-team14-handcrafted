"use client";

import { useState } from "react";
import { updateItem } from "@/app/lib/actions";
import { Item } from "@/types";

export default function UpdateItemForm({ item }: { item?: Item }) {
const [imgPath, setImgPath] = useState(item?.img_url || "");

  async function handleUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("image", file);

    const res = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    setImgPath(data.publicUrl);
  }

  return (
    <form action={updateItem} className="my-12">
      <input type="hidden" name="id" value={item?.id || ""} />
      <input type="hidden" name="img_url" value={imgPath} />

      <div className="form-item">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          defaultValue={item?.name}
          required
        />
      </div>

      <div className="form-item">
        <label htmlFor="price">Price</label>
        <input
          id="price"
          name="price"
          type="number"
          step="0.01"
          min="0"
          defaultValue={item?.price}
          required
        />
      </div>

      <div className="form-item">
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          rows={4}
          defaultValue={item?.description || ""}
          required
        ></textarea>
      </div>

      <div className="form-item">
        <label htmlFor="img">Photo/Picture</label>
        <input id="img" name="img" type="file" onChange={handleUpload} />
        {imgPath && (
          <img
            src={imgPath}
            alt="preview"
            className="w-24 h-24 mt-2 rounded border"
          />
        )}
      </div>

      <button className="btn-alt" type="submit">
        Update Item
      </button>
    </form>
  )
}
