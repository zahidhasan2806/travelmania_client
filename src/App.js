import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home/Home/Home';
import AuthProvider from './Component/Context/AuthProvider/AuthProvider';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import ProtectedRoute from './Component/ProtectedRoute/ProtectedRoute';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import MakeAdmin from './Pages/Dashboard/MakeAdmin/MakeAdmin';
import BlogForm from './Pages/BlogForm/BlogForm';
import AllBlogs from './Pages/Dashboard/AllBlogs/AllBlogs/AllBlogs';
import BlogDetails from './Pages/Home/UsersExperiences/BlogDetails/BlogDetails';
import WriteBlog from './Pages/Dashboard/WriteBlog/WriteBlog';
import DashboardHome from './Pages/Dashboard/DashboardHome/DashboardHome';
import AdminRoute from './Component/ProtectedRoute/AdminRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/blogform" element={<ProtectedRoute><BlogForm /></ProtectedRoute>}></Route>
            <Route path="/blogDetails/:id" element={<ProtectedRoute><BlogDetails /></ProtectedRoute>}></Route>

            <Route path="/dashboard" element={<Dashboard />}>
              <Route path="/dashboard" element={<AdminRoute><DashboardHome /></AdminRoute>}></Route>
              <Route path="/dashboard/makeAdmin" element={<AdminRoute><MakeAdmin /></AdminRoute>}></Route>

              <Route path="/dashboard/Allblogs" element={<AdminRoute><AllBlogs /></AdminRoute>}></Route>
              <Route path="/dashboard/addnewBlog" element={<AdminRoute><WriteBlog /></AdminRoute>}></Route>

            </Route>

            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
          </Routes>

        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
