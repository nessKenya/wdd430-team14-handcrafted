export default function Login() {
  return <>
    <section className="w-11/12 lg:w-1/2 mx-auto h-11/12">
      <div className="my-12">
        LOGO
      </div>
      <form action="" className="my-12">
        <div className="form-item">
          <label htmlFor="email">Email</label>
          <input id='email' name='email' type="email" required />
        </div>
        <div className="form-item">
          <label htmlFor="password">Password</label>
          <input id='password' name='password' type="password" required />
        </div>
        <button className="btn-alt" type="submit">Login</button>
      </form>
    </section>
  </>
}
