import React from 'react';
function Award() {
    return ( 
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-6 p-5'>
                    <img src='/images/largestBroker.svg' />
                </div>

                <div className='col-6 p-5 mt-5'>
                    <h1>Largest Stock broker in India</h1>
                    <p className='mb-5'>2+ million Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:</p>
                    <div className='row'>
                        <div className='col-6'> 
                            <ul>
                                <li>Future and Options</li>
                                <li>Commodity derivatives</li>
                                <li>Currency derivatives</li>
                            </ul>
                        </div>
                        <div className='col-6'>
                            <ul>
                                <li>Stocks & IPOs</li>
                                <li>Direct mutual funds</li>
                                <li>Bonds and Government Securities</li>
                            </ul>
                        </div>
                        <img src='\images\pressLogos.png' style={{width:"90%"}} alt='Press-logo'/>
                    </div> 
                </div>
            </div>
        </div>
     );
}

export default Award;