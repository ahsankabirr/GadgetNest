import {  useLocation } from "react-router";
import Hero from "../Hero/Hero";
import Navbar from "../Navbar/Navbar";

const Header = () => {
  const location = useLocation();
  return (
    <div
      className={`${location.pathname === "/" ? "md:m-10 md:rounded-2xl bg-[#9538E2] text-white" : ""}`}
    >
      <Navbar />
      <Hero />
    </div>
  );
};

export default Header;
