import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleNavigationClick = () => {
    navigate("/about");
  };

  return (
    <div>
      Home
      <button onClick={handleNavigationClick}>Go To About Page</button>
    </div>
  );
};

export default Home;
