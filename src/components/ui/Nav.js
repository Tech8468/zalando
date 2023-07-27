import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./img/logo_default.svg";
import login from "./img/user.png";
import heart from "./img/heart.png";
import bag from "./img/briefcase-blank.png";
import { AiOutlineSearch } from "react-icons/ai"
import Dropdown from "./Dropdown";
function Nav() {
    // const [click, setClick] = useState(false);

    
    const [dropdown, setDropdown] = useState(false);
    // const [closeMobileMenu, setCloseMobileMenu] = useState(false);

    // const handleClick = () => setClick (!click);
    // const closeMobileMenu = () => setClick (false);

    const onMouseEnter = () => {
        if (window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(true);
        }
    };

    const onMouseLeave = () => {
        if (window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(false);
        }
    };


    return (
        <div className="navbar">
            <div className="topNav">
                <h1>Help and contact</h1>
                <h1>FREE DELIVERY & RETURNS*</h1>
                <h1>100-day return policy</h1>
            </div>
            <div className="centerNav" >
                <ul className="links">
                    <li>
                        <Link to="/">Women</Link>
                    </li>
                    <li>
                        <Link to="/">Men</Link>
                    </li>
                    <li>
                        <Link to="/">Kids</Link>
                    </li>
                </ul>
                <div><Link to="/"><img className="logo" src={logo} alt="" /></Link></div>
                <ul className="icons">
                    <li><Link to="/login"><img src={login} alt="" /></Link></li>
                    <li><Link to="/"><img src={heart} alt="" /></Link></li>
                    <li><Link to="/cart"><img src={bag} alt="" /></Link></li>
                </ul>
            </div>
            <div className="bottomNav">
                <ul className="links" >
                    <li onMouseEnter = {onMouseEnter} onMouseLeave = {onMouseLeave}>
                        <Link to="/">Get the look</Link>
                        {dropdown & <Dropdown />}
                    </li>
                    <li>
                        <Link to="/shop">New</Link>
                        {dropdown && <Dropdown />}
                    </li>
                    <li><Link to="/shop">Clothing</Link></li>
                    <li><Link to="/">Shoes</Link></li>
                    <li><Link to="/">Accessories</Link></li>
                    <li><Link to="/">Sports</Link></li>
                    <li><Link to="/">Streetwear</Link></li>
                    <li><Link to="/">Designer</Link></li>
                    <li><Link to="/">Brands</Link></li>
                    <li><Link to="/">Sale</Link></li>
                </ul>
                <div>
                    <AiOutlineSearch className="icon"/>
                    <input type="text" className="searchBtn" placeholder="Search"></input>
                </div>
            </div>
        </div>
    );
};
export default Nav;