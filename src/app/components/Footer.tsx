import Image from "next/image";

export default function Footer() {
    return (
      <footer className="bg-gray-100 border-t border-gray-300 text-gray-700">
        <div className="container mx-auto py-3 px-4">
          <div className="flex justify-between items-center">
            <div>
              <Image
                src="/Logo (1).png" 
                alt="Epixelab Logo"
                width={70}
                height={70}
              />
            </div>
  
            <div className="flex space-x-6 text-sm">
              <span className="hover:underline cursor-pointer">Portfolio</span>
              <span className="hover:underline cursor-pointer">How it Works</span>
              <span className="hover:underline cursor-pointer">Pricing</span>
              <span className="hover:underline cursor-pointer">About</span>
              <span className="hover:underline cursor-pointer">Login</span>
            </div>
          </div>
  
        
          <div className="mt-4 text-center">
            
            <p className="text-sm">&copy; 2020 Epixelab. All rights reserved.</p>
  
            <p className="text-xs mt-2 text-gray-500">
              Startup Framework contains components and complex blocks which can
              easily be integrated into almost any design.
            </p>
          </div>
        </div>
      </footer>
    );
  }
  