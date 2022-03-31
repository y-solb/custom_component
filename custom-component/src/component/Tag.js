import React, { useState, useRef } from "react";
import styled from "styled-components";
import Container from "./Container";

const Tag = (props) => {
  const [tags, setTags] = useState([
    { id: 1, content: "CodeStates" },
    { id: 2, content: "JJang" },
  ]);

  const inputRef = useRef();

  const handleAdd = () => {
    const value = inputRef.current.value;
    value && setTags((tags) => [...tags, { id: Date.now(), content: value }]);
    inputRef.current.value = "";
  };

  const handleDelete = (item) => {
    setTags((tags) => tags.filter((tag) => tag.id !== item.id));
  };

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      handleAdd();
    }
  };

  return (
    <Container title={"Tag"}>
      <TagWrapper>
        <TagList>
          {tags.map((tag) => (
            <TagItem key={tag.id}>
              <TagContent>{tag.content}</TagContent>
              <DeleteBtn onClick={() => handleDelete(tag)}>&times;</DeleteBtn>
            </TagItem>
          ))}
        </TagList>
        <TagInput
          type="text"
          placeholder="Press enter to add tags"
          onKeyPress={onKeyPress}
          ref={inputRef}
        ></TagInput>
      </TagWrapper>
    </Container>
  );
};

export default Tag;

const TagWrapper = styled.div`
  display: flex;
  align-items: center;
  min-width: 600px;
  height: 48px;
  padding: 0 8px;
  border: 1px solid lightgray;
  border-radius: 8px;
  &:hover {
    border-color: #6667ab;
  }
`;

const TagList = styled.ul`
  display: flex;
  column-gap: 8px;
`;

const TagItem = styled.li`
  display: flex;
  align-items: center;
  padding: 8px;
  border-radius: 4px;
  background-color: #6667ab;
`;

const TagContent = styled.p`
  color: white;
`;

const DeleteBtn = styled.button`
  width: 20px;
  height: 20px;
  margin-left: 8px;
  background-color: white;
  border-radius: 50%;
`;

const TagInput = styled.input`
  padding: 10px;
  border: none;
  &:focus {
    outline: none;
  }
`;
