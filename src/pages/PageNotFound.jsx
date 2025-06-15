
import { Link } from "react-router-dom";
import notfound from "../assets/page_not_found.jpg";
export const PageNotFound = () => {
return (
  <div className="container">
    <img src={notfound} className="img-fluid d-block mx-auto err_img" />
    <p className="text-center">
      <Link to="/" className="btn btn-danger">
        Goto Home Page
      </Link>
    </p>
  </div>
  )
}