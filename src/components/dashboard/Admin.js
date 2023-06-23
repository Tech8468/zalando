import { Link } from "react-router-dom";
import logo from "./img/logo_default.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export function Admin() {
    const [err, setErr] = useState(false);
    const navigate = useNavigate();
    const [userData, setUserData] = useState({
        email: "",
        password: ""
    });



    const AdminLogin = (e) => {
        e.preventDefault();
        const url = "http://159.65.21.42:9000/register"
        const user = JSON.parse(url.getItem("user"));
        if (userData.email === "" || userData.password === "") {
            setErr(true);
        } else if (userData.email === user.password && userData.password === user.password) {
            alert("Login successful")
            setErr(false);
            navigate("/Home")
        }else{
            alert("Wrong email or password");
        }
    }
    return (
        <div className="overflow">
            <div className="container adminContainer">
                <div className="adminBanner  ">
                    <div className="loginNav">
                        <Link to="/"><img src={logo} alt="" /></Link>
                    </div>
                    
                    <div className="adminbanner3 adminForm createProductBanner">
                        <form action="" onSubmit={AdminLogin}>
                            {/* <label>Login</label> */}
                            <input type="email" name="email" value={userData.email} onChange={(e) => setUserData({ ...userData, email: e.target.value })} placeholder="Email address" />
                            {err === true && userData.email=== "" ? <span>This field is required</span> : null}
                            <input type="password" name="password" value={userData.password} onChange={(e) => setUserData({ ...userData, password: e.target.value })} placeholder="Password" />
                            {err === true && userData.password=== "" ? <span>Email required</span> : null}
                            <button id="btnSave" class="btnSave" type="submit">Login</button>
                            <div className="regLink">
                                    <h1><Link to="/admin">Forgotten password?</Link></h1>
                                    <h1>Don,t have an account? <Link to="/admin/register">Create new user</Link></h1>
                                </div>

                        </form>

                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Admin;