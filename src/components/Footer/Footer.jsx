import React from "react";
import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
// import Payment from "../../assets/payments.png";
const Footer = () => {
    return <footer className="footer">
        <div className="footer-content">
            <div className="col">
                <div className="title">
                    About
                </div>
                <div className="text">Or team wants to create a space where the reviews of movies and board games are from the people and not the critics</div>
            </div>
            <div className="col"><div className="title">
                    Contact
                </div>
                <div className="c-item">
                    <FaLocationArrow/>
                    <div className="text">1192 E. Candy Lane, American Fork, UT</div></div>
                    <div className="c-item">
                    <FaMobileAlt/>
                    <div className="text">801-520-1280</div></div>
                    <div className="c-item">
                    <FaEnvelope/>
                    <div className="text">swbrockbank@gmail.com
                    </div>
                    </div>
                    </div>
            <div className="col">
                <div className="title">Categories</div>
                <span className="text">Movies</span>
                <span className="text">Board Games</span>
                </div>
            <div className="col">
                <div className="title">Pages</div>
                <span className="text">Home</span>
                <span className="text">About</span>
                <span className="text">Reviews</span>
                </div>
        </div>
        <div className="bottom-bar">
        <div className="bottom-bar-content">
            <div className="text">
               2023 @TheWaal. All rights reserved.
            </div>
        </div>
        </div>
    </footer>;
};

export default Footer;