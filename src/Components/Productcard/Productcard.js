import React, { useState } from 'react';
import { productcardtheme } from './productcardtheme';
import "./productcard.css"
function Productcard(props) {
    const title = "Babyhug Cotton Full Sleeves Animals Print T-Shirt - Blue"
    const description = "";
    const price = "329";
    const clubprice = "384"
    const clublogo = "https://cdn.fcglcdn.com/brainbees/images/club_flag_listing_desktop.png"
    const datatext = "Friday, Dec 2"

    let [isShown,setIsShown] = useState(false);
    return (
        <div className="productbox">
            <div className='productInside'
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
           style={isShown? productcardtheme.maincardisShown : productcardtheme.maincard }>
            <img style={productcardtheme.prodimg} src="https://cdn.fcglcdn.com/brainbees/images/products/300x364/12239940a.webp" alt="prodimage" />
            {!isShown && (
                <div>
                    <p style={productcardtheme.title}>{title}</p>
            <p style={productcardtheme.price}>$ {price}</p>
            <div style={productcardtheme.clubrow}> <img src={clublogo}/> <span>Club Price: $ {clubprice}</span></div>
            <div style={productcardtheme.title}><p>Get it by {datatext}</p></div>
                </div>
            ) }
            {isShown && (
        <div>
                     <p style={productcardtheme.price}>$ {price}</p>
            <div style={productcardtheme.clubrow}> <img src={clublogo}/> <span>Club Price: $ {clubprice}</span></div>
        </div>
      )}
        </div>
        </div>
    );
}

export default Productcard;