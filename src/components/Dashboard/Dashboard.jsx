import { useEffect } from "react";
import { useLoaderData } from "react-router";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

const Dashboard = () => {
  const products = useLoaderData();

  useEffect(() => {
    document.title = "Gadget Nest | Dashboard";
  }, []);

  const totalProducts = products.length;
  const totalRevenue = products.reduce((sum, p) => sum + p.price, 0);
  const avgRating = (
    products.reduce((sum, p) => sum + p.rating, 0) / products.length
  ).toFixed(1);
  const inStock = products.filter((p) => p.availability).length;

  const stats = [
    { label: "Total Products", value: totalProducts, icon: "📦", color: "bg-purple-100 text-[#9538E2]" },
    { label: "Total Value", value: `€${totalRevenue.toFixed(0)}`, icon: "💰", color: "bg-green-100 text-green-600" },
    { label: "Avg Rating", value: `${avgRating}★`, icon: "⭐", color: "bg-yellow-100 text-yellow-600" },
    { label: "In Stock", value: inStock, icon: "✅", color: "bg-blue-100 text-blue-600" },
  ];

  const categoryMap = {};
  products.forEach((p) => {
    categoryMap[p.category] = (categoryMap[p.category] || 0) + 1;
  });
  const pieData = Object.entries(categoryMap).map(([name, value]) => ({ name, value }));

  const PIE_COLORS = [
    "#9538E2", "#c084fc", "#6366f1", "#f59e0b",
    "#10b981", "#ef4444", "#3b82f6", "#ec4899",
    "#14b8a6", "#f97316",
  ];

  const barData = [...products]
    .sort((a, b) => b.price - a.price)
    .slice(0, 6)
    .map((p) => ({
      name: p.product_title.split(" ").slice(0, 2).join(" "),
      Price: p.price,
      Rating: p.rating * 10,
    }));

  const recentProducts = products.slice(0, 5);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-[#9538E2] py-10 px-6 text-white">
        <h1 className="text-3xl font-bold"> Dashboard</h1>
        <p className="opacity-80 mt-1">
          Welcome back Here's what's happening at Gadget Nest.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 shadow-sm flex items-center gap-4">
              <div className={`text-3xl rounded-xl p-3 ${stat.color}`}>
                {stat.icon}
              </div>
              <div>
                <p className="text-gray-500 text-sm">{stat.label}</p>
                <p className="text-2xl font-bold">{stat.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Charts Row */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h2 className="text-lg font-bold mb-4">Top Products by Price</h2>
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={barData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" tick={{ fontSize: 11 }} />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="Price" fill="#9538E2" radius={[6, 6, 0, 0]} />
                <Bar dataKey="Rating" fill="#c084fc" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h2 className="text-lg font-bold mb-4">Products by Category</h2>
            <ResponsiveContainer width="100%" height={280}>
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  dataKey="value"
                  label={({ name, value }) => `${name}: ${value}`}
                  labelLine={false}
                >
                  {pieData.map((_, index) => (
                    <Cell key={index} fill={PIE_COLORS[index % PIE_COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Recent Products Table */}
        <div className="bg-white rounded-2xl p-6 shadow-sm mb-8">
          <h2 className="text-lg font-bold mb-4">Recent Products</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-gray-500 border-b">
                  <th className="pb-3">Product</th>
                  <th className="pb-3">Category</th>
                  <th className="pb-3">Price</th>
                  <th className="pb-3">Rating</th>
                  <th className="pb-3">Status</th>
                </tr>
              </thead>
              <tbody>
                {recentProducts.map((p, i) => (
                  <tr key={i} className="border-b last:border-0 hover:bg-gray-50">
                    <td className="py-3 flex items-center gap-3">
                      <img
                        src={p.product_image}
                        alt={p.product_title}
                        className="w-10 h-10 rounded-lg object-cover"
                      />
                      <span className="font-medium">
                        {p.product_title.split(" ").slice(0, 3).join(" ")}
                      </span>
                    </td>
                    <td className="py-3 text-gray-500">{p.category}</td>
                    <td className="py-3 font-semibold">€{p.price}</td>
                    <td className="py-3 text-yellow-500">
                      {"★".repeat(Math.round(p.rating))}
                    </td>
                    <td className="py-3">
                      <span className={`badge badge-sm ${p.availability ? "badge-success" : "badge-error"}`}>
                        {p.availability ? "In Stock" : "Out of Stock"}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Out of Stock */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <h2 className="text-lg font-bold mb-4">⚠️ Out of Stock Items</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {products
              .filter((p) => !p.availability)
              .map((p, i) => (
                <div key={i} className="flex items-center gap-4 border rounded-xl p-4">
                  <img
                    src={p.product_image}
                    alt={p.product_title}
                    className="w-14 h-14 object-cover rounded-lg"
                  />
                  <div>
                    <p className="font-semibold">{p.product_title}</p>
                    <p className="text-gray-500 text-sm">{p.category}</p>
                    <p className="text-[#9538E2] font-bold">€{p.price}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;