import React, { useState, useEffect, useRef } from 'react';

import skin1 from '/Images/03iimage.png';
import skin2 from '/Images/02iimage.png';
import skin3 from '/Images/04iimage.png';
import skin4 from '/Images/05iimage.png';
import skin5 from '/Images/06iimage.png';
import placeholder1 from '/Images/10 phone.jpg';
import placeholder2 from '/Images/06phone.jpg';
import placeholder3 from '/Images/03 phone.jpg';
import testimonial1 from '/Images/image6.jpg';
import testimonial2 from '/Images/image7.jpg';
import testimonial3 from '/Images/image8.jpg';
import newImage1 from '/Images/new1.webp';
import newImage2 from '/Images/new2.webp';
import newImage3 from '/Images/new3.webp';

const App = () => {
  const skins = [skin1, skin2, skin3, skin4, skin5];
  const [currentSkin, setCurrentSkin] = useState(0);
  const [showMore, setShowMore] = useState(false);
  const [scrollAnimation, setScrollAnimation] = useState(false);
  const [textAnimation, setTextAnimation] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const offerRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkin((prevSkin) => (prevSkin + 1) % skins.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [skins.length]);

  useEffect(() => {
    const handleScroll = () => {
      const testimonials = document.getElementById("testimonials");
      const textSection = document.getElementById("trustedText");
      const rectTestimonials = testimonials.getBoundingClientRect();
      const rectText = textSection.getBoundingClientRect();

      if (rectText.top < window.innerHeight && rectText.bottom > 0) {
        setTextAnimation(true);
      }

      if (rectTestimonials.top < window.innerHeight && rectTestimonials.bottom > 0) {
        setScrollAnimation(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  const handleExploreMore = () => {
    setShowMore(!showMore);
    if (offerRef.current) {
      offerRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleLoginForm = () => {
    setShowLoginForm(!showLoginForm);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();

    console.log('Logging in with:', { email, password });
    setShowLoginForm(false);
  };

  return (
    <div className="min-h-screen flex flex-col text-white w-full max-w-full px-2 sm:px-4 md:px-8 ">


      <div className="flex justify-end p-2 sm:p-4 sticky top-0">
        <button onClick={toggleLoginForm} className="relative bg-transparent border border-black text-black hover:text-white flex items-center px-3 py-2 rounded overflow-hidden group transition-all duration-300">
          <span className="mr-2 z-10 pl-2">Login</span>
          <div className="absolute inset-0 bg-gradient-to-r from-[#D93C28] to-black transition-all duration-500 transform translate-x-[-100%] group-hover:translate-x-0"></div>
        </button>
      </div>

      {/* Login Form  */}
      
      {showLoginForm && (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50 p-4">
      <form onSubmit={handleLoginSubmit} className="bg-gradient-to-r from-[#3B5BA5] to-[#1F3A7D] p-8 max-w-lg w-full shadow-lg transform transition-transform duration-300 animate__animated animate__zoomIn">
        <h2 className="text-4xl font-bold text-white mb-6 text-center animate__animated animate__fadeInDown">Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-4 mb-6 w-full border border-[#E87A5D] bg-transparent text-white placeholder-white transition duration-300 focus:border-[#FFBB00] focus:outline-none animate__animated animate__fadeIn"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="p-4 mb-6 w-full border border-[#E87A5D] bg-transparent text-white placeholder-white transition duration-300 focus:border-[#FFBB00] focus:outline-none animate__animated animate__fadeIn"
          required
        />
        <div className="flex justify-between mb-4">
          <button type="submit" className="bg-[#E87A5D] text-white px-6 py-3 hover:bg-[#F3B941] transition duration-300 shadow-lg transform hover:scale-105">
            Login
          </button>
          <button type="button" onClick={toggleLoginForm} className="bg-transparent text-white hover:underline px-6 py-3 transition duration-300 animate__animated animate__bounce">
            Cancel
          </button>
        </div>
      </form>
    </div>
    
     
      )}
      

      {/* Main Section */}

      <div className="flex-1 flex flex-col justify-center items-center p-4 md:p-10 pt-[80px]">
        <div
          className="relative bg-cover bg-center w-full h-[80vh] md:h-[80vh]"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1598414425509-f3195c738b6d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWxlfHx8fGVufDB8fHx8fA%3D%3D')`,
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>
          <div className="container mx-auto flex flex-wrap items-center justify-center h-full relative z-10 px-4">
            <div
              className={`w-full md:w-2/3 lg:w-1/2 mb-8 transform transition-transform duration-1000 ${
                isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
              }`}
            >
              <h1 className="text-4xl sm:text-5xl font-bold text-[#FFBB00] mb-4 animate__animated animate__fadeInDown text-center">
                Welcome to <span className="text-white">SkinNovate</span>
              </h1>
              <p className="text-base sm:text-lg text-white mb-4 animate__animated animate__fadeInUp delay-1s text-center">
                Unleash your creativity with customized mobile skins.
              </p>
              <button
                onClick={handleExploreMore}
                className="bg-[#FFBB00] text-white px-4 py-2 rounded hover:bg-black transition duration-300 animate__animated animate__fadeInUp delay-2s mx-auto block"
              >
                Show Offer
              </button>
            </div>

       
            <div
              className={`w-full md:w-2/3 lg:w-1/2 flex justify-center transform transition-transform duration-1000 ${
                isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
              }`}
            >
              <div className="relative flex justify-center items-center ">
           
                <img
                  src={skins[currentSkin]}
                  alt="Mobile Skin"
                  className="w-40 sm:w-48 md:w-56 lg:w-64 transition-opacity duration-1000 ease-in-out p-3 rounded-lg shadow-lg pb-4"
                />
              </div>
            </div>
          </div>
        </div>



    
        <div className="mt-10 w-full max-w-full lg:w-3/4 mx-auto ">
          <h2 className="text-4xl sm:text-6xl  justify-center flex text-[#FB6542] pt-8 mb-4 pb-8 animate__animated animate__fadeIn"> BEST SELLING SKINS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[placeholder1, placeholder2, placeholder3].map((src, index) => (
              <div key={index} className="relative group overflow-hidden rounded-lg shadow-lg animate__animated animate__zoomIn">
                <img src={src} alt={`Product ${index + 1}`} className="w-full h-72 sm:h-96 object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-105" />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="bg-blue-600 text-white px-4 py-2 rounded">Buy Now</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Offer Section */}

        <div ref={offerRef} className="my-section">
          {showMore && (
            <>
              <h2 className="section-heading text-5xl text-[#F3B941] flex justify-center font-bold pt-8">Best Offer deal</h2>
              <p className="section-description flex justify-center text-black pt-3 opacity-50">
                Our best offer of the Year is Here!
              </p>
              <div className="image-container pt-3">
                <img src="https://www.layers.shop/cdn/shop/files/BANNER_FLASH_SALE.jpg?v=1718259294&width=1860" alt="Placeholder Image" className="placeholder-image" />
                <div className="image-text">Discover Our Coffee</div>
              </div>
            </>
          )}
        </div>


    
        <div className="mt-10 w-full h-[60vh] bg-cover bg-center relative overflow-hidden transition-transform duration-700 ease-in-out hover:scale-105"
    >

  <div className="absolute inset-0 transition-opacity duration-500 h-[80vh]"></div>

  <div className="flex flex-col px-4 sm:px-8 lg:px-16">
    <h1 className="lg:text-3xl  text-2xl font-bold text-[#FB6542] text-center mt-4 pt-8">
      YOUR STORE SKINNOVATE
    </h1>

    <div className="flex flex-col lg:flex-row justify-between items-center flex-grow mt-4 pt-5 ">
      <div className="w-full lg:w-1/2 p-5 ">
        <h2 className="lg:text-5xl pb-8 font-bold text-3xl text-black  animate__animated animate__bounceIn animate__delay-1s transition-opacity duration-700 ease-in-out :pl-2 lg:pl-[90px] text-[30px] pl-[30px]">
          Elevate Your Style <br />with Our Skins!
        </h2>
      
      </div>

      <div className="w-full lg:w-1/2 h-[32vh] flex items-center justify-center ">
        <img src="https://media3.giphy.com/media/Vw0sa0Ri7ZG83wKFJF/giphy.webp?cid=790b7611ajhs5ohk74bo27drppf262m9sdpxeokrvyazc9b8&ep=v1_gifs_search&rid=giphy.webp&ct=g" alt="Skin Image" className="h-full object-cover" />
      </div>
    </div>
  </div>

  <div className="absolute bottom-5 left-0 right-0 text-center animate__animated animate__fadeInUp animate__delay-1s">
    {/* Additional content can go here */}
  </div>
</div>





      

        <div className="mt-10 w-full lg:w-3/4 mx-auto">
          <h2 className="lg:text-6xl text-4xl justify-center flex text-[#FB6542] pt-8 mb-4 pb-8 animate__animated animate__fadeIn"> NEW ARRIVALS</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[newImage1, newImage2, newImage3].map((src, index) => (
              <div key={index} className="relative group overflow-hidden rounded-lg shadow-lg animate__animated animate__zoomIn animate__delay-2s">
                <img src={src} alt={`New Product ${index + 1}`} className="w-full h-[500px] object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-105" />
              </div>
            ))}
          </div>
        </div>

        {/* New Products Section */}

        <h1 className='text-[#E87A5D] lg:text-5xl text-3xl pt-8'>TEXTURED SKINS</h1>
<div className="mt-10 w-full mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
  {[
    "https://www.wrapcart.com/cdn/shop/files/13_b28d4726-70b5-4ddf-bfe7-173ee1d793a4_1170x.webp?v=1686301337",
    "https://www.wrapcart.com/cdn/shop/files/12_17c2c4c6-644b-4b65-8682-b4f3a5fa6e32_1170x.webp?v=1686301336",
    "https://www.wrapcart.com/cdn/shop/files/14_137da710-3f7e-4ad7-b026-d8acf20df900_1170x.webp?v=1686301336",
    "https://www.wrapcart.com/cdn/shop/files/15_1170x.webp?v=1686301337",
    "https://www.wrapcart.com/cdn/shop/files/WebBanner-870_940x.jpg?v=1711104623",
    "https://www.wrapcart.com/cdn/shop/files/17_300f229d-35cc-427b-95db-95badc21f55b_1170x.webp?v=1686301336",
    "https://www.wrapcart.com/cdn/shop/files/19_1170x.webp?v=1686301336",
    "https://www.wrapcart.com/cdn/shop/files/18_d2ac5125-18dc-48b4-9700-3b5c4d8530bb_1170x.webp?v=1686301335",
    "https://www.wrapcart.com/cdn/shop/files/WebBanner-876_940x.jpg?v=1711196500",
    "https://www.wrapcart.com/cdn/shop/files/WebBanner-877_940x.jpg?v=1711196500",
    "https://www.wrapcart.com/cdn/shop/files/WebBanner-873_940x.jpg?v=1711536784",
    "https://www.wrapcart.com/cdn/shop/files/WebBanner-874_940x.jpg?v=1711536784",

  ].map((src, index) => (
    <div key={index} className="relative group overflow-hidden shadow-lg">
      <div className="relative overflow-hidden transition-transform duration-500 transform group-hover:scale-105 w-[400px]">
        <img src={src} alt={`Product ${index + 1}`} className="w-full h-[400px] object-cover" />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="text-white text-lg font-bold mb-2">$19.99</span>
          <button className="bg-[#E87A5D] text-white px-4 py-2 transition-transform duration-300 transform group-hover:translate-y-2 group-hover:scale-105">
            Order Now
          </button>
        </div>
      </div>
    </div>
  ))}
</div>


        {/* Testimonials Section */}

        <div id="testimonials" className="mt-10 lg:w-3/4 mx-auto w-full">
  <h2 className={`lg:text-5xl text-2xl text-[#E87A5D] mb-6 text-center  duration-500 ${textAnimation ? 'animate__animated animate__fadeIn' : ''}`}>
   WHAT OUR CUSTOMERS SAY
  </h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  p-4 rounded-lg">
    {[testimonial1, testimonial2, testimonial3].map((src, index) => (
      <div
        key={index}
        className={`bg-gray-800 p-6 rounded-lg shadow-lg text-center transition-transform transform hover:scale-105 duration-300 ${textAnimation ? 'animate__animated animate__zoomIn' : ''}`}
      >
        <div className="relative">
          <img 
            src={src} 
            alt={`Testimonial ${index + 1}`} 
            className="w-28 h-28 rounded-full mx-auto mb-4 shadow-md border-4 border-[#FFBB00] transition-transform duration-500 transform hover:scale-110 object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 rounded-full"></div>
        </div>
        <h3 className="text-xl font-semibold text-blue-400">Customer Name {index + 1}</h3>
        <p className="text-gray-300 italic">“Fantastic experience! Highly recommend.”</p>
      </div>
    ))}
  </div>
</div>

    

        {/* New Placeholder Section */}

        <div className="mt-10 mx-auto p-12 bg-black rounded-lg shadow-lg flex flex-col lg:flex-row items-center">
  <div className="w-full lg:w-1/2 pr-6 mb-6 lg:mb-0">
    <h2 className="text-4xl font-bold text-[#D93C28] mb-4 animate-pulse">Discover New Arrivals</h2>
    <p className="text-gray-300 mb-4">Stay ahead of trends with our latest mobile skins. Perfect for every style.</p>
    <button className="bg-[#D93C28] text-white px-4 py-2 rounded hover:bg-white hover:text-black transition duration-300">Shop Now</button>
  </div>
  <div className="w-full lg:w-1/2">
    <img 
      src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExcnA0eGNucDdqejdscTdzaHYyMGE5bTA2cmkxMjhiZGJha2hlbWIydyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/YMMp5XDGDowW4LXYjJ/giphy.webp" 
      alt="New Features" 
      className="w-full h-auto rounded-lg shadow-lg transition-transform duration-500 transform hover:scale-105" 
    />
  </div>
</div>


        {/* Additional Content Section */}

        <div className="mt-10 w-full lg:w-3/4 mx-auto p-6 rounded-lg shadow-lg animate__animated animate__fadeIn">
          <h2 className="text-4xl font-bold text-[#E87A5D] mb-4">Why Choose Us?</h2>
          <ul className="list-disc list-inside text-gray-500 mb-4">
            <li>High-quality materials for durability</li>
            <li>Wide variety of designs to match your personality</li>
            <li>Easy installation and removal</li>
            <li>Affordable pricing for everyone</li>
          </ul>
        </div>


{/* EMAIL */}
<div className="mt-10 w-full p-6 bg-[#D93C28] rounded-lg shadow-lg flex flex-col md:flex-row items-center justify-between">
  <div className="flex-1 mb-4 md:mb-0">
    <h2 className="text-4xl text-[#E87A5D] lg:text-4xl lg:pr-8 font-bold mb-4">
      SIGN UP FOR THE OFFERS!
    </h2>
    <p className="text-gray-300">
      Stay updated with our latest deals and offers.
    </p>
  </div>

  <div className="flex items-center text-black w-full md:w-auto">
    <input
      type="email"
      placeholder="Your Email"
      className="p-2 bg-[#D93C28] text-black border-b-2 border-black focus:outline-none focus:border-[#FFBB00] transition duration-300 placeholder-black w-full md:w-48"
      required
    />

    <button className="ml-4 bg-[#E87A5D] text-black px-4 py-2 rounded flex items-center transition duration-300 hover:bg-[#FFBB00]">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5-5 5M6 12h12" />
      </svg>
    </button>
  </div>
</div>



      </div>
    </div>
  );
};

export default App;
