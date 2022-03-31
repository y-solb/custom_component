import React, { useState } from "react";
import styled from "styled-components";
import Container from "./Container";

const CheckBox = () => {
  const [isCheck, setCheck] = useState(false);

  const handleCheckBox = () => {
    setCheck(!isCheck);
  };

  return (
    <Container title={"CheckBox"}>
      <CheckBoxInput
        id="checkbox"
        type="checkbox"
        onChange={handleCheckBox}
        isCheck={isCheck}
      />
      <CheckBoxLabel htmlFor="checkbox" isCheck={isCheck}>
        <Icon viewBox="0 0 24 24">
          <polyline points="20 6 9 17 4 12" />
        </Icon>
      </CheckBoxLabel>
    </Container>
  );
};

export default CheckBox;

const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`;

const CheckBoxInput = styled.input`
  visibility: hidden;
`;

const CheckBoxLabel = styled.label`
  display: inline-block;
  width: 28px;
  height: 28px;
  padding: 4px;
  background: ${(props) => (props.isCheck ? "#6667AB" : "white")};
  border: ${(props) => (props.isCheck ? "none" : "1px solid lightgray")};
  border-radius: 50%;
  ${Icon} {
    visibility: ${(props) => (props.isCheck ? "visible" : "hidden")};
  }
`;
