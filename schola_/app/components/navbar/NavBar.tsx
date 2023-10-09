import Image from "next/image";
import React from "react";
import mainLogo from "/public/mainLogo.svg";
import { NavbarAction } from "../buttons/NavbarAction";
import styles from "./navba.module.css";
import LinkButton from "../buttons/LinkButton";

const menuData = [
  {
    label: "Home",
    subMenu: [],
  },
  {
    label: "Our Services",
    subMenu: [
      //   { label: "AidMyStudy", subMenu: [] },
      //   { label: "Smart Transcript", subMenu: [] },
    ],
  },
  {
    label: "Testimonials",
    subMenu: [],
  },
  {
    label: "Resources",
    subMenu: [
      //   { label: "Resource 1", subMenu: [] },
      //   { label: "Resource 2", subMenu: [] },
    ],
  },
  {
    label: "Company",
    subMenu: [
      //   { label: "About Us", subMenu: [] },
      //   { label: "Contact Us", subMenu: [] },
    ],
  },
];

interface MenuItemProps {
  item: {
    label: string;
    subMenu: Array<{
      label: string;
      subMenu: Array<{ label: string; subMenu: [] }>;
    }>;
  };
  activeLabel: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ item, activeLabel }) => {
  const isActive = item.label === activeLabel;
  return (
    <li>
      <a className={isActive ? styles.navActive : "" + "hover:rounded-sm "}>
        {item.label}{" "}
      </a>
      {item.subMenu.length > 0 && (
        <ul>
          {item.subMenu.map((subItem, index) => (
            <MenuItem key={index} item={subItem} activeLabel={activeLabel} />
          ))}
        </ul>
      )}
    </li>
  );
};

const NavBar = ({}) => {
  const activeLabel = "Home";
  return (
    <div>
      <div className={`${styles.navContainer} mx-auto`}>
        <div className="navbar  ">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden"></label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Parent</a>
                  <ul className="p-2">
                    <li>
                      <a>Submenu 1</a>
                    </li>
                    <li>
                      <a>Submenu 2</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a>Item 3</a>
                </li>
              </ul>
            </div>
            <a className="normal-case text-xl" href="">
              <Image
                src={"/mainLogo.svg"}
                alt="VCScholar Logo"
                width={130}
                height={80}
                className=""
              ></Image>
            </a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              {menuData.map((item, index) => (
                <MenuItem key={index} item={item} activeLabel={activeLabel} />
              ))}
            </ul>
          </div>
          <div className="navbar-end flex">
            <LinkButton href="" className="hover:text-primary">
              Login
            </LinkButton>
            <NavbarAction label="Apply Now" className="ms-5"></NavbarAction>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
