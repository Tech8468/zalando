import React from 'react';
import { AiOutlineHeart } from "react-icons/ai";
// import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";
// import Pix1 from "./shop/img1.jpg";
import Pix2 from "./shop/img31.jpg";
import Pix3 from "./shop/img32.jpg";



function ShopBlog() {
    return (
        
            <>
            <div className="card">
                        <Link to="/">
                            <div className="product-card">
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
                            </div>
                        </Link>
                        <Link to="/">
                            <div className="product-card">
                                <div >
                                    <img src={Pix3} alt="" />
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
                            </div>
                        </Link>  
                    </div>
                    </>
            
           

    )
}
export default ShopBlog;