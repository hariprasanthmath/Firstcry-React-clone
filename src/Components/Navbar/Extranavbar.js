import React from 'react';
import "../../style/Extranavbar.css"
import { Input } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { userLogoutSet } from '../../reduxstore/action';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useRef } from 'react';
// import { useNavigate } from 'react-router-dom';
function Extranavbar(props) {
    let navigate = useNavigate();
    let navigaterhandler = (location)=>{
        navigate(location);
    }
    let searchRef = useRef();
    let authenticationstatus = useSelector((myState)=>{return {
        authen: myState.isAuth,
        name: myState.currentUser.firstName
    }})
   
    const handlesearch = (e)=>{
        let  value = e.target.value;
        if(value === "boy"){
            navigate("/products/boys-clothes")
        }else if(value === "girl"){
            navigate("products/girls-clothes")
        }else if(value === "footwear"){
            navigate("/products/Footwear")
        }
    }
    let [isLoading, setLoading] = useState(false);
    let dispatch = useDispatch();
    let handlelogout = ()=>{
        setLoading(true);
       userLogoutSet(dispatch);
       setTimeout(()=>{
            setLoading(false);
       },3000)
    }
    return (
        <div style={{width:"80%"}} className="allcontainer">
            <div className='leftsidecontnav'>
                <img onClick={()=>{navigate("/")}} src="https://cdn.fcglcdn.com/brainbees/images/n/fc_logo.png"></img>
                <div style={{marginLeft:"20px"}}>  <Input ref={searchRef} variant='outline' size="sm" placeholder='Search Category' onChange={handlesearch}/></div>
            </div>
            <div className='rightsidecontnav'>
                  <p>Stores & Preschools  |</p>
                  <p>Support | </p>
                  <p>Track Order | </p>
                  <p>FirstCry Parenting | </p>
                  {authenticationstatus.authen ? <div>
                    <p onClick={()=>{handlelogout()}} style={{cursor:"pointer"}}>{authenticationstatus.name} {" "} |</p>
                  </div>:
                   <p onClick={()=>{navigaterhandler("/login")}} style={{cursor:"pointer"}}>Login | </p>
                  }
                 
                  <p onClick={()=>{navigaterhandler("/cart")} } style={{cursor:"pointer"}}>Cart</p>
            </div>
           
        </div>
    );
}

export default Extranavbar;
