import React from "react";
import styled from "styled-components";

const Container = (props) => {
  const { title, children } = props;

  return (
    <ComponentContainer>
      <h2>{title}</h2>
      <ComponentWrapper>{children}</ComponentWrapper>
    </ComponentContainer>
  );
};

export default Container;

const ComponentContainer = styled.div`
  margin: 40px 0;
`;

const ComponentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 300px;
  margin: 40px 0;
`;
