import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsCart4 } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";

const Menubar = () => {
  const [open, setOpen] = useState(false);

  const menuItem = [
    { id: 1, label: "Home", link: '/' },
    { id: 2, label: "Contact Us", link: '/contact-us' },
    { id: 3, label: "Dashboard", link: '/dashboard' },
    { id: 4, label: "Our Menu", link: '/menu' },
    { id: 5, label: "Our Shop", link: '/shop' },
    { id: 6, icon: <BsCart4/>, link: '/sign-in' },
    { id: 7, label: "Sign Out", link: '/sing-out' },
    { id: 7, icon: < CgProfile/> , link: '/sing-out' },
  ]

  return (
    <div>
     
      <div className="fixed z-10 md:hidden ml-14 mt-2 text-white" onClick={() => setOpen(!open)}>
        {open ? <AiOutlineClose/> : <GiHamburgerMenu/>}

      </div>
      <div className=" fixed z-10 flex justify-between items-center w-full md:pl-36 pr-24 py-2 bg-navBg">
       <div className="text-white hidden md:block">
        <p>BISTRO BOSS</p>
        <p>Restaurant</p>
       </div>
      <ul className={`text-white font-bold md:flex duration-500 ease-in absolute md:static   
      ${open ? 'top-5' : 'top-[-200px]'}`}>
       
      {menuItem.map((menu) => (
        <li key= {menu.id}>
          <a className=" flex items-center" href={menu.link}> <span className="ml-14">{menu.label}</span> <span className="hidden md:block ml-[-1.5rem] mt-1 ">{menu.icon}</span> </a>
        </li>
      ))}
         
      </ul>
      </div>
     
    </div>
  );
};

export default Menubar;