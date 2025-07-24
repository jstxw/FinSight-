import React, { useState } from 'react';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';
import { LuWalletMinimal } from 'react-icons/lu';
import SideMenu from './SideMenu';

const Navbar = ({ activeMenu }) => {
  const [openSideMenu, setOpenSideMenu] = useState(false);

  return (
    <div className="flex items-center justify-between px-8 py-4 relative z-20 shadow-lg bg-gradient-to-r from-blue-500 via-teal-400 to-purple-500">
      <div className="flex items-center gap-4">
        <button
          className="block text-white focus:outline-none hover:bg-white/10 rounded-full p-2 transition"
          onClick={() => {
            setOpenSideMenu(!openSideMenu);
          }}
        >
          {openSideMenu ? (
            <HiOutlineX className="text-2xl" />
          ) : (
            <HiOutlineMenu className="text-2xl" />
          )}
        </button>
        <span className="flex items-center gap-2">
          <LuWalletMinimal className="text-3xl text-white drop-shadow-md" />
          <h2 className="text-2xl font-bold text-white tracking-wide drop-shadow-md">FinSight</h2>
        </span>
      </div>
      {/* You can add a user avatar or quick links here in the future */}
      {openSideMenu && (
        <div className="fixed top-[61px] left-0 w-64 h-full bg-white shadow-2xl z-30 animate-slide-in">
          <SideMenu activeMenu={activeMenu} />
        </div>
      )}
    </div>
  );
};

export default Navbar;
