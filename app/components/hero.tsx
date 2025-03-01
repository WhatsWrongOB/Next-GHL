import Image from "next/image";

export default function Hero() {
  return (
    <div>
          <div className="grid md:grid-cols-2 gap-4 p-6 md:p-16 max-w-7xl mx-auto items-center">
            {/* Left Section */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                Our coffee. Your business. A better way.
              </h1>
              <p className="text-lg text-gray-700">
                We’re making coffee better for people and the planet. Join over 1,000 UK businesses
                and enjoy quality coffee while making a difference to farmers worldwide.
              </p>
              <button className="bg-gray-900 text-white px-6 py-3 text-lg font-medium uppercase">
                GET STARTED
              </button>
            </div>
    
            {/* Right Section */}
            <div className="relative">
              <Image
                src="/image.png" 
                alt="Coffee Farmers"
                width={600}
                height={400}
                className="w-full h-auto"
              />
              <div className="absolute bottom-0 right-0 p-6 bg-teal-900 text-white max-w-sm">
                <h3 className="text-lg font-bold">Roasted in partnership with</h3>
                <h2 className="text-2xl font-bold">Pact COFFEE</h2>
                <p className="text-sm mt-2">
                  The coffee industry is broken. Pact’s on a mission to fix it.
                  We’re calling time on commodity coffee with better wages, better
                  practices, and better quality brews.
                </p>
              </div>
            </div>
                  {/* Free Delivery Banner */}
          </div>

<div className="w-full bg-teal-900 text-white text-center py-3 text-lg">
Free delivery on all orders
</div>
</div>
  );
}
