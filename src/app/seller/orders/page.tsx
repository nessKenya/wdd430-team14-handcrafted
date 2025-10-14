import { Metadata } from "next";
import OrderRecord from "./order-record";
import { getOrders } from "@/app/lib/actions";

export const metadata: Metadata = {
  title: "HandCraftedHeaven | My Orders",
};

export default async function MyItems() {
  const orders = await getOrders();

  return(
  <section className="mb-16">
      <div className="flex justify-between items-center my-10">
        <p className="text-2xl font-black font-heading">My Orders.</p>
      </div>
      <div className="overflow-x-scroll whitespace-nowrap">
        <div className="record record-header font-heading">
          <span className="min-w-60 flex-grow text-left">#OrderId - Item Name</span>
          <span className="w-50 text-center">Order Total $</span>
          <span className="min-w-80">Customer</span>
          <span className="min-w-60">Comments</span>
        </div>
        <div>
          {
            orders.map((order) => <OrderRecord key={order.order_id} order={order} />)
          }
        </div>
      </div>
    </section>
  )
}
