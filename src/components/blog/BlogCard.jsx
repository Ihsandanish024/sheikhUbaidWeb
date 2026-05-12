import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  return (
    <div className="border rounded-lg p-4 shadow">
      <h2 className="text-xl font-bold">{blog.title}</h2>
      <p className="text-gray-600 mt-2">
        {blog.content.slice(0, 100)}...
      </p>

      <Link
        to={`/blogs/${blog._id}`}
        className="text-blue-600 mt-3 inline-block"
      >
        Read More
      </Link>
    </div>
  );
};

export default BlogCard;
