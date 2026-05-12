import { useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import { getPublishedBlogs } from "../../services/blogApi";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchBlogs = async () => {
    const data = await getPublishedBlogs(page);
    setBlogs(data.blogs);
    setTotalPages(data.totalPages);
  };

  useEffect(() => {
    fetchBlogs();
  }, [page]);

  return (
    <div>
      <div className="grid md:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <BlogCard key={blog._id} blog={blog} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex gap-2 mt-8 justify-center">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setPage(i + 1)}
            className={`px-3 py-1 rounded ${
              page === i + 1
                ? "bg-white text-black"
                : "bg-zinc-800 text-white"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
