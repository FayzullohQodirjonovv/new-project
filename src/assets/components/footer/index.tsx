import { BsFacebook, BsInstagram, BsTwitter, BsWhatsapp } from "react-icons/bs";
import Patr from "../../img/patr.svg";

const Footer = () => {
  return (
    <footer className="bg-[#0A1A2F] text-white pt-16 pb-12 px-4 md:px-10">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
        {/* Left - CTA */}
        <div className="flex flex-col justify-between">
          <h4 className="text-2xl md:text-3xl font-bold mb-6">
            Explore Our French-Inspired Dishes
          </h4>
          <button className="bg-yellow-400 text-black px-6 py-3 rounded-full font-medium hover:bg-yellow-300 transition-all flex items-center gap-2 w-max">
            View Menu <span className="text-lg">↗</span>
          </button>
        </div>

        {/* Middle - Navigation */}
        <div>
          <h5 className="font-semibold text-lg mb-4">Quick Links</h5>
          <ul className="space-y-3 text-gray-300">
            {["Home", "Menu", "Our Story", "Reservation", "News"].map((link) => (
              <li
                key={link}
                className="hover:text-white cursor-pointer transition-colors"
              >
                {link}
              </li>
            ))}
          </ul>
        </div>

        {/* Right - Social */}
        <div>
          <p className="font-semibold mb-4">Connect With Us</p>
          <div className="flex gap-5 text-2xl">
            <a href="#" className="hover:text-yellow-400 transition-colors"><BsFacebook /></a>
            <a href="#" className="hover:text-yellow-400 transition-colors"><BsInstagram /></a>
            <a href="#" className="hover:text-yellow-400 transition-colors"><BsTwitter /></a>
            <a href="#" className="hover:text-yellow-400 transition-colors"><BsWhatsapp /></a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 my-10 mx-4 md:mx-0"></div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 px-4 md:px-0">
        <p className="mb-3 md:mb-0 text-center md:text-left">
          ©Platieu 2025. All rights reserved.
        </p>
        <div className="flex gap-6 mb-3 md:mb-0">
          <a href="#" className="hover:text-white transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Terms of Services
          </a>
        </div>
        <div className="mt-3 md:mt-0 flex justify-center md:justify-end w-full md:w-auto">
          <img src={Patr} alt="Logo" className="h-10 md:h-12" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
