import GlobalStyle from "./globalStyles";
import styled from "styled-components";
import Toggle from "./component/Toggle";
import Modal from "./component/Modal";
import Tab from "./component/Tab";
import Tag from "./component/Tag";
import AutoComplete from "./component/AutoComplete";
import ClickToEdit from "./component/ClickEdit";

function App() {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Toggle />
        <Modal />
        <Tab />
        <Tag />
        <AutoComplete />
        <ClickToEdit />
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
