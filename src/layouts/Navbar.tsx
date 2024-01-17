import ActionButtons from "@/components/Navbar/ActionButtons";
import Logo from "@/components/Navbar/Logo";
import { NavigationMenuBar } from "@/components/Navbar/NavigationMenuBar";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-10 border-b py-6">
      <Link href={`/`}>
        <Logo />
      </Link>
      <NavigationMenuBar />
      <ActionButtons />
    </div>
  );
};

export default Navbar;
