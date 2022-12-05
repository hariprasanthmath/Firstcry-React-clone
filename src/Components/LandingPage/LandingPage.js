import React from "react";
import "./landingPage.css";
import { useRef } from "react";
import Carousel from "./Carousel/Carousel"
function LandingPage() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  return (
    <div className="mainPage">
      <Carousel/>
      <h2 style={{ marginBottom: "20px",marginTop:"20px",fontSize:"21px",fontWeight:"600" }}>PREMIUM BIOTIQUES</h2>
      <button
        ref={ref1}
        className="scrollButton1"
        onClick={() => {
          ref2.current.scrollIntoView({ beahaviour: "smooth" });
        }}>
        Bottom
      </button>
      <div className="cardDiv">
        <div className="card">
          <img
            src="//cdn.fcglcdn.com/brainbees/images/boutique/670x670/28381.webp"
            width="399px"
            alt=""
          />
          <p>And..It's A Brilinat Shot...!| Up To 12+Y</p>
          <p>Curated Collection For Football Fans</p>
        </div>
        <div className="card">
          <img
            src="//cdn.fcglcdn.com/brainbees/images/boutique/670x670/28345.webp"
            width="399px"
            alt=""
          />
          <p>Ho-Ho-Ho Christmas Collection | Up to 12+Y</p>
          <p>Party wear, Christmas Costumes, Gifts & more</p>
        </div>
        <div className="card">
          <img
            src="//cdn.fcglcdn.com/brainbees/images/boutique/670x670/28386.webp"
            width="399px"
            alt=""
          />
          <p>The Black Friday Sale | Up to 12+Y</p>
          <p>Special Collection For The Season</p>
        </div>
        <div className="card">
          <img
            src="//cdn.fcglcdn.com/brainbees/images/boutique/670x670/28378.webp"
            width="399px"
            alt=""
          />
          <p>Nike + Jordan + Converse + Levi's</p>
          <p>Top Brands Top Offers | 4-12+Y</p>
        </div>
        <div className="card">
          <img
            src="//cdn.fcglcdn.com/brainbees/images/boutique/670x670/28398.webp"
            width="399px"
            alt=""
          />
          <p>Wedding Tales | Up to 12+Y</p>
          <p>Trendy Styles to flaunt this season</p>
        </div>
        <div className="card">
          <img
            src="//cdn.fcglcdn.com/brainbees/images/boutique/670x670/28392.webp"
            width="399px"
            alt=""
          />
          <p>Sweater Weather | 2 - 12+Y</p>
          <p>Hand Picked Winter Sweaters for Lil Ones</p>
        </div>
        <div className="card">
          <img
            src="//cdn.fcglcdn.com/brainbees/images/boutique/670x670/28388.webp"
            width="399px"
            alt=""
          />
          <p>Eco-friendly Mom Store</p>
          <p>Fabulous Maternity Wear for Moms Out There</p>
        </div>
        <div className="card">
          <img
            src="//cdn.fcglcdn.com/brainbees/images/boutique/670x670/28379.webp"
            width="399px"
            alt=""
          />
          <p>Bling it on | Up to 24M</p>
          <p>Curated Collection of Party Dresses, Suits & more</p>
        </div>
        <div className="card">
          <img
            src="//cdn.fcglcdn.com/brainbees/images/boutique/670x670/28400.webp"
            width="399px"
            alt=""
          />
          <p>Cheerful Picks | Up to 24M</p>
          <p>Bodysuits, Sets & more</p>
        </div>
        <div className="card">
          <img
            src="//cdn.fcglcdn.com/brainbees/images/boutique/670x670/28387.webp"
            width="399px"
            alt=""
          />
          <p>Say Tees... |Up to 24M</p>
          <p>Full Sleeves Tops & T-shirts for Winter</p>
        </div>
        <div className="card">
          <img
            src="//cdn.fcglcdn.com/brainbees/images/boutique/670x670/28380.webp"
            width="399px"
            alt=""
          />
          <p>All You Need This Winter | Up to 24M</p>
          <p>Sets & suits, Onesies & Rompers, Frocks & more</p>
        </div>
        <div className="card">
          <img
            src="//cdn.fcglcdn.com/brainbees/images/boutique/670x670/28401.webp"
            width="399px"
            alt=""
          />
          <p>Trendsetter | 4 - 12+Y</p>
          <p>Jeans, Tshirts, tops & more</p>
        </div>
      </div>
      <div className="catagoryCard">
        <div className="catagory">
          <p>View All Biotiques</p>
        </div>
        <div className="catagory">
          <p>View All Premium Brands</p>
        </div>
      </div>
      <div className="mainPageMargin">
        <div>
          <img
            src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/desktop_wedding22_theme_181122_01.jpg"
            alt=""
          />
          <img
            className="weddingImage"
            src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/desktop_wedding22_theme_181122_02.jpg"
            alt=""
          />
          <img
            className="weddingImage"
            src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/desktop_wedding22_theme_181122_03.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="weddingImage"
            src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_heavywinter_281022_01.jpg"
            alt=""
          />
          <img
            className="weddingImage"
            src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_heavywinter_281022_02.jpg"
            alt=""
          />
          <img
            className="weddingImage"
            src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_heavywinter_281022_03.jpg"
            alt=""
          />
        </div>
        {/* Start of Winter Essential */}
        <div>
          <img
            className="weddingImage"
            src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/1920_175_desktop_heavywear_281022_04.jpg"
            alt=""
          />
          <div style={{display:"flex",justifyContent:"center"}}>
            <img
              width="159px"
              src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_heavywinter_281022_05.jpg"
              alt=""
            />
            <img
              width="159px"
              src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_heavywinter_281022_06.jpg"
              alt=""
            />
            <img
              width="159px"
              src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_heavywinter_281022_07.jpg"
              alt=""
            />
            <img
              width="159px"
              src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_heavywinter_281022_08.jpg"
              alt=""
            />
            <img
              width="159px"
              src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_heavywinter_281022_09.jpg"
              alt=""
            />
            <img
              width="159px"
              src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_heavywinter_281022_10.jpg"
              alt=""
            />
            <img
              width="159px"
              src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_heavywinter_281022_11.jpg"
              alt=""
            />
            <img
              width="159px"
              src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_heavywinter_281022_12.jpg"
              alt=""
            />
          </div>
          <img
            className="weddingImage"
            src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/1920_179_desktop_heavywear_281022_13.jpg"
            alt=""
          />
          {/* End of Winter Essential */}
          <div style={{display:"flex",justifyContent:"center"}}>
            <img
              width="254.4px"
              src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_heavywinter_281022_14.jpg"
              alt=""
            />
            <img
              width="254.4px"
              src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_heavywinter_281022_15.jpg"
              alt=""
            />
            <img
              width="254.4px"
              src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_heavywinter_281022_16.jpg"
              alt=""
            />
            <img
              width="254.4px"
              src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_heavywinter_281022_17.jpg"
              alt=""
            />
            <img
              width="254.4px"
              src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_heavywinter_281022_18.jpg"
              alt=""
            />
          </div>
        </div>
        {/* Beloved Brands */}
        <img
          className="weddingImage"
          src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/1920_164_desktop_nnnnn__heavywear_281022_31.jpg"
          alt=""
        />
        {/* Brands */}
        <div className="brands" >
          <img
            width="166px"
            src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_01032022_19.jpg"
            alt=""
          />
          <img
            width="166px"
            src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_01032022_20.jpg"
            alt=""
          />
          <img
            width="166px"
            src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_01032022_21.jpg"
            alt=""
          />
          <img
            width="166px"
            src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_01032022_22.jpg"
            alt=""
          />
          <img
            width="166px"
            src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_01032022_23.jpg"
            alt=""
          />
          <img
            width="166px"
            src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_01032022_24.jpg"
            alt=""
          />
          <img
            width="166px"
            src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_01032022_24.jpg"
            alt=""
          />
          <img
            width="166px"
            src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_01032022_24.jpg"
            alt=""
          />
          {/* ....End Of 1st Line.... */}

          <img
            width="166px"
            src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_01032022_27.jpg"
            alt=""
          />
          <img
            width="166px"
            src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_01032022_28.jpg"
            alt=""
          />
          <img
            width="166px"
            src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_01032022_29.jpg"
            alt=""
          />
          <img
            width="166px"
            src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_01032022_30.jpg"
            alt=""
          />
          <img
            width="166px"
            src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_01032022_31.jpg"
            alt=""
          />
          <img
            width="166px"
            src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_01032022_32.jpg"
            alt=""
          />
          <img
            width="166px"
            src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_01032022_33.jpg"
            alt=""
          />
          <img
            width="166px"
            src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_01032022_34.jpg"
            alt=""
          />
          
        {/*...... End of 2nd line...... */}
        <img
          width="166px"
          src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_01032022_35.jpg"
          alt=""
        />
        <img
          width="166px"
          src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_01032022_36.jpg"
          alt=""
        />
        <img
          width="166px"
          src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_01032022_37.jpg"
          alt=""
          />
        <img
          width="166px"
          src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_01032022_38.jpg"
          alt=""
          />
        <img
          width="166px"
          src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/wingsfield_26_09_2022.jpg"
          alt=""
          />
        <img
          width="166px"
          src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_01032022_40.jpg"
          alt=""
          />
        <img
          width="166px"
          src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_01032022_41.jpg"
          alt=""
          />
        <img
          width="166px"
          src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_01032022_42.jpg"
          alt=""
          />
         
        {/* ...End of the 3rd Line */}
        
          <img
            width="166px"
            src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_12052022_43.jpg"
            alt=""
          />
          <img
            width="166px"
            src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_12052022_44.jpg"
            alt=""
          />
          <img
            width="166px"
            src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_new_desktop_spring_12052022_45.jpg"
            alt=""
          />
          <img
            width="166px"
            src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_12052022_46_EARTHY_TOUCH.jpg"
            alt=""
          />
          <img
            width="166px"
            src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_12052022_47.jpg"
            alt=""
          />
          <img
            width="166px"
            src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_12052022_48.jpg"
            alt=""
          />
          <img
            width="166px"
            src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_new_12052022_49.jpg"
            alt=""
          />
          <img
            width="166px"
            src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_12052022_50.jpg"
            alt=""
          />
        </div>
        {/* ...End of the 3rd Line */}
        <img
          className="weddingImage"
          src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/1920_167_desktop_heavywear_281022_25.jpg"
          alt=""
        />
        {/* .....The Out Wear Edit... */}
        <div style={{display:"flex",justifyContent:"center"}}>
          <img
            width="254.4px"
            src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_heavywinter_281022_20.jpg"
            alt=""
          />
          <img
            width="254.4px"
            src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_heavywinter_281022_21.jpg"
            alt=""
          />
          <img
            width="254.4px"
            src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_heavywinter_281022_22.jpg"
            alt=""
          />
          <img
            width="254.4px"
            src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_heavywinter_281022_23.jpg"
            alt=""
          />
          <img
            width="254.4px"
            src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_heavywinter_281022_24.jpg"
            alt=""
          />
        </div>
        {/* .....End of The Out Wear Edit... */}
        <img
          className="weddingImage"
          src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/1920_167_desktop_heavywear_281022_25.jpg"
          alt=""
        />
        {/* ....Esential For This session... */}
        <div style={{display:"flex",justifyContent:"center"}}>
          <img
            width="212px"
            src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_heavywinter_281022_25.jpg"
            alt=""
          />
          <img
            width="212px"
            src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_heavywinter_281022_26.jpg"
            alt=""
          />
          <img
            width="212px"
            src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_heavywinter_281022_27.jpg"
            alt=""
          />
          <img
            width="212px"
            src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_heavywinter_281022_28.jpg"
            alt=""
          />
          <img
            width="212px"
            src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_heavywinter_281022_29.jpg"
            alt=""
          />
          <img
            width="212px"
            src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_heavywinter_281022_30.jpg"
            alt=""
          />
        </div>
        {/* ...End Of.Esential For This session... */}
        <img
          className="weddingImage"
          src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/winter_desktop_essentials_051122_01.jpg"
          alt=""
        />
        {/* .....Baby Diapers & More.... */}
        <img
          className="weddingImage"
          src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/winter_desktop_essentials_051122_02.jpg"
          alt=""
        />
        <div style={{display:"flex",justifyContent:"center"}}>
          <img
            width="182px"
            src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/winter_desktop_essentials_051122_03.jpg"
            alt=""
          />
          <img
            width="182px"
            src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/winter_desktop_essentials_051122_04.jpg"
            alt=""
          />
          <img
            width="182px"
            src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/winter_desktop_essentials_051122_05.jpg"
            alt=""
          />
          <img
            width="182px"
            src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/winter_desktop_essentials_051122_06.jpg"
            alt=""
          />
          <img
            width="182px"
            src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/winter_desktop_essentials_051122_07.jpg"
            alt=""
          />
          <img
            width="182px"
            src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/winter_desktop_essentials_051122_08.jpg"
            alt=""
          />
          <img
            width="182px"
            src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/winter_desktop_essentials_051122_09.jpg"
            alt=""
          />
        </div>
        {/* ....Bath & Skin Care..... */}
        <img
          className="weddingImage"
          src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/winter_desktop_essentials_051122_10.jpg"
          alt=""
        />
        <div style={{display:"flex",justifyContent:"center"}}>
          <img
            width="182px"
            src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/winter_desktop_essentials_051122_11.jpg"
            alt=""
          />
          <img
            width="182px"
            src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/winter_desktop_essentials_051122_12.jpg"
            alt=""
          />
          <img
            width="182px"
            src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/winter_desktop_essentials_051122_13.jpg"
            alt=""
          />
          <img
            width="182px"
            src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/winter_desktop_essentials_051122_14.jpg"
            alt=""
          />
          <img
            width="182px"
            src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/winter_desktop_essentials_051122_15.jpg"
            alt=""
          />
          <img
            width="182px"
            src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/winter_desktop_essentials_051122_16.jpg"
            alt=""
          />
          <img
            width="182px"
            src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/winter_desktop_essentials_051122_17.jpg"
            alt=""
          />
        </div>
        {/* ....End Of Bath & Skin Care..... */}
        <img
          className="weddingImage"
          src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/winter_desktop_feeding_&_kids_food_051122_01.jpg"
          alt=""
        />
        {/* ....Feeding Kid's Food.... */}
        <div style={{display:"flex",justifyContent:"center"}}>
          <img
            width="159px"
            src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/winter_desktop_feeding_&_kids_food_051122_02.jpg"
            alt=""
          />
          <img
            width="159px"
            src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/winter_desktop_feeding_&_kids_food_051122_03.jpg"
            alt=""
          />
          <img
            width="159px"
            src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/winter_desktop_feeding_&_kids_food_051122_04.jpg"
            alt=""
          />
          <img
            width="159px"
            src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/winter_desktop_feeding_&_kids_food_051122_05.jpg"
            alt=""
          />
          <img
            width="159px"
            src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/winter_desktop_feeding_&_kids_food_051122_06.jpg"
            alt=""
          />
          <img
            width="159px"
            src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/winter_desktop_feeding_&_kids_food_051122_07.jpg"
            alt=""
          />
          <img
            width="159px"
            src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/winter_desktop_feeding_&_kids_food_051122_08.jpg"
            alt=""
          />
          <img
            width="159px"
            src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/winter_desktop_feeding_&_kids_food_051122_09.jpg"
            alt=""
          />
        </div>
        {/* ....End Of Feeding Kid's Food.... */}
        <div style={{display:"flex",justifyContent:"center"}}>
          <img
            width="159px"
            src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/winter_desktop_feeding_&_kids_food_051122_10.jpg"
            alt=""
          />
          <img
            width="159px"
            src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/winter_desktop_feeding_&_kids_food_051122_11.jpg"
            alt=""
          />
          <img
            width="159px"
            src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/winter_desktop_feeding_&_kids_food_051122_12.jpg"
            alt=""
          />
          <img
            width="159px"
            src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/winter_desktop_feeding_&_kids_food_051122_13.jpg"
            alt=""
          />
          <img
            width="159px"
            src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/winter_desktop_feeding_&_kids_food_051122_14.jpg"
            alt=""
          />
          <img
            width="159px"
            src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/winter_desktop_feeding_&_kids_food_051122_15.jpg"
            alt=""
          />
          <img
            width="159px"
            src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/winter_desktop_feeding_&_kids_food_051122_16.jpg"
            alt=""
          />
          <img
            width="159px"
            src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/winter_desktop_feeding_&_kids_food_051122_17.jpg"
            alt=""
          />
        </div>
      </div>
      {/* .....Image Sliding At The End..... */}
      <h2 className="topBrand" style={{ color: "#6a6a69" }}>
        Top <span style={{ color: "#515151" }}>Brands</span>
      </h2>
      <span>
        <marquee className="slidingBrand" behavior="round" direction="left">
          <span>
            <img
              src="//cdn.fcglcdn.com/brainbees/banners/brandstrip1208-3-new-19-08-19.jpg"
              alt=""
            />
          </span>
        </marquee>
      </span>
      {/* <button
        ref={ref2}
        className="scrollButton2"
        onClick={() => {
          ref1.current.scrollIntoView({ beahaviour: "smooth" });
        }}>
        Top
      </button> */}
    </div>
  );
}

export default LandingPage;
