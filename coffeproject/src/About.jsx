import React from 'react'
import { FaCheck } from "react-icons/fa";
import Slider from './Slider';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import Footer from './Footer';

function About() {
    return (
        <div>
            <Slider />
            <Navbar />
            <div className="absolute top-1/4 w-full flex flex-col items-center justify-center text-white z-10 px-4">
                <div className="menu-bar">
                    <h1 className='text-7xl uppercase'>about us</h1>
                </div>
                <div className="navbar space-x-3 text-xl mt-3">
                    <Link className='text-white no-underline hover:underline' to="/">Home </Link>
                    <Link to="/" className='text-white no-underline'>/</Link>
                    <Link className='no-underline text-white' to="/menu">About</Link>
                </div>
            </div>

            <div className="bg-amber-50 p-5 sm:p-10 md:p-16">
                <div className="mx-auto px-6 sm:px-12 md:px-20 max-w-screen-xl">
                    <div className="text-center pt-24 pb-5">
                        <h4 className='uppercase text-xl sm:text-2xl md:text-3xl text-orange-300 font-bold'>About Us</h4>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl text-center font-bold">Serving Since 1950</h1>
                    </div>

                    {/* Main Story Section */}
                    <div className="main-story flex flex-col md:flex-row gap-8 sm:gap-12 md:gap-16">
                        {/* Story Section */}
                        <div className="story flex flex-col items-center sm:items-start text-center sm:text-left w-full md:w-1/3">
                            <h1 className='mb-3 capitalize text-2xl sm:text-3xl font-bold'>Our Story</h1>
                            <h5 className="mb-3 font-medium text-lg sm:text-xl">Eos kasd eos dolor vero vero, lorem stet diam rebum. Ipsum amet sed vero dolor sea.</h5>
                            <p className='font-montserrat text-sm sm:text-base'>Takimata sed vero vero no sit sed, justo clita duo no duo amet et, nonumy kasd sed dolor eos diam lorem eirmod. Amet sit amet amet no. Est nonumy sed labore eirmod sit magna. Erat at est justo sit ut. Labor diam sed ipsum et eirmod.</p>
                            <Link to="#" className="bg-amber-800 py-2 px-4 mt-4 text-white text-lg no-underline hover:bg-amber-700">Learn More</Link>
                        </div>

                        {/* Image */}
                        <div className="flex justify-center sm:justify-start w-full md:w-1/3">
                            <img className='w-full max-w-xs sm:max-w-sm md:max-w-md rounded-lg' src={require('./img/coffebar.png')} alt="Coffee Bar" />
                        </div>

                        {/* Vision Section */}
                        <div className="vision flex flex-col items-center sm:items-start text-center sm:text-left w-full md:w-1/3 mt-16 md:mt-0">
                            <h1 className='mb-3 capitalize text-2xl sm:text-3xl font-bold'>Our Vision</h1>
                            <p className='text-sm sm:text-base text-gray-600 font-thin font-montserrat mb-6'>Invidunt lorem justo sanctus clita. Erat lorem labore ea, justo dolor lorem ipsum ut sed eos, ipsum et dolor kasd sit ea justo. Erat justo sed sed diam. Ea et erat ut sed diam sea ipsum est dolor.</p>

                            {/* Vision Bullet Points */}
                            <div className="space-y-4">
                                <div className="flex items-center">
                                    <i className='mr-3 text-amber-500'><FaCheck /></i>
                                    <h5 className="mb-3 text-lg">Lorem ipsum dolor sit amet</h5>
                                </div>
                                <div className="flex items-center">
                                    <i className='mr-3 text-amber-500'><FaCheck /></i>
                                    <h5 className="mb-3 text-lg">Lorem ipsum dolor sit amet</h5>
                                </div>
                                <div className="flex items-center">
                                    <i className='mr-3 text-amber-500'><FaCheck /></i>
                                    <h5 className="mb-3 text-lg">Lorem ipsum dolor sit amet</h5>
                                </div>
                            </div>

                            <div className="button mt-7">
                                <Link to="/" className="bg-orange-500 p-2 text-white no-underline hover:bg-orange-400">Learn More</Link>
                            </div>

                        </div>
                   
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default About;
