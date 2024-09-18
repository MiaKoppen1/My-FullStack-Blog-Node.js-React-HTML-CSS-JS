
import React from "react";
import '../assets/button.css';
import { images } from "../constants";

// the header will contain the logo and the ordered list of pages for the user to choose from !

const Header = () => 
    {
    return ( 
    <section>
        <header className="container mx-auto px-5 flex justify-between items-center">
            <div className="mt-3">
                <img src={images.blahgLogo} alt="Logo" height="300" width="300" />
            </div>
            <div className="flex gap-x-9 items-center"> 
               <ul className="flex gap-x-5 ">
                <li className="bg--500 rounded-full relative">
                <button className="border-2 border-black px-4 py-2 rounded-full text-black font-bold animated-button">
                    BLAHG Home
                </button>
                </li>
                <li>
                <button className="border-2 border-black px-4 py-2 rounded-full text-black font-bold animated-button">
                    FAQ
                </button>
                </li>
                <li>
                <button className="border-2 border-black px-4 py-2 rounded-full text-black font-bold animated-button">
                    Your BLAHG
                </button>
                </li>
               <li>
                <button className="border-2 mr-4 border-black px-4 py-2 rounded-full text-black font-bold animated-button">
                    Login
                </button>
                </li>
                </ul>
            </div>
        </header>
    </section>
            )
    }

export default Header