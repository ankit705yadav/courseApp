import styled from "styled-components";
import Navbar from "./components/Navbar";
import TopSearch from "./components/TopSearch";
import FormMaster from "./components/FormMaster";
import SecondaryForm from "./components/SecondaryForm";
import InstallementForm from "./components/InstallementForm";

const Wrapper = styled.div`
  display: flex;
  padding: 30px;
  justify-content: space-between;
  gap: 20px;
  align-items: center;
  width: 100%;
`;

const Container = styled.div`
  border: 1px solid red;
  display: flex;
  align-items: start;
  flex-direction: column;
  height: 1865px;
  width: 100%;
`;
const ContainerInner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
  border: 1px solid green;
`;
const Right = styled.div`
  width: 60%;
  border: 1px solid red;
`;
const Left = styled.div`
  width: 40%;
  border: 1px solid red;
`;

export const App = () => {
  return (
    <Wrapper>
      <Navbar />
      <Container>
        <TopSearch />
        <ContainerInner>
          <Left>
            <FormMaster />
          </Left>
          <Right>
            <InstallementForm />
          </Right>
        </ContainerInner>
        {/* 
         
           
            <SecondaryForm />
            <SecondaryForm />
            <SecondaryForm />
          */}
      </Container>
    </Wrapper>
  );
};

export default App;
