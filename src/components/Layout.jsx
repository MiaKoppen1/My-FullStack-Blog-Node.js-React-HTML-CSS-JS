import React from "react";
import Footer from "./Footer";
import Header from "./Header";

// ~ this will serve as our page layout !

const Layout = ({children}) => // everything between header and footer will be included in the Layout tag.
    {
    return <div>
        <Header />
            {children}  
        <Footer /> 
    </div>
    }

export default Layout