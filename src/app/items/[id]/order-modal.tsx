"use client"

import { makeOrder } from "@/app/lib/actions"
import { useState, useTransition } from "react"

export default function OrderModal(props: {itemId: number}) {
  const [isOpen, setIsOpen] = useState(false)

  const [isPending, startTransition] = useTransition();

    async function handleSubmit(formData: FormData) {
      startTransition(async () => {
        try {
          await makeOrder(formData);
          setIsOpen(false);
        } catch (err) {
          alert("Failed to make order");
        }
      });
    }

  return (
    <div className="mt-4">
      <button className="btn" onClick={() => setIsOpen(true)}>Order Item</button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-lg max-w-md w-full">
            <h2 className="text-2xl text-violet-900 font-semibold border-b-2 border-violet-700 pb-4">Order Item</h2>
            <form action={handleSubmit} className="my-2">
              <input type="hidden" name="itemId" value={props.itemId} />
              <div className="form-item">
                <label htmlFor="customerName">Name</label>
                <input type="text" name="customerName" placeholder="Your name" required />
              </div>
              <div className="form-item">
                <label htmlFor="phoneNumber">Phone Number</label>
                <input type="tel" name="phoneNumber" placeholder="Phone number" required />
              </div>
              <div className="form-item">
                <label htmlFor="address">Address</label>
                <input type="text" name="address" placeholder="Delivery address" required />
              </div>
              <div className="form-item">
                <label htmlFor="address">Quantity</label>
                <input type="number" name="quantity" min="1" defaultValue="1" required />
              </div>
              <div className="form-item">
                <label htmlFor="description">Comment</label>
                <textarea name="comment" placeholder="Extra instructions (optional)" required rows={2} />
              </div>
              <div className="flex justify-between gap-4">
                <button onClick={() => setIsOpen(false)}  className="btn">
                  Cancel
                </button>
                <button className="btn-alt" type="submit" disabled={isPending}>
                  {isPending ? "Placing order..." : "Order"}
                </button>
              </div>
            </form>

          </div>
        </div>
      )}
    </div>
  )
}
