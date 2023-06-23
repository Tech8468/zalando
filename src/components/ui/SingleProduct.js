import React from "react";
// import ShopBlog from "./ShopBlog";
import { AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { BsTruck } from "react-icons/bs";
// import Pix1 from "./shop/img34.jpg";
// import Pix2 from "./shopimg/img31.jpg";
import Pix3 from "./shop/img32.jpg";
import Pix4 from "./shop/img4.jpg";
import Pix5 from "./shop/img5.jpg";

export function SingleProduct() {
    return (
        <div className="singleProduct">
            <div className="productView">
                <div className="col1">
                    <img src={Pix3} className="pix1" alt="" />
                    <img src={Pix4} className="pix2" alt="" />
                </div>
                <div className="col2">
                    <img src={Pix5} className="pix3" alt="" />
                </div>
                <div className="col3">
                    <h1><Link to="/">AllSaints</Link></h1>
                    <h2>HAWTHORNE - Shirt</h2>
                    <span className="disc">43% off</span>
                    <div>
                        <h3>£54.00 <span>£89.99</span></h3>
                    </div>
                    <p>Colour: <span className="txt">stereo grey</span></p>
                    <div className="imageView">
                        <img src={Pix3} className="pix1" alt="" />
                        <img src={Pix4} className="pix2" alt="" />
                    </div>
                    <select >
                        <option value="">Choose your size</option>
                        <option className="size" value="">Xs <span className="txt1">Only 2 left</span></option>
                        <option className="size" value="">S</option>
                        <option className="size" value="">M</option>
                        <option className="size" value="">L</option>
                        <option className="size" value="">XL</option>
                        <option className="size" value="">XXL <span className="txt1">Only 2 left</span></option>                        
                    </select>
                    <div className="btn">
                        <button className="shopBtn">Add to bag</button>
                        <AiOutlineHeart className="heart"/>
                    </div>
                    <table className="table" >
                        <thead className="th">
                            <tr>
                                <th className="hd1">
                                    <h1><BsTruck /></h1>
                                    <h1 >2-4 working days</h1>
                                    <p>Standard delivery</p>
                                </th>
                            </tr>
                            <tr>
                                <th className="hd2">
                                    <h1>Free</h1>
                                </th>
                            </tr>
                        </thead>
                        {/* <tbody>
                            <tr>
                                <td>
                                    <h1></h1>
                                </td>
                            </tr>
                        </tbody> */}
                    </table>
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

export default SingleProduct;