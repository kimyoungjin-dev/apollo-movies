import React from "react";
import { gql, useQuery } from "@apollo/client";
import styled from "styled-components";
import Loading from "Components/Loading";
import Movie from "./Movie";
import HomeHeader from "Components/HomeHeader";
import { defaultImage } from "Components/utils";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.h1`
  margin-bottom: 10px;
  font-size: 30px;
  font-weight: bold;
  width: 100%;
  padding-left: 15px;
`;

const Data = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, 160px);
  grid-column-gap: 20px;
  grid-row-gap: 20px;
`;

const GET_MOVIES = gql`
  {
    movies {
      id
      title
      rating
      description_intro
      language
      medium_cover_image
      genres
    }
  }
`;
const Home = () => {
  const { loading, error, data } = useQuery(GET_MOVIES);
  console.log(data);

  return (
    <Container>
      <HomeHeader />
      {loading ? (
        <Loading loading={loading} />
      ) : (
        <>
          <Title>Movies</Title>
          <Data>
            {data?.movies?.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                poster={movie.medium_cover_image}
                title={movie.title}
                description={movie.description_intro}
                genres={movie.genres}
                rating={movie.rating}
              />
            ))}
          </Data>
        </>
      )}
    </Container>
  );
};

export default Home;
