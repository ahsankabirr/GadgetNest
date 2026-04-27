import { useEffect, useState } from "react";
import Gadget from "../Gadget/Gadget";

const Gadgets = () => {
  const [gadgets, setGadgets] = useState([]);
  useEffect(() => {
    fetch("gadgets.JSON")
      .then((res) => res.json())
      .then((data) => setGadgets(data));
  }, []);
  console.log(gadgets);

  return (
    <div className="mt-96 max-w-10/12 mx-auto">
      <h1 className="text-center text-4xl font-bold my-8">
        Explore Cutting-Edge Gadgets
      </h1>
      <div className="md:flex gap-5">
        <div className="flex flex-col  p-5 shadow-xl rounded-2xl">
          <button className="btn mt-2 rounded-full">All Product</button>
          {gadgets.map((gadget) => (
            <button className="btn mt-4 rounded-full">{gadget.category}</button>
          ))}
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gadgets.map((gadget) => (
            <Gadget key={gadget.product_id} gadget={gadget} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gadgets;
