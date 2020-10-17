import React, { useState, useContext, useEffect } from 'react';
import './LandingPage.scss';
import HomeSlideShow from './../../component/HomeSlideShow/HomeSlideShow';
import LandingCards from './../../component/LandingCards/LandingCards';
import LandingCardVertical from './../../component/LandingCardVertical/LandingCardVertical';
import axios from 'axios';
import { Context } from './../../context-api/context';
import PacmanLoader from 'react-spinners/PacmanLoader';

function LandingPage() {
  const [{ headersAPI, API_URL }] = useContext(Context);
  const [data, setData] = useState([]);
  const [slideData, setSlideData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    let arr = [];
    while (arr.length < 3) {
      var r = Math.floor(Math.random() * Math.floor(11));
      if (arr.indexOf(r) === -1) arr.push(r);
    }
    axios({
      method: 'GET',
      headers: headersAPI,
      url: `${API_URL}/games`,
      params: {
        ordering: '-added',
        dates: '2010-01-01,2020-09-29',
        parent_platforms: '2,3',
        page_size: 11,
      },
    })
      .then((res) => {
        setSlideData(() => {
          return [
            res.data.results[arr[0]],
            res.data.results[arr[1]],
            res.data.results[arr[2]],
          ];
        });
        setData(res.data.results);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="container__landing">
      {isLoading ? (
        <div className="container__loader__landing">
          <PacmanLoader size={50} color={'yellow'} />
        </div>
      ) : (
        <>
          <HomeSlideShow dataSlide={slideData} />
          <main className="container__main__landing">
            <div className="container__cards__landing">
              <h3>New Releases</h3>
              <LandingCards
                ordering="-released"
                dates="2020-01-01,2020-07-29"
                pPlatforms="2,3"
              />
              <h3>Highest Rated Games On PlayStation</h3>
              <LandingCards
                ordering="-rating"
                publishers="electronic-arts"
                dates="2010-01-01,2020-07-29"
              />
              <h3>Most Added Games On Ubisoft</h3>
              <LandingCards
                ordering="-added"
                publishers="ubisoft-entertainment"
                dates="2010-01-01,2020-07-29"
              />
            </div>
            <div className="container__sideCards">
              <h3>Most Added Games</h3>

              {data.slice(0, 6).map((el) => (
                <LandingCardVertical
                  key={el.id}
                  name={el.name}
                  add={el.added}
                  image={el.background_image}
                  slug={el.slug}
                />
              ))}
            </div>
          </main>
        </>
      )}
    </div>
  );
}

export default LandingPage;
