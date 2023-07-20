import React from "react";
import Moon from "../../assets/moon.svg";
import Sun from "../../assets/sun.svg";
import NavData from "../../data/NavData";
import NavItem from "./NavItem";

import { Link } from "react-scroll";
import { H1 } from "../typography/Typography";
type CommonProps = {
  children: React.ReactNode;
};

type NavbarProps = {
  toggleDarkMode: () => void;
  darkMode: boolean;
};

function Navbar(props: NavbarProps) {
  return (
    <NavWrap>
      <H1>Shahid Ali</H1>
      <NavListWrap>
        <NavList>
          {NavData.map((navItem) => (
            <Link
              key={navItem.id}
              to={navItem.idName}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <NavItem>{navItem.name}</NavItem>
            </Link>
          ))}
        </NavList>
        <img
          className="w-6 h-6 self-center"
          onClick={props.toggleDarkMode}
          src={props.darkMode ? Sun : Moon}
        />
      </NavListWrap>
    </NavWrap>
  );
}

const NavWrap = ({ children }: CommonProps) => {
  return (
    <nav
      className="sm:fixed top-0 left-0 right-0
                        flex place-content-between
                        lg:px-16 sm:px-10 px-4 sm:py-5 py-4
                        sm:dark:bg-zinc-800 sm:shadow-sm sm:bg-zinc-100"
    >
      {children}
    </nav>
  );
};

const NavListWrap = ({ children }: CommonProps) => {
  return <div className="flex lg:gap-16 gap-8">{children}</div>;
};

const NavList = ({ children }: CommonProps) => {
  return (
    <ul className="flex lg:gap-16 gap-8 text-lg font-normal">{children}</ul>
  );
};

export default Navbar;
