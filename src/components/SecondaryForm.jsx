import styled from "styled-components";
import { MdFormatBold } from "react-icons/md";
import { MdFormatItalic } from "react-icons/md";
import { TbListDetails } from "react-icons/tb";
import { TbLayoutGridAdd } from "react-icons/tb";
import { BsQuestionCircle } from "react-icons/bs";

const Wrapper = styled.div`
  border: 2px solid grey;
  margin: 22px;
`;

const Container1 = styled.div`
  display: flex;
  gap: 12px;
  padding: 8px 20px;
`;

const InnerContainer1 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 22px;
  border-right: 2px solid grey;
  padding-right: 20px;
  margin-right: 15px;
`;

const InnerContainer2 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 22px;
  border-left: 2px solid grey;
  border-right: 2px solid grey;
  padding: 0 20px;
`;

const MiddleContainer = styled.div`
  margin: 0 auto;
`;

const DropDown = styled.select`
  border: none;
  background-color: white;
  color: grey;
`;

const Container2 = styled.div`
  height: 42px;
  border-top: 2px solid grey;
`;

const Container3 = styled.div`
  padding: 12px;
  border-top: 2px solid grey;
`;

const TextFormat = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  font-size: 13px;
`;

const TextFormatRight = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const SecondaryForm = () => {
  return (
    <Wrapper>
      <Container1>
        <InnerContainer1>
          <MdFormatBold />
          <MdFormatItalic />

          <TbListDetails style={{ marginLeft: "55px" }} />
        </InnerContainer1>

        <InnerContainer2>
          <TbLayoutGridAdd />
          <TbLayoutGridAdd />
        </InnerContainer2>

        <MiddleContainer></MiddleContainer>

        <InnerContainer2 style={{ borderRight: "none" }}>
          <DropDown>
            <option>Paragraph &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</option>
            <option>OPTON 2</option>
            <option>OPTION 3</option>
            <option>OPTION 4</option>
          </DropDown>
        </InnerContainer2>

        <InnerContainer2 style={{ borderRight: "none" }}>
          <DropDown>
            <option>Source &nbsp;&nbsp; </option>
            <option>OPTON 2</option>
            <option>OPTION 3</option>
            <option>OPTION 4</option>
          </DropDown>
        </InnerContainer2>
      </Container1>

      <Container2></Container2>

      <Container3>
        <TextFormat>
          <p>Text Format</p>
          <TextFormatRight>
            <p style={{ color: "#18A0FB" }}>About text formats</p>
            <BsQuestionCircle />
          </TextFormatRight>
        </TextFormat>

        <DropDown
          style={{ border: "2px solid grey", width: "100%", padding: "5px" }}
        >
          <option>Full HTML</option>
          <option>OPTON 2</option>
          <option>OPTION 3</option>
          <option>OPTION 4</option>
        </DropDown>
      </Container3>
    </Wrapper>
  );
};

export default SecondaryForm;
