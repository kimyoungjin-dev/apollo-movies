import React from "react";
import { gql, useQuery } from "@apollo/client";
import { useHistory, useParams } from "react-router-dom";
import Loading from "Components/Loading";
import styled from "styled-components";
import { trimText } from "Components/utils";
import { AiFillCaretLeft } from "react-icons/ai";

//styled-components

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const GoHomeIcon = styled(AiFillCaretLeft)`
  position: fixed;
  left: 20px;
  top: 20px;
  cursor: pointer;
`;

const Contents = styled.div`
  height: 450px;
  width: 600px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const Image = styled.img`
  height: 80%;
  width: 80%;
  border-radius: 10px;
`;

const Data = styled.div`
  line-height: 2;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  font-weight: bold;
  font-size: 24px;
`;

const Rating = styled.span`
  opacity: 0.7;
  font-size: 18px;
`;

const GET_MOVIE = gql`
  query getMovie($id: Int!) {
    movie(id: $id) {
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

const Detail = () => {
  const history = useHistory();
  const { id } = useParams();
  const { loading, data } = useQuery(GET_MOVIE, {
    variables: { id: Number(id) },
  });
  const onGoHome = () => {
    history.push("/");
  };

  // medium_cover_image
  // title
  // description_intro
  // genres
  // rating

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <GoHomeIcon onClick={onGoHome} size={30} />
          <Container>
            <Contents>
              <ImageContainer>
                <Image src={data?.movie?.medium_cover_image} />
              </ImageContainer>
              <Data>
                <Title>{data?.movie?.title}</Title>
                <Rating>
                  {data?.movie?.rating
                    ? `⭐️ ${data?.movie?.rating}` / 10
                    : "There is no rating in the movie information."}
                </Rating>
                <div>
                  <span style={{ fontSize: 20, fontWeight: "bold" }}>
                    Genre :
                  </span>
                  <span style={{ opacity: 0.6, fontSize: 14 }}>
                    {data?.movie?.genres.map((genre, index) =>
                      index === data.movie.genres.length - 1
                        ? ` ${genre}`
                        : ` ${genre},`
                    )}
                  </span>
                </div>
                <span>
                  {data?.movie?.description_intro
                    ? trimText(data?.movie?.description_intro, 360)
                    : "The description of the movie does not exist"}
                </span>
              </Data>
            </Contents>
          </Container>
        </>
      )}
    </>
  );
};

export default Detail;
