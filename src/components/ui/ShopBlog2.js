import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import Pix1 from "./shop/pic1.jpg";

export function ShopBlog2() {
    return(
        <div className="shop-section2">
                <div className="col1">
                    <h1>
                        Give me a break
                    </h1>
                    <h2>
                        All you need for sunny getaways
                    </h2>
                    <p>
                        Swap your slippers for sandals, loungewear for linen and start manifesting a season of style.
                    </p>
                    <div className="text">
                        <p>Get inspired</p>
                        <span className="arrow"><IoIosArrowRoundForward /></span>
                    </div>
                </div>
                <div className="col2">
                    <img src={Pix1} alt="" />
                </div>
            </div>
    )
}

export default ShopBlog2;