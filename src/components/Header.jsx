import React from "react";
import '../assets/button.css';
import { images } from "../constants";

// the header will contain the logo and the ordered list of pages for the user to choose from !

const Header = () => 
    {
    return ( 
    <section>
        <header className="container mx-auto px-5 flex justify-between items-center">
            <div>
                <img src={images.blogLogo} alt="Logo" height="180" width="180" />
            </div>
            <div className="flex gap-x-9 items-center"> 
               <ul className="flex gap-x-5 font-bold">
                <li>
                <button className="border-2 border-blue-950 px-6 py-2 rounded-full text-red-950 animated-button">
                    BLAHG Home
                    </button>
                </li>
                <li>
                <button className="border-2 border-blue-950 px-6 py-2 rounded-full text-red-950 animated-button">
                    FAQ
                </button>
                </li>
                <li>
                <button className="border-2 border-blue-950 px-6 py-2 rounded-full text-red-950 animated-button">
                    Your BLAHG
                </button>
                </li>
               </ul> 
                <button className="border-2 border-blue-950 px-6 py-2 rounded-full text-red-950 animated-button">
                    Login
                </button>
            </div>
        </header>
    </section>
            )
    }

export default Header