import { Link } from "react-router-dom";
import logo from "./img/logo_default.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


export function AdminRegister() {
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

      
        if(user.name==="" || user.phone==="" || user.email==="" || user.password==="" ){
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
            navigate("/admin")
            setErr(false);
            

            
        }
    };




    return (
        <div className="overflow">
            <div className="container adminContainer">
                <div className="adminBanner  ">
                    <div className="loginNav">
                        <Link to="/"><img src={logo} alt="" /></Link>
                    </div>

                    <div className=" adminForm2 ">

                        <form action="" onSubmit={SignUp}>
                            {/* <label>Register</label> */}
                            {/* <div>
                                <input type="file" onChange={(e) => setUser({ ...user, file: e.target.value })} value={user.file} placeholder="Upload Image" />
                                {err === true && user.file === "" ? <span>Upload image</span> : null}
                            </div> */}
                            <div>
                                <input type="text" onChange={(e) => setUser({ ...user, name: e.target.value })} value={user.fName} placeholder="Enter name" />
                                {err === true && user.name === "" ? <span>This Field is required</span> : null}
                            </div>
                            <div>
                                <input type="number" onChange={(e) => setUser({ ...user, phone: e.target.value })} value={user.phone} placeholder="Phone No." />
                                {err === true && user.phone === "" ? <span>This Field is required</span> : null}
                            </div>
                            <div>
                                <input type="email" onChange={(e) => setUser({ ...user, email: e.target.value })} value={user.email} placeholder="Email address" />
                                {err === true && user.email === "" ? <span>This Field is required</span> : null}
                            </div>
                            <div>
                                <input type="password" onChange={(e) => setUser({ ...user, password: e.target.value })} value={user.password} placeholder="Password" />
                                {err === true && user.password === "" ? <span>This Field is required</span> : null}
                            </div>
                            <div>
                                <button   type="submit">Register</button>
                            </div>
                        </form>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminRegister;