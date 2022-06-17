import { Link } from "react-router-dom"
const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>Sorry</h2>
            <p>That can't be found</p>
            <Link to="/">check the home page</Link>
        </div>
     );
}
 
export default NotFound;