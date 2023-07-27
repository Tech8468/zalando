import React from "react";
// import ShopBlog from "./ShopBlog";
// import { AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
// import { IoIosArrowRoundForward } from "react-icons/io";
// import Pix1 from "./shop/img34.jpg";
// import Pix2 from "./shopimg/img31.jpg";
import Pix3 from "./shop/img32.jpg";
import Pix4 from "./shop/img4.jpg";
import Pix5 from "./shop/img5.jpg";

export function ShopBlog3() {
    return (
        <div className="productCard">
            <div className="card">
                <Link to="/">
                    <div className="product-card">
                        <div >
                            <div className="imgIcon">
                                <img src={Pix3} alt="" />
                                {/* <span className="icon">
                                        <AiOutlineHeart />
                                    </span> */}
                            </div>
                            <div className="shop1">
                                <h1 className="txt1">Plus size</h1>
                                <h1 className="txt2">New</h1>
                            </div>
                        </div>
                        <h2>Redefined Rebel</h2>
                        <h3>TUCKER TEE - Print T-shirt - deep teal</h3>
                        <p>£25.99</p>
                    </div>
                </Link>
                <Link to="/">
                    <div className="product-card">
                        <div >
                            <div className="imgIcon">
                                <img src={Pix4} alt="" />
                                {/* <span className="icon">
                                        <AiOutlineHeart />
                                    </span> */}
                            </div>
                            <div className="shop1">
                                <h1 className="txt1">Plus size</h1>
                                <h1 className="txt2">New</h1>
                            </div>
                        </div>
                        <h2>Redefined Rebel</h2>
                        <h3>TUCKER TEE - Print T-shirt - deep teal</h3>
                        <p>£25.99</p>
                    </div>
                </Link>
                <Link to="/">
                    <div className="product-card">
                        <div >
                            <div className="imgIcon">
                                <img src={Pix5} alt="" />
                                {/* <span className="icon">
                                        <AiOutlineHeart />
                                    </span> */}
                            </div>
                            <div className="shop1">
                                <h1 className="txt1">Plus size</h1>
                                <h1 className="txt2">New</h1>
                            </div>
                        </div>
                        <h2>Redefined Rebel</h2>
                        <h3>TUCKER TEE - Print T-shirt - deep teal</h3>
                        <p>£25.99</p>
                    </div>
                </Link>
            </div>

        </div>
    )
}

export default ShopBlog3;