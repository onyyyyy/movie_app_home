import { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { movieSearch } from "../../api";

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
`;

const Input = styled.input`
  all: unset;
  width: 100%;
  height: 50px;
  display: block;
`;

const ConWrap = styled.div``;

const Con = styled.div``;

const Bg = styled.div``;

const MovieTitle = styled.div``;

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
