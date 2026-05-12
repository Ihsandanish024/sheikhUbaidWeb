import api from "./api";

/* ------------------ PUBLIC BLOG APIS ------------------ */

export const getAllBlogs = async (page = 1) => {
  const res = await api.get(`/blogs/admin/all?page=${page}`);
  return res.data;
};

export const getSingleBlog = async (id) => {
  const res = await api.get(`/blogs/${id}`);
  return res.data;
};

/* ------------------ ADMIN BLOG APIS ------------------ */

export const createBlog = async(title,content,status) =>{
  try {
    await api.post("/blogs",{
      title,
      content,
      status
    });
    console.log("data is working perfactely")
    
  } catch (error) {
    console.log("data is not working")
    console.log(error)
  }

  }



export const updateBlog = async (id, title,content,status) => {
  const res = await api.put(`/blogs/${id}`,{
    title,
      content,
      status
  });
  return res.data;
};

export const deleteBlog = async (id) => {
  const res = await api.delete(`/blogs/${id}`);
  return res.data;
};

export const getPublishedBlogs = async (page = 1) => {
  const res = await api.get(`/blogs?page=${page}`);
  return res.data;
};


export const getAdminBlogs = async (page = 1) => {
  const res = await api.get(`/blogs/admin/all?page=${page}`);
  return res.data;
};