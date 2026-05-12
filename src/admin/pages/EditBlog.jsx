import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getSingleBlog, updateBlog } from "../../services/blogApi";

const EditBlog = () => {
  const { id } = useParams();
  const navigate = useNavigate();
const [status,setStatus] = useState(blog.status)
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const fetchBlog = async () => {
      const blog = await getSingleBlog(id);
      setStatus(blog.status)
      setTitle(blog.title);
      setContent(blog.content);
      setLoading(false);
    };

    fetchBlog();
  }, [id]);

  const handleUpdate = async () => {
    if (!title || !content) return;

    setSaving(true);
    await updateBlog(id, { title, content });
    navigate("/admin/dashboard"); // 🔥 redirect
  };

  if (loading) {
    return (
      <div className="text-center text-white mt-20">
        Loading blog...
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-6 text-white">
      <h1 className="text-2xl font-bold mb-6">Edit Blog</h1>

      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full bg-zinc-900 border border-zinc-800 p-3 rounded-lg mb-4"
        placeholder="Blog title"
      />

      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="w-full bg-zinc-900 border border-zinc-800 p-3 rounded-lg h-48 mb-6"
        placeholder="Blog content"
      />

      <div className="flex gap-4">
        <button
          onClick={() => navigate("/admin/dashboard")}
          className="px-4 py-2 border border-zinc-700 rounded-lg"
        >
          Cancel
        </button>

        <button
          onClick={handleUpdate}
          disabled={saving}
          className="bg-blue-600 px-6 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50"
        >
          {saving ? "Saving..." : "Update"}
        </button>
      </div>
    </div>
  );
};

export default EditBlog;
