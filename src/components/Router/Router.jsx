import { Outlet, useLocation, useNavigate } from "react-router";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { useState } from "react";
import Hero from "../Hero/Hero";
import Cart from "../Cart/Cart";
import { toast } from "react-toastify";

const Router = () => {
  const location = useLocation();
  const navigation = useNavigate();

  const [products, setProducts] = useState([]);

  const handleAddToCart = (product) => {
    const exists = products.find((p) => p.product_id === product.product_id);
    if (exists) {
      toast.error("Already added to cart!");
      return;
    }
    setProducts([...products, product]);
    toast.success("Added to cart!");
  };
  const handleAddCartData = () => {
    if (products.length > 0) {
      navigation("/cart");
    }
  };
  const [wishlist, setWishlist] = useState([]);

  const handleAddToWishlist = (product) => {
    const exists = wishlist.find((p) => p.product_id === product.product_id);
    if (exists) {
      toast.error("Already in wishlist!");
      return;
    }
    setWishlist([...wishlist, product]);
    toast.success("Added to wishlist!");
  };

  return (
    <div>
      {location.pathname === "/" ? (
        <div
          className={`${location.pathname === "/" ? "md:m-10 md:rounded-2xl bg-[#9538E2] text-white" : ""}`}
        >
          <Navbar
            handleAddCartData={handleAddCartData}
            products={products}
            wishlist={wishlist}
          />
          <Hero />
        </div>
      ) : (
        <Navbar
          handleAddCartData={handleAddCartData}
          products={products}
          wishlist={wishlist}
        />
      )}
      <Outlet context={{ handleAddToCart, products, setProducts, handleAddToWishlist, wishlist, setWishlist }} />
      <Footer />
    </div>
  );
};

export default Router;
