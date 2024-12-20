
import "./Nav.css"
import { Link } from "react-router-dom"



export default function Nav(){
    return(
        <>
        <nav className="navbar navbar-expand-lg navbar">
  <div className="container-fluid">
    <Link to="/">
    <img src={require("../asstes/images/logo.png")} alt="dcs" width={200} />
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <Link className="nav-link hav" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link hav" to="/series">series</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link hav" to="/movies">movies</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link hav" to="/login">login</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link hav" href="#here">contact</a>
        </li>
      </ul>

    </div>

  </div>
</nav>
        </>
    )
}