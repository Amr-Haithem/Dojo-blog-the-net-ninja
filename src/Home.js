import BlogList from './blogList';
import useFetch from './useFetch';
const Home = () => {

    const {data:blogs,isPending,error} = useFetch('http://localhost:8000/blogs');
  
    return (
        <div className="Home">
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All blogs:"/>}       
              
        </div>
     );
}
export default Home;