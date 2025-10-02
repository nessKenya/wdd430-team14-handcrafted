export default function SignUp() {
  return <>
    <section className="w-11/12 lg:w-1/2 mx-auto h-11/12">
      <div className="my-12">
        LOGO
      </div>
      <form action="" className="my-12">
        <div className="form-item">
          <label htmlFor="first_name">First Name</label>
          <input id='first_name' name='first_name' type="text" required />
        </div>
        <div className="form-item">
          <label htmlFor="last_name">Last Name</label>
          <input id='last_name' name='last_name' type="text" required />
        </div>
        <div className="form-item">
          <label htmlFor="email">Email</label>
          <input id='email' name='email' type="email" required />
        </div>
        <div className="form-item">
          <label htmlFor="phone">Phone</label>
          <input id='phone' name='phone' type="tel" required />
        </div>
        <div className="form-item">
          <label htmlFor="address">Address</label>
          <textarea id='address' name='address' rows={3} required></textarea>
        </div>
        <div className="form-item">
          <label htmlFor="password">Password</label>
          <input id='password' name='password' type="password" required />
        </div>
        <div className="form-item">
          <label htmlFor="confirm_password">Confirm Password</label>
          <input id='confirm_password' name='confirm_password' type="password" required />
        </div>
        <button className="btn-alt" type="submit">Register</button>
      </form>
    </section>
  </>
}
