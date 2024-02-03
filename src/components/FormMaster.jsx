import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: start;
  flex-direction: column;
  padding: 20px;
  gap: 15px;
`;

const Header = styled.h2`
  font-weignt: bold;
  margin-bottom: 20px;
`;

const InputWrapper = styled.div`
  width: 100%;
`;

const InputTitle = styled.p`
  font-size: 14px;
`;

const Input = styled.input`
  border: none;
  background-color: #ecf1f4;
  border-radius: 7px;
  padding: 12px;
  width: 100%;
  margin: 10px 0 15px 0;
  color: grey;
`;

const DropDown = styled.select`
  border: none;
  border-right: 12px solid transparent;
  padding: 12px;
  outline: none;
  background-color: #ecf1f4;
  border-radius: 7px;
  width: 100%;
  color: grey;
`;

const Options = styled.option``;

const Span = styled.span`
  color: red;
`;

const Button = styled.button`
  border: none;
  border-radius: 7px;
  background-color: #3867c1;
  color: white;
  padding: 12px 20px;
`;

const FormMaster = () => {
  return (
    <Wrapper>
      <Header>Add Batch</Header>
      <InputWrapper>
        <InputTitle>
          Batch Name <Span>&#42;</Span>
        </InputTitle>
        <Input placeholder="nagulpranava@gmail.com" />
      </InputWrapper>
      <InputWrapper>
        <InputTitle>
          Code <Span>&#42;</Span>
        </InputTitle>
        <Input placeholder="nagulpranava@gmail.com" />
      </InputWrapper>
      <InputWrapper>
        <InputTitle>
          Course <Span>&#42;</Span>
        </InputTitle>
        <DropDown>
          <Options default>-Select a value-</Options>
          <Options>B-Tech</Options>
          <Options>M-Tech</Options>
          <Options>MCA</Options>
          <Options>MBA</Options>
        </DropDown>
      </InputWrapper>
      <InputWrapper>
        <InputTitle>
          Start Date <Span>&#42;</Span>
        </InputTitle>
        <Input type="date" placeholder="nagulpranava@gmail.com" />
      </InputWrapper>
      <InputWrapper>
        <InputTitle>
          End Date <Span>&#42;</Span>
        </InputTitle>
        <Input type="date" placeholder="nagulpranava@gmail.com" />
      </InputWrapper>
      <InputWrapper>
        <InputTitle>
          Total Amount <Span>&#42;</Span>
        </InputTitle>
        <Input placeholder="nagulpranava@gmail.com" />
      </InputWrapper>
      <InputWrapper>
        <InputTitle>
          Member Amount <Span>&#42;</Span>
        </InputTitle>
        <Input placeholder="nagulpranava@gmail.com" />
      </InputWrapper>
      <InputWrapper>
        <InputTitle>
          Running Week Day Name <Span>&#42;</Span>
        </InputTitle>
        <DropDown name="-Select a value-">
          <Options default>-Select a value-</Options>
          <Options>Sunday</Options>
          <Options>Monday</Options>
          <Options>Tuesday</Options>
          <Options>wednesday</Options>
          <Options>Thursday</Options>
          <Options>Friday</Options>
          <Options>Saturday</Options>
        </DropDown>
      </InputWrapper>
      <InputWrapper>
        <InputTitle>
          Batch CRM <Span>&#42;</Span>
        </InputTitle>
        <DropDown name="-Select a value-">
          <Options default>-Select a value-</Options>
          <Options>1</Options>
          <Options>2</Options>
          <Options>3</Options>
        </DropDown>
      </InputWrapper>
      <InputWrapper>
        <InputTitle>
          Company Billing <Span>&#42;</Span>
        </InputTitle>
        <DropDown name="-Select a value-">
          <Options default>-Select a value-</Options>
          <Options>1</Options>
          <Options>2</Options>
          <Options>3</Options>
        </DropDown>
      </InputWrapper>
      <InputWrapper>
        <InputTitle>
          Payment Option Show <Span>&#42;</Span>
        </InputTitle>
        <Input placeholder="Yes" />
      </InputWrapper>
      <Button>Next</Button>
    </Wrapper>
  );
};

export default FormMaster;
