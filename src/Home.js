import React from 'react'
import './Home.css'
import Product from './Product'



function Home() {
    return (
        <div className="home">
            <div className="home_container">
                <img 
                    className="home_image"
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                />
                <div className="home_row">
                    <Product 
                        id="221133"
                        title="learn Startup"
                        rating={4}
                        price={19.000}
                        images="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
                    />
                    <Product 
                        id="221134"
                        title="DualShock 4 Wireless Controller for PlayStation 4 - Magma Red"
                        rating={3}
                        price={20.000}
                        images="https://images-na.ssl-images-amazon.com/images/I/41kaOFDXzSL._AC_SY200_.jpg"
                    />
                    {/* product */}
                </div>

                <div className="home_row">
                    <Product 
                        id="221135"
                        title="RUNMUS Gaming Headset Xbox One Headset with 7.1 Surround Sound, PS4 Headset with Noise Canceling Mic & LED Light, Compatible with PC, PS4, Xbox One Controller(Adapter Not Included)"
                        rating={4}
                        price={36.95}
                        images="https://images-na.ssl-images-amazon.com/images/I/41QztBTooxL._AC_SY200_.jpg"
                    />
                    <Product 
                        id="221136"
                        title="learn Startup"
                        rating={4}
                        price={19.000}
                        images="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
                    />
                    <Product 
                        id="223337"
                        title="learn Startup"
                        rating={4}
                        price={192.000}
                        images="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
                    />

                </div>

                <div className="home_row">
                    <Product 
                        id="221138"
                        title="learn Startup"
                        rating={4}
                        price={"18.00"}
                        images="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
                    />
                </div>

            </div>
        </div>
    )
}

export default Home
