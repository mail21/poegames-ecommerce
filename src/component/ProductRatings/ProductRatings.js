import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './ProductRatings.scss';

function ProductRatings({ ratings }) {
  return (
    <div className="product__ratings__container">
      {ratings.map((rating) => {
        let color = '';
        if (rating.title.toUpperCase() === 'EXCEPTIONAL') {
          color = 'lightskyblue';
        } else if (rating.title.toUpperCase() === 'RECOMMENDED') {
          color = 'lightgreen';
        } else if (rating.title.toUpperCase() === 'MEH') {
          color = 'orange';
        } else if (rating.title.toUpperCase() === 'SKIP') {
          color = 'red';
        }
        return (
          <div className="product__ratings" key={rating.id}>
            <div style={{ textAlign: 'center', marginBottom: '10px', color: `${color}` }}>
              {rating.title.toUpperCase()}
            </div>
            <CircularProgressbar
              key={rating.id}
              value={rating.percent}
              text={`${rating.percent}%`}
              styles={buildStyles({
                textColor: `${color}`,
                pathColor: `${color}`,
              })}
            />
          </div>
        );
      })}
    </div>
  );
}

export default ProductRatings;
