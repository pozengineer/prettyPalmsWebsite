import React from "react";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function Footer() {
    return (
        <div className="pageFooter">
            <span className="text-white">Copyright &#169; 2021 PRETTY PALMS - All Rights Reserved</span>
            <br />
            <span className="text-white">info@prettypalms.com.au </span>
            {/* <span className="text-white">| 0412 564 166</span> */}
            <br />
            <span className="text-white">SYDNEY, NSW</span>
        </div>
    );
}

export default Footer;
