import { Phone, Mail, MapPin, Clock } from "lucide-react";
export default function RestaurantPage() {
  return (
    <div className="bg-[#0a1a2f] text-white min-h-screen">
      {/* Header */}
      <header className="text-center py-12">
        <h1 className="text-4xl font-bold">Real Talk From Real Foodies</h1>
        <p className="text-gray-400 mt-2">Exceptional dining experiences, shared by those who’ve tasted the difference.</p>
      </header>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 px-8 py-20">
        <div className="bg-black p-8 rounded-2xl shadow-xl">
          <h2 className="text-2xl font-semibold mb-8">Contact Us</h2>
          <form className="space-y-6">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-4 rounded-xl bg-[#142a47] focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full p-4 rounded-xl bg-[#142a47] focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-4 rounded-xl bg-[#142a47] focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <textarea
              placeholder="Special Request"
              className="w-full p-4 rounded-xl bg-[#142a47] h-32 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />

            <div className="flex items-center gap-3">
              <input type="checkbox" className="accent-yellow-400" />
              <span className="text-sm text-gray-400">By checking the box you agree to our <a href="#" className="underline text-yellow-400">Terms of Service</a> and <a href="#" className="underline text-yellow-400">Privacy Policy</a>.</span>
            </div>

            <button className="w-full bg-yellow-400 text-black font-bold rounded-xl py-4 text-lg hover:bg-yellow-500 transition">
              Send Message
            </button>
          </form>
        </div>
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold mb-4">Craving Something Delicious?</h2>
          <p className="text-gray-300 mb-6">From savory bites to sweet delights, your cravings end here.</p>

          <div className="space-y-4 text-lg">
            <p className="flex items-center gap-3"><MapPin className="text-yellow-400" /> 21 Rue des Lilas 75001 Paris, France</p>
            <p className="flex items-center gap-3"><Phone className="text-yellow-400" /> +33 6 12 34 56 78</p>
            <p className="flex items-center gap-3"><Mail className="text-yellow-400" /> hello@platdelux.com</p>
            <p className="flex items-center gap-3"><Clock className="text-yellow-400" />
              <span>
                Mon-Fri: 12:00 PM - 2:30 PM / 7:00 PM - 10:30 PM<br />Sat: 7:00 PM - 11:00 PM
              </span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}