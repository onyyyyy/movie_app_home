import { useEffect, useState } from "react";
import { nowPlaying, popular, topRated, upcoming } from "../../api";
import { Banner } from "./Banner";
import { ShowMovie } from "./ShowMovie";
import { Layout } from "../../components/Layout";
import { Loading } from "../../components/Loading";

export const Home = () => {
  const [nowPlayingData, setNowPlayingData] = useState();
  const [popularData, setPopularData] = useState();
  const [topRatedData, setTopRatedData] = useState();
  const [upcomingData, setUpcomingData] = useState();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { results } = await nowPlaying();
        setNowPlayingData(results);

        const { results: popularResults } = await popular();
        setPopularData(popularResults);

        const { results: topRatedResults } = await topRated();
        setTopRatedData(topRatedResults);

        const { results: upcomingResults } = await upcoming();
        setUpcomingData(upcomingResults);

        setLoading(false);
        // console.log(data);
      } catch (error) {
        console.log("에러:" + error);
      }
    })();
  }, []);

  // console.log(isLoading);
  // console.log(nowPlayingData);
  // console.log(popularData);
  // console.log(topRatedData);
  // console.log(upcomingData);
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {nowPlayingData && (
            <>
              <Banner bannerData={nowPlayingData[0]} />
              <Layout>
                <ShowMovie
                  titleName={"현재 상영작"}
                  showMovieData={nowPlayingData}
                />
                <ShowMovie
                  titleName={"인기 상영작"}
                  showMovieData={popularData}
                />
                <ShowMovie
                  titleName={"영화 랭킹"}
                  showMovieData={topRatedData}
                />
                <ShowMovie
                  titleName={"상영 예정작"}
                  showMovieData={upcomingData}
                />
              </Layout>
            </>
          )}
        </>
      )}
    </>
  );
};
