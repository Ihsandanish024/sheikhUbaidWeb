// // import { useEffect, useState } from "react";
// // import { useNavigate } from "react-router";
// // import { getAllBlogs, deleteBlog } from "../../services/blogApi";
// // import DeleteModal from "../../admin/components/DeleteModal";

// // const AdminDashboard = () => {
// //   const [blogs, setBlogs] = useState([]);
// //   const [page,setPage] = useState(1);
// //   const [totalPages,setTotalPages] = useState(1);
// //   const [deleteId, setDeleteId] = useState(null);
// //   const navigate = useNavigate();


// //   const handleLogout = () => {
// //   localStorage.removeItem("token"); // remove JWT
// //   navigate("/admin/login"); // redirect
// // };
// // const fetchBlogs = async () => {
// //   const data = await getAllBlogs (page);
// //   setBlogs(data.blogs);
// //   setTotalPages(data.totalPages);
// // };

// //   useEffect(() => {
// //     fetchBlogs();
// //   }, [page]);

// //   const handleDelete = async () => {
// //     await deleteBlog(deleteId);
// //     setDeleteId(null);
// //     fetchBlogs(); // 🔥 refresh list
// //   };

// //   return (
// //     <div className="max-w-6xl mx-auto p-6 text-white">
// //       <div className="flex justify-between items-center mb-6">
// //         <h1 className="text-3xl font-bold">Admin Dashboard</h1>

// //         <button
// //   onClick={handleLogout}
// //   className="px-4 py-2 bg-red-500 mr-0.5 hover:bg-red-600 text-white rounded-lg transition shadow-md"
// // >
// //   Logout
// // </button>


// //         <button
// //           onClick={() => navigate("/admin/create")}
// //           className="bg-green-600 px-4 py-2 rounded-lg hover:bg-green-700"
// //         >
// //           + Create Blog
// //         </button>
// //       </div>

// //       <div className="space-y-2">
// //         {blogs.map((blog) => (
// //           <div
// //             key={blog._id}
// //             className="bg-zinc-900 border border-zinc-800 p-4 rounded-xl flex justify-between"
// //           >
// //             <h2 className=" font-semibold">{blog.title}</h2>

// //             <div className="flex gap-4">
// // <h3 className="pt-1.5">Page No:</h3>

// // <div className="flex gap-2 mt-2 justify-center">
// //   {Array.from({ length: totalPages }, (_, i) => (
// //     <button
// //       key={i}
// //       onClick={() => setPage(i + 1)}
// //       className={`px-2 rounded ${
// //         page === i + 1
// //           ? "bg-white text-black"
// //           : "bg-zinc-800 text-white"
// //       }`}
// //     >
// //       {i + 1}
// //     </button>
// //   ))}
// // </div>



// //               <button
// //                 onClick={() => navigate(`/admin/edit/${blog._id}`)}
// //                 className="text-blue-400"
// //               >
// //                 Edit
// //               </button>

// //               <button
// //                 onClick={() => setDeleteId(blog._id)}
// //                 className="text-red-400"
// //               >
// //                 Delete
// //               </button>
// //             </div>
// //           </div>
// //         ))}
// //       </div>

// //       {deleteId && (
// //         <DeleteModal
// //           onCancel={() => setDeleteId(null)}
// //           onConfirm={handleDelete}
// //         />
// //       )}
// //     </div>
// //   );
// // };

// // export default AdminDashboard;





// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { getAllBlogs, deleteBlog } from "../../services/blogApi";
// import DeleteModal from "../../admin/components/DeleteModal";

// const AdminDashboard = () => {
//   const [blogs, setBlogs] = useState([]);
//   const [page, setPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);
//   const [deleteId, setDeleteId] = useState(null);
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     navigate("/admin/login");
//   };

//   const fetchBlogs = async () => {
//     try { // ✅ added try/catch
//       const data = await getAllBlogs(page);
//       console.log("Blogs data:", data); // ✅ debug log
//       if (data && data.blogs) {
//         setBlogs(data.blogs);
//         setTotalPages(data.totalPages);
//       } else {
//         console.log("No blogs data received:", data);
//       }
//     } catch (err) {
//       console.log("fetchBlogs error:", err); // ✅ catch silent crash
//     }
//   };

//   useEffect(() => {
//     fetchBlogs();
//   }, [page]);

//   const handleDelete = async () => {
//     await deleteBlog(deleteId);
//     setDeleteId(null);
//     fetchBlogs();
//   };

//   return (
//     <div className="max-w-6xl mx-auto p-6 text-white">
//       <div className="flex justify-between items-center mb-6">
//         <h1 className="text-3xl font-bold">Admin Dashboard</h1>

//         <button
//           onClick={handleLogout}
//           className="px-4 py-2 bg-red-500 mr-0.5 hover:bg-red-600 text-white rounded-lg transition shadow-md"
//         >
//           Logout
//         </button>

//         <button
//           onClick={() => navigate("/admin/create")}
//           className="bg-green-600 px-4 py-2 rounded-lg hover:bg-green-700"
//         >
//           + Create Blog
//         </button>
//       </div>

//       <div className="space-y-2">
//         {blogs.map((blog) => (
//           <div
//             key={blog._id}
//             className="bg-zinc-900 border border-zinc-800 p-4 rounded-xl flex justify-between"
//           >
//             <h2 className=" font-semibold">{blog.title}</h2>

//             <div className="flex gap-4">
//               <h3 className="pt-1.5">Page No:</h3>

//               <div className="flex gap-2 mt-2 justify-center">
//                 {Array.from({ length: totalPages }, (_, i) => (
//                   <button
//                     key={i}
//                     onClick={() => setPage(i + 1)}
//                     className={`px-2 rounded ${
//                       page === i + 1
//                         ? "bg-white text-black"
//                         : "bg-zinc-800 text-white"
//                     }`}
//                   >
//                     {i + 1}
//                   </button>
//                 ))}
//               </div>

//               <button
//                 onClick={() => navigate(`/admin/edit/${blog._id}`)}
//                 className="text-blue-400"
//               >
//                 Edit
//               </button>

//               <button
//                 onClick={() => setDeleteId(blog._id)}
//                 className="text-red-400"
//               >
//                 Delete
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {deleteId && (
//         <DeleteModal
//           onCancel={() => setDeleteId(null)}
//           onConfirm={handleDelete}
//         />
//       )}
//     </div>
//   );
// };

// export default AdminDashboard;




import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllBlogs, deleteBlog } from "../../services/blogApi";
import DeleteModal from "../../admin/components/DeleteModal";

const AdminDashboard = () => {
  const [blogs, setBlogs] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [deleteId, setDeleteId] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/admin/login");
  };

  const fetchBlogs = async () => {
    try {
      setLoading(true);

      const data = await getAllBlogs(page);

      console.log("Blogs data:", data);

      if (data && data.blogs) {
        setBlogs(data.blogs);
        setTotalPages(data.totalPages);
      } else {
        setBlogs([]);
      }

    } catch (err) {
      console.log("fetchBlogs error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, [page]);

  const handleDelete = async () => {
    try {
      await deleteBlog(deleteId);

      setDeleteId(null);

      fetchBlogs();

    } catch (err) {
      console.log("Delete error:", err);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6 text-white">

      <div className="flex justify-between items-center mb-6">

        <h1 className="text-3xl font-bold">
          Admin Dashboard
        </h1>

        <div className="flex gap-3">

          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-500 mr-0.5 hover:bg-red-600 text-white rounded-lg transition shadow-md"
          >
            Logout
          </button>

          <button
            onClick={() => navigate("/admin/create")}
            className="bg-green-600 px-4 py-2 rounded-lg hover:bg-green-700"
          >
            + Create Blog
          </button>

        </div>
      </div>

      {loading ? (

        <p>Loading blogs...</p>

      ) : blogs.length === 0 ? (

        <p>No blogs found.</p>

      ) : (

        <div className="space-y-2">

          {blogs.map((blog) => (

            <div
              key={blog._id}
              className="bg-zinc-900 border border-zinc-800 p-4 rounded-xl flex justify-between"
            >

              <h2 className="font-semibold">
                {blog.title}
              </h2>

              <div className="flex gap-4">

                <button
                  onClick={() =>
                    navigate(`/admin/edit/${blog._id}`)
                  }
                  className="text-blue-400"
                >
                  Edit
                </button>

                <button
                  onClick={() => setDeleteId(blog._id)}
                  className="text-red-400"
                >
                  Delete
                </button>

              </div>
            </div>
          ))}
        </div>
      )}

      {/* Pagination */}

      <div className="flex gap-2 mt-6 justify-center">

        {Array.from(
          { length: totalPages },
          (_, i) => (
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
          )
        )}
      </div>

      {deleteId && (
        <DeleteModal
          onCancel={() => setDeleteId(null)}
          onConfirm={handleDelete}
        />
      )}
    </div>
  );
};

export default AdminDashboard;