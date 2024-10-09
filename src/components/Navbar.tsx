"use client";
import React, { useState } from "react";
import { Menu, MenuItem, } from "../components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import AnchorLink from 'react-anchor-link-smooth-scroll'


function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
      <AnchorLink href="#about">
          <MenuItem
            setActive={setActive}
            active={active}
            item="About"
          ></MenuItem>
        </AnchorLink>
      <AnchorLink href="#experience">
          <MenuItem
            setActive={setActive}
            active={active}
            item="Experience"
          ></MenuItem>
        </AnchorLink>
      <AnchorLink href="#skills">
          <MenuItem
            setActive={setActive}
            active={active}
            item="Skills"
          ></MenuItem>
        </AnchorLink>
      <AnchorLink href="#projects">
          <MenuItem
            setActive={setActive}
            active={active}
            item="Projects"
          ></MenuItem>
        </AnchorLink>
      <AnchorLink href="#contact">
          <MenuItem
            setActive={setActive}
            active={active}
            item="Contact"
          ></MenuItem>
        </AnchorLink>
        
      </Menu>
    </div>
  );
}

export default Navbar