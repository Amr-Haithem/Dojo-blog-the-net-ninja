import { Link } from "react-router-dom";

const BlogList = ({blogs,title}) => {
//here we fetched the values of the props and used it in the text here
console.log("hello")

    return ( 

        <div className="blog-list">
            <h2>{title}</h2>
            {
                
                blogs.map((blog)=>(
                    
                   <Link to={`/blogs/${blog.id}`}>
                    <div className="blog-preview" key={blog.id}>
                        
                           <h2>{blog.title}</h2>
                           <p>written by {blog.auther}</p>
                        
                        </div>
                        </Link>
                    
                    
                )
                )
            }
        </div>
     );
}
 
export default BlogList;