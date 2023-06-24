import { Link } from "react-router-dom";
import logo from "./img/logo_default.svg";
import { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// import Pix1 from "./img/img2.webp";
// import Pix2 from "./img/img3.webp";


export function CreateProduct() {
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState("");
    const [error, setError] = useState(false);

    async function addProduct(e) {
        e.preventDefault();
        
        console.log(name, image, category, price, description, quantity)
        const formData = new FormData();
        formData.append('name', name);
        formData.append('category', category);
        formData.append('price', price);
        formData.append('description', description);
        formData.append('quantity', quantity);
        formData.append('image', image);

        if (
            image === "" ||
            name === "" ||
            category === "" ||
            price === "" ||
            quantity === "" ||
            description === ""
        ) {
            setError(true);

        }else{

        let result = await fetch("http://159.65.21.42:9000/create/product", {
            method: "POST",
            body: formData
            
        });

        setCategory("");
        setDescription("");
        setImage("");
        setName("");
        setPrice("");
        setQuantity("");

        setError(false);
        
        console.log(result)

        alert("registration successful")
    }
    }

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
                    <div className="board">
                        <div><h1>Create product</h1></div>
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
                        <button>Go to Product</button>
                    </div>

                    <div className="banner3 createProductBanner">

                        <form  >
                            <input type="file" onChange={(e) => setImage(e.target.files[0])} />
                            {error === true && image === "" ? <span>This Field is required</span> : null}
                            <input type="text" onChange={(e) => setCategory(e.target.value)} placeholder="Category" />
                            {error === true && category === "" ? <span>This Field is required</span> : null}
                            <input type="text" onChange={(e) => setName(e.target.value)} placeholder="Product Name" />
                            {error === true && name === "" ? <span>This Field is required</span> : null}
                            <input type="text" onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
                            {error === true && description === "" ? <span>This Field is required</span> : null}
                            <input type="text" onChange={(e) => setPrice(e.target.value)} placeholder="Price" />
                            {error === true && price === "" ? <span>This Field is required</span> : null}
                            <input type="text" onChange={(e) => setQuantity(e.target.value)} placeholder="Quantity" />
                            {error === true && quantity === "" ? <span>This Field is required</span> : null}
                            <button onClick={addProduct} id="btnSave" className="btnSave" >Save Data</button>
                        </form>

                    </div>
                </div>
            </div>
        </div>



    )
};

export default CreateProduct;