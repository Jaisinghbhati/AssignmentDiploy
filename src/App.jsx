import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';



const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
   
        <nav className="bg-gradient-to-r from-[#D93C28] to-[#FB6542] p-4 text-white shadow-md">
          <div className="container mx-auto flex justify-between items-center">
          <Link to="/">
            <div className="text-2xl font-bold cursor-pointer hover:scale-110 transform transition duration-500 ease-in-out lg:pl-8">
              SkinNovate
            </div>
            </Link>
            <div className="block lg:hidden">
              <button onClick={toggleMenu} className="text-white focus:outline-none">
                <div className={`transform transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`}>
                  ☰
                </div>
              </button>
            </div>
            <ul className={`flex-col lg:flex-row lg:flex space-x-6 absolute lg:static bg-[#D93C28] lg:bg-transparent transition-all duration-300 ease-in-out transform ${isOpen ? 'top-14 left-0 w-full' : 'top-[-200px]'} lg:top-0 lg:w-auto text-left pr-8`}>
              <li className="group relative">
                <Link to="/" className="block px-8 py-2 text-white relative z-10 transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover:translate-y-[-4px]">
                  HOME
                </Link>
                <div className="absolute left-0 bottom-0 h-[2px] w-full bg-transparent group-hover:bg-white transition-all duration-300"></div>
              </li>
         

              <li className="group relative">
                <Link to="/About" className="block px-2 py-2 text-white relative z-10 transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover:translate-y-[-4px] pb-2">
                  ABOUT
                </Link>
                <div className="absolute left-0 bottom-0 h-[2px] w-full bg-transparent group-hover:bg-white transition-all duration-300"></div>
              </li>
            </ul>
          </div>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
        </Routes>

       

        {/* Footer */}

        <footer className="bg-black p-4 text-white text-center">
          © 2024 SkinNovate. All rights reserved.
           <p className='text-sm opacity-50'>Home Page Assignment for <span className='italic'> Diploy</span> </p>
        </footer>
      </div>
    </Router>
  );
};

export default App;
