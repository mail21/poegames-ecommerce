import React from 'react';
import arrow from './../../assets/arrow.svg';
import './Pagination.scss';

function Pagination({ setPageParams }) {
  const [state, setState] = React.useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const handleClickItem = (e) => {
    setPageParams(e.target.value);
  };

  const previousClick = () => {
    setPageParams((prev) => {
      if (prev !== 0) {
        return 1;
      } else {
        --prev;
      }
    });
  };
  return (
    <div className="container__pagination">
      <img
        src={arrow}
        alt="arrow"
        width="20"
        onClick={previousClick}
        style={{ transform: 'rotate(180deg)' }}
      />
      {state.map((el) => (
        <button value={el} className="pagination__item" onClick={handleClickItem}>
          {el}
        </button>
      ))}
      <img
        src={arrow}
        alt="arrow"
        width="20"
        onClick={() => setPageParams((prev) => ++prev)}
      />
    </div>
  );
}

export default Pagination;
