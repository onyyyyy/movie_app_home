import { useEffect, useState } from "react";
import { nowPlaying } from "../../api";
import { Banner } from "./Banner";

export const Home = () => {
  const [nowPlayingData, setNowPlayingData] = useState();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { results } = await nowPlaying();
        setNowPlayingData(results);
        setLoading(false);
        // console.log(data);
      } catch (error) {
        console.log("에러:" + error);
      }
    })();
  }, []);

  console.log(isLoading);
  console.log(nowPlayingData);
  return (
    <>
      {isLoading ? (
        "loading..."
      ) : (
        <>{nowPlayingData && <Banner BannerData={nowPlayingData[0]} />}</>
      )}
    </>
  );
};
