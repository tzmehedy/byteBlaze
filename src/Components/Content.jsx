import { useLoaderData } from "react-router-dom";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";

const Content = () => {
    const blog = useLoaderData();
    console.log(blog);
    return (
      <div>
        <div className=" p-2 rounded-md shadow-md ">
          <img
            src={blog.cover_image}
            alt=""
            className="object-cover object-center w-full rounded-md h-72 "
          />
          <div className="mt-6 mb-2 flex justify-between">
            {blog.tags.map((tag) => (
              <p className=" px-5 py-2 font-bold" key={tag}>
                #{tag}
              </p>
            ))}
          </div>
          <hr />
          <h3 className="font-bold text-2xl mt-5">{blog.title}</h3>
          <Markdown className="mt-5 text-justify" rehypePlugins={[rehypeRaw]}>{blog.body_html}</Markdown>
        </div>
      </div>
    );
};

export default Content;