import React from "react";
import styled from "styled-components";

const Header = styled.div`
  width: 100%;
  height: 250px;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  line-height: 2;
  background-color: black;
`;

const Title = styled.h1`
  font-size: 70px;
  color: white;
`;

const SubTitle = styled.h3`
  font-size: 20px;
  color: white;
`;

const HomeHeader = () => {
  return (
    <Header>
      <Title>Apollo 2020</Title>
      <SubTitle>It is a movie app site made with apollo and graphql</SubTitle>
      <span> - young jin -</span>
    </Header>
  );
};

export default HomeHeader;
