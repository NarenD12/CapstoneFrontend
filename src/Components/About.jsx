import React from "react";
import Navbar from "./NavBar";
function About() {
  return (
    <>
    <Navbar/>
    <div class="flex flex-col justify-between max-w-xl px-4 mx-auto lg:pt-16 lg:flex-row md:px-8 lg:max-w-screen-xl">
      
      <div class="pt-16 mb-16 lg:mb-0 lg:pt-32 lg:max-w-lg lg:pr-5">
        <div class="max-w-xl mb-6">
          {/* <div>
            {/* <h1><p class="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
              About
            </p>
            </h1> 
          </div> */}
          <h1 class="mb-6 text-4xl font-bold leading-none tracking-normal text-gray-900 md:text-6xl md:tracking-tight">
                        <span class="block w-full py-22 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-blue-600 to-green-400 lg:inline">Infinite Pay</span> <span></span>
                    </h1>
            {/* <h2 class="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              Infinite Pay
            </h2> */}
          <p class="text-base text-gray-700 md:text-lg">
            Infinite Pay app for payments is the most secure and user friendly,with easy payments to friends,family and for business purposes.This Wallet app is also used to make fixed deposit,credit card and debit card uses,gold to buy with rates and also to pay electric bills and other daily circling bill.
          </p>
        </div>
      </div>
      <div>
        <img src="https://media.walletfactory.com/wp-content/uploads/2022/10/21160809/main-1-1536x1184.png.webp" alt="error" width="700" height="700" />
      </div>
    </div>
    </>
  );
}

export default About;