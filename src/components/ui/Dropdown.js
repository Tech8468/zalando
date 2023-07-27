// import { useState } from "react";
import { Link } from "react-router-dom";
// import MenuItems from "./Menuitems";

function Dropdown () {

    return (
        <div className="dropDown">
            <div className="col1">
                <ul>
                    <li>
                        Get the Look
                    </li>
                    <li>
                        <Link to="/">All styles</Link>
                    </li>
                    <li>
                        <Link to="/">Casual outfits</Link>
                    </li>
                    <li>
                        <Link to="/">Classic outfits</Link>
                    </li>
                    <li>
                        <Link to="/">Streetwear outfits</Link>
                    </li>
                    <li>
                        <Link to="/">Sporty outfits</Link>
                    </li>
                </ul>
            </div>
            <div className="col2">
                <ul>
                    <li>
                    <Link to="/">Highlights</Link>
                    </li>
                    <li>
                    <Link to="/">The Goodpeople: Sustainable Collection</Link>
                    </li>
                    <li>
                    <Link to="/">274 urban streetwear</Link>
                    </li>
                    <li>
                    <Link to="/">Football forever edit</Link>
                    </li>
                    <li>
                    <Link to="/">NBA signature lines edit</Link>
                    </li>
                </ul>
            </div>
            {/* <div className="col2">
                
            </div> */}
            {/* <div className="col3"></div> */}
        </div>
    );
};

export default Dropdown;
