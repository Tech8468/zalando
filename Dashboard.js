import { Link } from "react-router-dom";
import logo from "./img/logo_default.svg";
import { useEffect, useState } from "react";


export function Dashboard() {

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
            <div className="container">
                <div className="sideBar">
                    <div className="logo">
                        <div><Link to="/"><img className="logo" src={logo} alt="" /></Link></div>
                        <p>Welcome <span>Mr Precious</span></p>
                    </div>
                    <div className="dBoard">
                        <div><h1>Dashboard</h1></div>
                    </div>
                    <div className="productDashboard">
                        <div><Link to="/admin/product"><h1>Product</h1></Link></div>
                    </div>
                    <div className="createProduct">
                        <div><Link to="/admin/createproduct"><h1>Create product</h1></Link></div>
                    </div>
                    <div className="users">
                        <div><Link to="/admin/users"><h1>Users</h1></Link></div>
                    </div>
                    <div className="LoginReg">
                        <div><Link to="/admin/userregister"><h1>Create user</h1></Link></div>
                    </div>
                </div>
                <div className="dashboardBanner">
                    <div className="banner1">
                        <button>Go to Cart</button>
                    </div>
                    <div className="banner2">
                        <div className="totalProduct">
                            <Link to="/"><h1>Product: <span>52</span></h1></Link>
                        </div>
                        <div className="totalProduct">
                            <Link to="/"><h1>Users: <span>8</span></h1></Link>
                        </div>
                        <div className="totalProduct">
                            <Link to="/"><h1>Cart: <span>24</span></h1></Link>
                        </div>
                    </div>
                    <div className="banner3">
                        <table width="100%" cellPadding={10}>
                            <thead className="th">
                                <tr>
                                    <td className="tdtop">
                                        Image
                                    </td>
                                    <td className="tdtop">
                                        Product name
                                    </td>
                                    <td className="tdtop">
                                        Discription
                                    </td>
                                    <td className="tdtop">
                                        Price
                                    </td>
                                    <td className="tdnone tdtop">
                                        N0. in stock
                                    </td>
                                </tr>
                            </thead>
                            <tbody>
                                {loading === true ? (
                                    <div>Loading, please wait...</div>
                                ) : (
                                    product.map((product) => (
                                        <tr>
                                            <td><img src={'http://159.65.21.42:9000' + product.image} alt="Products" /></td>
                                            <td>{product.name}</td>
                                            <td>{product.description}</td>
                                            <td>£{product.price}</td>
                                            <td className="tdnone">{product.quantity}</td>
                                        </tr>
                                    ))
                                )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;