import { useState } from "react";
import { Link, Outlet, useLoaderData } from "react-router-dom";
import { MdBookmarkAdd } from "react-icons/md";
import { saveBlogs } from "../Utilities/localStorage";

const Blog = () => {
    const blog = useLoaderData();
    const [buttonActive,setButtonActive] = useState(0)

    const handleBookmaark =(blog)=>{
      saveBlogs(blog)
    }

    return (
      <div>
        <div className="max-w-2xl px-6 py-16 mx-auto space-y-12">
          <article className="space-y-8 ">
            <div className="space-y-6">
              <h1 className="text-4xl font-bold md:tracking-tight md:text-5xl">
                {blog.title}
              </h1>
              <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center text-gray-400">
                <div className="flex items-center md:space-x-2">
                  <img
                    src="https://source.unsplash.com/75x75/?portrait"
                    alt=""
                    className="w-4 h-4 border rounded-full bg-gray-500 border-gray-700"
                  />
                  <p className="text-sm">
                    {blog.user.name} •{" "}
                    {new Date(blog.published_at).toLocaleDateString()}
                  </p>
                </div>
                <p className="flex-shrink-0 mt-3 text-sm md:mt-0">
                  {blog.reading_time_minutes} min read
                </p>
              </div>
            </div>
            <div className="">
              <p>{blog.description}</p>
            </div>
          </article>
          {/* Tab start */}
          <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap text-gray-700 font-bold">
            <Link
              onClick={() => setButtonActive(0)}
              className={`flex items-center flex-shrink-0 px-4 py-3 space-x-2 rounded-t-lg ${
                buttonActive === 0 ? "border border-b-0" : "border-b"
              } border-gray-400 text-black-800`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4"
              >
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
              </svg>
              <span>Content</span>
            </Link>
            <Link
              to={"author"}
              onClick={() => setButtonActive(1)}
              className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
                buttonActive === 1 ? "border border-b-0" : "border-b"
              }  rounded-t-lg border-gray-400 text-gray-800`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4"
              >
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
              </svg>
              <span>Author</span>
            </Link>

            <button onClick={()=>handleBookmaark(blog)} className="p-4 bg-secondary secondary opacity-80 hover:opacity-40 rounded-full">
              <MdBookmarkAdd className="size-8 text-primary"></MdBookmarkAdd>
            </button>
          </div>
          <Outlet></Outlet>
        </div>
      </div>
    );
};

export default Blog;