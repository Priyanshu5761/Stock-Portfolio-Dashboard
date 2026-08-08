import React from 'react';
function RightSection({imageURL, productName, productDescription, learnMore}) {
    return ( 
        <div className="container">
            <div className="row">
                <div className="col-md-5 mt-5">
                    <h2 className="product-name">{productName}</h2>
                    <p className="product-description">{productDescription}</p>
                    <div>
                        <a href={learnMore} style={{marginLeft:"50px", textDecoration:"none"}} > Learn More <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    </div>
                </div>    
                <div className="col-md-2"></div>
                <div className="col-md-5">
                    <img src={imageURL} alt={productName} className="product-image" />
                </div>
               
                    
                
            </div>
        
        </div>
     );
}

export default RightSection;