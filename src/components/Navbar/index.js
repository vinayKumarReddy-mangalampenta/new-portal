import './index.css'

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-white shadow">
    <a className="navbar-brand" href="https://learning.ccbp.in/">
      <img
        src="https://res.cloudinary.com/vinayreddy/image/upload/v1636516898/logo_klutqs.png"
        alt="logo"
        className="logo"
      />
    </a>
    <button
      className="navbar-toggler toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>

    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item active">
          <a className="nav-link link" href="https://learning.ccbp.in/">
            HOME <span className="sr-only">(current)</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link link " href="https://learning.ccbp.in/">
            PROFILE
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link link" href="https://learning.ccbp.in/">
            MY DISCUSSIONS
          </a>
        </li>
        <li className="nav-item">
          <button type="button" className="btn btn-primary m-2">
            Logout
          </button>
        </li>
        <li className="nav-item d-none d-lg-block">
          <div className="profile">
            <p>V</p>
          </div>
        </li>
      </ul>
    </div>
  </nav>
)

export default Navbar
