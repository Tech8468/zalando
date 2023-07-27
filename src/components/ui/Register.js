import { Link } from "react-router-dom";
import logo from "./img/logo_default.svg"
import { AiOutlineInfoCircle } from "react-icons/ai";
import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function Register( ) {
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    // let myUsers=[];
    
    const[user, setUser] = useState({
        
        name: "",
        phone: "",
        email: "",
        password: "",
    });


    const SignUp = (e) => {
        e.preventDefault();

      
        if(user.name==="" || user.phone==="" || user.email==="" || user.password==="" ){
            setError(true);
                
        } else{

          
            
            axios
            .post('http://159.65.21.42:9000/register', user)
            // .then((resp) => resp.json())
            // .then(resp => console.log(resp))
            .then(data => {
                setUser({
                name: "",
                phone: "",
                email: "",
                password: "",  
            })
            setError(false);
            alert("registration successful")
            navigate("/login")
        })
            .catch(error => {
                alert(error.message);
                console.log(error);
            })
            
            
        }

        
    };





    return (
        <div>
            <div className="registerNav">
                <Link to="/"><img src={logo} alt="" /></Link>
            </div>
            <div className="register">
                <div className="registerLogin">
                    <h1>Welcome back</h1>
                    <div className="regBtn"><Link to="/login"><button type="submit">Login</button></Link></div>
                </div>
            </div>
            <form className="form" onSubmit={SignUp}>
                <div>
                    <label>Name*</label>
                    <input type="text" onChange={(e) => setUser({...user, name: e.target.value})} value={user.name} placeholder="Name" />
                    {error === true && user.name === "" ? <span>This Field is required</span> : null}
                </div>
                <div>
                    <label>Phone No.*</label>
                    <input type="number" onChange={(e) => setUser({...user, phone: e.target.value})} value={user.phone} placeholder="Phone No." />
                    {error === true && user.phone  ==="" ? <span>This Field is required</span> : null}
                </div>
                <div>
                    <label className="">Email address*</label>
                    <input type="text" onChange={(e) => setUser({...user, email: e.target.value})} value={user.email} placeholder="Email address" />
                    {error === true && user.email === "" ? <span>This Field is required</span> : null}
                </div>
                <div>
                    <label>Password*</label>
                    <input type="password" onChange={(e) => setUser({...user, password: e.target.value})} value={user.password} placeholder="Pasword" />
                    {error === true && user.password === "" ? <span>This Field is required</span> : null}
                </div>

                <div className="regTag">
                    <AiOutlineInfoCircle className="regTagIcon" />
                    <h1>Your password needs to be at least 8 characters.</h1>
                </div>
                <div className="regOpt">
                    <h5>What are you mostly interested in? (Optional)</h5>
                    <p>We’ll use this information to make more personalised recommendations.</p>
                </div>

                {/* <div className="regOption">
                    <div>
                        <input type="radio" className="check" />
                        <label>Women’s fashion</label>
                    </div>
                    <div>
                        <input type="radio" className="check" />
                        <label>Men’s fashion</label>
                    </div>
                    <div>
                        <input type="radio" className="check" />
                        <label>No preference</label>
                    </div>
                </div> */}

                <div className="registerBtn">
                    <button  >Register</button>
                </div>

            </form>

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

export default Register;