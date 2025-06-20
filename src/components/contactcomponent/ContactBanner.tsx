import { Link } from "react-router-dom";

const ContactBanner = () => {
  return (
    <div className="w-full bg-gradient-to-r from-white to-[#D1BCF9] pt-[80px] p-30 mt-15">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800">
          Contact Us
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-gray-700">
          <Link
            to="/"
            className="text-black underline underline-offset-2 font-medium"
          >
            Home
          </Link>
          <span className="text-black mx-1">{">"}</span> Contact Us
        </p>
      </div>
    </div>
  );
};

export default ContactBanner;
