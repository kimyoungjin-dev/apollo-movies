import React from "react";
import styled from "styled-components";
import { trimText, defaultImage } from "Components/utils";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 15px;
`;

const Data = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

const Contents = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-size: 14px;
  margin-top: 10px;
`;

const Movie = ({ poster, title, rating, id }) => {
  return (
    <Container>
      <Data>
        <Link to={`/${id}`}>
          <img src={poster} style={{ borderRadius: 4, width: "100%" }} />
        </Link>

        <Contents>
          <span style={{ fontWeight: "bold", fontSize: 12 }}>
            {trimText(title, 10)}
          </span>
          <span style={{ fontSize: 9 }}> ⭐️{rating} / 10</span>
        </Contents>
      </Data>
    </Container>
  );
};

export default Movie;
