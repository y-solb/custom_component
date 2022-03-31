import React, { useState } from "react";
import styled from "styled-components";
import Container from "./Container";

const Toggle = () => {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn(!isOn);
  };

  return (
    <Container title={"Toggle"}>
      <ToggleInput onChange={handleToggle} id="toggle" type="checkbox" />
      <ToggleLabel isOn={isOn} htmlFor="toggle">
        <Switch />
      </ToggleLabel>
      <ToggleContent>Toggle Switch {isOn ? "ON" : "OFF"}</ToggleContent>
    </Container>
  );
};

export default Toggle;

const ToggleLabel = styled.label`
  position: relative;
  width: 100px;
  height: 48px;
  margin: 20px 0;
  border-radius: 100px;
  background-position: ${(props) => (props.isOn ? "left" : "right")};
  background-image: ${(props) =>
    props.isOn
      ? "linear-gradient(to right, #6667AB 50%, lightgray 50%)"
      : "linear-gradient(to left, lightgray 50%, #6667AB 50%)"};
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

const ToggleInput = styled.input`
  height: 0;
  width: 0;
  visibility: hidden;
  &:checked + ${ToggleLabel} ${Switch} {
    left: calc(100% - 8px);
    transform: translateX(-100%);
  }
`;

const ToggleContent = styled.p`
  font-size: 20px;
`;
