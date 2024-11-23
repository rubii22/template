import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-white shadow-md  top-0 z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Image src="/Logo (1).png" alt="Logo" width={200} height={100} />
        <nav className="hidden md:flex space-x-6 text-gray-600">
          <a href="#home" className="hover:text-orange-500">
            Home
          </a>
          <a href="#about" className="hover:text-orange-500">
            About Us
          </a>
          <a href="#app" className="hover:text-orange-500">
            Our App
          </a>
          <a href="#contact" className="hover:text-orange-500">
            Contacts
          </a>
        </nav>
        <div className="flex items-center space-x-4">
          <button className="text-gray-600 hover:text-orange-500">Log in</button>
          <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">
            Sign up
          </button>
        </div>
      </div>
    </header>
  );
}