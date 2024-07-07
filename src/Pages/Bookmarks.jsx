import { useEffect, useState } from "react";
import { getBlogs } from "../Utilities/localStorage";
import BlogCard from "../Components/BlogCard";



const Bookmarks = () => {
    const [blogs, setBlogs] = useState()

    useEffect(()=>{
        const saveBlogs = getBlogs()
        setBlogs(saveBlogs)
    },[])
    
    return (
      <div>
        <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 px-5 py-2">
          {blogs && blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog}></BlogCard>
          ))}
        </div>
      </div>
    );
};

export default Bookmarks;