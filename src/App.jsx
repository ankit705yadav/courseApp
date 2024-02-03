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
`;

const Container = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;
  width: 100%;
  gap: 74px;
`;
const ContainerInner = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  border: 1px solid #bfbfbf;
  border-radius: 8px;
  padding: 25px;
  gap: 25px;
`;

const Left = styled.div`
  width: 40%;
`;

const Right = styled.div``;

const P = styled.p`
  font-size: 17px;
  font-weight: bold;
  margin-top: 20px;
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
            <P>Primary student T&C</P>
            <SecondaryForm />
            <P>T&C 50% Participation</P>
            <SecondaryForm />
            <P>Secondry Student T&C</P>
            <SecondaryForm />
          </Right>
        </ContainerInner>
      </Container>
    </Wrapper>
  );
};

export default App;
