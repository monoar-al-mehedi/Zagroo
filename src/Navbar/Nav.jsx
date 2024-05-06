import React, { useState } from "react";
import logo from "../assets/logo.png";
import Button from "../Component/Button";

function Nav() {
  let Links = [
    { name: "Home", link: "/" },
    { name: "Service", link: "/" },
    { name: "About", link: "/" },
    { name: "Blog", link: "/" },
    // { name: "Let's talk", link: "/" },
  ];
  // let [open, setOpen] = useState(false);
  return (
    <div className="w-full fixed top-0 left-0">
      <div className="md:flex items-center justify-between bg-transparent py-4 md:px-10 px-7">
        <div className="cursor-pointer">
          <img src={logo} alt="Logo" className="w-100 h-20" />
        </div>
        <ul
          className="md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-transparent md:z-auto z-[-1]
        left-0 w-full md:w-auto md:pl-1 pl-9 transition-all duration-300 ease-in"
        >
          {Links.map((Link) => (
            <li key={Link.name} className="md:ml-8 text-xl md:my-0 my-7">
              <a
                href={Link.link}
                className="text-white hover:text-sky-500 duration-300"
              >
                {Link.name}
              </a>
            </li>
          ))}
          <Button>Let's talk</Button>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
