import React from "react";
import { useState, useEffect } from "react";

// import ShopBlog from "./ShopBlog";
import ShopBlog2 from "./ShopBlog2";
// import { AiOutlineHeart } from "react-icons/ai";
// import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";
// import ShopBlog3 from "./ShopBlog3";




function Shop() {
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {


        fetch('http://159.65.21.42:9000/products')
            .then((resp) => resp.json())
            .then((data) => {

                const filterCategory = data.filter((prod) => {
                    return (prod.category === "Zalando");
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
                                <Link to={`/shop/${product._id}`}>
                                    <div key={product._id} className="product-card">
                                        <div >
                                            <div className="imgIcon">
                                                <img src={'http://159.65.21.42:9000' + product.image} alt="" />
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
                                        <p>£{product.price}</p>
                                    </div>
                                </Link>
                            ))
                        )
                        }
                    </div>
                    <ShopBlog2 />
                    <div className="card">
                        {loading === true ? (
                            <div>Loading, please wait...</div>
                        ) : (
                            product.map((product) => (
                                <Link to={`/shop/${product._id}`} key={product._id}>
                                    <div className="product-card">
                                        <div >
                                            <div className="imgIcon">
                                                <img src={'http://159.65.21.42:9000' + product.image} alt="" />
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
                                        <p>£{product.price}</p>
                                    </div>
                                </Link>
                            ))
                        )
                        }
                        



                    </div>
                </div>

            </div>
            {/* <ShopBlog2 /> */}
            {/* <ShopBlog3 /> */}
        </div>
    )
}
export default Shop;

