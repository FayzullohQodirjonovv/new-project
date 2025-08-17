import React, { useState } from "react";
import Navbar_logo from "../../img/navbar_logo.svg";
import Navbar_icom from "../../img/navbar_icom.svg";
import Union from "../../img/union.svg";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="mainrov relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${Navbar_icom})` }}
    >
      {/* Overlay */}
<div className="mainrov">
        <div
        className="absolute inset-0"
        style={{ backgroundColor: 'rgba(10, 21, 32, 0.5)' }}
      ></div>

      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full flex justify-between items-center p-6 text-white z-20">
        <img src={Navbar_logo} alt="" className="h-10" />

        {/* Desktop menu */}
        <ul
          className="hidden md:flex gap-6 p-3 rounded-[70px] cursor-pointer"
          style={{ backgroundColor: 'rgba(10, 21, 32, 0.5)' }}
        >
          <li className="cursor-pointer font-bold text-white hover:text-red-500 transition-colors duration-300">
            Home
          </li>
          <li className="cursor-pointer font-bold text-white hover:text-red-500 transition-colors duration-300">
            Menu
          </li>
          <li className="cursor-pointer font-bold text-white hover:text-red-500 transition-colors duration-300">
            Our Story
          </li>
          <li className="cursor-pointer font-bold text-white hover:text-red-500 transition-colors duration-300">
            Location
          </li>
          <li className="cursor-pointer font-bold text-white hover:text-red-500 transition-colors duration-300">
            News
          </li>
        </ul>

        {/* Desktop Reserve Button */}
        <button className="hidden md:block bg-yellow-500 text-black px-4 py-2 rounded-full hover:bg-yellow-600 transition">
          Reserve a Seat
        </button>

        {/* Mobile Burger Button */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="absolute top-20 left-0 w-full flex flex-col items-center gap-4 p-6 bg-black bg-opacity-80 z-30 md:hidden rounded-b-2xl">
          <li className="cursor-pointer font-bold text-white hover:text-red-500 transition-colors duration-300">
            Home
          </li>
          <li className="cursor-pointer font-bold text-white hover:text-red-500 transition-colors duration-300">
            Menu
          </li>
          <li className="cursor-pointer font-bold text-white hover:text-red-500 transition-colors duration-300">
            Our Story
          </li>
          <li className="cursor-pointer font-bold text-white hover:text-red-500 transition-colors duration-300">
            Location
          </li>
          <li className="cursor-pointer font-bold text-white hover:text-red-500 transition-colors duration-300">
            News
          </li>
          <button className="bg-yellow-500 text-black px-6 py-3 rounded-full hover:bg-yellow-600 transition mt-4">
            Reserve a Seat
          </button>
        </ul>
      )}
</div>

      {/* Center Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <img className="mb-[10px]" src={Union} alt="" />
        <i className="text-[#F9E68E] text-4xl mb-[20px] font-bold max-w-xl">
          Welcome to our restaurant
        </i>
        <i className="mb-4">
          Savor exquisite culinary creations prepared with fresh, local ingredients. Each dish celebrates <br />
          vibrant flavors, presented in an ambiance of sophistication. Join us for an unforgettable dining <br />
          experience where every bite tells a story.
        </i>
        <i className="text-5xl font-serif mb-6">
          A Symphony of <br /> Flavors in Every Bite
        </i>
        <div className="flex gap-4">
          <button className="bg-black bg-opacity-70 px-6 py-3 rounded-full hover:bg-opacity-90 transition">
            Our Menu
          </button>
          <button className="bg-yellow-500 text-black px-6 py-3 rounded-full hover:bg-yellow-600 transition">
            Reserve a Seat
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
