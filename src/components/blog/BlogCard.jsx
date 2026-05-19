import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const BlogCard = ({ blog }) => {
  return (
    <div className="group rounded-3xl border border-zinc-800 bg-zinc-900/80 p-7 transition hover:-translate-y-1 hover:border-amber-400/30 hover:bg-zinc-800/90 shadow-xl shadow-black/10">
      <h2 className="text-lg md:text-xl font-semibold text-zinc-100 group-hover:text-amber-300 transition">
        {blog.title}
      </h2>
      <p className="text-zinc-400 mt-3 leading-6 line-clamp-2">
        {blog.content.slice(0, 120)}...
      </p>

      <Link
        to={`/blogs/${blog._id}`}
        className="mt-6 inline-flex items-center text-sm font-semibold text-amber-300 transition hover:text-amber-200"
      >
        Read Article
        <ChevronRight className="ml-2 h-4 w-4" />
      </Link>
    </div>
  );
};

export default BlogCard;
