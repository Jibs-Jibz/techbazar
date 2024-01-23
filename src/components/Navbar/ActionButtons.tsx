import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { AlignJustify } from "lucide-react";

import Link from "next/link";
import { ModeToggle } from "../ModeToggle";

const ActionButtons = () => {
  return (
    <div>
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger>
            <AlignJustify />
          </SheetTrigger>
          <SheetContent>
            <div className=" -mt-3 ">
              <ModeToggle />
            </div>

            <SheetHeader>
              <SheetDescription>
                <div className="flex flex-col space-y-4 items-start w-full text-lg text-black dark:text-white mt-10">
                  <Link href="/">Home</Link>
                  <Link href="#services">Services</Link>
                  <Link href="#industries">Industries We Serve</Link>
                  <Link href="#about">About</Link>
                  <Link href="#contact">Contact</Link>
                </div>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>

      <div className="hidden md:flex md:space-x-4">
        {/* <Button className="text-md" variant="ghost">
          <a href="mailto:">Contact Me</a>
        </Button> */}
        <ModeToggle />
      </div>
    </div>
  );
};

export default ActionButtons;
