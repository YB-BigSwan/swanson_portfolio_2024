import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Logo from "@/assets/logo.svg";
import { Button } from "../ui/button";

const NavBar = () => (
  <div className="w-full flex justify-center items-center p-3 bg-[rgba(248,249,250,0.5)] backdrop-blur-md absolute top-0 drop-shadow-sm">
    <div className="w-4/5 flex justify-between items-center">
      <Logo className="flex-shrink-0" />
      <NavigationMenu>
        <NavigationMenuList className="flex flex-row gap-2">
          <NavigationMenuItem>
            <NavigationMenuLink>
              <Button>About</Button>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink>
              <Button>Projects</Button>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink>
              <Button>Skills</Button>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink>
              <Button>Contact</Button>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  </div>
);

export default NavBar;
