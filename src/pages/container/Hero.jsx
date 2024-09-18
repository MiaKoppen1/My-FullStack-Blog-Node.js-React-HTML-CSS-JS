
//Hero section of the homepage aka the media on the very front ...

import React from 'react';


const Hero = () =>
     {
    return (
        <><div>
            Welcome to The BLAHG!
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Expedita praesentium architecto fugiat recusandae aperiam quisquam dolorum quod suscipit ducimus!
                Iusto ut, cumque nobis pariatur a voluptate! Hic earum itaque totam?
            </p>
            </div>
            <div>
                Get Started!
                <div>
                Enter Username
                  <div>
                  <input type="text" />
                  </div>
                </div>
                  <div>
                Enter Password
                  <div>
                  <input type="text" />
                </div>
                  </div>
                <button className="border-2 border-black px-4 py-2 rounded-full text-black font-bold animated-button">
                    Create Account
                </button>
            </div></>
        )
    }
export default Hero