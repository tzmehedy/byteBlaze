import { useLoaderData } from "react-router-dom";

const Blog = () => {
    const blog = useLoaderData();
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
          <div>
            <div className="flex flex-wrap py-6 gap-2 border-t border-dashed border-gray-400">
              <a
                rel="noopener noreferrer"
                href="#"
                className="px-3 py-1 rounded-sm hover:underline bg-violet-400 text-gray-900"
              >
                #MambaUI
              </a>
              <a
                rel="noopener noreferrer"
                href="#"
                className="px-3 py-1 rounded-sm hover:underline bg-violet-400 text-gray-900"
              >
                #TailwindCSS
              </a>
              <a
                rel="noopener noreferrer"
                href="#"
                className="px-3 py-1 rounded-sm hover:underline bg-violet-400 text-gray-900"
              >
                #Angular
              </a>
            </div>
            <div className="space-y-2">
              <h4 className="text-lg font-semibold">Related posts</h4>
              <ul className="ml-4 space-y-1 list-disc">
                <li>
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="hover:underline"
                  >
                    Nunc id magna mollis
                  </a>
                </li>
                <li>
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="hover:underline"
                  >
                    Duis molestie, neque eget pretium lobortis
                  </a>
                </li>
                <li>
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="hover:underline"
                  >
                    Mauris nec urna volutpat, aliquam lectus sit amet
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Blog;