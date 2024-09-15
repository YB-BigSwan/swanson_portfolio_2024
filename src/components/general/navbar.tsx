"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Logo from "@/assets/logo.svg";
import NeoButton from "../neo-ui/neo-button";
import { useEffect, useState } from "react";

const NavBar = () => {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY) {
      setVisible(false); // Scroll down
    } else {
      setVisible(true); // Scroll up
    }
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lastScrollY]);

  return (
    <div
      className={`w-full flex justify-center items-center p-3 bg-blue-100 border-t-2 border-b-2 border-black fixed top-0 transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="w-4/5 flex justify-between items-center">
        <Logo className="flex-shrink-0" />
        <NavigationMenu>
          <NavigationMenuList className="flex flex-row gap-2">
            <NavigationMenuItem>
              <NavigationMenuLink href="">
                <NeoButton buttonText="About" tooltipText="Go to About" />
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="">
                <NeoButton
                  buttonText="Projects"
                  tooltipText="See my projects"
                />
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="">
                <NeoButton
                  buttonText="Skills"
                  tooltipText="Learn about my skills"
                />
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="">
                <NeoButton buttonText="Contact" tooltipText="Get in touch" />
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
};

export default NavBar;
