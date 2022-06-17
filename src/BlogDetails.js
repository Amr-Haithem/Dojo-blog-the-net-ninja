import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
    //we use useParams() to get the variable link that we already acknowledged in the route in App.js
    const {id}=useParams();
    const {data:blog,isPending,error}=useFetch('http://localhost:8000/blogs/'+id);
    const history = useHistory();
    const handleDelete=()=>{
        fetch('http://localhost:8000/blogs/'+blog.id,{
            method:"DELETE"
        }).then(()=>{
            history.push('/')
        }

        )
    }

    return ( 
        <div className="blog-details">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {
                blog && <article>
                    <h2>{blog.title}</h2>
                    <p>written by {blog.auther}</p>
                    <div>{blog.body}</div>
                    <button onClick={handleDelete}>delete</button>
                </article>
            }
        </div>
        
        
     );
}
 
export default BlogDetails;