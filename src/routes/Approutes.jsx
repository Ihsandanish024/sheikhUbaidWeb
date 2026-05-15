import {BrowserRouter, Routes, Route } from "react-router";
import Blogs from "../pages/Blogs";
import BlogDetail from "../pages/BlogDetail";
import AdminLogin from "../admin/pages/AdminLogin";
import Posts from "../admin/pages/posts";
import AdminDashboard from "../admin/pages/Dashboard";
import CreateBlog from "../admin/pages/CreateBlog";
import EditBlog from "../admin/pages/EditBlog";
import AdminProtectedRoute from "../admin/components/AdminProtectedRoute"
import Portfolio from "../pages/Portfolio";




function Approutes() {
  return (
    <Routes>

<Route path="/admin/login" element={<AdminLogin />} />
<Route path="/admin/posts" element={<Posts />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/blogs/:id" element={<BlogDetail />} />
      <Route path="/portfolio" element={<Portfolio />} />

      <Route path="/admin/create" element={
        <AdminProtectedRoute>
          <CreateBlog />
        </AdminProtectedRoute>
        } 
        />
      <Route path="/admin/edit/:id" element={
        <AdminProtectedRoute>
          <EditBlog />
        </AdminProtectedRoute>
        } 
        />
      <Route path="/admin/dashboard" element={
        <AdminProtectedRoute>
          <AdminDashboard />
        </AdminProtectedRoute>
        } 
        />

    </Routes>
  );
};

export default Approutes;
