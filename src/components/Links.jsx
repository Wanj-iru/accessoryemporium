// src/components/Navbar.jsx
import { ShoppingBagIcon, UserIcon, Bars3Icon } from '@heroicons/react/24/outline';

const Link = () => {
  return (
    <nav className="fixed top-0 w-full bg-white shadow-sm z-50 px-6 py-4 flex justify-between items-center">
      <div className="text-2xl font-bold tracking-tight"> ACCESSORY EMPORIUM</div>
      
      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-8 font-medium text-gray-600">
        <a href="#" className="hover:text-black transition">New Arrivals</a>
        <a href="#" className="hover:text-black transition">Jewellery</a>
        <a href="#" className="hover:text-black transition">Bags</a>
        <a href="#" className="hover:text-black transition">Watches</a>
      </div>

      <div className="flex items-center space-x-5">
        <UserIcon className="w-6 h-6 cursor-pointer" />
        <div className="relative">
          <ShoppingBagIcon className="w-6 h-6 cursor-pointer" />
          <span className="absolute -top-1 -right-1 bg-black text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">2</span>
        </div>
        <Bars3Icon className="w-6 h-6 md:hidden cursor-pointer" />
      </div>
    </nav>
  );
};

export default Link