import React from "react";
import { images } from "../constants";

// the header will contain the logo and the ordered list of pages for the user to choose from !

const Header = () => 
    {
    return ( 
    <section>
        <header className="container mx-auto px-5">
            <div>
                <img src={images.blogLogo} alt="Logo" height="220" width="220" />
            </div>
            <div> 
               <ul>
                <li>
                    <a href="/">
                    Blahg Home
                    </a>
                </li>
                <li>
                    <a href="/">
                    FAQ
                    </a>
                </li>
                <li>
                    <a href="/">
                    Your Blahg
                    </a>
                </li>
               </ul> 
               <button>Login</button>
            </div>
        </header>
    </section>
            )
    }

export default Header