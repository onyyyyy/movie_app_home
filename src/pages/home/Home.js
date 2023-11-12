import styled from "styled-components";

const MainBanner = styled.div`
  height: 80vh;
  background-color: lightgray;
  padding: 400px 5%;
  h3,
  p {
    position: relative;
  }

  h3 {
    font-size: 80px;
    font-weight: 700;
    margin-bottom: 30px;
    letter-spacing: -2px;
    line-height: 100px;
  }

  p {
    font-size: 18px;
    font-weight: 400;
    line-height: 26px;
    opacity: 0.8;
  }
`;
const BlackBg = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(
    8deg,
    rgba(0, 0, 0, 1) 22%,
    rgba(255, 255, 255, 0.5080882694874824) 100%
  );
  position: absolute;
  top: 0;
  left: 0;
`;

export const Home = () => {
  return (
    <MainBanner>
      <BlackBg />
      <h3>영화소개</h3>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam quas
        perferendis dolorem asperiores molestias ex vero aliquam eaque, numquam
        saepe temporibus, laudantium cumque fuga alias nulla. Eaque cumque
        placeat reprehenderit.
      </p>
    </MainBanner>
  );
};
