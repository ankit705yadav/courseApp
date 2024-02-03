import styled from "styled-components";
import { MdFormatBold } from "react-icons/md";
import { MdFormatItalic } from "react-icons/md";
import { TbListDetails } from "react-icons/tb";
import { TbLayoutGridAdd } from "react-icons/tb";

const Wrapper = styled.div`
  border: 2px solid grey;
  margin: 22px;
`;

const Container1 = styled.div`
  display: flex;
  gap: 12px;
`;

const Container2 = styled.div`
  height: 42px;
  border-top: 2px solid grey;
`;

const Container3 = styled.div`
  padding: 12px;
  border-top: 2px solid grey;
`;

const TextFormat = styled.p`
  font-weight: bold;
  font-size: 13px;
`;

const Input = styled.select`
  width: 100%;
`;

const InnerContainer1 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 22px;
  border-right: 2px solid grey;
  padding-right: 12px;
  margin: 8px 0;
`;

const InnerContainer2 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 22px;
  border-left: 2px solid grey;
  border-right: 2px solid grey;
  padding: 0 12px;
  margin: 8px 14px;
`;

const InnerContainer3 = styled.div`
  display: flex;
  border-left: 2px solid grey;
  border-right: 2px solid grey;
  padding: 0 12px;
  margin: 8px 14px;
`;

const DropDown = styled.select`
  border: none;
  background-color: white;
`;

const DropDownOptions = styled.option`
  display: flex;
  justify-content: space-between;
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

        <InnerContainer2>
          <DropDown>
            <DropDownOptions>Paragraph </DropDownOptions>
            <DropDownOptions>Option 2</DropDownOptions>
          </DropDown>
        </InnerContainer2>
        <InnerContainer2>
          <DropDown>
            <DropDownOptions>Source </DropDownOptions>
            <DropDownOptions>Option 2</DropDownOptions>
          </DropDown>
        </InnerContainer2>
      </Container1>

      <Container2></Container2>

      <Container3>
        <TextFormat>Text Format</TextFormat>
        <DropDown
          style={{ border: "2px solid grey", width: "100%", padding: "5px" }}
        >
          <DropDownOptions>Full HTML</DropDownOptions>
        </DropDown>
      </Container3>
    </Wrapper>
  );
};

export default SecondaryForm;
