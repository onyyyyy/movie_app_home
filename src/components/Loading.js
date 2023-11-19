import { PacmanLoader } from "react-spinners";
import styled from "styled-components";

const Sloading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

export const Loading = () => {
  return (
    <Sloading>
      <PacmanLoader color="#77bbe7" />
    </Sloading>
  );
};
