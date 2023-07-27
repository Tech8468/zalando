import { Link } from "react-router-dom";
import logo from "./img/logo_default.svg";
// import Pix1 from "./img/img2.webp";
// import Pix2 from "./img/img3.webp";
import { useEffect, useState } from "react";
// import axios from "axios";


export function ProductView() {
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // e.preventDefault();


        fetch("http://159.65.21.42:9000/products")
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
        <div className="overflow">
            <div className="container productContainer">
                <div className="sideBar">
                    <div className="logo">
                        <div><Link to="/"><img className="logo" src={logo} alt="" /></Link></div>
                        <p>Welcome <span>Mr Precious</span></p>
                    </div>
                    <div className="dashBoard">
                        <div><Link to="/admin/dashboard"><h1>Dashboard</h1></Link></div>
                    </div>
                    <div className="board">
                        <div><h1>Product</h1></div>
                    </div>
                    <div className="createProduct">
                        <div><Link to="/admin/createproduct"><h1>Create product</h1></Link></div>
                    </div>
                    <div className="users">
                        <div><Link to="/admin/users"><h1>Users</h1></Link></div>
                    </div>
                    <div className="LoginReg">
                        <div><Link to="/admin"><h1>Create user</h1></Link></div>
                    </div>
                </div>
                <div className="dashboardBanner productBanner">
                    <div className="banner1 b2">
                        <button>Go to Dashboard</button>
                    </div>
                    <div className="pdView"><h1>Product view</h1></div>
                    <div className="banner3 productViewBanner">
                        <div className="pdCard">

                            {loading === true ? (
                                <div>Loading, please wait...</div>
                            ) : (
                                product.map((product) => (
                                    <div className="cardView" >
                                        <div>
                                            <img src={'http://159.65.21.42:9000' + product.image} alt="product" />
                                        </div>
                                        <div className="pdName">
                                            <h1>{product.name}</h1>
                                        </div>
                                        <div>
                                            <h2>{product.description}</h2>
                                        </div>
                                        <div className="pdtxt">
                                            <p>${product.price}</p>
                                            <p>stock: <span>{product.quantity}</span></p>
                                        </div>
                                        <div className="pdBtn">
                                            <button className="Btn1">Edit</button>
                                            <button className="Btn2">Delete</button>
                                        </div>
                                    </div>
                                ))
                            )
                            }

                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductView;