import React from 'react';

function Universe() {
    return (
        <div className="container">
            <div className="row text-center">
                <div className="col-12">
                    <h1>The Zerodha Universe</h1>
                    <p>
                        Extend our trading and investment experience even further
                        with our comprehensive suite of tools and services.
                    </p>
                </div>

                <div className="col-4 p-3 mt-5">
                    <img src="\Images\smallcaseLogo.png" alt="Smallcase Logo" className="universe-logo" />
                    <p className="small text-muted">Thematic investment platform</p>
                </div>
                <div className="col-4 p-3 mt-5">
                    <img src="\Images\streakLogo.png" alt="Streak Logo" className="universe-logo" />
                    <p className="small text-muted">Algo & strategy platform</p>
                </div>
                <div className="col-4 p-3 mt-5">
                    <img src="\Images\sensibullLogo.svg" alt="Sensibull Logo" className="universe-logo" />
                    <p className="small text-muted">Options trading platform</p>
                </div>
                <div className="col-4 p-3 mt-5">
                    <img src="\Images\zerodhaFundhouse.png" alt="Zerodha Fund House Logo" className="universe-logo" />
                    <p className="small text-muted">Asset management</p>
                </div>
                <div className="col-4 p-3 mt-5">
                    <img src="\Images\goldenpiLogo.png" alt="GoldenPi Logo" className="universe-logo" />
                    <p className="small text-muted">Bonds trading platform</p>
                </div>
                <div className="col-4 p-3 mt-5">
                    <img src="\Images\dittoLogo.png" alt="Ditto Logo" className="universe-logo" />
                    <p className="small text-muted">Insurance</p>
                </div>

                <div className="col-12 mt-5">
                    <button className="pt-1 btn btn-primary fs-5" style={{ width: "20%", margin: "0 auto" }}>
                        Signup Now
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Universe;