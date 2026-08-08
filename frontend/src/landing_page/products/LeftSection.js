import React from 'react';
function LeftSection({imageURL, productName, productDescription, tryDemo, learnMore, googlePlayLink, appStoreLink}) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-5">
                    <img src={imageURL} alt={productName} className="product-image" />
                </div>
                <div className="col-md-2"></div>
                <div className="col-md-5 mt-5">
                    <h2 className="product-name">{productName}</h2>
                    <p className="product-description">{productDescription}</p>
                    <div >
                        <a href={tryDemo} style={{textDecoration:"none"}} >Try Demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i> </a>
                        <a href={learnMore} style={{marginLeft:"50px", textDecoration:"none"}} > Learn More <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    </div>
                    <div className="mt-3">
                        <a href={googlePlayLink} className="btn btn-google-play"><img src="/images/googlePlayBadge.svg" alt="Google Play" /></a>

                        <a href={appStoreLink} style={{marginLeft:"5px"}} className="btn btn-app-store"><img src="/images/appstoreBadge.svg" alt="App Store" /></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeftSection;