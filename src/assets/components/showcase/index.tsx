import React from "react";
import Img1 from "../../img/img1.svg"
import Img2 from "../../img/img2.svg"
import i1 from "../../img/i1.svg"
import i2 from "../../img/i2.svg"
import i3 from "../../img/i3.svg"
import i4 from "../../img/i4.svg"
import i5 from "../../img/i5.svg"
import i6 from "../../img/i6.svg"

interface DishProps {
  title: string;
  price: string;
  description: string;
  category: "Appetizer" | "Main Course" | "Salad" | "Soup";
  image: string;
}

const dishes: DishProps[] = [
  {
    title: "Garlic Cheese Bread",
    price: "$7",
    description:
      "Toasted baguette with layers of mozzarella cheese and garlic butter. Perfect starter dish!",
    category: "Appetizer",
    image: i1,
  },
  {
    title: "Stuffed Mushrooms",
    price: "$8",
    description:
      "Oven-roasted mushrooms stuffed with herbed cheese, cream, and fresh herbs.",
    category: "Main Course",
    image: i2,
  },
  {
    title: "Bruschetta al Pomodoro",
    price: "$8",
    description:
      "Freshly toasted bread topped with ripe tomatoes, garlic, olive oil, and fresh basil.",
    category: "Appetizer",
    image:i3,
  },
  {
    title: "Chicken Wings BBQ",
    price: "$11",
    description:
      "Grilled chicken wings coated in smoky BBQ sauce, served with ranch dressing.",
    category: "Main Course",
    image:i4,
  },
  {
    title: "Creamy Pumpkin Soup",
    price: "$9",
    description:
      "Fresh pumpkin blended with cream, topped with toasted seeds and sour cream.",
    category: "Soup",
    image:i5,
  },
  {
    title: "Crispy Caesar Salad",
    price: "$6",
    description:
      "Crisp romaine lettuce, parmesan shavings, and Caesar dressing with croutons.",
    category: "Salad",
    image: i6,
  },
];

const AboutMenu: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-gray-900 to-gray-800">
<div className="max-w-7xl mx-auto py-24 px-4 md:px-8 lg:px-16 text-white">
  {/* Header */}
  <div className="text-center md:text-left mb-12">
    <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Company</h2>
    <p className="text-gray-300 text-base md:text-lg leading-relaxed">
      Since its opening, the Restaurant has become a place where taste, quality, and dining experience unite in harmony. We are here with a passion for serving delicious food made from the finest fresh ingredients, combined with a touch of love and creativity from our kitchen.
    </p>
    <p className="text-gray-300 text-base md:text-lg leading-relaxed mt-4">
      We believe that food is not just a means to fill the stomach, but a part of the story, happiness, and togetherness. That’s why every dish at the Restaurant is prepared with great care, to create special moments for you and your loved ones.
    </p>
  </div>

  {/* Stats */}
  <div className="flex flex-col sm:flex-row justify-around gap-8 mb-12 text-center sm:text-left">
    <div>
      <p className="text-yellow-400 text-4xl md:text-5xl font-bold mb-2">10+ years</p>
      <p className="text-gray-400 text-sm md:text-base">of Culinary Excellence</p>
    </div>
    <div>
      <p className="text-yellow-400 text-4xl md:text-5xl font-bold mb-2">5 awards</p>
      <p className="text-gray-400 text-sm md:text-base">Winning Chefs</p>
    </div>
    <div>
      <p className="text-yellow-400 text-4xl md:text-5xl font-bold mb-2">4.9/5</p>
      <p className="text-gray-400 text-sm md:text-base">Customer Rating on Average</p>
    </div>
  </div>

  {/* Images */}
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
    <div className="overflow-hidden rounded-xl shadow-lg">
      <img src={Img2} alt="chef" className="w-full h-full object-cover transform hover:scale-105 transition duration-500" />
    </div>
    <div className="overflow-hidden rounded-xl shadow-lg">
      <img src={Img1} alt="kitchen" className="w-full h-full object-cover transform hover:scale-105 transition duration-500" />
    </div>
  </div>
</div>

    <section className="max-w-6xl mx-auto text-center py-16">
      <h2 className="text-3xl font-semibold mb-6">Chef’s Favorites</h2>
      <p className="text-gray-400 mb-12">
        The dishes our chef can’t stop thinking about, and neither will you.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
        {dishes.map((dish, index) => (
          <div
            key={index}
            className="flex items-start gap-4 bg-gray-800 p-4 rounded-2xl shadow-lg"
          >
            <img
              src={dish.image}
              alt={dish.title}
              className="w-28 h-28 object-cover rounded-lg"
            />
            <div className="text-left flex-1">
              <span className="bg-gray-700 text-gray-200 text-xs px-3 py-1 rounded-full">
                {dish.category}
              </span>
              <div className="flex justify-between items-center mt-2">
                <h3 className="text-lg font-bold">{dish.title}</h3>
                <p className="text-yellow-300 font-semibold">{dish.price}</p>
              </div>
              <p className="text-gray-400 text-sm mt-1">{dish.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10">
        <button className="bg-yellow-400 text-black hover:bg-yellow-300 px-6 py-2 rounded-full text-lg">
          Explore Our Menu
        </button>
      </div>
    </section>
    </section>
  );
};

export default AboutMenu;
