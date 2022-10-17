import "./Navbar.css"
function Navbar(){
    return(
<>
<nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          {/* <img  className="logo" src="/images/NavLogo.png"/> */}
        </li>
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/about">About us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="/contactUs">
            Contact us
          </a>
        </li>
      </ul>
      <form className="d-flex" role="search">
      <a className="nav-link mx-4 my-2" aria-current="page" href="/registration">
            Registration
          </a>
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

</>

    );
}

export default Navbar;

