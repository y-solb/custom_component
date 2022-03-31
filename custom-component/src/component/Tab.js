import React, { useState } from "react";
import styled from "styled-components";
import Container from "./Container";

const tabs = [
  { id: 1, title: "Tab1", content: "ONE" },
  { id: 2, title: "Tab2", content: "TWO" },
  { id: 3, title: "Tab3", content: "THREE" },
];

const Tab = (props) => {
  const [currentTab, setCurrentTab] = useState({
    id: 1,
    title: "Tab1",
    content: "ONE",
  });

  const handleTab = (tab) => {
    setCurrentTab(tab);
  };

  return (
    <Container title={"Tab"}>
      <TabBar>
        {tabs.map((tab) => (
          <TabBtn
            key={tab.id}
            onClick={() => handleTab(tab)}
            selected={currentTab.id === tab.id}
          >
            {tab.title}
          </TabBtn>
        ))}
      </TabBar>
      {currentTab && <TabContent>Tab menu {currentTab.content}</TabContent>}
    </Container>
  );
};

export default Tab;

const TabBar = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 800px;
  height: 48px;
  margin-bottom: 40px;
  color: white;
  background-color: lightgray;
`;

const TabBtn = styled.button`
  width: 250px;
  height: 48px;
  padding: 12px;
  color: ${(props) => (props.selected ? "white" : "gray")};
  background-color: ${(props) => (props.selected ? "#6667AB" : "lightgray")};
  text-align: start;
  font-weight: 600;
`;

const TabContent = styled.p`
  font-size: 20px;
`;
