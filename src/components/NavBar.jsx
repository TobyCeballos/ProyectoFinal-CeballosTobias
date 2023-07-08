import CartWidget from "./shared/CartWidget";
import { DropdownButton } from "./shared/DropdownButton";
import { FaUserCircle } from "react-icons/fa"

const NavBar = () => {



    const accountDropdown = [
        {
            name: 'Account',
            to: 'Account'
        },
        {
            name: 'Favorites',
            to: 'Favorites',
        },
        {
            name: 'Settings',
            to: 'Settings',
            separed: true
        },
        {
            name: 'Logout',
            to: 'Logout',
            separed: true
        },
    ]

  return (
    <div className="bg-indigo-700 fixed w-full bg-opacity-95 p-2 flex justify-evenly">
      <div className="flex items-center">
        <a href="#" className=" hover:text-white text-slate-100 text-3xl brand">
          Dear Reader<span className="text-indigo-400 text-4xl">.</span>
        </a>
      </div>
      <ul className="text-slate-50 flex">
        <li className="px-7 py-4 hover:bg-indigo-700"><a href="/">HOME</a></li>
        <li className="px-7 py-4 hover:bg-indigo-700"><a href="/category">PRODUCTS</a></li>
        <li className="px-7 py-4 hover:bg-indigo-700"><a href="#">OFFERS</a></li>
        <li className="px-7 py-4 hover:bg-indigo-700"><a href="#">CONTACT</a></li>
      </ul>
      <div className="flex items-center text-slate-100">
        <CartWidget/>
        <div className="ml-4">
        <DropdownButton className="px-7 py-4 hover:bg-slate-50" buttonContent={<FaUserCircle className="text-3xl"/>} dropdownItems={accountDropdown}/></div>
      </div>
    </div>
  );
};

export default NavBar;
