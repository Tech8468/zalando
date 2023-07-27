import { Link } from "react-router-dom";
import logo from "./img/logo_default.svg"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
    const [err, setErr] = useState(false);
    const navigate = useNavigate();
    const [userData, setUserData] = useState({
        email: "",
        password: ""
    });



    const userLogin = (e) => {
        e.preventDefault();
        
        axios
        .post('http://159.65.21.42:9000/login', userData)
        // .then((resp) => resp.json())
        // .then(resp => console.log(resp))
        .then(data => {
            setUserData({
            email: "",
            password: "",  
        })
        setErr(false);
        alert("registration successful")
        navigate("/shop")
    })
        .catch(error => {
            alert(error.message);
            console.log(error);
        })
        
    }


    return (
        <div>
            <div className="loginNav">
                <Link to="/"><img src={logo} alt="" /></Link>
            </div>
            <div className="login">
                <form className="form" onSubmit={userLogin}>
                    <h1>Welcome back</h1>
                    <div>
                        <label className="emailLabel">Email address</label>
                        <input type="text" placeholder="Email address" value={userData.email} onChange={(e) => setUserData({ ...userData, email: e.target.value })} />
                        {err === true && userData.email=== "" ? <span>This field is required</span> : null}
                    </div>
                    <div>
                        <label>Password</label>
                        <input type="text" placeholder="Pasword" value={userData.password} onChange={(e) => setUserData({ ...userData, password: e.target.value })} />
                        {err === true && userData.password=== "" ? <span>Email required</span> : null}
                    </div>
                    <div><button type="submit">Login</button></div>
                    <div className="regLink">
                        <h1><Link to="/register">Forgotten your password?</Link></h1>
                    </div>

                </form>
            </div>
            <div className="reg">
                <h1>I’m new here</h1>
                <div className="regBtn"><button type="submit"><Link to="/register">Register</Link></button></div>
            </div>
            <div className="regFooter">
                <div className="footerTop">
                    <ul>
                        <li><Link to="/">Privacy Notice</Link></li>
                        <li><Link to="/">Terms of use</Link></li>
                        <li><Link to="/">Legal notice</Link></li>
                    </ul>
                </div>
                <div className="footerBottom">
                    <Link to="/"><img src={logo} alt="" /></Link>
                    <input type="text" />
                </div>
            </div>
        </div>
    )
}

export default Login;