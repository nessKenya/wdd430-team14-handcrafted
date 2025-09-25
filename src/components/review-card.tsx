import Rating from "./rating"

export default function ReviewCard() {
  return <div className="py-8">
    <div className="flex justify-between">
      <div className="flex flex-col">
        <span className="font-bold">Jane Doe</span>
        <span className="text-sm text-gray-500 font-medium">{new Date().toLocaleDateString("en-US", {year: "numeric", month: "long", day: "numeric"})}</span>
      </div>
      <div className="flex items-center">
        <Rating rating={4}/> <span className="text-gray-700 font-semibold ml-2">4</span>
      </div>
    </div>
    <p className="text-gray-600 font-medium mt-3">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo repudiandae, unde corporis non culpa repellat perspiciatis sit quasi dicta quis ea expedita facilis, velit laborum eligendi nulla dolore officiis rem ratione accusantium. Facere officia fugiat ab, assumenda et reprehenderit obcaecati!
    </p>
  </div>
}
