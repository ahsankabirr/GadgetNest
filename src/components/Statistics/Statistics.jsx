import { useEffect } from "react";
import { useLoaderData } from "react-router";
import {
  ComposedChart,
  Bar,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Statistics = () => {
  const products = useLoaderData();

  useEffect(() => {
    document.title = "Gadget Nest | Statistics";
  }, []);

  const data = products.map((p) => ({
    name: p.product_title.split(" ").slice(0, 3).join(" "),
    Price: p.price,
    Rating: p.rating * 10,
  }));

  return (
    <div>
      {/* Header */}
      <div className="bg-[#9538E2] py-10 text-center text-white">
        <h1 className="text-3xl font-bold">Statistics</h1>
        <p className="mt-2 text-sm w-6/12 mx-auto">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
      </div>

      {/* Chart */}
      <div className="max-w-5xl mx-auto my-10 px-4">
        <h2 className="text-xl font-bold mb-6">Statistics</h2>
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <ResponsiveContainer width="100%" height={400}>
            <ComposedChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" tick={{ fontSize: 11 }} />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="Price" fill="#9538E2" />
              <Area
                type="monotone"
                dataKey="Price"
                fill="#c084fc"
                stroke="#9538E2"
                fillOpacity={0.3}
              />
              <Bar dataKey="Rating" fill="#ef4444" />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Statistics;