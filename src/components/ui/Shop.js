import React from "react";
import { useState, useEffect } from "react";

// import ShopBlog from "./ShopBlog";
import ShopBlog2 from "./ShopBlog2";
// import { AiOutlineHeart } from "react-icons/ai";
// import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";
import ShopBlog3 from "./ShopBlog3";

// import Pix1 from "./shopimg/pic1.jpg";
import Pix2 from "./shop/img31.jpg";
// import Pix3 from "./shop/img32.jpg";
import Pix4 from "./shop/img33.jpg";
// import Pix5 from "./shopimg/img34.jpg";



function Shop() {
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {


        fetch('http://159.65.21.42:9000/products')
            .then((resp) => resp.json())
            .then((data) => {

                const filterCategory = data.filter((prod) => {
                    return (prod.category === "shein");
                })
                setProduct(filterCategory)
                setLoading(false)
                // console.log(product);
            });

    }, []);
    return (
        <div className="shopHeader">
            <h1>Men's Casual Shirts</h1>
            <div className="shopBanner">
                <div className="col1">
                    <ul>
                        <li>
                            <Link to="/">Clothing</Link>
                        </li>
                        <li>
                            <Link to="/">T-Shirts & Polos</Link>
                        </li>
                        <li>
                            <Link to="/">Shirts</Link>
                        </li>
                        <li>
                            <Link to="/">SweatShirts & Hoodies</Link>
                        </li>
                        <li>
                            <Link to="/">Jeans</Link>
                        </li>
                        <li>
                            <Link to="/">Trousers</Link>
                        </li>
                        <li>
                            <Link to="/">Shorts</Link>
                        </li>
                        <li>
                            <Link to="/">Sportswear</Link>
                        </li>
                        <li>
                            <Link to="/">Tracksuits & Joggers</Link>
                        </li>
                        <li>
                            <Link to="/">Suits & Tailoring</Link>
                        </li>
                        <li>
                            <Link to="/">Jackets</Link>
                        </li>
                        <li>
                            <Link to="/">Coats</Link>
                        </li>
                        <li>
                            <Link to="/">Knitwear</Link>
                        </li>
                        <li>
                            <Link to="/">Underwear & Socks</Link>
                        </li>
                        <li>
                            <Link to="/">Swimwear</Link>
                        </li>
                        <li>
                            <Link to="/">Loungewear & Sleepwear</Link>
                        </li>
                    </ul>
                </div>
                <div className="col2">
                    <div className="card">
                        {loading === true ? (
                            <div>Loading, please wait...</div>
                        ) : (
                            product.map((product) => (
                                <Link to="/">
                                    <div className="product-card">
                                        <div >
                                            <div className="imgIcon">
                                                <img src={product.image} alt="" />
                                                {/* <span className="icon">
                                        <AiOutlineHeart />
                                    </span> */}
                                            </div>
                                            <div className="shop1">
                                                <h1 className="txt1">Plus size</h1>
                                                <h1 className="txt2">New</h1>
                                            </div>
                                        </div>
                                        <h2>{product.name}</h2>
                                        <h3>{product.description}</h3>
                                        <p>{product.price}</p>
                                    </div>
                                </Link>
                            ))
                        )
                        }
                        <Link to="/">
                            <div className="product-card">
                                <div >
                                    <div className="imgIcon">
                                        <img src={Pix2} alt="" />
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



                    </div>
                </div>

            </div>
            <ShopBlog2 />
            <ShopBlog3 />
        </div>
    )
}
export default Shop;

