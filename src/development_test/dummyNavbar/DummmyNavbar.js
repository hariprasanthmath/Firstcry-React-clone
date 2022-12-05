import React from 'react';
import { Link } from 'react-router-dom';
function DummmyNavbar(props) {
    return (
        <div>
            <Link to="products/boys-clothes">BOY FASHION</Link>
            <Link to="products/girls-clothes">GIRL FASHION</Link>
            <Link to="products/Footwear">FOOT WEAR</Link>
            <Link to="cart">CART</Link>
        </div>
    );
}

export default DummmyNavbar;