import React, { useEffect } from 'react';
import {  myStore } from '../reduxstore/store';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import "../style/productdetails.css"
import {getImageurl} from "../Functions/getImageurl";
import { OfferPercent } from '../Functions/OfferPercent';
import { clublogobig } from '../Constants/constant';
import { Heading } from '@chakra-ui/react';
import { Button, Stack, Box, ButtonGroup } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { EditCartdata } from '../reduxstore/action';
import { storeClickedItem } from '../reduxstore/action';
import { Exclusiveoffer, lowerprice, loyaltycash, freebabygear, Lowershipping } from '../Constants/constant';
function Productdetail(props) {
    let clickeddata = useSelector((myStore)=> {return  myStore.pageclicked})
        let [currentProduct,setCurrentProduct] = useState(clickeddata);
        let [sideState,setSideState] = useState([]);
        let [showImage,setShowImage] = useState(currentProduct.image)
        // const getProdbox = ()=>{
        //     for(let imageindex=0;imageindex < +currentProduct.totimg;imageindex++){
        //                 setSideState(sideState.push( <div style={{width:"100px",marginTop:"10px",marginBottom:"10px"}}> <img src={currentProduct.image}></img></div>));     
        //     }
        // }
        // useEffect(()=>{
        //     for(let imageindex=0;imageindex < +currentProduct.totimg;imageindex++){
        //         setSideState(sideState.push( <div style={{width:"100px",marginTop:"10px",marginBottom:"10px"}}> <img src={currentProduct.image}></img></div>));     
        //     }
        // },[])

        const dispatch = useDispatch();
        const cartdata = useSelector((myStore)=>{return myStore.cartdata})
        /* handleclick function will store the data in redux cart key value*/
        // It checks wheather the product present or not first
        const handleclick = ()=>{
               var Product_present_cart = false;
               var numberOfCount = 0;
               cartdata.forEach((product)=>{
                    if(product.productDetails.id === currentProduct.id){
                          Product_present_cart = true;
                          numberOfCount = product.count;
                    }
               })
               if(Product_present_cart){
                    // action to Edit cart value
                    EditCartdata({productDetails:currentProduct,count:numberOfCount+1},dispatch);
               }else{
                    //action to set new product in cart
                    storeClickedItem({productDetails:currentProduct,count:1},dispatch);
               }
               
        }

    return (
        <div>
            <div className="leftrightcontainer"> 
                <div className='leftside'>
                <div style={{display: "flex",flexDirection:"row",justifyContent:"space-evenly"}}>
                   
                    <div className='mdallimgcontainer' style={{width:"100px",marginTop:"10px",marginBottom:"10px",display:+currentProduct.totimg > 0 ? "flex": "none"}}> <img src={getImageurl(currentProduct.image,1)} onMouseOver={()=>{setShowImage(getImageurl(currentProduct.image,1))}}></img></div>
                    <div className='mdallimgcontainer' style={{width:"100px",marginTop:"10px",marginBottom:"10px",display:+currentProduct.totimg > 1 ? "flex": "none"}}> <img src={getImageurl(currentProduct.image,2)} onMouseOver={()=>{setShowImage(getImageurl(currentProduct.image,2))}}></img></div>
                    <div className='mdallimgcontainer' style={{width:"100px",marginTop:"10px",marginBottom:"10px",display:+currentProduct.totimg > 2 ? "flex": "none"}}> <img src={getImageurl(currentProduct.image,3)} onMouseOver={()=>{setShowImage(getImageurl(currentProduct.image,3))}}></img></div>
                    <div className='mdallimgcontainer' style={{width:"100px",marginTop:"10px",marginBottom:"10px",display:+currentProduct.totimg > 3 ? "flex": "none"}}> <img src={getImageurl(currentProduct.image,4)} onMouseOver={()=>{setShowImage(getImageurl(currentProduct.image,4))}}></img></div>
                   
                </div>
                 <div  style={{margin:"0px 30px "}}> 
                    <img src={showImage} />
                    <div className='buttongroup'>
                    <Button colorScheme='orange' size='lg' onClick={handleclick}>Add to cart</Button>
                    <Button colorScheme='gray' variant='outline' size='lg'>Shortlist</Button>
                    </div>
                </div>
                   
                </div>
                <div className='rightside'>
                     <div className='productInfo'>
                        <h1 className='producttitle'> 
                               {currentProduct.title}
                        </h1>
                        {/* <Heading as='h4' size='md'>
                        {currentProduct.title}
                        </Heading>  */}
                        {
                            currentProduct.hasOwnProperty("description") ? <h3 className='productdescription'>${currentProduct.description}</h3>:<p></p> 
                        }
                        <p>Product ID: 11425543</p>
                     </div>
                     <hr/>
                     <div style={{minHeight:"15px"}}></div>
                     {/* <div style={{minHeight:"15px"}}></div> */}
                     <div className='pricedetails'> 
                          <span className='productprice'> {"$ " +currentProduct.price}</span>
                          <span className='productmrp'> {"MRP: $" + currentProduct.mrp}</span>
                          <span className='productoffer'>{"(" + OfferPercent(+currentProduct.mrp, +currentProduct.price)+"% OFF)"}</span>
                          <span className=''> Earn Loyalty Cash</span>
                          <p className='mrpinfo'>MRP incl. all taxes, Add'l charges may apply on discounted price</p>
                     </div>
                     <div>
                     <div style={{display:"flex",alignItems:"center",padding:"8px"}} className='clubcontainer'> 
                        <img src={clublogobig} style={{width:"30px",height:"30px",marginRight:"30px"}}></img>
                        <div >
                            <p>Save { Math.round(0.025 * +currentProduct.price)} with Club</p>
                            <h3>Club Price: {Math.round(+currentProduct.price - 0.025 * +currentProduct.price)}</h3>
                        </div>
                     </div>
                     <div className='colorbox'>
                          <h3>COLOR</h3> <div className='outercolorshow' style={{border:"2px solid #"+currentProduct.color }}> <div className='colorshow' style={{backgroundColor:"#"+currentProduct.color }}></div> </div>
                     </div>
                     <div style={{marginTop:"10px"}}>
                     <Stack spacing={4} direction='row' align='center'>
                        <h1 >SIZE</h1>
                    <Button colorScheme='gray' variant='outline' size='md'>
                          3-6M
                    </Button>
                    <Button colorScheme='gray' variant='outline' size='md'>
                          6-9M
                    </Button>
                    <Button colorScheme='gray' variant='outline' size='md'>
                          9-12M
                    </Button>
                    <Button colorScheme='gray' variant='outline' size='md'>
                          12-18M
                    </Button>
                    <Button colorScheme='gray' variant='outline'   size='md'>
                          18-24M
                    </Button>
                </Stack>
                     </div>
                   </div>
                   <hr style={{marginTop:"30px"}}/>
                  <div style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
                    <img src="https://cdn-icons-png.flaticon.com/512/2420/2420231.png" style={{width:"40px"}}></img>
                    <h2>   FIRSTCRY CLUB BENEFITS</h2>
                  </div>
                  {/* <div>
                     <div>
                        <div></div>
                        <div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                     </div>
                  </div>    */}
                    <div className="offerscontainer">
                        <div>
                            <img src={Exclusiveoffer}></img>
                            <p style={{margin:"10px"}}>Exclusive Offers & Discounts</p>
                        </div>
                        <div>
                            <img src={lowerprice}></img>
                            <p style={{margin:"10px"}}>Lower Prices on Products</p>
                        </div>
                        <div>
                            <img src={loyaltycash}></img>
                            <p style={{margin:"10px"}}>Loyalty Cash Points</p>
                        </div>
                        <div>
                            <img src={freebabygear}></img>
                            <p style={{margin:"10px"}}>Free baby gear assembly</p>
                        </div>
                        <div>
                            <img src={Lowershipping}></img>
                            <p style={{margin:"10px"}}>Lower Shipping barrier</p>
                        </div>
                    </div>
                    <hr style={{marginTop:"30px"}}/>
                    <div className='Extradetails'>
                       <div><p>TENTATIVE DELIVERY</p></div>
                       <div><p>Cash on Delivery Available </p></div>
                       <div><p>Get it by Thursday, Dec 08</p></div>
                       <div><p>30 days Return or Exchange</p></div>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default Productdetail;