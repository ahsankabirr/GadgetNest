const Footer = () => {
  return (
    <div className="mt-96 md:mt-80">
      <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content md:p-10">
        <aside>
          <p className="font-bold text-4xl">Gadget Heaven</p>
          <p className=" font-bold text-gray-500">
            Leading the way in cutting-edge technology and innovation.
          </p>
        </aside>
      </footer>
      <footer className="footer lg:justify-evenly  sm:footer-horizontal bg-base-200 text-base-content p-10">
        <nav className="text-center">
          <h6 className="footer-title ">Services</h6>
          <a className="link link-hover">Product Support</a>
          <a className="link link-hover">Order Tracking</a>
          <a className="link link-hover">Shipping & Delivery</a>
          <a className="link link-hover">Returns</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About Us</a>
          <a className="link link-hover">Careers</a>
          <a className="link link-hover">Contact</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
