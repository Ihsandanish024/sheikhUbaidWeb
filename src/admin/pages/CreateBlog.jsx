import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createBlog } from "../../services/blogApi";

const CreateBlog = () => {
  const [status,setStatus] = useState("draft")
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();



  const submitBlog = async () => {
    if (!title || !content) return;

    setLoading(true);
    try{
      await createBlog(title, content, status);
      console.log("i am from create blog")
      navigate("/admin/dashboard"); // 🔥 go back

    }catch(error){
      console.log(error);
    }finally{
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 text-white">
      <h1 className="text-2xl font-bold mb-6">Create New Blog</h1>

      <input
        placeholder="Blog title"
        className="w-full bg-zinc-900 border border-zinc-800 p-3 rounded-lg mb-2"
        onChange={(e) => setTitle(e.target.value)}
      />

<select
  value={status}
  onChange={(e) => setStatus(e.target.value)}
  className="p-2 rounded-lg bg-gray-800 text-white mb-2"
>
  <option value="draft">Draft</option>
  <option value="published">Published</option>
</select>


      <textarea
        placeholder="Blog content"
        className="w-full bg-zinc-900 border border-zinc-800 p-3 rounded-lg h-48 mb-6"
        onChange={(e) => setContent(e.target.value)}
      />

      <div className="flex gap-4">
        <button
          onClick={() => navigate("/admin")}
          className="px-4 py-2 border text-black border-zinc-700 rounded-lg"
        >
          Cancel
        </button>

        <button
          onClick={submitBlog}
          disabled={loading}
          className="bg-green-600 px-6 py-2 rounded-lg hover:bg-green-700 disabled:opacity-50"
        >
          {loading ? "Publishing..." : "Publish"}
        </button>
      </div>
    </div>
  );
};

export default CreateBlog;
