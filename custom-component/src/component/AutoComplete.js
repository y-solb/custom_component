import React, { useRef, useState } from "react";
import styled from "styled-components";
import Container from "./Container";

const AutoComplete = (props) => {
  const list = ["antique", "vintage", "중고A급", "refurbished", "rustic"];
  const [options, setOptions] = useState([]);

  const textRef = useRef();

  const handleChange = () => {
    const value = textRef.current.value;
    let matches = [];
    if (value) {
      matches = list.filter((item) => {
        const regex = new RegExp(`${value}`, "gi");
        return item.match(regex);
      });
    }
    setOptions(matches);
  };

  const handleClear = () => {
    textRef.current.value = "";
    handleChange();
  };

  const handleSelect = (option) => {
    textRef.current.value = option;
    handleChange();
  };

  return (
    <Container title={"AutoComplete"}>
      <Box>
        <Input
          ref={textRef}
          type="text"
          onChange={handleChange}
          options={options.length > 0}
        ></Input>
        <ClearBtn onClick={handleClear}>&times;</ClearBtn>
        {options.length > 0 && (
          <OptionList>
            {options.map((option) => (
              <OptionItem key={option} onClick={() => handleSelect(option)}>
                {option}
              </OptionItem>
            ))}
          </OptionList>
        )}
      </Box>
    </Container>
  );
};

export default AutoComplete;

const Box = styled.div`
  position: relative;
  width: 600px;
  height: 100%;
  border: 1px solid lightgray;
  border-radius: 8px;
  &:hover {
    outline: none;
    box-shadow: 0 8px 10px #ddd;
  }
`;

const Input = styled.input`
  width: 584px;
  height: 48px;
  padding: 0 8px;
  border: none;
  border-bottom: ${(props) => (props.options ? "1px solid lightgray" : "none")};
  border-radius: ${(props) => (props.options ? "8px 8px 0 0" : "8px")};
  &:focus {
    outline: none;
  }
`;

const ClearBtn = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;
  width: 20px;
  height: 20px;
  background-color: white;
`;

const OptionList = styled.ul`
  width: 600px;
  padding: 8px 0;
`;

const OptionItem = styled.li`
  cursor: pointer;
  padding: 4px 8px;
  &:hover {
    background-color: lightgray;
  }
`;
