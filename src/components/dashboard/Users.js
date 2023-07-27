import { Link } from "react-router-dom";
import logo from "./img/logo_default.svg";
import Pix1 from "./img/img2.webp";
// import Pix2 from "./img/img3.webp";


export function UsersLog() {
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
                    <div className="productDashboard">
                        <div><Link to="/admin/product"><h1>Product</h1></Link></div>
                    </div>
                    <div className="createProduct">
                        <div><Link to="/admin/createproduct"><h1>Create product</h1></Link></div>
                    </div>
                    <div className="board">
                        <div><h1>Users</h1></div>
                    </div>
                    <div className="LoginReg">
                        <div><Link to="/admin"><h1>Create user</h1></Link></div>
                    </div>
                </div>
                <div className="dashboardBanner productBanner">
                    <div className="banner1 b2">
                        <button>Go to Dashboard</button>
                    </div>
                    <div className="pdView"><h1>Users Log</h1></div>
                    <div className="banner3 productViewBanner">
                        <table width="100%" >
                            <thead className="th">
                                <tr>
                                    <td className="tdtop">
                                        Image
                                    </td>
                                    <td className="tdtop">
                                        First Name
                                    </td>
                                    <td className="tdtop">
                                        Last Name
                                    </td>
                                    <td className="tdtop">
                                        Email
                                    </td>
                                    <td className="tdtop">
                                        Password
                                    </td>
                                    <td className="tdtop">
                                        Phone No.
                                    </td>
                                    <td className="tdnone tdtop">
                                        Action
                                    </td>
                                </tr>
                            </thead>
                            <tbody className="tb">
                                <tr>
                                    <td><img src={Pix1} alt="" /></td>
                                    <td>James</td>
                                    <td>Favour</td>
                                    <td>jamesfavour@gmail.com</td>
                                    <td >james123</td>
                                    <td >08113654925</td>
                                    <td ><button className="Btn1">Edit</button><button className="Btn2">Delete</button></td>
                                </tr>
                                <tr>
                                    <td><img src={Pix1} alt="" /></td>
                                    <td>James</td>
                                    <td>Favour</td>
                                    <td>jamesfavour@gmail.com</td>
                                    <td >james123</td>
                                    <td >08113654925</td>
                                    <td ><button className="Btn1">Edit</button><button className="Btn2">Delete</button></td>
                                </tr>
                                <tr>
                                    <td><img src={Pix1} alt="" /></td>
                                    <td>James</td>
                                    <td>Favour</td>
                                    <td>jamesfavour@gmail.com</td>
                                    <td >james123</td>
                                    <td >08113654925</td>
                                    <td ><button className="Btn1">Edit</button><button className="Btn2">Delete</button></td>
                                </tr>
                                <tr>
                                    <td><img src={Pix1} alt="" /></td>
                                    <td>James</td>
                                    <td>Favour</td>
                                    <td>jamesfavour@gmail.com</td>
                                    <td >james123</td>
                                    <td >08113654925</td>
                                    <td ><button className="Btn1">Edit</button><button className="Btn2">Delete</button></td>
                                </tr>
                                <tr>
                                    <td><img src={Pix1} alt="" /></td>
                                    <td>James</td>
                                    <td>Favour</td>
                                    <td>jamesfavour@gmail.com</td>
                                    <td >james123</td>
                                    <td >08113654925</td>
                                    <td ><button className="Btn1">Edit</button><button className="Btn2">Delete</button></td>
                                </tr>
                                <tr>
                                    <td><img src={Pix1} alt="" /></td>
                                    <td>James</td>
                                    <td>Favour</td>
                                    <td>jamesfavour@gmail.com</td>
                                    <td >james123</td>
                                    <td >08113654925</td>
                                    <td ><button className="Btn1">Edit</button><button className="Btn2">Delete</button></td>
                                </tr>
                                <tr>
                                    <td><img src={Pix1} alt="" /></td>
                                    <td>James</td>
                                    <td>Favour</td>
                                    <td>jamesfavour@gmail.com</td>
                                    <td >james123</td>
                                    <td >08113654925</td>
                                    <td ><button className="Btn1">Edit</button><button className="Btn2">Delete</button></td>
                                </tr>
                                <tr>
                                    <td><img src={Pix1} alt="" /></td>
                                    <td>James</td>
                                    <td>Favour</td>
                                    <td>jamesfavour@gmail.com</td>
                                    <td >james123</td>
                                    <td >08113654925</td>
                                    <td ><button className="Btn1">Edit</button><button className="Btn2">Delete</button></td>
                                </tr>
                                <tr>
                                    <td><img src={Pix1} alt="" /></td>
                                    <td>James</td>
                                    <td>Favour</td>
                                    <td>jamesfavour@gmail.com</td>
                                    <td >james123</td>
                                    <td >08113654925</td>
                                    <td ><button className="Btn1">Edit</button><button className="Btn2">Delete</button></td>
                                </tr>
                                <tr>
                                    <td><img src={Pix1} alt="" /></td>
                                    <td>James</td>
                                    <td>Favour</td>
                                    <td>jamesfavour@gmail.com</td>
                                    <td >james123</td>
                                    <td >08113654925</td>
                                    <td ><button className="Btn1">Edit</button><button className="Btn2">Delete</button></td>
                                </tr>
                                <tr>
                                    <td><img src={Pix1} alt="" /></td>
                                    <td>James</td>
                                    <td>Favour</td>
                                    <td>jamesfavour@gmail.com</td>
                                    <td >james123</td>
                                    <td >08113654925</td>
                                    <td ><button className="Btn1">Edit</button><button className="Btn2">Delete</button></td>
                                </tr>
                                <tr>
                                    <td><img src={Pix1} alt="" /></td>
                                    <td>James</td>
                                    <td>Favour</td>
                                    <td>jamesfavour@gmail.com</td>
                                    <td >james123</td>
                                    <td >08113654925</td>
                                    <td ><button className="Btn1">Edit</button><button className="Btn2">Delete</button></td>
                                </tr>
                                
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UsersLog;