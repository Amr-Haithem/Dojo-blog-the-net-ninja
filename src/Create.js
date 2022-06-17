import {useState} from "react";
import {useHistory} from "react-router-dom"


const Create = () => {
     const [title, settitle] = useState("");
     const [body, setbody] = useState("");
     const [auther, setauther] = useState("yoshi");
     const [isPending, setisPending] = useState(false);
     const history=useHistory();
    const handleSubmit=(e)=>{
        e.preventDefault();
        setisPending(true)
        const blog={title,body,auther};
        //here we are fetching the data to post new blog it it
        fetch("http://localhost:8000/blogs",{
            method:'POST',
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(blog)
        }).then(()=>{
            setisPending(false)
            console.log("a new blog is added")
            history.push("/");
        }
        )
     }
    return ( 
        <div className="create">
        <h1>Create a blogo nowo</h1>
        <form onSubmit={handleSubmit} >
            <label>Blog title:</label>
            <input
             type="text"    
             required
             value={title}
             onChange={(e)=>settitle(e.target.value)}

             />
            <label>Blog body:</label>
            <textarea
            required
            value={body}
            onChange={(e)=>setbody(e.target.value)}
            ></textarea>
            <label>Blog auther:</label>
            <select
            value={auther}
            onChange={(e)=>setauther(e.target.value)}
            >
                <option value="mario">mario</option>
                <option value="yoshi">yoshi</option>
            </select>
            {!isPending && <button>Add blog</button>}
            {isPending && <button>adding new...</button>}
            
        </form>
        <p>{title}</p>
        <p>{body}</p>
        <p>{auther}</p>
        </div>
     );
}
 
export default Create;