import { Link } from "react-router-dom"

function Footer() {
  return (
    <footer className="bg-dark text-white fixed-bottom p-2 text-center">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-3">
            <h5>About Us</h5>
            <p>
              We are committed to providing the best services and products to our customers.
            </p>
          </div>
          <div className="col-md-4 mb-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-white" style={{textDecoration: "none"}}>Home</Link></li>
              <li><Link to="/about" className="text-white" style={{textDecoration: "none"}}>About</Link></li>
              <li><Link to="/contact" className="text-white" style={{textDecoration: "none"}}>Contact</Link></li>
              <li><Link to="/github" className="text-white" style={{textDecoration: "none"}}>Github</Link></li>
            </ul>
          </div>
          <div className="col-md-4 mb-3">
            <h5>Follow Us</h5>
            <a href="#" className="text-white me-3">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-white me-3">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-white">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="text-center p-3">
        &copy; {new Date().getFullYear()} Your Company. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
