import { useState, useCallback } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Menu, X } from 'lucide-react';


const MENU_ITEMS = [
  { label: "About Me", href: "#about" },
  { label: "Portfolio", href: "#mywork" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [menu, setMenu] = useState("tothetop");
  const [showSidebar, setShowSidebar] = useState(false);

  const onClickHandler = useCallback((navItem) => {
    setMenu(navItem);
    setShowSidebar(false);
  }, []);

  return (
    <div className='flex justify-between md:px-16 lg:px-28 px-6 py-4 md:items-center  sticky top-0 z-20 border-b border-b-white/20 backdrop-blur-xl max-md:bg-black'>
      <p to={"/"} className='font-semibold text-lg'>Saikat S.</p>

      {/* Menu open icon */}
      {!showSidebar ?
        <Menu onClick={() => setShowSidebar(true)} className="inline md:hidden cursor-pointer w-6 -z-10" />
        :
        <X onClick={() => setShowSidebar(false)} className="cursor-pointer w-6 ml-auto md:hidden" />
      }

      {/* Navigation Menu */}
      <ul
        className={`nav-menu flex md:flex-row items-center gap-10 absolute right-0 top-14 text-sm
          ${showSidebar ? 'w-full py-4 h-screen px-12 flex-col items-center bg-black' : 'hidden md:flex'} md:static md:w-auto md:py-0 md:h-auto md:bg-transparent md:px-0 md:space-y-0`}
      >
        {/* Resume download */}
        <a href="/Saikat_Saha_Resume.pdf" download className='md:hidden inline'>
          <button className="bg-blue-800/30 text-blue-600 py-2 px-4 hover:opacity-90 rounded-full cursor-pointer text-sm transition duration-200">
            Resume
          </button>
        </a>

        {/* Render menu items */}
        {MENU_ITEMS.map(({ label, href }) => (
          <li
            key={label}
            className={`mx-auto cursor-pointer border-b ${menu === label ? "border-slate-200" : " border-transparent"}`}
            onClick={() => onClickHandler(label)}
          >
            <AnchorLink offset={50} href={href}>
              <p>{label}</p>
            </AnchorLink>
          </li>
        ))}
      </ul>


      {/* Resume download */}
      <a href="/Saikat_Saha_Resume.pdf" download className='md:inline hidden'>
        <button className="bg-blue-800/30 text-blue-600 py-2 px-4   hover:opacity-90 rounded-full cursor-pointer text-sm transition duration-200">
          Resume
        </button>
      </a>
    </div>
  );
};

export default Navbar;
