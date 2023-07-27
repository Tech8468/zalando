import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";
import Pix1 from "./img/sec2pix1.jpg";
import Pix2 from "./img/sec2pix2.jpg";
import Pix3 from "./img/sec2pix3.jpg";
import Pix4 from "./img/sec2pix4.jpg";
import Pix5 from "./img/sec2pix5.jpg";


function Section2() {



    return (
        <Link to="/"><div >
            <div className="section2">
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
            <div className="product">
                <div className="card">
                        <Link to="/">
                            <div >
                                <img src={Pix2} alt="" />
                                <span className="icon">
                                    <AiOutlineHeart />
                                </span>
                                <h1><span className="txt1">Designer </span> <span className="txt2">Kids</span></h1>
                            </div>
                            <h2>Versace</h2>
                            <h3>MEDUSA UNISEX - Basic T-shirt - iris/rosso</h3>
                            <p>From £65.00</p>
                        </Link>
                        <Link to="/">
                            <div >
                                <img src={Pix3} alt="" />
                                <span className="icon">
                                    <AiOutlineHeart />
                                </span>
                                <h1><span className="txt1">Designer </span> <span className="txt2">Kids</span></h1>
                            </div>
                            <h2>Zadig & Voltaire</h2>
                            <h3>Denim jacket - white</h3>
                            <p>From £109.99</p>
                        </Link>
                        <Link to="/">
                            <div >
                                <img src={Pix4} alt="" />
                                <span className="icon">
                                    <AiOutlineHeart />
                                </span>
                                <h1><span className="txt1">Designer </span> <span className="txt2">Kids</span></h1>
                            </div>
                            <h2>Stella McCartney Kids</h2>
                            <h3>CARDIGAN - Cardigan - colourful</h3>
                            <p>£129.99</p>
                        </Link>
                        <Link to="/">
                            <div >
                                <img src={Pix5} alt="" />
                                <span className="icon">
                                    <AiOutlineHeart />
                                </span>
                                <h1><span className="txt1">Designer </span> <span className="txt2">Kids</span></h1>
                            </div>
                            


                            <h2>Stella McCartney Kids</h2>
                            <h3>DUNGAREE - Dungarees - blue/white</h3>
                            <p>£114.99</p>
                        </Link>
                </div>
                
            </div>
        </div></Link>
    )
}
export default Section2;