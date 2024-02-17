import { Outlet } from "react-router-dom";
import SideBar from "../../components/dashboardcomponent/SideBar";
import DashBoardHeader from "../../components/dashboardcomponent/DashBoardHeader";
const DashboardLayout = () => {
  return (
    <>
      <div className="flex w-full  font-bold ">
        <SideBar />
        <div className="flex-1">
          <DashBoardHeader />
          <div className="flex items-center gap-10 m-5 justify-around h-[calc(100%-15%)]">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
