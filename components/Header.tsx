import Image from "next/image";
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UserIcon,
} from "@heroicons/react/solid";
import { AirbnbLogo } from "../public/assets/images";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 shadow-md p-5 bg-white md:px-10">
      <div className="relative flex items-center cursor-pointer my-auto h-10">
        <Image
          src={AirbnbLogo}
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>

      <div className="flex items-center md:border-2 py-2 rounded-full md:shadow-sm">
        <input
          className="bg-transparent flex-grow pl-5 outline-none text-sm placeholder-gray-400 text-gray-600"
          type="text"
          placeholder="Start your search"
        />
        <SearchIcon className="hidden md:inline-flex bg-red-400 h-8 p-2 rounded-full text-white cursor-pointer md:mx-2" />
      </div>
      <div className="flex items-center justify-end space-x-4 text-gray-500">
        <p className="hidden md:inline cursor-pointer">Becom a host</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />
        <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
          <MenuIcon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>
    </header>
  );
};

export default Header;
