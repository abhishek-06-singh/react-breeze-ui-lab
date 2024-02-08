import { Fragment, useState } from "react";
import { Dialog, Popover, Tab, Transition } from "@headlessui/react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaQuestionCircle } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";
import { FaChevronDown } from "react-icons/fa";
import { IoMdArchive } from "react-icons/io";
import { useSelector } from "react-redux";
import blackimage from "../assets/white.png";
import Collection from "./Collection ";
import { CiLogout } from "react-icons/ci";
import {
  setEmail,
  setPassword,
  selectEmail,
  selectPassword,
} from "../store/authSlice";
import { selectGoogleEmail } from "../store/googleAuthSlice";
import { useNavigate } from "react-router-dom";
const navigation = {
  categories: [
    {
      name: "Women",
      featured: [
        {
          name: "New Arrivals",
          href: "/products/women",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg",
          imageAlt:
            "Models sitting back to back, wearing Basic Tee in black and bone.",
        },
        {
          name: "Basic Tees",
          href: "/products/women",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg",
          imageAlt:
            "Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.",
        },
        {
          name: "Accessories",
          href: "/products/accessories",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/mega-menu-category-03.jpg",
          imageAlt:
            "Model wearing minimalist watch with black wristband and white watch face.",
        },
        {
          name: "Carry",
          href: "/products/accessories",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/mega-menu-category-04.jpg",
          imageAlt:
            "Model opening tan leather long wallet with credit card pockets and cash pouch.",
        },
      ],
    },
    {
      name: "Men",
      featured: [
        {
          name: "New Arrivals",
          href: "/products/men",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-01.jpg",
          imageAlt:
            "Hats and sweaters on wood shelves next to various colors of t-shirts on hangers.",
        },
        {
          name: "Basic Tees",
          href: "/products/men",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-02.jpg",
          imageAlt: "Model wearing light heather gray t-shirt.",
        },
        {
          name: "Accessories",
          href: "/products/men",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-03.jpg",
          imageAlt:
            "Grey 6-panel baseball hat with black brim, black mountain graphic on front, and light heather gray body.",
        },
        {
          name: "Carry",
          href: "/products/men",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-04.jpg",
          imageAlt:
            "Model putting folded cash into slim card holder olive leather wallet with hand stitching.",
        },
      ],
    },
  ],
  pages: [
    { name: "Electronic", href: "/products/electronic" },
    { name: "Shopping Bag", href: "/bag" },
  ],
};
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Header = () => {
  const navigate = useNavigate();
  const email = useSelector(selectEmail);
  const googleEmail = useSelector(selectGoogleEmail);
  const [open, setOpen] = useState(false);
  const cartItemsCount = useSelector((state) => state.cart.totalItems);
  const cartItems = useSelector((state) => state.cart.items);

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                <div className="flex px-4 pb-2 pt-5">
                  <button
                    type="button"
                    className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <IoMdArchive className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Links */}
                <Tab.Group as="div" className="mt-2">
                  <div className="border-b border-gray-200">
                    <Tab.List className="-mb-px flex space-x-8 px-4">
                      {navigation.categories.map((category) => (
                        <Tab
                          key={category.name}
                          className={({ selected }) =>
                            classNames(
                              selected
                                ? "border-cyan-600 text-cyan-600"
                                : "border-transparent text-gray-900",
                              "flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium"
                            )
                          }
                        >
                          {category.name}
                        </Tab>
                      ))}
                    </Tab.List>
                  </div>
                  <Tab.Panels as={Fragment}>
                    {navigation.categories.map((category) => (
                      <Tab.Panel
                        key={category.name}
                        className="space-y-12 px-4 py-6"
                      >
                        <div className="grid grid-cols-2 gap-x-4 gap-y-10">
                          {category.featured.map((item) => (
                            <div key={item.name} className="group relative">
                              <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-md bg-gray-100 group-hover:opacity-75">
                                <img
                                  src={item.imageSrc}
                                  alt={item.imageAlt}
                                  className="object-cover object-center"
                                />
                              </div>
                              <span
                                onClick={() => navigate(item.href)}
                                className="mt-6 block text-sm font-medium text-gray-900"
                              >
                                <span
                                  className="absolute inset-0 z-10"
                                  aria-hidden="true"
                                />
                                {item.name}
                              </span>
                              <p
                                aria-hidden="true"
                                className="mt-1 text-sm text-gray-500"
                              >
                                Shop now
                              </p>
                            </div>
                          ))}
                        </div>
                      </Tab.Panel>
                    ))}
                  </Tab.Panels>
                </Tab.Group>

                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                  <div className="flow-root">
                    <span
                      className="-m-2 block p-2 font-medium text-gray-900"
                      onClick={() => navigate("/products/electronic")}
                    >
                      Electronics
                    </span>
                    <span
                      className="-m-2 block p-2 font-medium text-gray-900"
                      onClick={() => navigate("/bag")}
                    >
                      Shopping bag
                    </span>
                  </div>
                </div>

                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                  <div className="flow-root">
                    <p>{email || googleEmail}</p>
                  </div>
                  {email || googleEmail ? (
                    <div className="flow-root">
                      <button
                        onClick={handleLogout}
                        className="-m-2 block p-2 font-medium text-gray-900"
                      >
                        Logout
                      </button>
                    </div>
                  ) : (
                    <div className="flow-root">
                      <a
                        href="#"
                        className="-m-2 block p-2 font-medium text-gray-900"
                      >
                        Sign in
                      </a>
                    </div>
                  )}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
      <header className="relative">
        <nav aria-label="Top">
          <div className="bg-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex h-16 items-center justify-between">
                <div className="hidden lg:flex lg:flex-1 lg:items-center">
                  <span onClick={() => navigate("/home")}>
                    <span className="sr-only">Your Company</span>
                    <img className="h-12 w-auto" src={blackimage} alt="" />
                  </span>
                </div>

                <div className="hidden h-full lg:flex">
                  <Popover.Group className="inset-x-0 bottom-0 px-4">
                    <div className="flex h-full justify-center space-x-8">
                      {navigation.categories.map((category) => (
                        <Popover key={category.name} className="flex">
                          {({ open }) => (
                            <>
                              <div className="relative flex">
                                <Popover.Button
                                  className={classNames(
                                    open
                                      ? "text-cyan-600"
                                      : "text-gray-700 hover:text-gray-800",
                                    "relative flex items-center justify-center text-sm font-medium transition-colors duration-200 ease-out"
                                  )}
                                >
                                  {category.name}
                                  <span
                                    className={classNames(
                                      open ? "bg-cyan-600" : "",
                                      "absolute inset-x-0 -bottom-px z-20 h-0.5 transition duration-200 ease-out"
                                    )}
                                    aria-hidden="true"
                                  />
                                </Popover.Button>
                              </div>

                              <Transition
                                as={Fragment}
                                enter="transition ease-out duration-200"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="transition ease-in duration-150"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                              >
                                <Popover.Panel className="absolute inset-x-0 top-full z-10 bg-white text-sm text-gray-500">
                                  {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                                  <div
                                    className="absolute inset-0 top-1/2 bg-white shadow"
                                    aria-hidden="true"
                                  />
                                  {/* Fake border when menu is open */}
                                  <div
                                    className="absolute inset-0 top-0 mx-auto h-px max-w-7xl px-8"
                                    aria-hidden="true"
                                  >
                                    <div
                                      className={classNames(
                                        open ? "bg-gray-200" : "bg-transparent",
                                        "h-px w-full transition-colors duration-200 ease-out"
                                      )}
                                    />
                                  </div>

                                  <div className="relative">
                                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                                      <div className="grid grid-cols-4 gap-x-8 gap-y-10 py-16">
                                        {category.featured.map((item) => (
                                          <div
                                            key={item.name}
                                            className="group relative"
                                          >
                                            <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-md bg-gray-100 group-hover:opacity-75">
                                              <img
                                                src={item.imageSrc}
                                                alt={item.imageAlt}
                                                className="object-cover object-center"
                                              />
                                            </div>
                                            <span
                                              onClick={() =>
                                                navigate(item.href)
                                              }
                                              className="mt-4 block font-medium text-gray-900"
                                            >
                                              <span
                                                className="absolute inset-0 z-10"
                                                aria-hidden="true"
                                              />
                                              {item.name}
                                            </span>
                                            <p
                                              aria-hidden="true"
                                              className="mt-1"
                                            >
                                              Shop now
                                            </p>
                                          </div>
                                        ))}
                                      </div>
                                    </div>
                                  </div>
                                </Popover.Panel>
                              </Transition>
                            </>
                          )}
                        </Popover>
                      ))}

                      <span
                        className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                        onClick={() => navigate("/products/electronic")}
                      >
                        Electronics
                      </span>
                      <span
                        className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                        onClick={() => navigate("/bag")}
                      >
                        Shopping Bag
                      </span>
                    </div>
                  </Popover.Group>
                </div>

                {/* Mobile menu and search (lg-) */}
                <div className="flex flex-1 items-center lg:hidden">
                  <button
                    type="button"
                    className="-ml-2 rounded-md bg-white p-2 text-gray-400"
                    onClick={() => setOpen(true)}
                  >
                    <span className="sr-only">Open menu</span>
                    <IoMdArchive className="h-6 w-6" aria-hidden="true" />
                  </button>

                  {/* Search */}
                </div>

                {/* Logo (lg-) */}
                <span className="lg:hidden" onClick={() => navigate("/home")}>
                  <span className="sr-only">Your Company</span>
                  <img src={blackimage} alt="" className="h-8 w-auto" />
                </span>

                <div className="flex flex-1 items-center justify-end">
                  <div className="flex items-center lg:ml-8">
                    {/* Help */}

                    {/* Cart */}

                    <Popover className="ml-4 flow-root text-sm lg:relative lg:ml-8 z-50">
                      <Popover.Button className="group -m-2 flex items-center p-2">
                        <a
                          href="#"
                          className="group -m-2 flex items-center p-2"
                        >
                          <FaBagShopping
                            className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                            aria-hidden="true"
                          />
                          <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                            {cartItemsCount}
                          </span>
                          <span className="sr-only">
                            items in cart, view bag
                          </span>
                        </a>
                      </Popover.Button>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                      >
                        <Popover.Panel className="absolute inset-x-0 top-16 mt-px bg-white pb-6 shadow-lg sm:px-2 lg:left-auto lg:right-0 lg:top-full lg:-mr-1.5 lg:mt-3 lg:w-80 lg:rounded-lg lg:ring-1 lg:ring-black lg:ring-opacity-5">
                          <h2 className="sr-only">Shopping Cart</h2>

                          <form className="mx-auto max-w-2xl px-4">
                            <ul
                              role="list"
                              className="divide-y divide-gray-200"
                            >
                              {cartItems.map((item) => (
                                <li
                                  key={cartItems.id}
                                  className="flex items-center py-6"
                                >
                                  <img
                                    src={item.image}
                                    alt={item.title}
                                    className="h-16 w-16 flex-none rounded-md border border-gray-200"
                                  />
                                  <div className="ml-4 flex-auto">
                                    <h3 className="font-medium text-gray-900">
                                      {item.title}
                                    </h3>
                                    <p className="text-gray-500">
                                      ${item.price}
                                    </p>
                                  </div>
                                </li>
                              ))}
                            </ul>

                            <button
                              onClick={() => navigate("/checkout")}
                              className="w-full rounded-md border border-transparent bg-cyan-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                            >
                              Checkout
                            </button>

                            <p className="mt-6 text-center">
                              <span
                                onClick={() => navigate("/bag")}
                                className="text-sm font-medium text-cyan-600 hover:text-cyan-500"
                              >
                                View Shopping Bag
                              </span>
                            </p>
                          </form>
                        </Popover.Panel>
                      </Transition>
                    </Popover>
                    <Popover className="  text-sm lg:block  z-50 hidden">
                      <Popover.Button className="group  flex items-center p-2">
                        <a
                          href="#"
                          className="group -m-2 flex items-center p-2"
                        >
                          <CiLogout
                            className="h-6 w-6 flex-shrink-0 text-red-400 group-hover:text-red-500"
                            aria-hidden="true"
                          />
                        </a>
                      </Popover.Button>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                      >
                        <Popover.Panel className="absolute inset-x-0 top-10 mt-px bg-white pb-6 shadow-lg sm:px-2 lg:left-auto lg:right-0 lg:top-full lg:-mr-1.5 lg:mt-3 lg:w-80 lg:rounded-lg lg:ring-1 lg:ring-black lg:ring-opacity-5">
                          {email || googleEmail ? (
                            <div className="flex items-center text-center">
                              <button
                                onClick={handleLogout}
                                className=" font-medium text-red-500"
                              >
                                Logout
                              </button>
                            </div>
                          ) : (
                            <div className="flow-root">
                              <a
                                href="#"
                                className="-m-2 block p-2 font-medium text-gray-900"
                              >
                                Sign in
                              </a>
                            </div>
                          )}
                        </Popover.Panel>
                      </Transition>
                    </Popover>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
