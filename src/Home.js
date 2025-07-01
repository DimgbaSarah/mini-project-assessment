
import useFetch from "./useFetch";
import BlogList from './BlogList';



const Home = () => {
    const {data :blogs,isPending,error} = useFetch('https://jsonplaceholder.typicode.com/posts')

    return ( 
        <div className="home">
      <BlogList  blogs ={blogs} isPending ={isPending} error ={error}/>
        </div>
     );
}
 
export default Home;