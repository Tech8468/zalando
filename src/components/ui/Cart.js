import React from "react";
// import ShopBlog from "./ShopBlog";
import { AiOutlineHeart } from "react-icons/ai";
import { RiDeleteBinLine } from "react-icons/ri";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
// import Pix1 from "./shop/img34.jpg";
// import Pix2 from "./shopimg/img31.jpg";
import Pix3 from "./shop/img32.jpg";
import Pix4 from "./shop/img4.jpg";
import Pix5 from "./shop/img5.jpg";

export function Cart() {
    return (
        <div className="singleProduct">
            <div className="cartView">
                <div className="col1">
                    <div className="wrapper">
                        <div><h1>Your bag (1 item)</h1></div>
                        <p>Parcel will be delivered by ZALANDO</p>
                        <div className="cartCard">
                            <div className="card">
                                <div className="col1">
                                    <img src={Pix3} alt="" />
                                    <div>
                                        <h1>title</h1>
                                        <h1>description</h1>
                                        <h1>Colour:</h1>
                                        <h1>Size:</h1>
                                        <p><Link to=""><RiDeleteBinLine />Remove</Link> | <Link to=""><AiOutlineHeart />Move to wish list</Link></p>
                                    </div>
                                </div>
                                <div className="col2">
                                    <select>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        <option>6</option>
                                        <option>7</option>
                                        <option>8</option>
                                        <option>9</option>
                                        <option>10</option>

                                    </select>
                                    <h1>£119.99</h1>
                                </div>
                            </div>
                            
                        </div>
                        <h5><AiOutlineInfoCircle />Items placed in this bag are not reserved.</h5>
                    </div>
                    <div className="wrapper2">
                        <h1>Estimated delivery</h1>
                        <p>Thu, 13/04 - Sat, 15/04</p>
                    </div>
                </div>
                <div className="col2">
                    <div className="wrappe">
                        <h1>Total</h1>
                    </div>
                </div>
            </div>
            <div className="productCard">
                <h1 className="word"> Similar items</h1>
                <h3>How about these?</h3>
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
        </div>
    )
}

export default Cart;