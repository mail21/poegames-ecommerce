import React, { useEffect, useState } from 'react';
import './ProductPage.scss';
import arrow from './../../assets/arrow.svg';
import ProductRatings from './../../component/ProductRatings/ProductRatings';
import Carousel from 'react-elastic-carousel';
import axios from 'axios';

function ProductPage({ history, match }) {
  const headersAPI = {
    'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com',
    'x-rapidapi-key': 'a4fe706396msh8c839cd1e6751fap164a0fjsnfc32d56a60d2',
  };

  const API_URL = 'https://rawg-video-games-database.p.rapidapi.com';

  const [game, setGame] = useState({});
  const [publishers, setPublishers] = useState([]);
  const [developers, setDevelopers] = useState([]);
  const [genres, setGenres] = useState([]);
  const [ratings, setRatings] = useState([]);
  const [clip, setClip] = useState({});
  const [screenShot, setScreenShot] = useState([]);
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
          setGame(res.data);
          setClip(res.data.clip);
          setPublishers(res.data.publishers);
          setDevelopers(res.data.developers);
          setGenres(res.data.genres);
          setRatings(res.data.ratings);
          setScreenShot(resSS.data.results);
        })
      );
  }, []);
  return (
    <div
      className="containerBody"
      style={{ backgroundImage: `url(${game.background_image})` }}
    >
      <div className="container">
        <div className="container__nav">
          <div className="container__nav__left">
            <div onClick={() => history.goBack()} style={{ cursor: 'pointer' }}>
              <img src={arrow} alt="arrow" className="arrowback" />
              <span style={{ marginRight: '50px' }}>Back</span>
            </div>
            <h3>{game.name_original}</h3>
          </div>
          <div className="container__nav__right">
            <h3>Search bar</h3>
          </div>
        </div>

        <div style={{ width: '80%', margin: '10px auto' }}>
          <Carousel itemsToShow={1} focusOnSelect>
            {screenShot.map((ss, i) => {
              if (screenShot.length === i + 1) {
                return <video key={ss.id} src={clip.clip} controls></video>;
              } else {
                return <img key={ss.id} src={ss.image} alt="ss" width="644" height="361" />;
              }
            })}
          </Carousel>
        </div>

        <section className="container__desc">
          <div style={{ flex: '1' }}>
            <h4>About Game</h4>
          </div>
          <div style={{ flex: '2' }}>
            <h4>Description</h4>
            <p>{game.description_raw}</p>
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
      </div>
    </div>
  );
}

export default ProductPage;
