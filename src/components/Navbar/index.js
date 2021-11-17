const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand" href="https://learning.ccbp.in/">
      Navbar
    </a>
    <button
      className="navbar-toggler"
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
      <ul className="navbar-nav">
        <li className="nav-item active">
          <a className="nav-link" href="https://learning.ccbp.in/">
            Home <span className="sr-only">(current)</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="https://learning.ccbp.in/">
            Features
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="https://learning.ccbp.in/">
            Pricing
          </a>
        </li>
      </ul>
    </div>
  </nav>
)

export default Navbar