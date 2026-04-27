import { useEffect, useState } from "react";
import Gadget from "../Gadget/Gadget";

const Gadgets = () => {
  const [gadgets, setGadgets] = useState([]);
  const [category, setCategory] = useState([]);
  const [statusBtn, setStatusBtn] = useState({
    status: "All",
  });
  const filerDataGad = [];
  useEffect(() => {
    fetch("gadgets.JSON")
      .then((res) => res.json())
      .then((data) => {
        setGadgets(data);
      });
  }, []);

  gadgets.forEach((e) => {
    if (!filerDataGad.includes(e.category)) {
      filerDataGad.push(e.category);
    }
  });

  const handleCategory = (category) => {
    setStatusBtn({
      status: category,
    });
    const filterGadgets = gadgets.filter((g) => g.category === category);
    setCategory(filterGadgets);
  };
  const handleAllCategory = () => {
    setCategory(...gadgets);
    setStatusBtn({
      status: "All",
    });
  };
  console.log(statusBtn);

  return (
    <div className="mt-96 max-w-10/12 mx-auto">
      <h1 className="text-center text-4xl font-bold my-8">
        Explore Cutting-Edge Gadgets
      </h1>
      <div className="md:flex gap-5">
        <div className="flex flex-col  p-5 shadow-xl rounded-2xl">
          <button
            onClick={() => handleAllCategory()}
            className={
              statusBtn.status === "All"
                ? "btn mt-4 rounded-full bg-[#9538E2] text-white"
                : "btn mt-4 rounded-full"
            }
          >
            All Product
          </button>
          {filerDataGad.map((gadget) => (
            <button
              key={gadget.product_id}
              onClick={() => handleCategory(gadget)}
              className={
                statusBtn.status === gadget
                  ? "btn mt-4 rounded-full bg-[#9538E2] text-white"
                  : "btn mt-4 rounded-full"
              }
            >
              {gadget}
            </button>
          ))}
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {category.length >= 1
            ? category.map((gadget) => (
                <Gadget key={gadget.product_id} gadget={gadget} />
              ))
            : gadgets.map((gadget) => (
                <Gadget key={gadget.product_id} gadget={gadget} />
              ))}
        </div>
      </div>
    </div>
  );
};

export default Gadgets;
