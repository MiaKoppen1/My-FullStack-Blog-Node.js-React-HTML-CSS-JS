import React from "react";
import { images } from "../constants";

// the header will contain the logo and the ordered list of pages for the user to choose from !

const Header = () => 
    {
    return ( 
    <section>
        <header className="container mx-auto px-5 flex justify-between">
            <div>
                <img src={images.blogLogo} alt="Logo" height="220" width="220" />
            </div>
            <div className="flex gap-x-9 items-center"> 
               <ul className="flex gap-x-5">
                <li>
                    <a href="/">
                    BLAHG Home
                    </a>
                </li>
                <li>
                    <a href="/">
                    FAQ
                    </a>
                </li>
                <li>
                    <a href="/">
                    Your BLAHG
                    </a>
                </li>
               </ul> 
               <button className="border-2 border-blue-950 px-6 py-2 rounded-full text-red-950-font-semibold">
                Login
                </button>
            </div>
        </header>
    </section>
            )
    }

export default Header