



import BlogList from "../components/blog/BlogList";

const Blogs = () => {
  return (
    <div className="min-h-screen bg-zinc-950 px-4 py-16">
      <div className="max-w-6xl mx-auto">
        {/* Page Header */}
        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-semibold text-zinc-100">
            Blog Articles
          </h1>
          <p className="text-zinc-400 mt-2 text-sm">
            Insights, announcements, and updates
          </p>
        </div>

        {/* Blog List Container */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
          <BlogList />
        </div>
      </div>
    </div>
  );
};

export default Blogs;

