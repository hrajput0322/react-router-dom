import { NavLink } from 'react-router-dom'
function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark" aria-label="Second navbar example">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">Logo</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample02" aria-controls="navbarsExample02" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarsExample02">
        <ul className="navbar-nav me-auto">
          <li className="nav-item">
            <NavLink className={({isActive}) => 
              `nav-link ${isActive?'active':''}`
              } aria-current="page" to="/">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className={({isActive})=>
            `nav-link ${isActive?'active':''}`
            } to="/about">About</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className={({isActive})=>
            `nav-link ${isActive?'active':''}`
            } to="/contact">Contact</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className={({isActive})=>
            `nav-link ${isActive?'active':''}`
            } to="/github">Github</NavLink>
          </li>
        </ul>
        <form role="search">
          <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
        </form>
      </div>
    </div>
  </nav>
    </div>
  )
}

export default Header
