import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./carousel.css"

function ImageSlider() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          
          src="https://cdn.fcglcdn.com/brainbees/banners/hp_mktg_p01_rushour_wntr_desktop1667971919584.webp"
          alt="First slide"
        />
      
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.fcglcdn.com/brainbees/banners/mktng_hp_diapers_upd_29thnov1669704499042.webp"
          alt="Second slide"
        />

       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.fcglcdn.com/brainbees/banners/hp_dp_bbh_cc_fs_nov_f50_994x3991669627571346.webp"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.fcglcdn.com/brainbees/banners/hp_mktg_p01buy3_wntr_desktop1669626513968.webp"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.fcglcdn.com/brainbees/banners/hp--books_9th-nov_def_dek1669659581340.webp"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
              <img
                  width="200px"
          className="d-block w-100"
          src="https://cdn.fcglcdn.com/brainbees/banners/dekstop_iphone-giveaway1669707834744.webp"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.fcglcdn.com/brainbees/banners/mktng_fresh_wpc_hp1669616246309.webp"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default ImageSlider;