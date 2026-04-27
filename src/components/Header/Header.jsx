import { useLocation } from "react-router";
import Hero from "../Hero/Hero";
import Navbar from "../Navbar/Navbar";
import Gadgets from "../Gadgets/Gadgets";

const Header = () => {
  const location = useLocation();
  return (
    <div>
      <div
        className={`${location.pathname === "/" ? "md:m-10 md:rounded-2xl bg-[#9538E2] text-white" : ""}`}
      >
        <Navbar />
        <Hero />
      </div>
      <Gadgets />
    </div>
  );
};

export default Header;
