import React, { useState } from 'react';
import { productcardtheme } from './productcardtheme';
// import "./productcard.css"
import { clublogo } from '../../Constants/constant';
import Extracard from './Extracard';
import getNextImage from '../../Functions/getNextImage';
function Productcard(props) {
    

    let [isShown,setIsShown] = useState(false);
    let [imagestate,setImagestate] = useState(props.image);
   const handleclick = ()=>{
          console.log(props)
   }
   
    
    return (
        
            <div className='productInside'
               key={props.id}
               onClick={()=>handleclick(props)}
               onMouseEnter={()=>{setIsShown(true);setImagestate(getNextImage(props.image))}}
               onMouseLeave={()=>{setIsShown(false);setImagestate(props.image)}}
           style={isShown? productcardtheme.maincardisShown : productcardtheme.maincard }>
            <img style={productcardtheme.prodimg} src={imagestate} alt="prodimage" />
            {!isShown && (
                <div>
                    <p style={productcardtheme.title}>{props.title}</p>
            <p style={productcardtheme.price}>$ {props.price}</p>
            <div style={productcardtheme.clubrow}> <img src={clublogo} alt="clublogo"/> <span>Club Price: $ {+props.price - (+props.price * 0.05)}</span></div>
            <div style={productcardtheme.title}><p>Get it by {"Monday"}</p></div>
                </div>
            ) }
            {isShown && (
              <Extracard {...props}/>
      )}
        </div>
      
    );
}

export default Productcard;