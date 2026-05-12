import DeleteConfirmModal from "../components/DeleteConfirmModal";
import { useState } from "react";


const handleDeleteClick = (id) => {
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [selectedBlogId, setSelectedBlogId] = useState(null);
  setSelectedBlogId(id);
  setIsDeleteOpen(true);
};


const confirmDelete = async () => {
  try {
    await deleteBlog(selectedBlogId); // your existing API
    setIsDeleteOpen(false);
    setSelectedBlogId(null);
    // re-fetch blogs here if needed
  } catch (error) {
    console.error(error);
    console.log("some error in admin/compnents/deletemodel file")
  }
};





const DeleteModal = ({ onConfirm, onCancel }) => {
  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center">
      <div className="bg-zinc-900 p-6 rounded-xl border border-red-500 w-96">
        <h2 className="text-xl font-semibold text-red-400">Delete Post?</h2>
        <p className="text-sm text-zinc-400 mt-2">
          This action cannot be undone.
        </p>

        <div className="flex justify-end gap-4 mt-6">
        <button
  onClick={() => handleDeleteClick(blog._id)}
  className="text-red-500 hover:text-red-400"
>
  Delete
</button>


<DeleteConfirmModal
  isOpen={isDeleteOpen}
  onClose={() => setIsDeleteOpen(false)}
  onConfirm={confirmDelete}
/>


        </div>
      </div>
    </div>
  );
};

export default {DeleteModal,confirmDelete };
