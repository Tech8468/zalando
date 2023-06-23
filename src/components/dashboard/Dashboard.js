import { Link } from "react-router-dom";
import logo from "./img/logo_default.svg";
import Pix1 from "./img/img2.webp";


export function Dashboard() {
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
                        <div><Link to="/admin"><h1>Login user/Register user</h1></Link></div>
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
                        <tr>
                            <td><img src={Pix1} alt="" /></td>
                            <td>Redefined Rebel</td>
                            <td>TUCKER TEE - Print T-shirt - deep teal</td>
                            <td>£25.99</td>
                            <td className="tdnone">10</td>
                        </tr>
                        <tr>
                            <td><img src={Pix1} alt="" /></td>
                            <td>Redefined Rebel</td>
                            <td>TUCKER TEE - Print T-shirt - deep teal</td>
                            <td>£25.99</td>
                            <td className="tdnone">10</td>
                        </tr>
                        <tr>
                            <td><img src={Pix1} alt="" /></td>
                            <td>Redefined Rebel</td>
                            <td>TUCKER TEE - Print T-shirt - deep teal</td>
                            <td>£25.99</td>
                            <td className="tdnone">10</td>
                        </tr>
                        <tr>
                            <td><img src={Pix1} alt="" /></td>
                            <td>Redefined Rebel</td>
                            <td>TUCKER TEE - Print T-shirt - deep teal</td>
                            <td>£25.99</td>
                            <td className="tdnone">10</td>
                        </tr>
                        <tr>
                            <td><img src={Pix1} alt="" /></td>
                            <td>Redefined Rebel</td>
                            <td>TUCKER TEE - Print T-shirt - deep teal</td>
                            <td>£25.99</td>
                            <td className="tdnone">10</td>
                        </tr>
                        <tr>
                            <td><img src={Pix1} alt="" /></td>
                            <td>Redefined Rebel</td>
                            <td>TUCKER TEE - Print T-shirt - deep teal</td>
                            <td>£25.99</td>
                            <td className="tdnone">10</td>
                        </tr>
                        <tr>
                            <td><img src={Pix1} alt="" /></td>
                            <td>Redefined Rebel</td>
                            <td>TUCKER TEE - Print T-shirt - deep teal</td>
                            <td>£25.99</td>
                            <td className="tdnone">10</td>
                        </tr>
                        <tr>
                            <td><img src={Pix1} alt="" /></td>
                            <td>Redefined Rebel</td>
                            <td>TUCKER TEE - Print T-shirt - deep teal</td>
                            <td>£25.99</td>
                            <td className="tdnone">10</td>
                        </tr>
                        <tr>
                            <td><img src={Pix1} alt="" /></td>
                            <td>Redefined Rebel</td>
                            <td>TUCKER TEE - Print T-shirt - deep teal</td>
                            <td>£25.99</td>
                            <td className="tdnone">10</td>
                        </tr>
                        <tr>
                            <td><img src={Pix1} alt="" /></td>
                            <td>Redefined Rebel</td>
                            <td>TUCKER TEE - Print T-shirt - deep teal</td>
                            <td>£25.99</td>
                            <td className="tdnone">10</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
            </div>
        </div>
    )
}

export default Dashboard;