import { useState } from "react";
import PropTypes from "prop-types";
import {IoIosArrowDown} from "react-icons/io"

export function DropdownButton({ buttonContent, dropdownItems }) {
  const [show, setShow] = useState(false);

  function dropdown() {
    setShow(!show);
  }
  console.log(dropdownItems)

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          onClick={() => {
            dropdown();
          }}
          type="button"
          className="flex align-middle"
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
        >
          {buttonContent}
          <IoIosArrowDown
            className={`${
              show ? "rotate-180" : null
            } transition-all ease-in-out -mr-1 text-gray-400`}/>
        </button>
      </div>
      {show ? 
        <div
          className="absolute -left-[50%] z-10 mt-4 w-56 origin-top-right rounded-md bg-indigo-500 shadow-lg ring ring-black ring-opacity-5 focus:outline-none"
          aria-orientation="vertical"
        >
          <div className="py-1" role="none">
            {dropdownItems.map((dropdownItem, index) => (  
              <a
                href={`#${dropdownItem.to}`}
                className={ `${dropdownItem.separed ? 'border-t border-gray-900':null}text-gray-100 block px-4 py-2 text-sm hover:bg-indigo-400`}
                role="menuitem"
                id={`menu-item-${index}`}
                key={index}
              >
                {dropdownItem.name}
              </a>
            ))}
          </div>
        </div>
      : null}
    </div>
  );
}


DropdownButton.propTypes = {
  buttonContent: PropTypes.string.isRequired || PropTypes.object.isRequired,
  dropdownItems: PropTypes.array.isRequired,
};