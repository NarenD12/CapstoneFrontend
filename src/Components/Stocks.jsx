import React from "react";
import Navbar from "./NavBar";
function StockPage(){
    return(
        <>
        <Navbar/>
<section class="pt-2 bg-skyblue">
    
            <div class="px-12 mx-auto max-w-7xl">
                <div class="w-full mx-auto text-left md:w-11/12 xl:w-9/12 md:text-center">
                    <h1 class="my-6 text-4xl font-bold leading-none tracking-normal text-gray-900 md:text-6xl md:tracking-tight">
                         <span class="block w-full py-22 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-blue-600 to-green-400 lg:inline">Stock investment</span> <span></span>
                    </h1>
                    <p class=" px-0 mb-8 text-lg text-green-500 md:text-xl lg:px-24">
                    A stock quote is the price of a stock as quoted in decimals on an exchange
                    </p>
 
                </div>
                <div>
                    <p>
                    A stock, also known as equity, is a security that represents the ownership of a fraction of the issuing corporation. Units of stock are called "shares" which entitles the owner to a proportion of the corporation's assets and profits equal to how much stock they own. 

Stocks are bought and sold predominantly on stock exchanges and are the foundation of many individual investors' portfolios. Stock trades have to conform to government regulations meant to protect investors from fraudulent practices.
                    </p>
                </div>
               
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div style={{ flex: 1, }}>
                        {/* Your text content goes here */}
                        <img src="Images/stock3.jpg" alt="Description" style={{ maxWidth: '100%',width:"500px", height: 'auto', borderRadius: '8px' }} />
 
 
                    </div>
                    <div style={{ flex: 1, }}>
                        {/* Your image goes here */}
                        <center><h2><b>What Is the Difference Between Stocks and Bonds?</b></h2><p>Stocks are issued by companies to raise capital to grow the business or undertake new projects. There are important distinctions between whether somebody buys shares directly from the company when it issues them in the primary market or from another shareholder in the secondary market. When the corporation issues shares, it does so in return for money.</p></center>
                    </div>
                </div><br></br>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div style={{ flex: 1, }}>
                        {/* Your image goes here */}
                        <center>
                            <h2><b>Is It Risky to Own Stock? </b></h2>
                            <br></br>
                            <br></br><p>All investments have a degree of risk. Stocks, bonds, mutual funds, and exchange-traded funds can lose value if market conditions decline. When you invest, you make choices about what to do with your financial assets. Your investment value might rise or fall because of market conditions or corporate decisions, such as whether to expand into a new area of business or merge with another company.</p></center>
                    </div>
                    <div style={{ flex: 1, }}>
                        {/* Your text content goes here */}
                        <img src="Images/stock2.jpg" alt="Description" style={{ maxWidth: '100%',width:"500px", height: 'auto', borderRadius: '10px' }} />
                    </div>
 
                </div><br></br>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div style={{ flex: 1, }}>
                        {/* Your text content goes here */}
                        <img src="Images/stock1.jpg" alt="Description" style={{ maxWidth: '100%', width:"500px",height: 'auto', borderRadius: '8px' }} />
 
 
                    </div>
                    <div style={{ flex: 1, }}>
                        {/* Your image goes here */}
                        <center><h2><b>What Is an Exit Strategy?</b></h2><p>For some companies, issuing stock represents an exit strategy for the investors who provided funding while the company was private. An exit strategy is a way for investors, traders, business owners or venture capitalists to separate from an investment, either to realize profit or to minimize loss. A company's IPO can be seen as a trigger for an exit because the transition from private to public results in profit.

In these cases, stock is issued with the intent to realize gains on investments. Exiting after an IPO became a common practice during the dot.com boom, which resulted in the issuance of a lot of stock that had no actual value. This practice created a bubble that burst, resulting in several high-profile bankruptcies. It is wise for potential investors to carefully examine any IPO before purchasing shares.</p></center>
                    </div>
                </div><br></br>

            </div>
        </section>
        </>
    )
}
export default StockPage