import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const NavbarCMS = () => {
  const router = useRouter();
  const currentRoute = router.pathname;

  return (
    <nav className="fixed top-0 z-20 w-full bg-white shadow-lg shadow-softBlack/5">
      <div className="flex flex-wrap items-center justify-between p-6 mx-auto sm:px-10 xl:px-16 sm:py-8">
        <div className="flex items-center gap-x-12">
          <Link href={"/"}>
            <div className="flex items-center text-2xl font-medium cursor-pointer text-softBlack">
              Reser<span className="font-bold">ville</span>
            </div>
          </Link>
        </div>
        <div className="flex items-center gap-x-10">
          {/* {TokenUtil.access_token ? (
            <ProfileSetting handleLogout={handleLogout} />
          ) : ( */}
          <Link href={"/auth/login"}>
            <button className="px-3 py-2 font-bold uppercase transition duration-300 border-2 rounded-md cursor-pointer text-softBlack border-softBlack">
              sign in
            </button>
          </Link>
          {/* )} */}
        </div>
      </div>
      <hr className="mx-10 border-gray-200" />
      <div className="flex flex-col gap-4 p-2 text-sm font-medium text-gray-500 sm:mx-10 xl:mx-16 md:p-0 md:flex-row md:gap-10">
        <Link href={"/dashboard"}>
          <div
            className={`p-2 py-5 cursor-pointer ${
              currentRoute === "/dashboard"
                ? "border-b-2 border-softBlack/80 transition duration-300"
                : ""
            }`}
          >
            Dashboard
          </div>
        </Link>
        <Link href={"/product"}>
          <div
            className={`p-2 py-5 cursor-pointer ${
              currentRoute === "/product" || currentRoute === "/product/[id]"
                ? "border-b-2 border-softBlack/80 transition duration-300"
                : ""
            }`}
          >
            Product
          </div>
        </Link>
        <Link href={"/rating"}>
          <div
            className={`p-2 py-5 cursor-pointer ${
              currentRoute === "/rating"
                ? "border-b-2 border-softBlack/80 transition duration-300"
                : ""
            }`}
          >
            Review & Rating
          </div>
        </Link>
        <Link href={"/transaction"}>
          <div
            className={`p-2 py-5 cursor-pointer ${
              currentRoute === "/transaction"
                ? "border-b-2 border-softBlack/80 transition duration-300"
                : ""
            }`}
          >
            Transaction
          </div>
        </Link>
        <Link href={"/user"}>
          <div
            className={`p-2 py-5 cursor-pointer ${
              currentRoute === "/user" || currentRoute === "/user/[id]"
                ? "border-b-2 border-softBlack/80 transition duration-300"
                : ""
            }`}
          >
            User Admin
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default NavbarCMS;
