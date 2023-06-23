import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";
import Pix1 from "./img/img30.webp";
import Pix2 from "./img/img31.webp";
import Pix3 from "./img/img32.webp";
import Pix4 from "./img/img33.webp";
import Pix5 from "./img/img34.webp";


function Section2() {



    return (
        <Link to="/"><div >
            <div className="section4">
                <div className="col1">
                    <h1>
                        Easter Weekend Edit
                    </h1>
                    <h2>
                        Little looks for big celebrations
                    </h2>
                    <p>
                        Egg hunt or big brunch, dress the kids up in Polo Ralph Lauren, Stella McCartney, Marni & more.
                    </p>
                    <div className="text">
                        <p>Discover now </p>
                        <span className="arrow"><IoIosArrowRoundForward /></span>
                    </div>
                </div>
                <div className="col2">
                    <img src={Pix1} alt="" />
                </div>
            </div>
            <div className="section4Product">
                <div className="card">
                    <Link to="/">
                        <div >
                            <img src={Pix2} alt="" />
                            <span className="icon">
                                <AiOutlineHeart />
                            </span>
                            <div className="shop1">
                                <h1 className="txt1">Plus size</h1>
                                <h1 className="txt2">New</h1>
                            </div>
                        </div>
                        <h2>Redefined Rebel</h2>
                        <h3>TUCKER TEE - Print T-shirt - deep teal</h3>
                        <p>£25.99</p>
                    </Link>
                    <Link to="/">
                        <div >
                            <img src={Pix3} alt="" />
                            <span className="icon">
                                <AiOutlineHeart />
                            </span>
                            <div className="shop1 btn">
                                <h1 className="txt1">Designer</h1>
                                <h1 className="txt2">Plus size</h1>
                            </div>
                        </div>
                        <h2>Polo Ralph Lauren Big & Tall</h2>
                        <h3>HOOD LONG SLEEVE - Zip-up sweatshirt...</h3>
                        <p>£164.99</p>
                    </Link>
                    <Link to="/">
                        <div >
                            <img src={Pix4} alt="" />
                            <span className="icon">
                                <AiOutlineHeart />
                            </span>
                            <div className="shop1 btn">
                                <h1 className="txt1">Designer</h1>
                                <h1 className="txt2">Plus size</h1>
                            </div>
                        </div>
                        <h2>Polo Ralph Lauren Big & Tall</h2>
                        <h3>LONG SLEEVE SPORT SHIRT - Shirt -...</h3>
                        <p>£134.99</p>
                    </Link>
                    <Link to="/">
                        <div >
                            <img src={Pix5} alt="" />
                            <span className="icon">
                                <AiOutlineHeart />
                            </span>
                            <div className="shop1 btn">
                                <h1 className="txt1">Designer</h1>
                                <h1 className="txt2">Plus size</h1>
                            </div>
                        </div>
                        <h2>Polo Ralph Lauren Big & Tall</h2>
                        <h3>SHORT SLEEVE - Basic T-shirt - andover...</h3>
                        <p>£64.00 (£79.99)</p>
                    </Link>
                </div>

            </div>
        </div></Link>
    )
}
export default Section2;