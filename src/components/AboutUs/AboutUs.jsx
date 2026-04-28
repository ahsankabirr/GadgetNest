import { useEffect } from "react";
import { Link } from "react-router";

const AboutUs = () => {
  useEffect(() => {
    document.title = "Gadget Nest | About Us";
  }, []);

  const team = [
    {
      name: "Alex Johnson",
      role: "CEO & Founder",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      bio: "10+ years in tech retail. Passionate about making premium gadgets accessible to everyone.",
    },
    {
      name: "Sarah Chen",
      role: "Head of Product",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      bio: "Former Apple engineer. Curates every product on our platform with obsessive attention to quality.",
    },
    {
      name: "Marcus Williams",
      role: "Lead Developer",
      image: "https://randomuser.me/api/portraits/men/55.jpg",
      bio: "Full-stack developer building seamless shopping experiences for gadget lovers worldwide.",
    },
    {
      name: "Priya Patel",
      role: "Customer Experience",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      bio: "Dedicated to making every customer interaction smooth, fast, and delightful.",
    },
  ];

  const stats = [
    { value: "50K+", label: "Happy Customers" },
    { value: "500+", label: "Products Listed" },
    { value: "20+", label: "Countries Served" },
    { value: "4.9★", label: "Average Rating" },
  ];

  const values = [
    {
      icon: "⚡",
      title: "Innovation First",
      desc: "We source the latest tech before anyone else so you're always ahead of the curve.",
    },
    {
      icon: "🔒",
      title: "Trusted Quality",
      desc: "Every product is verified and reviewed by our expert team before it hits the shelf.",
    },
    {
      icon: "🚀",
      title: "Fast Delivery",
      desc: "Order today, receive tomorrow. We partner with top logistics providers globally.",
    },
    {
      icon: "💬",
      title: "24/7 Support",
      desc: "Our team is always on standby to help you with anything you need, anytime.",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero */}
      <div className="bg-[#9538E2] py-20 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          About Gadget Nest
        </h1>
        <p className="text-lg w-full md:w-5/12 mx-auto opacity-90">
          We are on a mission to bring the world's best tech gadgets to your
          doorstep — faster, smarter, and more affordable than ever.
        </p>
        <Link
          to="/"
          className="btn bg-white text-[#9538E2] rounded-full mt-8 px-8"
        >
          Shop Now
        </Link>
      </div>

      {/* Stats */}
      <div className="max-w-5xl mx-auto px-4 -mt-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 text-center shadow-md"
            >
              <p className="text-3xl font-bold text-[#9538E2]">{stat.value}</p>
              <p className="text-gray-500 text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Our Story */}
      <div className="max-w-5xl mx-auto px-4 my-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4">Our Story</h2>
          <p className="text-gray-500 mb-4">
            Gadget Nest was born in 2020 out of frustration — finding quality
            tech accessories online was either too expensive, too slow, or too
            unreliable. We decided to fix that.
          </p>
          <p className="text-gray-500 mb-4">
            Starting with just 20 products and a small team of 3, we have grown
            into a platform trusted by over 50,000 customers across 20
            countries. Our catalog now spans electronics, photography, fitness,
            home appliances, and more.
          </p>
          <p className="text-gray-500">
            We are not just a store — we are gadget enthusiasts who live and
            breathe tech, and we want to share that passion with you.
          </p>
        </div>
        <div className="bg-[#9538E2] rounded-3xl p-8 text-white text-center">
          <p className="text-5xl mb-4">🛍️</p>
          <h3 className="text-2xl font-bold mb-2">Founded in 2020</h3>
          <p className="opacity-90">
            From a small startup to a global gadget destination — built by tech
            lovers, for tech lovers.
          </p>
        </div>
      </div>

      {/* Values */}
      <div className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">
            What We Stand For
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div
                key={i}
                className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-md transition"
              >
                <p className="text-4xl mb-3">{v.icon}</p>
                <h3 className="font-bold text-lg mb-2">{v.title}</h3>
                <p className="text-gray-500 text-sm">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team */}
      <div className="max-w-5xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-10">Meet the Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="font-bold text-lg">{member.name}</h3>
              <p className="text-[#9538E2] text-sm font-medium mb-2">
                {member.role}
              </p>
              <p className="text-gray-500 text-sm">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-[#9538E2] py-16 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Ready to Upgrade Your Tech?</h2>
        <p className="opacity-90 mb-6">
          Join 50,000+ happy customers and find your next favorite gadget today.
        </p>
        <Link to="/" className="btn bg-white text-[#9538E2] rounded-full px-10">
          Browse Products
        </Link>
      </div>
    </div>
  );
};

export default AboutUs;
