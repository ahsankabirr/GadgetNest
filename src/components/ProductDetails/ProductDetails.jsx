import { useEffect, useState } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router";
const ProductDetails = () => {
  const products = useLoaderData();
  let params = useParams();
  let navigate = useNavigate();
  if (products.length === 0) {
    navigate(-1);
  }
  const filterData = products.filter((e) => e.product_id === params.ProductId);

  const {
    product_id,
    product_title,
    product_image,
    price,
    description,
    specification,
    rating,
  } = filterData[0];
  console.log(filterData[0]);

  return (
    <div>
      <div className="bg-[#9538E2]">
        <div className="md:absolute md:pb-80 left-0 right-0">
          <h1 className="text-4xl font-bold text-center pt-8  text-white">
            Product Details
          </h1>
          <p className="md:w-6/12 mx-auto text-center my-4  text-white">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
        </div>
        {/* Feature section */}
        <div className="hero bg-white md:w-[1062px] md:h-[563px] mx-auto rounded-3xl relative top-12 md:top-52">
          <div className="hero-content flex-col lg:flex-row ">
            <img src={product_image} className="max-w-sm rounded-lg " />
            <div className="md:p-4">
              <h1 className="text-5xl font-bold">{product_title}</h1>
              <p className="py-4 font-semibold">Price: €{price}</p>
              <div>
                <p className="badge badge-soft badge-success m-0">In Stock</p>
              </div>
              <p className="text-gray-500 my-4">{description}</p>
              <div>
                <p className="font-bold">Specification:</p>
                <ul className="list-decimal ml-5 text-gray-500">
                  {specification.map((e, index) => (
                    <li key={index}>{e}</li>
                  ))}
                </ul>
                <div className="flex items-center gap-2 my-6">
                  <div className="rating rating-sm">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <input
                        key={star}
                        type="radio"
                        name={`rating-${product_id}`}
                        className="mask mask-star-2 bg-yellow-400"
                        defaultChecked={star === Math.round(rating)}
                        readOnly
                      />
                    ))}
                  </div>
                  <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                    {rating}
                  </span>
                </div>{" "}
              </div>
              <div className="flex items-center gap-4">
                <button className="btn btn-primary bg-[#9538E2] rounded-full">
                  Add To Card{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                    />
                  </svg>
                </button>
                <button className="border-2 border-dotted rounded-full border-gray-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-5 m-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
