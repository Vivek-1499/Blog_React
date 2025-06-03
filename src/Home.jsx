import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {

  // const [name, setName] = useState('mario')
  // const[num, setNum] = useState(1);
  // const handleClick =()=>{
  //   setNum(num+1);
  //   if(num % 2 == 0){
  //     setName('adam')
  //   }else{
  //     setName('mario')
  //   }
  // }

  // const handleClickName = (name, e) => {
  //   console.log("Hello", name , "Thanks for clickin me" + e.target);
  // }

  // const handleDelete = (id) =>{
  //   const newBlogs = blogs.filter(blog => blog.id !== id);    //returns only true value
  //   setBlogs(newBlogs);
  // }

  const {data: blogs, loading, error} = useFetch('http://localhost:8000/blogs');
  
  return (
    <div className="home">
      {/* <p>{ name }</p>
      <p>{ num }</p>
      <button onClick={handleClick}>Click me</button>
      <button onClick={(e) => handleClickName('vivek' , e)}>Click me</button> */}
      {error && <div>{error}</div>}
      {loading && <div>Loading....</div>}
      {blogs && <BlogList blogs={blogs} title='All blogs'/>}
      {/* <BlogList blogs={blogs.filter((blog) => blog.author==="mario")} title='Mario blogs'/> */}
    </div>
  )
}

export default Home