import React, { useEffect, useState } from 'react'

import style_nba from "./NewNavbar.module.css"
import { IoIosSearch } from "react-icons/io"
import { Burger } from '@mantine/core';
import { VscLocation } from "react-icons/vsc"

import { AiOutlineHeart } from "react-icons/ai"
import { Modal } from '@mantine/core';
import { CgShoppingCart } from "react-icons/cg"
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getCartItems } from '../redux/actions';
const NewNavbar = () => {

  const navigate = useNavigate();

  const dispatch = useDispatch();


  const [opened, setOpened] = useState(false);
  const title = opened ? 'Close navigation' : 'Open navigation';
//   const items = useSelector((state) => state.cartShortReducer.cartList);

  useEffect(() => {
    dispatch(getCartItems());
  }, []);


  let countcart = 0;
//   items.map((ele) => (

//     countcart = countcart + ele.q_cart
//   )

//   )
  //  going to  cart page
   const  goingToCart=()=>{

    setOpened((o) => !o)
    navigate("/cart")

   }

   // back to home page
    
   



  return (
    <>
      <div className={style_nba.container}>

        <div className={style_nba.left}>

          <img src="https://cdn.fcglcdn.com/brainbees/images/n/fc_logo.png" alt="logo" onClick={() => { navigate('/')}} />

          <span className={style_nba.searchcontainer}>
            <input type="text" placeholder='Search for a Category , Brand or Product' />
            <IoIosSearch className={style_nba.searchicon} />
          </span>
        </div>

        <div className={style_nba.right}>

          {/* location */}
          <div className={style_nba.selectLocation}>

            <VscLocation className={style_nba.loactionicon} />
            <span>Select Location</span>
          </div>
          <span className={style_nba.lati}>|</span>

          <div className={style_nba.loginOther}>

            <span>Stores & Preschools</span>
            <span className={style_nba.lati}>|</span>
            <span>Support</span>
            <span className={style_nba.lati}>|</span>
            <span>Track Order</span>
            <span className={style_nba.lati}>|</span>
            <span>FirstCry Parenting</span>
            <span className={style_nba.lati}>|</span>
            <span>Login / Register</span>


          </div>
          <span className={style_nba.lati}>|</span>
          <div className={style_nba.shortlist}>

            <AiOutlineHeart className={style_nba.loactionicon} />
            <span>Shortlist</span>

          </div>
          <span className={style_nba.lati}>|</span>

          <div className={style_nba.cart}>

            <div className={style_nba.childcartdiv}>
              <h3>{countcart}</h3>
              <CgShoppingCart className={style_nba.carticon} onClick={() => navigate("/cart")} />
            </div>
            <span>Cart</span>

          </div>

        </div>

        {/*  ham barger menu */}

        <Burger
          opened={opened}
          onClick={() => setOpened((o) => !o)}
          title={title}
          className={style_nba.hambarger}
        />

      </div>

      {
        opened ? <>

          <div style={{ position: "relative" }} >

            <div className={style_nba.menu} style={{ position: "absolute" }} >

              <div className={style_nba.selectLocation}>
                <VscLocation className={style_nba.loactionicon} />
                <span>Select Location</span>
              </div>

              <div className={style_nba.loginOther}>
                <span>Stores & Preschools</span>
                <span>Support</span>
                <span>Track Order</span>
                <span>FirstCry Parenting</span>
                <span>Login / Register</span>
              </div>

              <div className={style_nba.shortlist}>
                <AiOutlineHeart className={style_nba.loactionicon} />
                <span>Shortlist</span>
              </div>

              <div className={style_nba.cart}>
                <div className={style_nba.childcartdiv}>
                  <h3>{countcart}</h3>
                  <CgShoppingCart className={style_nba.carticon} onClick={() => goingToCart() } />
                </div>
                <span>Cart</span>

              </div>




            </div>

          </div>




        </> : <></>
      }

    </>
  )
}

export default NewNavbar