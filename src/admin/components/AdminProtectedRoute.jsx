import { Navigate } from "react-router-dom";

const AdminProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/admin/login" replace />;
  }

  return children;
};

export default AdminProtectedRoute;



// const AdminProtectedRoute = ({ children }) => {
//   const token = localStorage.getItem("token");
  
//   // Add this debug line
//   console.log("Token in ProtectedRoute:", token);

//   if (!token) {
//     console.log("NO TOKEN - redirecting to login");
//     return <Navigate to="/admin/login" replace />;
//   }

//   console.log("TOKEN FOUND - allowing access");
//   return children;
// };

// export default AdminProtectedRoute