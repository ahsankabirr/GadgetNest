import { useState } from "react";
import { useOutletContext } from "react-router";

const Cart = () => {
  const { products, setProducts, wishlist, setWishlist, handleAddToCart } =
    useOutletContext();
  const [showModal, setShowModal] = useState(false);
  const [finalTotal, setFinalTotal] = useState(0);
  const [activeTab, setActiveTab] = useState("cart");

  const total = products.reduce((sum, p) => sum + p.price, 0);

  const handleDelete = (index) => {
    const updated = products.filter((_, i) => i !== index);
    setProducts(updated);
  };

  const handleWishlistDelete = (index) => {
    const updated = wishlist.filter((_, i) => i !== index);
    setWishlist(updated);
  };

  const handleSort = () => {
    const sorted = [...products].sort((a, b) => b.price - a.price);
    setProducts(sorted);
  };

  const handlePurchase = () => {
    setFinalTotal(total);
    setShowModal(true);
    setProducts([]);
  };

  return (
    <div>
      {/* Header */}
      <div className="bg-[#9538E2] py-10 text-center text-white">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="mt-2 text-sm w-6/12 mx-auto">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
        <div className="flex justify-center gap-4 mt-4">
          <button
            onClick={() => setActiveTab("cart")}
            className={`btn rounded-full px-8 ${
              activeTab === "cart"
                ? "bg-white text-[#9538E2]"
                : "btn-outline text-white"
            }`}
          >
            Cart
          </button>
          <button
            onClick={() => setActiveTab("wishlist")}
            className={`btn rounded-full px-8 ${
              activeTab === "wishlist"
                ? "bg-white text-[#9538E2]"
                : "btn-outline text-white"
            }`}
          >
            Wishlist
          </button>
        </div>
      </div>

      {/* Cart Tab */}
      {activeTab === "cart" && (
        <div className="max-w-4xl mx-auto my-8 px-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Cart</h2>
            <div className="flex items-center gap-4">
              <span className="font-semibold">
                Total cost: € {total.toFixed(2)}
              </span>
              <button
                onClick={handleSort}
                className="btn btn-outline rounded-full"
              >
                Sort by Price
              </button>
              <button
                onClick={handlePurchase}
                className="btn bg-[#9538E2] text-white rounded-full"
              >
                Purchase
              </button>
            </div>
          </div>

          {products.length === 0 && !showModal && (
            <p className="text-center text-gray-400 mt-10">
              Your cart is empty.
            </p>
          )}

          {products.map((product, index) => (
            <div
              key={index}
              className="flex items-center gap-4 bg-white rounded-xl p-4 mb-4 shadow-sm"
            >
              <img
                src={product.product_image}
                alt={product.product_title}
                className="w-24 h-24 object-cover rounded-lg"
              />
              <div className="flex-1">
                <h3 className="font-bold text-lg">{product.product_title}</h3>
                <p className="text-gray-500 text-sm">{product.description}</p>
                <p className="font-semibold mt-1">Price: €{product.price}</p>
              </div>
              <button
                onClick={() => handleDelete(index)}
                className="text-red-400 border border-red-400 rounded-full w-8 h-8 flex items-center justify-center"
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Wishlist Tab */}
      {activeTab === "wishlist" && (
        <div className="max-w-4xl mx-auto my-8 px-4">
          <h2 className="text-xl font-bold mb-4">WishList</h2>

          {wishlist.length === 0 && (
            <p className="text-center text-gray-400 mt-10">
              No wishlist items yet.
            </p>
          )}

          {wishlist.map((product, index) => (
            <div
              key={index}
              className="flex items-center gap-4 bg-white rounded-xl p-4 mb-4 shadow-sm"
            >
              <img
                src={product.product_image}
                alt={product.product_title}
                className="w-24 h-24 object-cover rounded-lg"
              />
              <div className="flex-1">
                <h3 className="font-bold text-lg">{product.product_title}</h3>
                <p className="text-gray-500 text-sm">
                  <span className="font-semibold text-black">
                    Description:{" "}
                  </span>
                  {product.description}
                </p>
                <p className="font-semibold mt-1">Price: $ {product.price}</p>
                <button
                  onClick={() => handleAddToCart(product)}
                  className="btn bg-[#9538E2] text-white rounded-full btn-sm mt-2"
                >
                  Add to Card
                </button>
              </div>
              <button
                onClick={() => handleWishlistDelete(index)}
                className="text-red-400 border border-red-400 rounded-full w-8 h-8 flex items-center justify-center"
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-10 text-center w-80">
            <div className="flex justify-center mb-4">
              <img src="/Group.png" alt="success" />
            </div>
            <h2 className="text-xl font-bold">Payment Successfully</h2>
            <p className="text-gray-500 mt-2">Thanks for purchasing.</p>
            <p className="text-gray-500">Total: € {finalTotal.toFixed(2)}</p>
            <button
              onClick={() => setShowModal(false)}
              className="btn btn-outline rounded-full mt-6 w-full"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
