"use client";

import * as React from "react";

import Link from "next/link";

import { cn } from "@/lib/utils";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import Logo from "./Logo";

const components: { title: string; description: string }[] = [
  {
    title: "Finance and Banking",

    description: "Lorem ipsum dolor sit amet consectetur.",
  },
  {
    title: "Healthcare and Life Sciences",

    description: "Lorem ipsum dolor sit amet consectetur.",
  },
  {
    title: "Retail and E-commerce",

    description: "Lorem ipsum dolor sit amet consectetur.",
  },
  {
    title: "Manufacturing and Logistics",

    description: "Lorem ipsum dolor sit amet consectetur.",
  },
  {
    title: "Education and E-learning",

    description: "Lorem ipsum dolor sit amet consectetur.",
  },
  {
    title: "Government and Public Sector",

    description: "Lorem ipsum dolor sit amet consectetur.",
  },
  {
    title: "Energy and Utilities",

    description: "Lorem ipsum dolor sit amet consectetur.",
  },
];

export function NavigationMenuBar() {
  return (
    <NavigationMenu>
      <NavigationMenuList className="hidden md:flex md:space-x-4">
        <NavigationMenuItem>
          <NavigationMenuTrigger>Services</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <Logo />
                    <div className="mb-2 mt-4 text-lg font-medium">
                      Information Technology Consulting
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      IT solutions across various industries.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem title="Managed Data Connectivity">
                Lorem ipsum dolor sit amet consectetur.
              </ListItem>
              <ListItem title="Virus & Spam Protection">
                Lorem ipsum dolor sit amet consectetur.
              </ListItem>
              <ListItem title="Cloud Backup">
                Lorem ipsum dolor sit amet consectetur.
              </ListItem>
            </ul>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <Logo />
                    <div className="mb-2 mt-4 text-lg font-medium">
                      Cyber Security
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem title="Office 365 for Business">
                Lorem ipsum dolor sit amet consectetur.
              </ListItem>
              <ListItem title="Data Cabling">
                Lorem ipsum dolor sit amet consectetur.
              </ListItem>
              <ListItem title="Hosted Telephony">
                Lorem ipsum dolor sit amet consectetur.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Industries We Serve</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem key={component.title} title={component.title}>
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className="font-medium">
              About
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className="font-medium">
              Contact
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
