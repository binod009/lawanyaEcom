import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Client from "./components/client/Client";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProtectedRoute from "./ProtectedRoute";
import AdminLogin from "./components/dashboardcomponent/AdminLogin";
import DashboardLayout from "./components/admindashboard/DashboardLayout";
import ManageEvent from "./pages/ManageEvent";
import CarouselForm from "./components/dashboardcomponent/CarouselForm";
import DataTable from "./components/dashboardcomponent/DataTable";
import EventDataTable from "./pages/EventDataTable";
import PartnerManage from "./pages/PartnerManage";
import PartnerDataTable from "./pages/PartnerDataTable";
import ServiceManage from "./pages/ServiceManage";
import ServiceDataTable from "./pages/ServiceDataTable";
import ManageTestomonial from "./pages/ManageTestomonial";
import TestomonialTableData from "./pages/TestomonialTableData";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Client key="client" />,
  },
  {
    path: "/login",
    element: <AdminLogin key="adminlogin" />,
  },
  {
    path: "/admin",
    element: (
      <ProtectedRoute>
        <DashboardLayout key="dashboardlayout" />
      </ProtectedRoute>
    ),
    children: [
      {
        key: "1",
        path: "/admin/carousel",
        element: [
          <CarouselForm key="carouselform" />,
          <DataTable key="datatable" />,
        ],
      },
      {
        kee: "2",
        path: "/admin/event",
        element: [
          <ManageEvent key="event" />,
          <EventDataTable key="eventdata" />,
        ],
      },
      {
        key: "3",
        path: "/admin/partner",
        element: [
          <PartnerManage key="partnermanage" />,
          <PartnerDataTable key="partnertable" />,
        ],
      },
      {
        key: "4",
        path: "/admin/service",
        element: [
          <ServiceManage key="servicemanage" />,
          <ServiceDataTable key="servicetable" />,
        ],
      },
      {
        key: "5",
        path: "/admin/testomonial",
        element: [
          <ManageTestomonial key="testomanage" />,
          <TestomonialTableData key="testotable" />,
        ],
      },
    ],
  },
]);

function App() {
  return (
    <>
      <ToastContainer />
      <RouterProvider router={router} />
    </>
  );
}

export default App;

// <Routes>
//   <Route path="/" element={<Client />} />
//   <Route path="/login" element={<AdminLogin />} />
//   <Route
//     path="/admin"
//     element={
//       <ProtectedRoute>
//         <DashBoardLayout />
//       </ProtectedRoute>
//     }
//   />
// </Routes>
