import { useState } from "react";

const faqs = [
  {
    question: "What are the restaurant's hours of operation?",
    answer: "We are open every day from 10:00 AM to 10:00 PM.",
  },
  {
    question: "Do I need to make a reservation before coming?",
    answer: "Reservations are recommended for large groups, but walk-ins are always welcome.",
  },
  {
    question: "Is there a vegetarian or vegan menu available?",
    answer: "Yes, we offer a variety of vegetarian and vegan options to choose from.",
  },
  {
    question: "Does this restaurant offer delivery services?",
    answer: "We partner with local delivery services. Check our website for available options in your area.",
  },
  {
    question: "Can I host a private event at the restaurant?",
    answer: "Absolutely! Contact us to discuss options for hosting private events.",
  },
  {
    question: "Is parking available?",
    answer: "Yes, we offer free parking for all our guests.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null); // yopish
    } else {
      setOpenIndex(index); // ochish
    }
  };

  return (
    <div className="bg-[#0A1A2F] text-white min-h-screen py-10 px-4 md:px-20 ">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold mb-2">What's on Your Mind?</h2>
        <p className="text-gray-400">We've answered the questions you didn't know you had.</p>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-[#11233B] rounded-lg shadow-md overflow-hidden"
          >
            <button
              className="w-full flex justify-between items-center p-4 text-left text-white font-semibold hover:bg-[#1A2A4D] transition"
              onClick={() => toggle(index)}
            >
              {faq.question}
              <span className="ml-2 text-xl">{openIndex === index ? "-" : "+"}</span>
            </button>
            {openIndex === index && (
              <div className="p-4 text-gray-300 border-t border-gray-700">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
