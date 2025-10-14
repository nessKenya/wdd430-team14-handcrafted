import { StarFilled } from "@/components/rating"
import { Review } from "@/types"

export default function RatingsBar({ reviews }: { reviews?: Review[] }) {
  const grouped = groupReviewsByRating(reviews)

  return (
    <div>
      {[5, 4, 3, 2, 1].map(rating => (
        <div key={rating} className="flex items-center gap-4">
          <span>{rating}</span>
          <StarFilled className="w-8 h-8 text-violet-600" />
          <div className="w-full bg-violet-300 rounded-full h-2">
            <div
              className="bg-violet-600 h-2 rounded-full"
              style={{ width: `${grouped[rating].toFixed(0)}%` }}
            ></div>
          </div>
          <span>{grouped[rating].toFixed(0)}%</span>
        </div>
      ))}
    </div>
  )
}

function groupReviewsByRating(reviews?: Review[]) {
  const grouped: Record<number, number> = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 }

  reviews?.forEach(r => grouped[r.rating]++)

  const total = reviews?.length || 1

  const percentages = Object.fromEntries(
    Object.entries(grouped).map(([rating, count]) => [rating, (count / total) * 100])
  )
  return percentages
}
