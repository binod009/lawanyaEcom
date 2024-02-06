import "./App.css";
import { Route, Routes } from "react-router-dom";
import AdminDashboard from "./components/admindashboard/AdminDashboard";
import Client from "./components/client/Client";
import AdminLogin from "./components/admindashboard/admincomponents/AdminLogin";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Client />} />
        <Route path="/login" element={<AdminLogin />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </>
  );
}

export default App;
