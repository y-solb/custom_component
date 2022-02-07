import React, { useState } from "react";
import styled from "styled-components";
import Container from "./Container";

const Toggle = (props) => {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn(!isOn);
  };

  return (
    <Container title={"Toggle"}>
      <CheckBoxInput onChange={handleToggle} id="checkbox" type="checkbox" />
      <CheckBoxLabel isOn={isOn} htmlFor="checkbox">
        <Switch />
      </CheckBoxLabel>
      <ToggleContent>Toggle Switch {isOn ? "ON" : "OFF"}</ToggleContent>
    </Container>
  );
};

export default Toggle;

const CheckBoxLabel = styled.label`
  position: relative;
  width: 100px;
  height: 48px;
  margin: 20px 0;
  border-radius: 100px;
  background-position: ${(props) => (props.isOn ? "left" : "right")};
  background-image: ${(props) =>
    props.isOn
      ? "linear-gradient(to left, lightgray 50%, blueviolet 50%)"
      : "linear-gradient(to right, blueviolet 50%, lightgray 50%)"};
  background-size: 200%;
  transition: 0.4s;
  cursor: pointer;
`;

const Switch = styled.span`
  content: "";
  position: absolute;
  top: 8px;
  left: 8px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: white;
  transition: 0.4s;
`;

const CheckBoxInput = styled.input`
  height: 0;
  width: 0;
  visibility: hidden;
  &:checked + ${CheckBoxLabel} ${Switch} {
    left: calc(100% - 8px);
    transform: translateX(-100%);
  }
`;

const ToggleContent = styled.p`
  font-size: 20px;
`;
