import ActionButtons from "@/components/Navbar/ActionButtons";
import Logo from "@/components/Navbar/Logo";
import { NavigationMenuBar } from "@/components/Navbar/NavigationMenuBar";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-6 lg:px-8 border-b py-6 sticky top-0 z-50 backdrop-filter backdrop-blur-lg bg-opacity-30 border-b-gray-200 ">
      <Link href={`/`}>
        <Logo />
      </Link>
      <NavigationMenuBar />
      <ActionButtons />
    </div>
  );
};

export default Navbar;
