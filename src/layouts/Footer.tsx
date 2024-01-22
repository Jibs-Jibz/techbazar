"use client";
import Logo from "@/components/Navbar/Logo";
import {
  FacebookLogo,
  IconContext,
  InstagramLogo,
  LinkedinLogo,
  TwitterLogo,
} from "@phosphor-icons/react";
import Link from "next/link";
// import { siteConfig } from "@/config/site"
// import { navLinks } from "@/lib/links"

const socialLinks = [
  // {
  //   route: "Facebook",
  //   path: "https://www.facebook.com/",
  //   icon: <FacebookLogo />,
  // },
  {
    route: "Twitter",
    path: "https://twitter.com/techbazr",
    icon: <TwitterLogo />,
  },
  {
    route: "Instagram",
    path: "https://www.instagram.com/techbazr?igsh=MzRlODBiNWFlZA==/",
    icon: <InstagramLogo />,
  },
  // {
  //   route: "LinkedIn",
  //   path: "https://www.linkedin.com/in//",
  //   icon: <LinkedinLogo />,
  // },
];

export default function Footer() {
  return (
    <footer className="mt-auto">
      <div className="mx-auto w-full  p-6 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link href="/">
            <Logo />
          </Link>
          <div className=" flex justify-center items-center ">
            <Link
              href="#about"
              className="text-base px-6 text-muted-foreground  "
            >
              About Us
            </Link>
            <Link
              href="#contact"
              className="text-base px-6 text-muted-foreground border-x border-x-green-400 "
            >
              Link Us
            </Link>
            <Link href="/" className="text-base px-6 text-muted-foreground  ">
              Legals
            </Link>
          </div>
          <ul className="mb-6 flex gap-6 flex-wrap items-center text-primary opacity-60 sm:mb-0">
            {socialLinks.map((link) => (
              <li key={link.route}>
                <a href={link.path}>
                  <IconContext.Provider
                    value={{
                      //   color: "limegreen",
                      size: 32,
                      weight: "fill",
                      mirrored: false,
                    }}
                  >
                    {link.icon}
                  </IconContext.Provider>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <hr className="my-6 text-muted-foreground sm:mx-auto lg:my-8" />
        <span className="block text-sm text-muted-foreground sm:text-center">
          © {new Date().getFullYear()}{" "}
          <a
            target="_blank"
            href="https://techbazr.com/"
            className="hover:underline"
          >
            TechBazr
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
