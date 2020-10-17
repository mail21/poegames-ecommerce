import React, { useEffect, useState, useContext } from 'react';
import './ProductPage.scss';
import arrow from './../../assets/arrow.svg';
import ProductRatings from './../../component/ProductRatings/ProductRatings';
import Carousel from 'react-elastic-carousel';
import axios from 'axios';
import PlatformsList from '../../component/PlatformsList/PlatformsList';
import PacmanLoader from 'react-spinners/PacmanLoader';
import { Context } from './../../context-api/context';

function ProductPage({ history, match }) {
  const [{ headersAPI, API_URL }] = useContext(Context);
  const [choosePlatform, setChoosePlatform] = useState('');
  const [game, setGame] = useState({});
  const [publishers, setPublishers] = useState([]);
  const [developers, setDevelopers] = useState([]);
  const [genres, setGenres] = useState([]);
  const [ratings, setRatings] = useState([]);
  const [clip, setClip] = useState({});
  const [screenShot, setScreenShot] = useState([]);
  const [tags, setTags] = useState([]);
  const [platforms, setPlatforms] = useState([]);
  const [isReadMoreClick, setIsReadMoreClick] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const dropdownChange = (e) => {
    if (e.target.value === 'Choose Platforms') {
      setChoosePlatform(``);
    } else {
      setChoosePlatform(` On ${e.target.value}`);
    }
  };

  useEffect(() => {
    axios
      .all([
        axios({
          method: 'GET',
          url: `${API_URL}/games/${match.params.slug}`,
          headers: headersAPI,
        }),
        axios({
          method: 'GET',
          url: `${API_URL}/games/${match.params.slug}/screenshots`,
          headers: headersAPI,
        }),
      ])
      .then(
        axios.spread((res, resSS) => {
          setIsLoading(false);
          setGame(res.data);
          setClip(res.data.clip);
          setPublishers(res.data.publishers);
          setDevelopers(res.data.developers);
          setGenres(res.data.genres);
          setRatings(res.data.ratings);
          setTags(res.data.tags);
          setPlatforms(res.data.platforms);
          setScreenShot(resSS.data.results);
        })
      );
  }, []);
  return (
    <div
      className="containerBody"
      style={{
        backgroundImage: `url(${game.background_image})`,
      }}
    >
      <div className="container__parent__product">
        {isLoading ? (
          <div className="container__loader">
            <PacmanLoader size={50} color={'yellow'} />
          </div>
        ) : (
          <>
            <div className="container__nav">
              <div className="container__nav__left">
                <div
                  onClick={() => history.goBack()}
                  style={{ display: 'flex', cursor: 'pointer' }}
                >
                  <img src={arrow} alt="arrow" className="arrowback" />
                  <div style={{ marginRight: '30px' }}>Back</div>
                </div>
                <h3 style={{ marginLeft: '10px' }}>{game.name_original}</h3>
              </div>
            </div>

            <div style={{ width: '80%', margin: '0 auto' }}>
              <Carousel itemsToShow={1} focusOnSelect>
                {screenShot.map((ss, i) => {
                  if (screenShot.length === i + 1) {
                    return (
                      <video key={ss.id} src={clip === null ? '' : clip.clip} controls></video>
                    );
                  } else {
                    return (
                      <img
                        title="asd"
                        key={ss.id}
                        src={ss.image}
                        alt="ss"
                        width="644"
                        height="361"
                      />
                    );
                  }
                })}
              </Carousel>
            </div>

            <div className="container__dropdownPrice">
              <select name="price" className="dropdownPrice" onChange={dropdownChange}>
                <option>Choose Platforms</option>
                {platforms.map(({ platform }) => (
                  <option style={{ padding: '20px' }} key={platform.id} value={platform.name}>
                    {platform.name}
                  </option>
                ))}
              </select>

              <div className="container__button__price">
                <button
                  disabled={choosePlatform === '' ? true : false}
                  style={
                    choosePlatform === ''
                      ? { opacity: '0.9', cursor: 'not-allowed' }
                      : { cursor: 'pointer' }
                  }
                  onClick={(e) => console.log('asd')}
                >{`Buy ${game.name_original} ${choosePlatform}`}</button>
              </div>
            </div>

            <section className="container__desc">
              <div style={{ flex: '1' }}>
                <h4>About Game</h4>
              </div>
              <div style={{ flex: '2' }}>
                <h4>Description</h4>
                <p
                  className="game__description"
                  style={isReadMoreClick ? {} : { height: '105px' }}
                >
                  {game.description_raw}
                </p>
                <div
                  onClick={() => setIsReadMoreClick((prev) => !prev)}
                  className="readMoreButton"
                >
                  {isReadMoreClick ? 'Show Less' : 'Read More'}
                </div>
                <h4>Publisher</h4>
                <ul>
                  {publishers.map((publisher) => (
                    <li key={publisher.id}>{publisher.name}</li>
                  ))}
                </ul>
                <h4>Developers</h4>
                <ul>
                  {developers.map((developer) => (
                    <li key={developer.id}>{developer.name}</li>
                  ))}
                </ul>
                <h4>Genres</h4>
                <ul>
                  {genres.map((genre) => (
                    <li key={genre.id}>{genre.name}</li>
                  ))}
                </ul>
                <h4>Ratings</h4>
                <ProductRatings ratings={ratings} />
                <h4>Playtime</h4>
                <span style={{ marginLeft: '20px' }}>{game.playtime} Hours</span>
                <h4>Release Date</h4>
                <span style={{ marginLeft: '20px' }}>{game.released}</span>
              </div>
            </section>

            <section className="container__desc">
              <div style={{ flex: '1' }}>
                <h4>Tags</h4>
              </div>
              <div style={{ flex: '2' }} className="container__desc__tags">
                {tags.map((tag) => (
                  <div className="tags__item" key={tag.id}>
                    {tag.name}
                  </div>
                ))}
              </div>
            </section>
            <section className="container__desc">
              <div style={{ flex: '1' }}>
                <h4>Platforms</h4>
              </div>
              <div style={{ flex: '2' }} className="container__desc__platforms">
                <PlatformsList platforms={platforms} />
              </div>
            </section>

            {platforms.map(({ platform, requirements }, i) => {
              if (platform.name.includes('PC') && requirements != null) {
                return (
                  <section key={i} className="container__desc">
                    <div style={{ flex: '1' }}>
                      <h4>Spec On Pc</h4>
                    </div>
                    <div style={{ flex: '2' }}>
                      <h4>Minimum</h4>
                      <p dangerouslySetInnerHTML={{ __html: requirements.minimum }}></p>
                      <h4>Recommended</h4>
                      <p dangerouslySetInnerHTML={{ __html: requirements.recommended }}></p>
                    </div>
                  </section>
                );
              }
            })}
          </>
        )}
      </div>
    </div>
  );
}

export default ProductPage;
