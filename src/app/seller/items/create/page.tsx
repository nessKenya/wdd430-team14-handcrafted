export default function CreateItem() {
  return <>
    <section className="w-11/12 lg:w-1/2 mx-auto h-11/12">
      <form action="" className="my-12">
        <div className="form-item">
          <label htmlFor="name">Name</label>
          <input id='name' name='name' type="text" required />
        </div>
        <div className="form-item">
          <label htmlFor="price">Price</label>
          <input id='price' name='price' type="number" required />
        </div>
        <div className="form-item">
          <label htmlFor="description">Description</label>
          <textarea id='description' name='description' rows={4} required></textarea>
        </div>
        <div className="form-item">
          <label htmlFor="img">Photo/Picture</label>
          <input id='img' name='img' type="file" required />
        </div>
        <button className="btn-alt" type="submit">Add Item</button>
      </form>
    </section>
  </>
}
