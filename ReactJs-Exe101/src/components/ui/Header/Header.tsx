import { Github, Linkedin, Instagram } from "lucide-react";

const Header = () => (
  <header className="absolute top-0 left-0 w-full p-6 flex justify-between items-center z-40 pointer-events-none">
    <div className="pointer-events-auto">
      <h1 className="text-3xl font-black text-gray-800 tracking-tighter flex items-center gap-2">
        <span className="text-blue-600">MY</span>ROOM
      </h1>
      <p className="text-gray-500 text-sm font-medium">
        Interactive 3D Portfolio
      </p>
    </div>

    <div className="flex gap-4 pointer-events-auto">
      <button className="p-2 bg-white rounded-full shadow-md hover:scale-110 transition-transform text-gray-700 cursor-pointer">
        <Github size={20} />
      </button>
      <button className="p-2 bg-white rounded-full shadow-md hover:scale-110 transition-transform text-blue-600 cursor-pointer">
        <Linkedin size={20} />
      </button>
      <button className="p-2 bg-white rounded-full shadow-md hover:scale-110 transition-transform text-pink-500 cursor-pointer">
        <Instagram size={20} />
      </button>
    </div>
  </header>
);

export default Header;
