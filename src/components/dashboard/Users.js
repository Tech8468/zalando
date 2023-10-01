import { Link } from "react-router-dom";
import logo from "./img/logo_default.svg";
import { useEffect, useState } from "react";
import { Puff } from 'react-loading-icons';

export function UsersLog() {

    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // e.preventDefault();


        fetch("http://159.65.21.42:9000/users")
            .then((resp) => resp.json())
            .then((data) => {

                setUser(data)
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
                        <div><Link to="/admin/userregister"><h1>Create user</h1></Link></div>
                    </div>
                </div>
                <div className="dashboardBanner productBanner">
                    {/* <div className="banner1 b2">
                        <button>Go to Dashboard</button>
                    </div> */}
                    <div className="pdView"><h1>Users Log</h1></div>
                    <div className="banner3 productViewBanner">
                    <table width="100%" >
                            <thead className="th">
                                <tr>
                                    <td className="tdtop">
                                        Full Name
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
                    {loading === true ?  (
                                
                                <Puff size={100}  stroke="#FF6900" strokeOpacity={.250} speed={.5} />
                            ) : (
                                user.map((user) => (
                             
                            <tbody className="tb">
                                <tr className="troll">
                                   
                                    <td>{user.name}</td>
                                    
                                    <td>{user.email}</td>
                                    <td >{user.password}</td>
                                    <td >{user.phone}</td>
                                    <td ><button className="Btn1">Edit</button><button className="Btn2">Delete</button></td>
                                </tr>
                                
                                
                                </tbody>
                                ))
                            )}
                           
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UsersLog;