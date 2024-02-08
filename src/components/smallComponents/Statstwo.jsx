import React from "react";
const productStats = [
  { id: 1, name: "Featured Products", value: "500+" },
  { id: 2, name: "Categories Available", value: "50" },
  { id: 3, name: "New Arrivals", value: "100+" },
  { id: 4, name: "Total Products Listed", value: "10,000+" },
];
const Statstwo = () => {
  return (
    <div className="relative bg-gradient-to-r from-indigo-800 to-cyan-900">
      <div className="absolute inset-x-0 bottom-0 ">
        <svg
          viewBox="0 0 224 12"
          fill="currentColor"
          className="w-full -mb-1 text-white"
          preserveAspectRatio="none"
        >
          <path d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z" />
        </svg>
      </div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Enjoy your shopping
              </h2>
              <p className="mt-4 text-lg leading-8 text-gray-300">
                Providing the best products for seamless online shopping
                experiences.
              </p>
            </div>
            <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
              {productStats.map((stat) => (
                <div key={stat.id} className="flex flex-col bg-white/5 p-8">
                  <dt className="text-sm font-semibold leading-6 text-gray-300">
                    {stat.name}
                  </dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight text-white">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statstwo;
