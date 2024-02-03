import styled from "styled-components";
import Navbar from "./components/Navbar";
import TopSearch from "./components/TopSearch";

const Wrapper = styled.div`
  border: 2px solid black;
  display: flex;
  justify-content: start;
`;

export const App = () => {
  return <TopSearch />;
};

export default App;
