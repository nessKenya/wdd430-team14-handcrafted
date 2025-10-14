import { SellerOrder } from '@/types';

export default function OrderRecord(props: {order: SellerOrder}) {
  const { order } = props;
  return <div className="record">
      <span className="min-w-60 flex-grow record-item-order capitalize">
        #{order.order_id} - {order.item_name}
        <span className="text-sm font-light block mt-2">
           { new Date(order.created_at).toLocaleDateString("en-US", {year: "numeric", month: "long", day: "numeric"}) }
        </span>
      </span>
      <span className="w-50 record-item-order text-right font-number flex items-center justify-center">
        ${order.item_price} x {order.quantity} = ${ (order.item_price * order.quantity).toFixed(2) }
      </span>
      <span className="min-w-80 max-w-80 record-item-order overflow-y-auto whitespace-normal">
        {order.customer_name} ({order.phone_number})
        <span className="block italic mt-2 font-light">{order.address}</span>
      </span>
      <span className="min-w-60 max-w-60 record-item-order whitespace-normal">{order.comment ?? 'no comment'}</span>
  </div>
}
