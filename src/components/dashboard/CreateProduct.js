import { Link } from "react-router-dom";
import logo from "./img/logo_default.svg";
import { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// import Pix1 from "./img/img2.webp";
// import Pix2 from "./img/img3.webp";


export function CreateProduct() {
    const [error, setError] = useState(false);
    // const navigate = useNavigate();


    // let myUsers=[];

    const [product, setProduct] = useState({

        image: "",
        category: "",
        name: "",
        price: "",
        description: "",
        quantity: "",
    });


    const AddProduct = (e) => {
    // async function AddProduct()
        e.preventDefault();

        // const file = e.target.files[0];
        const formData = new FormData();


        // const formData = new FormData();
        formData.append("product", product);


        if (
            product.image === "" ||
            product.name === "" ||
            product.category === "" ||
            product.price === "" ||
            product.quantity === "" ||
            product.description === ""
        ) {
            setError(true);

        } else {

                fetch('http://159.65.21.42:9000/create/product', {
                method: 'POST',
                body: formData
            });

            // axios
            //     .post('http://159.65.21.42:9000/create/product', product)
            //     .then(data => {

            //         setProduct({
            //             image: "",
            //             category: "",
            //             name: "",
            //             price: "",
            //             description: "",
            //             quantity: "",
            //         })
            //         console.log(data);
            //         alert("registration successful")
            //         // navigate("/admin/dashboard")
            //     })
            //     .catch(error => {
            //         alert(error);
            //         console.log(error);
            //     })
            // setError(false);

            console.log(product)
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

                        <form onSubmit={AddProduct}>
                            <input type="file" onChange={(e) => setProduct({ ...product, image: e.target.files[0] })} placeholder="Image" />
                            {error === true && product.image === "" ? <span>This Field is required</span> : null}
                            <input type="text" onChange={(e) => setProduct({ ...product, category: e.target.value })} value={product.category} placeholder="Category" />
                            {error === true && product.category === "" ? <span>This Field is required</span> : null}
                            <input type="text" onChange={(e) => setProduct({ ...product, name: e.target.value })} value={product.name} placeholder="Name" />
                            {error === true && product.name === "" ? <span>This Field is required</span> : null}
                            <input type="text" onChange={(e) => setProduct({ ...product, description: e.target.value })} value={product.description} placeholder="Description" />
                            {error === true && product.description === "" ? <span>This Field is required</span> : null}
                            <input type="text" onChange={(e) => setProduct({ ...product, price: e.target.value })} value={product.price} placeholder="Price" />
                            {error === true && product.price === "" ? <span>This Field is required</span> : null}
                            <input type="text" onChange={(e) => setProduct({ ...product, quantity: e.target.value })} value={product.quantity} placeholder="Quantity" />
                            {error === true && product.quantity === "" ? <span>This Field is required</span> : null}
                            <button id="btnSave" className="btnSave" >Save Data</button>
                        </form>

                    </div>
                </div>
            </div>
        </div>



    )
};

export default CreateProduct;