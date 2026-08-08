import React from 'react';
function Pricing() {
    return ( 
       <div className='container'>
        <div className='row'>
            <div className='col-4'>
                <h1 className='mb-3'>Unbeatable Pricing</h1>
                <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                <a style={{textDecoration:"None"}}  className='mx-4'   href=''>See Pricing <i class="fa-solid fa-right-long"></i></a>
            </div>
            <div className='col-2'></div>
            <div className='col-6'>
                <div className='row'>
                    <div className=' col p-3 border text-center'>
                        <h1 className='mb-3'><i class="fa-solid fa-indian-rupee-sign"></i>0</h1>
                        <p>Free equity delivery and <br/>direct mutual funds</p>
                    </div>
                    <div className='col p-3 border text-center'>
                        <h1 className='mb-3'><i class="fa-solid fa-indian-rupee-sign"></i>20</h1>
                        <p>Intraday and F&O</p>
                    </div>
                </div>
            </div>
        </div>
       </div>
    );
}

export default Pricing;