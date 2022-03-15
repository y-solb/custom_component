import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Container from "./Container";

const Modal = (props) => {
  const [isShow, setIsShow] = useState(false);

  const handleModal = () => {
    setIsShow(!isShow);
  };

  const handleBackground = (e) => {
    if (e.target === e.currentTarget) {
      setIsShow(!isShow);
    }
  };

  useEffect(() => {
    isShow
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
  }, [isShow]);

  return (
    <Container title={"Modal"}>
      <ModalBtn onClick={handleModal}>Open Modal</ModalBtn>
      {isShow && (
        <Background onClick={handleBackground}>
          <ModalWrapper>
            <CloseBtn onClick={handleModal}>&times;</CloseBtn>
            <ModalContent>HELLO WORLD!</ModalContent>
          </ModalWrapper>
        </Background>
      )}
    </Container>
  );
};

export default Modal;

const ModalBtn = styled.button`
  width: 100px;
  height: 48px;
  border-radius: 100px;
  color: white;
  background-color: blueviolet;
`;

const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

const ModalWrapper = styled.div`
  width: 400px;
  padding: 70px;
  background-color: white;
  position: relative;
  z-index: 10;
  border-radius: 10px;
  text-align: center;
`;

const CloseBtn = styled.button`
  position: absolute;
  top: 10px;
  right: 50%;
  background-color: transparent;
  font-size: 24px;
`;

const ModalContent = styled.p`
  font-size: 24px;
  color: blueviolet;
`;
