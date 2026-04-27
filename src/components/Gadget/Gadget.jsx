const Gadget = ({ gadget }) => {
  const { product_title, product_image, price } = gadget;
  return (
    <div>
      <div className="card bg-base-100  shadow-sm">
        <figure>
          <img
            className="h-48 object-cover w-full"
            src={product_image}
            alt={product_title}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{product_title}</h2>
          <p>Price: €{price}</p>
          <div className="card-actions justify-start">
            <button className="btn btn-outline">View Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gadget;
