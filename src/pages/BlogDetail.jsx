import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getSingleBlog } from "../services/blogApi";

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    getSingleBlog(id).then(setBlog);
  }, [id]);

  if (!blog) {
    return (
      <div className="min-h-screen bg-zinc-950 flex items-center justify-center">
        <p className="text-zinc-400 text-sm">Loading article...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-950 px-4 py-16">
      <article className="max-w-3xl mx-auto bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-semibold text-zinc-100 mb-4 leading-tight">
          {blog.title}
        </h1>

        {/* Meta info (optional, future-ready) */}
        <div className="text-sm text-zinc-400 mb-8">
          <span>Published</span>
        </div>

        {/* Content */}
        <div className="prose prose-invert prose-zinc max-w-none">
          <p className="text-zinc-300 leading-relaxed whitespace-pre-line">
            {blog.content}
          </p>
        </div>
      </article>
    </div>
  );
};

export default BlogDetail;
