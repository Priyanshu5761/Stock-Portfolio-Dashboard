import React from 'react';
import LeftSection from './LeftSection';
import RightSection from './RightSection';
import Universe from './Universe';
import Hero from './Hero';
function ProductsPage() {
    return ( 
       <>
       <Hero/>
       <LeftSection 
        imageURL="/images/kite.png" 
        productName="Kite"
        productDescription="Our ultra-fast flagship trading platform, 
        designed for professional traders and investors.
        Experience lightning-fast execution, advanced charting tools, and a seamless trading experience."
        tryDemo=""
        learnMore="" 
        googlePlayLink="" 
        appStoreLink=""
       />
        <RightSection
            imageURL="/images/console.png" 
            productName="Console"
            productDescription="The central dashboard for your Zerodha account. Gain sights into your trades amd investments with our powerful analytics and reporting tools."
            learnMore="" 
        />
        <LeftSection 
            imageURL="/images/coin.png" 
            productName="Coin"
            productDescription="Our ultra-fast flagship trading platform, 
            designed for professional traders and investors.
            Experience lightning-fast execution, advanced charting tools, and a seamless trading experience."
            tryDemo=""
            learnMore="" 
            googlePlayLink="" 
            appStoreLink=""
       />
        <RightSection
            imageURL="/images/kiteconnect.png" 
            productName="Kite Connect API"
            productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs.If you are a startup, build your investment app and showcase it to our clientbase."
            learnMore="" 
        />
        <LeftSection 
            imageURL="/images/varsity.png" 
            productName="Varsity mobile"
            productDescription="Our ultra-fast flagship trading platform, 
            designed for professional traders and investors.
            Experience lightning-fast execution, advanced charting tools, and a seamless trading experience."
            tryDemo=""
            learnMore="" 
            googlePlayLink="" 
            appStoreLink=""
       />
       <p className="text-center mt-5 mb-5">
            Want to know more about our technology stack? Check out the Zerodha.tech blog.
       </p>
       <Universe/>
       </>
    );
}

export default ProductsPage;