const RestaurantMap = () => {
  return (
    <section className="bg-[#0A1A2F] ">
    <div className="relative w-[90%] m-auto pt-[50px] h-96 md:h-[500px]">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2993.878895851711!2d69.19235799999998!3d41.376715799999985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8dd7ff3da527%3A0xf9c4858a5a35eda7!2sTashkent%20District%2C%20Tashkent%20Region%2C%20Uzbekistan!5e0!3m2!1sen!2s!4v1755433833826!5m2!1sen!2s"
        className="absolute top-0 left-0 w-full h-full rounded-xl shadow-lg"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Tashkent Map"
      />
     <div className="absolute bottom-4 left-4 bg-white bg-opacity-90 p-4 rounded-lg shadow-lg w-80 text-left">
  <h3 className="font-bold text-lg mb-1">Platjeu Restaurant</h3>
  <p className="text-gray-700 text-sm mb-1">21 Rue des Lilas 75001 Paris, France</p>
  <p className="text-gray-700 text-sm mb-1">📞 +33 6 12 34 56 78</p>
  <p className="text-yellow-500 font-semibold">⭐ 4.8 ★★★★★ (1,862)</p>
  <button className="mt-2 bg-yellow-500 text-black px-3 py-1 rounded-full hover:bg-yellow-600 transition">
    Route to restaurant
  </button>
</div>
    </div>
    </section>
  );
};

export default RestaurantMap;
