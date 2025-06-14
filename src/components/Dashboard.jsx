import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  // we can write navigate in both ways as below functions, but remember that when using single string in navigate
  // as using in below function like navigate("courses"), dont use / before route(dont use like navigate("/courses"))
  // instead we have to navigate("courses") only
  const handleCourseClick = () => {
    navigate("courses");
  };

  const handleAttendanceClick = () => {
    navigate("/dashboard/attendance");
  };
  return (
    <div>
      Dashboard
      <button onClick={handleCourseClick}>Go to Courses Page</button>
      <button onClick={handleAttendanceClick}>Go to Attendance Page</button>
      <Outlet />
    </div>
  );
};

export default Dashboard;
