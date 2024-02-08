import React from "react";

const featuredTestimonial = {
  body: "I recently purchased a smartphone from this app and it exceeded my expectations. The delivery was fast, and the product quality is excellent. Special thanks to Akshay Saini for creating such an amazing platform!",
  author: {
    name: "Anand Gadagin",
    handle: "Happy Customer",
    company: "Cognizant",
    imageUrl:
      "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=1024&h=1024&q=80",
  },
};

const testimonials = [
  [
    [
      {
        body: "I recently purchased a smartphone from this app and it exceeded my expectations. The delivery was fast, and the product quality is excellent. Highly recommended!",
        author: {
          name: "Ajay Pathak",
          handle: "Satisfied Customer",
          company: "UniBlox",
          imageUrl: "https://randomuser.me/api/portraits/men/2.jpg",
        },
      },
      {
        body: "This app has a fantastic collection of fashion items. I bought a dress for a special occasion and got so many compliments. Definitely my go-to fashion app now!",
        author: {
          name: "Pujarini Jena",
          handle: "Fashionista",
          company: "Unacademy",
          imageUrl: "https://randomuser.me/api/portraits/women/11.jpg",
        },
      },
      {
        body: "I bought a pair of headphones from this app, and I'm loving the quality of sound. The prices are reasonable too. Will shop again!",
        author: {
          name: "Hassam Saeed",
          handle: "Music Lover",
          company: "Devaxon",
          imageUrl: "https://randomuser.me/api/portraits/men/5.jpg",
        },
      },
      {
        body: "Recently bought a gaming console from this app. The delivery was quick, and the packaging was excellent. Happy with my purchase!",
        author: {
          name: "Rabindra Mahato",
          handle: "Gamer",
          company: "Mphasis",
          imageUrl: "https://randomuser.me/api/portraits/men/14.jpg",
        },
      },
    ],
    [
      {
        body: "I purchased some home decor items from this app, and I'm thrilled with how they've transformed my space. Great quality and affordable prices!",
        author: {
          name: "Shivam Pandey",
          handle: "Home Decor Enthusiast",
          company: "Körber Supply Chain",
          imageUrl: "https://randomuser.me/api/portraits/men/3.jpg",
        },
      },
      {
        body: "I'm impressed with the variety of products available on this app. Bought some skincare products and they worked wonders for my skin!",
        author: {
          name: "Saurabh Singh",
          handle: "Skincare Enthusiast",
          company: "Cognizant",
          imageUrl: "https://randomuser.me/api/portraits/men/7.jpg",
        },
      },
      {
        body: "Bought a kitchen appliance from this app, and it's made cooking so much easier. The app offers a great selection of products for every need.",
        author: {
          name: "Jahangir Khan",
          handle: "Home Chef",
          company: "TATA Consultancy Services",
          imageUrl: "https://randomuser.me/api/portraits/men/10.jpg",
        },
      },
    ],
  ],
  [
    [
      {
        body: "I've been using this app for grocery shopping, and it's been a game-changer. The app is easy to navigate, and the delivery is always on time.",
        author: {
          name: "Meenakshi Pandey",
          handle: "Grocery Shopper",
          company: "Siemens Healthineers",
          imageUrl: "https://randomuser.me/api/portraits/women/13.jpg",
        },
      },
      {
        body: "This app is my go-to for all my tech needs. Recently bought a laptop and couldn't be happier with my purchase. Thanks, team!",
        author: {
          name: "Shaquib Ahmad Khan",
          handle: "Tech Enthusiast",
          company: "Persistent systems",
          imageUrl: "https://randomuser.me/api/portraits/men/8.jpg",
        },
      },
      {
        body: "I've been shopping from this app for a while now, and it never disappoints. The products are always as described and the customer service is excellent.",
        author: {
          name: "Shivam Govind Rao",
          handle: "Happy Customer",
          company: "Oriserve",
          imageUrl: "https://randomuser.me/api/portraits/men/9.jpg",
        },
      },
    ],
    [
      {
        body: "Bought some fitness equipment from this app, and it's been a game-changer for my workouts. The app offers a great selection of products at competitive prices.",
        author: {
          name: "Nikita Jit",
          handle: "Fitness Enthusiast",
          company: "Accenture",
          imageUrl: "https://randomuser.me/api/portraits/women/12.jpg",
        },
      },
      {
        body: "I recently purchased some books from this app, and I'm impressed with the quick delivery and excellent packaging. Will definitely buy again!",
        author: {
          name: "Nikhil Kumar",
          handle: "Bookworm",
          company: "BlueYonder",
          imageUrl: "https://randomuser.me/api/portraits/men/4.jpg",
        },
      },
      {
        body: "Bought a pair of running shoes from this app, and they're so comfortable. The app offers a wide range of products for every fitness need.",
        author: {
          name: "Thota Ritikesh",
          handle: "Runner",
          company: "Phoenix American",
          imageUrl: "https://randomuser.me/api/portraits/men/6.jpg",
        },
      },
      {
        body: "Recently bought some coding books from this app, and they've been incredibly helpful in my learning journey. Great selection of resources!",
        author: {
          name: "Hemshu Shivhare",
          handle: "Aspiring Developer",
          company: "Impledge technologies",
          imageUrl: "https://randomuser.me/api/portraits/men/15.jpg",
        },
      },
    ],
  ],
];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const Testemonials = () => {
  return (
    <div className="relative isolate bg-white pb-32 pt-24 sm:pt-32">
      <div
        className="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl"
        aria-hidden="true"
      ></div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-indigo-600">
            Testimonials
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            People with amazing experience
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm leading-6 text-gray-900 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4">
          <figure className="col-span-2 hidden sm:block sm:rounded-2xl sm:bg-white sm:shadow-lg sm:ring-1 sm:ring-gray-900/5 xl:col-start-2 xl:row-end-1">
            <blockquote className="p-12 text-xl font-semibold leading-8 tracking-tight text-gray-900">
              <p>{`“${featuredTestimonial.body}”`}</p>
            </blockquote>
            <figcaption className="flex items-center gap-x-4 border-t border-gray-900/10 px-6 py-4">
              <img
                className="h-10 w-10 flex-none rounded-full bg-gray-50"
                src={featuredTestimonial.author.imageUrl}
                alt=""
              />
              <div className="flex-auto">
                <div className="font-semibold">
                  {featuredTestimonial.author.name}
                </div>
                <div className="text-gray-600">{`@${featuredTestimonial.author.handle}`}</div>
              </div>
              <img
                className="h-10 w-auto flex-none"
                src={featuredTestimonial.author.logoUrl}
                alt=""
              />
            </figcaption>
          </figure>
          {testimonials.map((columnGroup, columnGroupIdx) => (
            <div
              key={columnGroupIdx}
              className="space-y-8 xl:contents xl:space-y-0"
            >
              {columnGroup.map((column, columnIdx) => (
                <div
                  key={columnIdx}
                  className={classNames(
                    (columnGroupIdx === 0 && columnIdx === 0) ||
                      (columnGroupIdx === testimonials.length - 1 &&
                        columnIdx === columnGroup.length - 1)
                      ? "xl:row-span-2"
                      : "xl:row-start-1",
                    "space-y-8"
                  )}
                >
                  {column.map((testimonial) => (
                    <figure
                      key={testimonial.author.handle}
                      className="rounded-2xl bg-cyan-700/10 p-6 shadow-lg ring-1 ring-gray-900/5"
                    >
                      <blockquote className="text-gray-900">
                        <p>{`“${testimonial.body}”`}</p>
                      </blockquote>
                      <figcaption className="mt-6 flex items-center gap-x-4">
                        <img
                          className="h-10 w-10 rounded-full bg-gray-50"
                          src={testimonial.author.imageUrl}
                          alt=""
                        />
                        <div>
                          <div className="font-semibold">
                            {testimonial.author.name}
                          </div>
                          <div className="text-gray-600">{`@${testimonial.author.handle}`}</div>
                        </div>
                      </figcaption>
                    </figure>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testemonials;
