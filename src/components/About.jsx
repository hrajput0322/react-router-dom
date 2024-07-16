import { Link } from "react-router-dom"

function About() {
  return (
    <div className="container">
      <div className="mt-5">
        <h1 className="display-4">About Us</h1>
        <p className="lead">
          Welcome to the About page of our React application. We aim to provide high-quality content and services.
        </p>
        <hr className="my-4" />
        <p>
          Our team is dedicated to creating the best user experience. We hope you find our application useful and enjoyable.
        </p>
        <p>
          <strong>Our Mission:</strong> To deliver excellence in every project and service we provide.
        </p>
        <p>
          <strong>Contact Us:</strong> Feel free to reach out with any questions or feedback. We are here to help you.
        </p>
        <Link className="btn btn-primary btn-lg" to="/contact" role="button">
          Contact Us
        </Link>
      </div>
    </div>
  )
}

export default About
