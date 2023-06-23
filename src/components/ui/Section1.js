import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import Pix1 from "./img/img1.webp";
function Section1() {



    return (
        <div >
            <div className="section1">
                <div className="col1">
                    <h1>
                        More daylight, more savings
                    </h1>
                    <h2>
                        Up to 50% off styles for longer days
                    </h2>
                    <div className="text">
                    <p>Shop now </p>
                    <span className="arrow"><IoIosArrowRoundForward /></span>
                    </div>
                </div>
                <div className="col2">
                    <span className="icon"><AiOutlineInfoCircle /></span>
                    <img src={Pix1} alt="" />
                </div>
            </div>
            <div className="colNav">
                <ul >
                    <li>
                        Discover all
                    </li>
                    <li>
                        <Link to="/">Shoes</Link>
                    </li>
                    <li>
                        <Link to="/">Clothing</Link>
                    </li>
                    <li>
                        <Link to="/">Accessories</Link>
                    </li>
                    <li>
                        <Link to="/">Designer</Link>
                    </li>
                    <li>
                        <Link to="/">Sport</Link>
                    </li>
                    <li>
                        <Link to="/">Shop all</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default Section1;