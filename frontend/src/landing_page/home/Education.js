import React from 'react';
function Education() {
    return ( 
       <div className='container p-5'>
        <div className='row p-5'> 

            <div className='col-6 p-5 text-center'>
                <img    src='images-20260604T070444Z-3-001\images\education.svg'alt='Education' style={{width:"100%"}}/>
            </div>
            <div className='col-6 p-5 '>
                <h1  className='fs-2 mb-5'>Free and open market education</h1>
                <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                <a style={{textDecoration:"none"}} href=''>Varsity  <i class="fa-solid fa-right-long"></i></a>
                <p className='mt-5'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                <a href='' style={{textDecoration:"none"}}>TradingQ&A <i class="fa-solid fa-right-long"></i></a>
            </div>
           
            
        </div>
       
       </div>
     );
}

export default Education;