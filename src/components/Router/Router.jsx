import { Outlet, useLocation } from "react-router";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const Router = () => {
  const location = useLocation();

  return (
    <div>
      {location.pathname != "/" && <Navbar />}
      <Outlet />
      <Footer />
    </div>
  );
};

export default Router;
