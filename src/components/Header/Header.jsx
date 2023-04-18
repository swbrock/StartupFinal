import "./Header.scss";
import React from "react";
import { useEffect, useState, useContext} from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const navigate = useNavigate();
    const handleScroll = () => {
        const offset = window.scrollY
        if(offset > 200){
            setScrolled(true);
        }else{
            setScrolled(false);
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    },[]);
    return (
        <>
            <header className={`main-header ${scrolled ? 'sticky-header' : " "}`}>
                <div className="header-content">
                <ul className="left">
                <li onClick={() => navigate("/")}>Home</li>
                <li onClick={() => navigate("/review")}>Add Review</li>
                <li onClick={() => navigate("/categories")}>Categories</li>
            </ul>
            <div className="center" onClick={() => navigate("/")}>
                <h1>Home</h1>
            </div>
        </div>
    </header>
    </>
    );
};


export default Header;
