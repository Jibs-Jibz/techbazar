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
import { ComputerTower, DeviceTabletSpeaker } from "@phosphor-icons/react";

const components: { title: string; description: string }[] = [
  {
    title: "HR Consulting",

    description: "Elevate your HR processes with strategic IT solutions.",
  },
  {
    title: "Tech",

    description: "Your go-to partner for tech solutions.",
  },
  {
    title: "FMCG",

    description: "Stay competitive in the fast-paced FMCG sector.",
  },
  {
    title: "Finance",

    description: "Ensure secure and reliable financial operations.",
  },
];

export function NavigationMenuBar() {
  return (
    <NavigationMenu>
      <NavigationMenuList className="hidden md:flex md:space-x-4">
        <NavigationMenuItem>
          <NavigationMenuTrigger className=" bg-inherit ">
            Services
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <Link href="#services">
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <Link
                      href="#services"
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    >
                      {/* <IconITConsulting /> */}
                      <DeviceTabletSpeaker size={70} />
                      {/* <ComputerTower size={70} /> */}
                      <Link
                        href="#services"
                        className="mb-2 mt-4 text-lg font-medium"
                      >
                        IT Consulting
                      </Link>
                      <Link
                        href="#services"
                        className="text-sm leading-tight text-muted-foreground"
                      >
                        Strategic guidance for leveraging IT to achieve business
                        goals.
                      </Link>
                    </Link>
                  </NavigationMenuLink>
                </li>
                <ListItem title="Managed Services">
                  Outsourced management of your IT infrastructure for
                  efficiency.
                </ListItem>
                <ListItem title="Infrastructure Support & Maintenance">
                  Ongoing support and maintenance to keep your systems running
                  smoothly.
                </ListItem>
                <ListItem title="Web Design & Development">
                  Creative and effective web solutions tailored to your business
                  needs.
                </ListItem>
              </ul>
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <a
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      href="/"
                    >
                      {/* <IconVirtualizedInfrastructure /> */}
                      <ComputerTower size={70} />

                      <div className="mb-2 mt-4 text-lg font-medium">
                        Cloud Computing
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        Efficient utilization of virtualization technologies for
                        optimal resource allocation.
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <ListItem title="Surveillance Security System">
                  Robust security solutions to safeguard your premises and
                  assets.
                </ListItem>
                <ListItem title="Sales and Delivery of IT Equipment">
                  Procurement and delivery of high-quality IT equipment for your
                  business.
                </ListItem>
                <ListItem title="Cybersecurity">
                  Comprehensive cybersecurity measures to protect your digital
                  assets and data.
                </ListItem>
              </ul>
            </Link>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className=" bg-inherit ">
            Industries We Serve
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component, index) => (
                <Link key={index} href="#industries">
                  <ListItem title={component.title}>
                    {component.description}
                  </ListItem>
                </Link>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="#about" legacyBehavior passHref>
            <NavigationMenuLink className="font-medium">
              About
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="#contact" legacyBehavior passHref>
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
