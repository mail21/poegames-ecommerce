import React, { useEffect, useState } from 'react';
import './ProductPage.scss';
import arrow from './../../assets/arrow.svg';

function ProductPage({ history, match }) {
  const [game, setGame] = useState({});
  const [publishers, setPublishers] = useState([]);
  const [developers, setDevelopers] = useState([]);
  const [genres, setGenres] = useState([]);
  useEffect(() => {
    fetch(`https://rawg-video-games-database.p.rapidapi.com/games/${match.params.slug}`, {
      method: 'GET',
      headers: {
        'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com',
        'x-rapidapi-key': 'a4fe706396msh8c839cd1e6751fap164a0fjsnfc32d56a60d2',
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setGame(res);
        setPublishers(res.publishers);
        setDevelopers(res.developers);
        setGenres(res.genres);
      });
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
            <h5>{game.name_original}</h5>
          </div>
          <div className="container__nav__right">
            <h3>Search bar</h3>
          </div>
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
