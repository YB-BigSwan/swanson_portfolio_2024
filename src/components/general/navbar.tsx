"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Logo from "@/assets/logo.svg";
import LogoSm from "@/assets/logo-sm.svg";
import NeoButton from "../neo-ui/neo-button";
import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer"; // Ensure this path is correct
import { Menu, X } from "lucide-react"; // Icons for the hamburger menu and close button
import { useMediaQuery } from "@/hooks/use-media-query";
import { Button } from "../ui/button";

const NavBar = () => {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    setVisible(currentScrollY <= lastScrollY);
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div
      className={`w-full flex justify-center items-center p-3 bg-blue-100 border-t-2 border-b-2 border-black fixed top-0 z-50 transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="w-11/12 md:w-4/5 flex justify-between items-center">
        {/* Logo */}
        {!isDesktop ? (
          <Link href="#top">
            <LogoSm alt="A logo of a swan" />
          </Link>
        ) : (
          <Link href="#top">
            <Logo alt="A logo of a swan" />
          </Link>
        )}

        {/* Conditional rendering for menu based on screen size */}
        {!isDesktop ? (
          <>
            {/* Hamburger menu button */}

            {/* Drawer component for mobile menu */}
            <Drawer direction="right">
              <DrawerTrigger asChild>
                <Button className="text-gray-50 p-2" aria-label="Toggle menu">
                  <Menu size={30} />
                </Button>
              </DrawerTrigger>
              <DrawerContent>
                <NavigationMenu className="flex flex-col justify-start items-start">
                  <DrawerClose asChild>
                    <Button
                      className="text-gray-50 m-2 p-2"
                      aria-label="Toggle menu"
                    >
                      <X size={30} />
                    </Button>
                  </DrawerClose>
                  <NavigationMenuList className="flex flex-col justify-center items-start gap-4 text-2xl pl-4 pt-4">
                    <DrawerClose asChild>
                      <Link href="#top">Home</Link>
                    </DrawerClose>
                    <DrawerClose asChild>
                      <Link href="#about">About</Link>
                    </DrawerClose>
                    <DrawerClose asChild>
                      <Link href="#projects">Projects</Link>
                    </DrawerClose>
                    <DrawerClose asChild>
                      <Link href="#skills">Skills</Link>
                    </DrawerClose>
                    <DrawerClose asChild>
                      <Link href="#contact">Contact</Link>
                    </DrawerClose>
                  </NavigationMenuList>
                </NavigationMenu>
              </DrawerContent>
            </Drawer>
          </>
        ) : (
          // Full navigation menu for desktop view
          <NavigationMenu>
            <NavigationMenuList className="flex flex-row gap-2">
              <NavigationMenuItem>
                <NavigationMenuLink href="#about">
                  <NeoButton buttonText="About" tooltipText="Go to About" />
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="#projects">
                  <NeoButton
                    buttonText="Projects"
                    tooltipText="See my projects"
                  />
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="#skills">
                  <NeoButton
                    buttonText="Skills"
                    tooltipText="Learn about my skills"
                  />
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="#contact">
                  <NeoButton buttonText="Contact" tooltipText="Get in touch" />
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        )}
      </div>
    </div>
  );
};

export default NavBar;
