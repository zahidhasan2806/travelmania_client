import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home/Home/Home';
import AuthProvider from './Component/Context/AuthProvider/AuthProvider';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import BlogFrom from './Pages/BlogForm/BlogFrom';
import ProtectedRoute from './Component/ProtectedRoute/ProtectedRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/blogform" element={<ProtectedRoute><BlogFrom /></ProtectedRoute>}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
          </Routes>

        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
