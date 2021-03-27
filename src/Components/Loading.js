import React from "react";
import styled from "styled-components";

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 30px;
`;

const LoadingText = styled.span`
  animation: fadeIn 0.8s linear;

  font-size: 20px;

  @keyframes fadeIn {
    from {
      transform: translateY(30px);
      opacity: 0;
    }
    to {
      transform: none;
      opacity: 1;
    }
  }
`;

const Loading = () => {
  return (
    <LoadingContainer>
      <LoadingText>Loading...</LoadingText>
    </LoadingContainer>
  );
};

export default Loading;
