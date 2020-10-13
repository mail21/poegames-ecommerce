import React from 'react';
import arrow from './../../assets/arrow.svg';
import CheckboxGroup from 'react-checkbox-group';

import './ProductsSideBarItem.scss';

function ProductsSideBarItem({ radio, name, show, setShow, list, setParams, params }) {
  return (
    <div
      className="produtcs__sidebar__items"
      style={name === 'Platforms' ? { borderBottom: '1px solid white' } : {}}
    >
      <div className="produtcs__sidebar__items__div" onClick={() => setShow((prev) => !prev)}>
        <span style={{ marginLeft: '20px' }}>{name}</span>
        <img
          className="arrow"
          src={arrow}
          alt="arrow"
          style={show ? { transform: 'rotate(270deg)' } : { transform: 'rotate(90deg)' }}
        />
      </div>
      {radio ? (
        <>
          {show ? (
            <>
              {list.map((year, i) => (
                <div className="item__list" key={i}>
                  <label htmlFor={year} style={{ cursor: 'pointer' }}>
                    {year}
                  </label>
                  <input
                    type="radio"
                    name="year"
                    id={year}
                    value={`${year},${list[i + 1]}`}
                    onChange={(e) => setParams(e.target.value)}
                  />
                </div>
              ))}
            </>
          ) : (
            <></>
          )}
        </>
      ) : (
        <>
          {show ? (
            <>
              <CheckboxGroup name={name} value={params} onChange={setParams}>
                {(Checkbox) => (
                  <>
                    {name === 'Platforms' ? (
                      <>
                        {list.slice(0, 8).map((platform) => (
                          <div className="item__list" key={platform.id}>
                            <label htmlFor={platform.name} style={{ cursor: 'pointer' }}>
                              {platform.name}
                            </label>
                            <Checkbox id={platform.name} value={platform.id} />
                          </div>
                        ))}
                      </>
                    ) : (
                      <>
                        {list.map((genre) => (
                          <div className="item__list" key={genre.id}>
                            <label htmlFor={genre.name} style={{ cursor: 'pointer' }}>
                              {genre.name}
                            </label>
                            <Checkbox id={genre.name} value={genre.slug} />
                          </div>
                        ))}
                      </>
                    )}
                  </>
                )}
              </CheckboxGroup>
            </>
          ) : (
            <></>
          )}
        </>
      )}
    </div>
  );
}

export default ProductsSideBarItem;
