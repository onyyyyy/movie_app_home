import { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { movieSearch } from "../../api";
import { IMG_URL } from "../../constants";

const Wrap = styled.div`
  padding: 100px 100px;
`;

const Title = styled.h3`
  font-size: 30px;
  font-weight: 700;
`;

const Form = styled.form`
  all: unset;
  display: block;
  width: 90%;
  background-color: white;
  border-radius: 10px;
  margin: 10px 0 20px 0;
  color: #333;
`;

const Input = styled.input`
  color: #333;
  all: unset;
  width: 100%;
  height: 50px;
  display: block;
  border-radius: 10px;
`;

const ConWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 30px;
  row-gap: 20px;
`;

const Con = styled.div``;

const Bg = styled.div`
  height: 300px;
  background: url(${IMG_URL}/w500/${(props) => props.$bgUrl}) no-repeat center /
    cover;
`;

const MovieTitle = styled.h4``;

export const Search = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onSubmit" });

  const [term, setTerm] = useState();

  const SearchHandler = async (data) => {
    const { search: keyword } = data;
    try {
      const { results } = await movieSearch(keyword);
      setTerm(results);
    } catch (error) {
      console.log("Error:" + error);
    }
  };

  console.log(term);
  return (
    <Wrap>
      <Title>찾으시는 영화가 있으신가요?</Title>

      <Form onSubmit={handleSubmit(SearchHandler)}>
        <Input
          {...register("search", { required: "검색 내용을 입력해주세요" })}
          type="text"
          placeholder="영화 검색"
        />
      </Form>

      {term && (
        <ConWrap>
          {term.map((data) => (
            <Con key={data.id}>
              <Bg $bgUrl={data.backdrop_path} />
              <MovieTitle>{data.title}</MovieTitle>
            </Con>
          ))}
        </ConWrap>
      )}
    </Wrap>
  );
};
