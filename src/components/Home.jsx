import { Link } from "react-router-dom"

function Home() {
  return (
    <div className="container">
      <div className="jumbotron mt-5">
        <h1 className="display-4">Welcome to My React App!</h1>
        <p className="lead">
          This is a simple home page component styled with Bootstrap.
        </p>
        <hr className="my-4" />
        <p>
          Bootstrap is a powerful front-end framework for faster and easier web
          development.
        </p>
        <Link className="btn btn-primary btn-lg" to="/about" role="button">
          Learn more
        </Link>
      </div>
    </div>
  )
}

export default Home
