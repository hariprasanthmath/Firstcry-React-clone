import React, { useEffect } from 'react';
import {useState} from "react"
import DeliveryAddressshow from '../Components/cart/DeliveryAddressshow';
import DeliveryAddressset from '../Components/cart/DeliveryAddressset';
import { useSelector } from 'react-redux';
import { myStore } from '../reduxstore/store';
import "../style/cart.css"
import { Button } from '@chakra-ui/react';
import { Stack } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { useRef } from 'react';
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { decreaseproductcount, deletecartproduct, increasecartproductcount } from '../reduxstore/action';
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Input
  } from '@chakra-ui/react'
  import { useDisclosure } from '@chakra-ui/react';
function Cart(props) {
    let [Address,setAddress] = useState(false);
    let userdata = useSelector((myStore)=> {return myStore.userAddress})
    let carttoshow = useSelector((myStore)=> {return myStore.cartdata})
    let twodesign = {display:"flex",flexDirection:"row",justifyContent:"space-between"}
     let navigate = useNavigate();
    let [total,setTotal] = useState(0);
    let [valueofproduct,setValue] = useState(0);
    let cardNumber = useRef();
    let cvv = useRef();
    let card = useRef();
    let otpRef = useRef();
    let navigatehandle = ()=>{
        console.log("navigating")
        // navigate("/payment");
        onOpen();
    }
    useEffect(()=>{
       let currtotal = 0;
       carttoshow.forEach((elem)=>{
        currtotal +=   +elem.productDetails.price * +elem.count;
       })
       console.log(currtotal);
      
       setTotal(currtotal);
       console.log(currtotal);

       let nondiscount = 0;
       carttoshow.forEach((elem)=>{
        nondiscount +=   +elem.productDetails.mrp * +elem.count;
       })
       setValue(nondiscount);

    },[carttoshow])
    // useEffect(()=>{
    //     let currtotal = 0;
    //     carttoshow.forEach((elem)=>{
    //      currtotal +=   +elem.productDetails.price * +elem.count;
    //     })
    //     setTotal(currtotal);

    //     let nondiscount = 0;
    //     carttoshow.forEach((elem)=>{
    //      currtotal +=   +elem.productDetails.mrp *  +elem.count;
    //     })
    //     setValue(nondiscount);
    //  },[])
    let dispatch = useDispatch();
    let handlecartdecrease = (product,count)=>{
        console.log(product)
        if(count > 1){
            decreaseproductcount(product,dispatch);
        }else if(count <= 1){
            deletecartproduct(product.id, dispatch);
        }
        
    }
    let [gotinput, setInput] = useState(false);
    let [otpstate,setOtp] = useState("");
    let handlecartincrease = (id)=>{
           increasecartproductcount(id,dispatch);
    }
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    const { isOpen2, onOpen2, onClose2 } = useDisclosure()
    const btnRef2 = React.useRef()
    const handlecardsave = (type)=>{
       
      if(type === "card"){
        let obj = {
          cardNumbervalue : cardNumber.current.value,
          cvvvalue : cvv.current.value,
          cardvalue : card.current.value
         }
         console.log(obj);
        setInput(true);
      }else if("otp"){
        if(otpstate == 1234){
          alert("success");
          navigate("/success");
        }else{
          alert("wrong otp")
        }
        
      }
      
    }
    return (
        <div style={{width:"70%",margin:"auto"}} className="cartpagemain">
            <div className='maincart'>
                {Object.keys(userdata).length > 0 ?  <DeliveryAddressshow/> :
                  <div style={{height:"100px",width:"700px"}}>

                  <DeliveryAddressset text="Set Address" heading=""/>
                </div>
                }
              <div>
                {
                    carttoshow.map((elem)=>{
                        return (
                            <div className='cartproductcart'>
                    <div className='leftside' >
                        <div className='lefttop'>
                            <div className='leftimg'>
                            <img style={{width:"150px"}} src={elem.productDetails.image}></img>
                            </div>
                            <div className='leftdetailsright'>
                               <h1 style={{maxWidth:"600px",textAlign:"left"}}>{elem.productDetails.title}</h1>
                               <div className="leftsidebottom">
                           <button onClick={()=>{deletecartproduct(elem.productDetails.id, dispatch);}}>REMOVE</button>
                           <button>MOVE TO SHORTLIST</button>
                          
                        </div>
                        <h1 style={{textAlign:"left"}}>Price : {elem.productDetails.price}</h1>
                       {/* <div className='countmanager'>  */}
                       <Stack spacing={4} direction='row' align='center'>
                       <Button onClick={()=>handlecartdecrease(elem.productDetails,elem.count)}>-</Button>
                       <h1 style={{textAlign:"left"}}>Qty : {elem.count}</h1>
                       <Button onClick={()=>handlecartincrease(elem.productDetails.id)}>+</Button>
                       </Stack>
                        
                       {/* </div> */}

                            </div>
                        </div>
                        {/* <div className="leftsidebottom">
                           <button>REMOVE</button>
                           <button>MOVE TO SHORTLIST</button>
                        </div> */}
                       
                    </div>
                    {/* <div className='rightside'>

                    </div> */}
                </div>
                        )
                    })
                }
              </div>
            </div>
            <div className='couponcart'>
                  <div className='childmanage'>
                     <div> <h1 className='headerdesign' style={{}}>Payment Information</h1></div>
                      <div style={twodesign}> <p>Value of Product{"(s)"}</p>   <span>{valueofproduct}</span></div>
                      <div style={twodesign}>  <p>Discount{"(-)"}</p>          <span>{valueofproduct - total}</span></div>
                      <div style={twodesign}> <p>Estimated GST{"(+)"}</p>     <span>{ Math.round(total * 0.07)}</span></div>
                      <div style={twodesign}> <p>Shipping{"(+)"}</p>          <span style={{color:"green"}}>FREE</span></div>
                      <hr style={{marginTop:"20px"}}/>
                      <div  style={twodesign}> <p>Final Payment</p> <span>{total}</span></div>
                    <div><Button colorScheme='orange'  onClick={()=>{navigatehandle()}}>PLACE ORDER</Button></div>
                     
                     
                       
                      
                  </div>
            </div>
            <>
      {/* <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
        Open
      </Button> */}
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
        // style={{width:"500px"}}
        size="md"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Enter card details</DrawerHeader>

          <DrawerBody>
            {
              gotinput ? <Input placeholder='OTP' ref={otpRef} value={otpstate} onChange={(e)=>{setOtp(e.target.value)}}/> : <>
              <Input placeholder='CARD NUMBER' ref={cardNumber}/>
            <Input style={{marginTop:"20px"}} placeholder='CVV' ref={cvv} />
            <Input style={{marginTop:"20px"}} placeholder='CARD HOLDER NAME' ref={card} />
              </>
            }
            
            {/* <Input style={{marginTop:"20px"}} placeholder='CVV' /> */}
          </DrawerBody>
          <DrawerBody>
          
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            {
              gotinput ? <Button colorScheme='blue' onClick={()=>handlecardsave("otp")}>CHECKOUT</Button> : <>
              <Button colorScheme='blue' onClick={()=>handlecardsave("card")}>Save</Button>
              </>
            }
            
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>



        </div>
    );
}

export default Cart;

