import React, { useState } from 'react';
import { productcardtheme } from './productcardtheme';
// import "./productcard.css"
import { clublogo } from '../../Constants/constant';
import Extracard from './Extracard';
import getNextImage from '../../Functions/getNextImage';
import { setProductClicked } from '../../reduxstore/action';
import { useDispatch } from 'react-redux';
// import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { OfferPercent } from '../../Functions/OfferPercent';
function Productcard(props) {
    
    let dispatch = useDispatch();
    let [isShown,setIsShown] = useState(false);
    let [imagestate,setImagestate] = useState(props.image);
    let navigate = useNavigate();
   const handleclick = ()=>{
          console.log(props);
          setProductClicked(props,dispatch);
          navigate("/productdetails");
   }
   
    
    return (
        
            <div className='productInside'
               key={props.id}
              
               onMouseEnter={()=>{setIsShown(true);setImagestate(getNextImage(props.image))}}
               onMouseLeave={()=>{setIsShown(false);setImagestate(props.image)}}
           style={isShown? productcardtheme.maincardisShown : productcardtheme.maincard }>
            <div  onClick={()=>handleclick(props)}>
            <img style={productcardtheme.prodimg} src={imagestate} alt="prodimage" />
            {!isShown && (
                <div>
                    <p style={productcardtheme.title}>{props.title}</p>
            <div style={{display:"flex",flexDirection:"row"}}>
            <p style={productcardtheme.price}>$ {props.price}</p>
            <span style={{marginLeft:"10px",color:"orangered"}}>{"(" + OfferPercent(+props.mrp, +props.price)+"% OFF)"}</span>
           
            </div>
             <div style={productcardtheme.clubrow}> <img src={clublogo} alt="clublogo"/> <span>Club Price: $ {+props.price - (+props.price * 0.05)}</span></div>
            <div style={productcardtheme.title}><p>Get it by {"Monday"}</p></div>
                </div>
            ) }
            </div>
            {isShown && (
              <Extracard {...props}/>
      )}
        </div>
      
    );
}

export default Productcard;