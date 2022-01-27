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

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/blogform" element={<ProtectedRoute><BlogForm /></ProtectedRoute>}></Route>

            <Route path="/dashboard" element={<Dashboard />}>

              <Route path="/dashboard/makeAdmin" element={<MakeAdmin />}></Route>
              <Route path="/dashboard/Allblogs" element={<AllBlogs />}></Route>

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
