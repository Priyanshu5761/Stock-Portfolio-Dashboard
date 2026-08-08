import React from 'react';
function Footer() {
    return ( 
        <footer>
        <div className='container-fluid bg-light border-top mt-5'>
            <div className='row mt-5'>
                <div className='col-3'>
                    <img src="images-20260604T070444Z-3-001\images\logo.svg" style={{width:"50%"}} alt="Zerodha-logo" />
                    <p>&copy;2010 - 2024, Zerodha Broking Ltd. All <br/> rights reserved.</p>
                    <br/>
                    <div className='fs-4 d-flex text-muted  gap-3'>
                        <i class="fa-brands fa-x-twitter"></i>
                        <i class="fa-brands fa-square-facebook"></i>
                        <i class="fa-brands fa-instagram"></i>
                        <i class="fa-brands fa-linkedin-in"></i>
                    </div>
                    
                    <hr/>

                    <div className='fs-4 d-flex text-muted  gap-3'>
                        <i class="fa-brands fa-youtube"></i>
                        <i class="fa-brands fa-whatsapp"></i>
                        <i class="fa-brands fa-telegram"></i>
                    </div>
                </div>
                <div className='col-3 text-muted footer-nav'>
                    <p>Company</p>
                    <a style={{textDecoration:"none"}}>About</a> <br/>
                    <a style={{textDecoration:"none"}}>Products</a> <br/>
                    <a style={{textDecoration:"none"}}>Pricing</a> <br/>
                    <a style={{textDecoration:"none"}}>Referral programme</a> <br/>
                    <a style={{textDecoration:"none"}}>Careers</a> <br/>
                    <a style={{textDecoration:"none"}}>Zerodha.tech</a> <br/>
                    <a style={{textDecoration:"none"}}>Press & media</a> <br/>
                    <a style={{textDecoration:"none"}}>Zerodha Cares (CSR)</a>  <br/>
                </div>
                <div className='col-3'>
                    <p>Support</p>
                    <a style={{textDecoration:"none"}}>Contact</a> <br/>
                    <a style={{textDecoration:"none"}}>Support portal</a> <br/>
                    <a style={{textDecoration:"none"}}>Z-connect blog</a> <br/>
                    <a style={{textDecoration:"none"}}>List of charges</a> <br/>
                    <a style={{textDecoration:"none"}}>Downloads & resources</a>
                </div>
                <div className='col-3'>
                    <p>Account</p>
                    <a style={{textDecoration:"none"}}>Open an accountFund transfer</a>
                </div>
            </div>
            <div className='mt-5 text-muted' style={{fontSize:"14px"}}>
                <p>
                    Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances Smart Online Dispute Resolution | Grievances Redressal Mechanism
                </p>
                <p>
                    Investments in securities market are subject to market risks; read all the related documents carefully before investing. Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month. "Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not
                </p>
                <p>
                    undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please create a ticket here.
                </p>
            </div>
            <div className='mt-2 text-muted d-flex gap-3 justify-content-center' style={{fontSize:"15px"}}>
                <p>NSE</p>
                <p>BSE</p>
                <p>MCX</p>
                <p>Terms & <br/> Conditions</p>
                <p>Policies and <br/> procedures</p>
                <p> Privacy <br/> Policy</p>
                <p>Disclosure</p>
                <p>For investors <br/> Attention</p>
                <p> Investors <br/> charter</p>
                <p></p>
            </div>
        </div>
        </footer>
     );
}

export default Footer;