import toast from "react-hot-toast";

export const getBlogs = () => {
  let blogs = [];
  const storedBlogs = localStorage.getItem("blogs");
  if (storedBlogs) {
    blogs = JSON.parse(storedBlogs);
  }
  return blogs;
};

export const saveBlogs = (blog) => {
  let blogs = getBlogs();

  const isExist = blogs.find((b) => b.id === blog.id);

  if(isExist){
    toast.error("Already Bookmarked")
  }
 else{
     blogs.push(blog);
     localStorage.setItem("blogs", JSON.stringify(blogs));
     toast.success("Successfully Bookmarked!!");
 }
};

export const deleteBlogs = () =>{

}
