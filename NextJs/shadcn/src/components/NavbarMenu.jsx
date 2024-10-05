"use client";

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

import React from "react";

const NavbarMenu = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
              Get started          
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
          <NavigationMenuContent className="left-0" >
            <NavigationMenuLink>
              <span className={"p-4"}>Link</span></NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Item two</NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink>
              <span className={"p-4"}>menu 1</span></NavigationMenuLink>
            <NavigationMenuLink>
              <span className={"p-4"}>menu 2</span></NavigationMenuLink>
            <NavigationMenuLink>
              <span className={"p-4"}>menu 3</span></NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavbarMenu;
