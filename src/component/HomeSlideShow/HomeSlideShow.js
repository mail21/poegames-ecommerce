import React, { useState, useEffect } from 'react';
import './HomeSlideShow.scss';
import { Link } from 'react-router-dom';

function HomeSlideShow({ dataSlide }) {
  useEffect(() => {
    console.log(dataSlide);
  }, [dataSlide]);
  let [slideIndex, setSlideIndex] = useState(1);
  const plusSlides = () => {
    if (slideIndex === 3) {
      setSlideIndex(1);
    } else {
      setSlideIndex((prev) => ++prev);
    }
  };

  const prevSlides = () => {
    if (slideIndex === 1) {
      setSlideIndex(3);
    } else {
      setSlideIndex((prev) => --prev);
    }
  };
  return (
    <div className="slideshow-container">
      <div
        className="mySlides fade"
        style={slideIndex === 1 ? { display: 'block' } : { display: 'none' }}
      >
        <div className="numbertext">1 / 3</div>
        <img
          src={dataSlide[0].background_image}
          alt=""
          width="1260"
          height="610"
          style={{ objectFit: 'cover' }}
        />
        <div className="slide__desc">
          <div className="slide__desc__name">{dataSlide[0].name}</div>
          <Link to={`/products/${dataSlide[0].slug}`} className="slide__desc__button">
            MORE DETAILS
          </Link>
        </div>
      </div>

      <div
        className="mySlides fade"
        style={slideIndex === 2 ? { display: 'block' } : { display: 'none' }}
      >
        <div className="numbertext">2 / 3</div>
        <img
          src={dataSlide[1].background_image}
          alt=""
          width="1260"
          height="610"
          style={{ objectFit: 'cover' }}
        />
        <div className="slide__desc">
          <div className="slide__desc__name">{dataSlide[1].name}</div>
          <Link to={`/products/${dataSlide[1].slug}`} className="slide__desc__button">
            MORE DETAILS
          </Link>
        </div>
      </div>

      <div
        className="mySlides fade"
        style={slideIndex === 3 ? { display: 'block' } : { display: 'none' }}
      >
        <div className="numbertext">3 / 3</div>
        <img
          src={dataSlide[2].background_image}
          alt=""
          width="1260"
          height="610"
          style={{ objectFit: 'cover' }}
        />
        <div className="slide__desc">
          <div className="slide__desc__name">{dataSlide[2].name}</div>
          <Link to={`/products/${dataSlide[2].slug}`} className="slide__desc__button">
            MORE DETAILS
          </Link>
        </div>
      </div>

      <a className="prev" onClick={prevSlides}>
        &#10094;
      </a>
      <a className="next" onClick={plusSlides}>
        &#10095;
      </a>
    </div>
  );
}

export default HomeSlideShow;
