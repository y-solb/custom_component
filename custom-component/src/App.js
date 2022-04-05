import styled from "styled-components";
import Toggle from "./component/Toggle";
import Modal from "./component/Modal";
import Tab from "./component/Tab";
import Tag from "./component/Tag";
import Dropdown from "./component/Dropdown";
import CheckBox from "./component/CheckBox";

function App() {
  return (
    <>
      <Layout>
        <Toggle />
        <Modal />
        <Tab />
        <Tag />
        <Dropdown />
        <CheckBox />
      </Layout>
    </>
  );
}

export default App;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1140px;
  margin: auto;
  padding: 0 30px;
`;
