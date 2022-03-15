import React, { useState } from "react";
import styled from "styled-components";
import { IoIosArrowUp } from "react-icons/io";
import Container from "./Container";

const Dropdown = (props) => {
  const OPTIONS = ["S", "M", "L", "XL"];
  const [selectedOption, setSelectedOption] = useState(null);
  const [isDropdown, setIsDropdown] = useState(false);

  const handleOptionList = () => {
    setIsDropdown(!isDropdown);
  };

  const handleSelectOption = (option) => {
    setSelectedOption(option);
    setIsDropdown(false);
  };

  return (
    <Container title={"Dropdown"}>
      <DropdownContainer>
        <DropdownBox onClick={handleOptionList} active={isDropdown}>
          {selectedOption}
          <Arrow rotation={isDropdown}>
            <IoIosArrowUp />
          </Arrow>
        </DropdownBox>
        {isDropdown && (
          <OptionList active={isDropdown}>
            {Object.keys(OPTIONS).map((key) => (
              <OptionItem
                key={key}
                onClick={() => handleSelectOption(OPTIONS[key])}
              >
                {OPTIONS[key]}
              </OptionItem>
            ))}
          </OptionList>
        )}
      </DropdownContainer>
    </Container>
  );
};

export default Dropdown;

const DropdownContainer = styled.div`
  position: relative;
`;

const DropdownBox = styled.div`
  position: relative;
  z-index: 10;
  width: 400px;
  height: 48px;
  padding: 16px 20px;
  border-radius: ${(props) => (props.active ? "8px 8px 0px 0px" : "8px")};
  border: 1px solid lightgray;
  border-width: ${(props) => (props.active ? "1px 1px 0px 1px" : "none")};
`;

const OptionList = styled.ul`
  z-index: 10;
  width: 400px;
  border-radius: 0px 0px 8px 8px;
  border: ${(props) => (props.active ? "1px solid lightgray" : "none")};
`;

const OptionItem = styled.li`
  padding: 16px 20px;
  &:last-child {
    border-radius: 0px 0px 8px 8px;
  }
  &:hover {
    background-color: #e1e5e9;
  }
`;

const Arrow = styled.div`
  position: absolute;
  top: 10px;
  right: 18px;
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: ${(props) => props.rotation && "rotate(180deg)"};
`;
