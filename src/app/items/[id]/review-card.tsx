import { Review } from "@/types"
import Rating from "@/components/rating"

export default function ReviewCard(props: { review: Review }) {
  const { review } = props;

  return <div className="py-8">
    <div className="flex justify-between">
      <div className="flex flex-col">
        <span className="font-bold">{review.reviewer_name}</span>
        <span className="text-sm text-gray-500 font-medium">{new Date(review.created_at).toLocaleDateString("en-US", {year: "numeric", month: "long", day: "numeric"})}</span>
      </div>
      <div className="flex items-center">
        <Rating rating={review.rating} /> <span className="text-gray-700 font-semibold ml-2">{review.rating}</span>
      </div>
    </div>
    <p className="text-gray-600 font-medium mt-3">{review.review_text}</p>
  </div>
}
