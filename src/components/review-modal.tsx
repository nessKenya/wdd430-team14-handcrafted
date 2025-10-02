"use client"

import { useState } from "react"

export default function ReviewModal() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <button className="btn" onClick={() => setIsOpen(true)}>Write a review</button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-lg max-w-md w-full">
            <h2 className="text-2xl text-violet-900 font-semibold border-b-2 border-violet-700 pb-4">Review Item</h2>
            <form action="" className="my-6">
              <div className="form-item">
                <label htmlFor="email">Name</label>
                <input id='name' name='name' type="text" required />
              </div>
              <div className="form-item">
                <label htmlFor="rating">Rating</label>
                <input id='rating' name='rating' type="number" required />
              </div>
              <div className="form-item">
                <label htmlFor="description">Description</label>
                <textarea id='description' name='description' rows={4} required></textarea>
              </div>
              <div className="flex justify-between gap-4">
                <button onClick={() => setIsOpen(false)}  className="btn">
                  Cancel
                </button>
                <button className="btn-alt" type="submit">Post</button>
              </div>
            </form>

          </div>
        </div>
      )}
    </div>
  )
}
