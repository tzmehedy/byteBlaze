import PropTypes from "prop-types";
import notFoundImage from "../assets/404 (1).jpg";
import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {

    console.log(blog)
  const {id, title, cover_image, description, published_at } = blog;

  return (
    <div className="translate hover:scale-[105%] border border-secondary p-2 rounded-lg">
      <Link
        rel="noopener noreferrer"
        to={`/blog/${id}`}
        className="max-w-sm mx-auto group hover:no-underline focus:no-underline "
      >
        <img
          role="presentation"
          className="object-cover w-full rounded-lg h-44 bg-gray-500"
          src={cover_image || notFoundImage}
        />
        <div className="p-6 space-y-2">
          <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
            {title}
          </h3>
          <span className="text-xs text-gray-400">
            {new Date(published_at).toLocaleDateString()}
          </span>
          <p>{description}</p>
        </div>
      </Link>
    </div>
  );
};

BlogCard.propTypes = {
  blog: PropTypes.object,
};

export default BlogCard;
