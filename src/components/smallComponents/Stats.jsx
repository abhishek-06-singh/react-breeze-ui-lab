import React from "react";
const productStats = [
  { id: 1, name: "Featured Products", value: "500+" },
  { id: 2, name: "Categories Available", value: "50" },
  { id: 3, name: "New Arrivals", value: "100+" },
  { id: 4, name: "Total Products Listed", value: "10,000+" },
];
const Stats = () => {
  return (
    <div className="bg-indigo-950 py-24 sm:py-32">
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
  );
};

export default Stats;
