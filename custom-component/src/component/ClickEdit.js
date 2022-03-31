import React, { useState } from "react";
import styled from "styled-components";
import Container from "./Container";

const ClickToEdit = (props) => {
  const [info, setInfo] = useState({ name: "김코딩", age: 20 });
  const [display, setDisplay] = useState({ name: "김코딩", age: 20 });

  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  const handleBlur = () => {
    setDisplay(info);
  };

  return (
    <Container title={"ClickToEdit"}>
      <Label>
        이름
        <Input
          type="text"
          name="name"
          onChange={handleChange}
          onBlur={handleBlur}
          value={info.name}
        />
      </Label>
      <Label>
        나이
        <Input
          type="text"
          name="age"
          onChange={handleChange}
          onBlur={handleBlur}
          value={info.age}
        />
      </Label>
      <p>
        이름 {display.name} 나이 {display.age}
      </p>
    </Container>
  );
};

export default ClickToEdit;

const Label = styled.label`
  margin: 20px 0;
`;

const Input = styled.input`
  margin: 0 20px;
  padding: 10px;
  text-align: center;
  border: 1px solid lightgray;
  &:focus {
    border: 1px solid #6667ab;
    outline: none;
  }
`;
