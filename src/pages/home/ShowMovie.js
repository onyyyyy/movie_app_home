import styled from "styled-components";
import { IMG_URL } from "../../constants";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import "swiper/css";

const Container = styled.section`
  margin-bottom: 80px;
`;
const Title = styled.h3`
  font-size: 50px;
  font-weight: 700;
  margin-bottom: 50px;
  @media screen and (max-width: 450px) {
    font-size: 30px;
    margin-bottom: 30px;
  }
`;
const CoverBg = styled.div`
  height: 300px;
  background: url(${IMG_URL}/w500/${(props) => props.$bgUrl}) no-repeat center /
    cover;
  border-radius: 15px;
  margin-bottom: 20px;
  @media screen and (max-width: 450px) {
    height: 150px;
    margin-bottom: 15px;
  }
`;
const MovieTitle = styled.h4`
  font-size: 18px;
  line-height: 24px;
  @media screen and (max-width: 450px) {
    font-size: 16px;
    line-height: 22px;
  }
`;

const params = {
  spaceBetween: 20,
  slidesPerView: 5.5,
  breakpoints: {
    1024: {
      spaceBetween: 20,
      slidesPerView: 5.5,
    },
    640: {
      spaceBetween: 15,
      slidesPerView: 4.3,
    },
    320: {
      spaceBetween: 10,
      slidesPerView: 3.2,
    },
  },
};

export const ShowMovie = ({ titleName, showMovieData }) => {
  return (
    <Container>
      <Title>{titleName}</Title>
      <Swiper {...params}>
        {showMovieData.map((data) => (
          <SwiperSlide key={data.id}>
            <Link to={`/detail/${data.id}`}>
              <CoverBg $bgUrl={data.poster_path} />
              <MovieTitle>{data.title}</MovieTitle>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};
