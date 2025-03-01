import Image from "next/image";

export default function Cofee() {
  return (
    <div className="relative w-full min-h-screen font-sans">
      {/* Offer Section */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-center text-3xl font-bold mb-8">What Do We Offer?</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Offices Card */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <Image src="/office-coffee.jpg" alt="Office Coffee" width={600} height={400} className="w-full h-auto" />
            <div className="p-6">
              <h3 className="text-xl font-bold">OFFICES</h3>
              <p className="text-gray-700 mt-2">
                Whether you’re a large business or a scaling start-up, we’ll deliver knockout coffee to keep your team caffeinated.
                We also offer expert training, equipment, and ongoing support.
              </p>
              <button className="mt-4 bg-orange-500 text-white px-6 py-2 font-medium uppercase w-full">
                COFFEE FOR OFFICES
              </button>
            </div>
          </div>

          {/* Hospitality Card */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <Image src="/hospitality-coffee.jpg" alt="Hospitality Coffee" width={600} height={400} className="w-full h-auto" />
            <div className="p-6">
              <h3 className="text-xl font-bold">HOSPITALITY</h3>
              <p className="text-gray-700 mt-2">
                From country hotels to city cafés, we’re proud to be the coffee brand of choice for hundreds of UK hospitality businesses.
                Discover how we can help with tailored packages, training, and support.
              </p>
              <button className="mt-4 bg-orange-500 text-white px-6 py-2 font-medium uppercase w-full">
                COFFEE FOR HOSPITALITY
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Chat Icon */}
      <div className="fixed bottom-6 right-6 bg-white border rounded-full p-3 shadow-lg cursor-pointer flex items-center">
        💬 <span className="ml-2">How can we help?</span>
      </div>
      <section className="py-16 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold">Looking for something a little different?</h2>
        <p className="text-gray-700 mt-4">
          We understand that there’s no one size fits all approach to coffee. Whether you’re a wholesaler
          or a retail business, chat to our team about your requirements and we’ll do our best to
          accommodate them.
        </p>
        <button className="mt-6 border border-gray-900 text-gray-900 px-6 py-2 text-lg font-medium uppercase hover:bg-gray-900 hover:text-white">
          GET IN TOUCH
        </button>
      </section>
    </div>
  );
}
