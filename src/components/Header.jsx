import React from "react";
import { images } from "../constants";

const Header = () => 
    {
    return ( 
    <section>
        <header>
            <div>
                <img src={images.blogLogo} alt="" />
            </div>
            <div></div>
        </header>
    </section>
            )
    }

export default Header