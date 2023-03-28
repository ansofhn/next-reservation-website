import { AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrollChange, setScrollChange] = useState(false);

  const router = useRouter();
  const currentRoute = router.pathname;

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 80) {
        setScrollChange(true);
      } else {
        setScrollChange(false);
      }
    });
  }, []);

  //lets start animation
  const item = {
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        ease: "easeInOut",
        duration: 0.2,
        delay: 1,
      },
    },
  };

  return (
    <div>
      <div
        className={`fixed top-0 z-40 flex flex-wrap items-center justify-between w-full p-6 mx-auto ${
          scrollChange || currentRoute !== "/"
            ? "shadow-lg shadow-gray-600/5 bg-white"
            : "bg-gradient-to-b from-white to-softGray"
        } sm:px-10 xl:px-16 sm:py-8`}
      >
        <Link href={"/"}>
          <div className="flex items-center text-2xl font-medium cursor-pointer text-softBlack">
            Reser<span className="font-bold">ville</span>
          </div>
        </Link>

        <div className="flex items-center md:gap-2 lg:gap-4 lg:order-2">
          <Link href={"/dashboard"}>
            <button className="px-3 py-2 font-bold uppercase transition duration-300 border-2 rounded-md cursor-pointer border-softBlack text-softBlack">
              sign in
            </button>
          </Link>

          <button
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm rounded-lg text-softBlack focus:outline-none focus:ring-0 lg:hidden"
            onClick={() => {
              setOpen(!open);
            }}
          >
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div className="hidden w-full mt-10 bg-transparent rounded-lg lg:mt-0 lg:justify-between lg:items-center lg:flex lg:w-auto lg:order-1 lg:p-0">
          <div className="flex flex-col gap-4 p-2 font-medium text-softBlack lg:p-0 lg:flex-row lg:gap-10 lg:font-medium">
            <Link href={"/"}>
              <div className="relative p-2 cursor-pointer group">
                Home
                <div
                  className={`w-full h-0.5 bg-softBlack/80 mt-1 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ${
                    currentRoute === "/" ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </div>
            </Link>
            <Link href={"/product"}>
              <div className="relative p-2 cursor-pointer group">
                Services
                <div
                  className={`w-full h-0.5 bg-softBlack/80 mt-1 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ${
                    currentRoute === "/product" ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </div>
            </Link>
            <Link href={"/about"}>
              <div className="relative p-2 cursor-pointer group">
                About
                <div
                  className={`w-full h-0.5 bg-softBlack/80 mt-1 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ${
                    currentRoute === "/about" ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </div>
            </Link>
            <Link href={"/contact"}>
              <div className="relative p-2 cursor-pointer group">
                Contact
                <div
                  className={`w-full h-0.5 bg-softBlack/80 mt-1 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ${
                    currentRoute === "/contact" ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </div>
            </Link>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {/* Navbar Mobile */}
        {open && (
          <motion.div
            className="fixed z-40 flex flex-col items-center justify-center w-full h-full bg-darkBlack text-softGray"
            variants={item}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "100vh", opacity: 1 }}
            transition={{ duration: 0.4 }}
            exit="exit"
          >
            {/* <RemoveScrollBar /> */}
            <div className="fixed top-0 flex flex-wrap items-center justify-between w-full p-6 mx-auto bg-darkBlack sm:px-10 sm:py-10 md:py-8">
              <Link href={"/"}>
                <div
                  onClick={() => {
                    setOpen(!open);
                  }}
                  className="flex items-center text-2xl font-medium cursor-pointer text-midGray"
                >
                  Reser<span className="font-bold">ville</span>
                </div>
              </Link>

              <div className="flex items-center">
                <button
                  type="button"
                  className="inline-flex items-center p-2.5 ml-3 text-sm rounded-lg text-midGray focus:outline-none focus:ring-0 lg:hidden"
                  onClick={() => {
                    setOpen(!open);
                  }}
                >
                  <FaTimes className="w-6 h-6" />
                </button>
              </div>
            </div>

            <motion.div
              className="inline-flex mb-6 text-base font-light tracking-widest uppercase text-midGray"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              exit={{
                opacity: 0,
                transition: {
                  ease: "easeInOut",
                  delay: 0.8,
                },
              }}
            >
              menu
            </motion.div>
            <Link href={"/"}>
              <motion.div
                onClick={() => {
                  setOpen(!open);
                }}
                className={`inline-flex my-2 text-3xl font-bold ${
                  currentRoute === "/" ? "text-softGray" : "text-midGray"
                } `}
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
                exit={{
                  opacity: 0,
                  y: 80,
                  transition: {
                    ease: "easeInOut",
                    delay: 0.9,
                  },
                }}
              >
                Home
              </motion.div>
            </Link>
            <Link href={"/product"}>
              <motion.div
                onClick={() => {
                  setOpen(!open);
                }}
                className={`inline-flex my-2 text-3xl font-bold ${
                  currentRoute === "/product" ||
                  currentRoute === "/product/[id]"
                    ? "text-softGray"
                    : "text-midGray"
                } `}
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7 }}
                exit={{
                  opacity: 0,
                  y: 80,
                  transition: {
                    ease: "easeInOut",
                    delay: 0.8,
                  },
                }}
              >
                Services
              </motion.div>
            </Link>
            <Link href={"/about"}>
              <motion.div
                onClick={() => {
                  setOpen(!open);
                }}
                className={`inline-flex my-2 text-3xl font-bold ${
                  currentRoute === "/about" ? "text-softGray" : "text-midGray"
                } `}
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                exit={{
                  opacity: 0,
                  y: 80,
                  transition: {
                    ease: "easeInOut",
                    delay: 0.6,
                  },
                }}
              >
                About Us
              </motion.div>
            </Link>
            <Link href={"/contact"}>
              <motion.div
                onClick={() => {
                  setOpen(!open);
                }}
                className={`inline-flex my-2 text-3xl font-bold ${
                  currentRoute === "/contact" ? "text-softGray" : "text-midGray"
                } `}
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                exit={{
                  opacity: 0,
                  y: 80,
                  transition: {
                    ease: "easeInOut",
                    delay: 0.5,
                  },
                }}
              >
                Contact
              </motion.div>
            </Link>
            <motion.div
              className="absolute flex items-center text-xs font-light tracking-widest bottom-6 text-midGray"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              exit={{
                opacity: 0,
                transition: {
                  ease: "easeInOut",
                  delay: 0.3,
                },
              }}
            >
              © 2023 Reserville
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
