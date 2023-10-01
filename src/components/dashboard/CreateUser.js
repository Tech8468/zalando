import { Link } from "react-router-dom";
import logo from "./img/logo_default.svg";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// import Pix1 from "./img/img2.webp";
// import Pix2 from "./img/img3.webp";


export function CreateUser() {
    
  
        const [err, setErr] = useState(false);
        const navigate = useNavigate();
        const[user, setUser] = useState({
            
            name: "",
            phone: "",
            email: "",
            password: "",
        });
    
        // const [status, setStatus] = useState("");
        // const [message, setMessage] = useState("");
    
    
        const SignUp = (e) => {
            e.preventDefault();
    
          
            if(user.name==="" || user.phone==="" || user.email==="" || user.CreateUserpassword==="" ){
                setErr(true);
                    
            } else{
    
              
                
                axios
                .post('http://159.65.21.42:9000/register', user)
                // .then((resp) => resp.json())
                .then(resp => console.log(resp))
                .then(data => setUser(user))
                .catch(error => console.log(error))
                // setUser({user});
                alert("registration successful")
                navigate("/admin/dashboard")
                setErr(false);
                
    
                
            }
        };
    
    
    return (
        <div className="overflow">
            <div className="container">
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
                        <div><h1>Create product</h1></div>
                    </div>
                    <div className="users">
                        <div><Link to="/admin/users"><h1>Users</h1></Link></div>
                    </div>
                    <div className="board">
                        <div><Link to="/admin/userregister"><h1>Create user</h1></Link></div>
                    </div>
                </div>
                <div className="dashboardBanner">
                    {/* <div className="banner1">
                        <button>Go to Product</button>
                    </div> */}

                    <div className="banner3 createProductBanner">

                        <form action="" onSubmit={SignUp} >
                            <input type="text" onChange={(e) => setUser({ ...user, name: e.target.value })} value={user.name} placeholder="Enter name" />
                                {err === true && user.name === "" ? <span>This Field is required*</span> : null}
                                <input type="number" onChange={(e) => setUser({ ...user, phone: e.target.value })} value={user.phone} placeholder="Phone No." />
                                {err === true && user.phone === "" ? <span>This Field is required*</span> : null}
                                <input type="email" onChange={(e) => setUser({ ...user, email: e.target.value })} value={user.email} placeholder="Email address" />
                                {err === true && user.email === "" ? <span>This Field is required*</span> : null}
                                <input type="password" onChange={(e) => setUser({ ...user, password: e.target.value })} value={user.password} placeholder="Password" />
                                {err === true && user.password === "" ? <span>This Field is required*</span> : null}

                            
                            <button type="submit" id="btnSave" className="btnSave" >Save Data</button>
                        </form>

                    </div>
                </div>
            </div>
        </div>



    )
                        
};

export default CreateUser;