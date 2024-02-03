import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: left;
  flex-direction: column;
  justify-content: start;
  gap: 5px;
`;

const Head = styled.div`
  display: flex;
  align-items: center;
  padding-left: 20px;
  border-radius: 10px;
  width: 100%;
  height: 72px;
  background-color: #3867c1;
`;

const H1 = styled.h1`
  color: #fff;
`;

const SubHead = styled.div`
  display: flex;
  justify-content: space-between;
  ${"" /* align-items: start; */}
  ${"" /* flex-direction: row; */}
  ${"" /* width: 100%; */}
  gap: 5px;
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;

  ${"" /* width: 100%; */};
`;

const Label = styled.label`
  background-color: #808080;
  width: 100%;
  color: #fff;
  padding: 10px;
  padding-right: 10px;
  border-radius: 3px;
`;

const Input = styled.input`
  border: none;
  outline: none;
  padding-left: 10px;
  width: 100%;
  border-radius: 3px;
  background-color: #ecf1f4;
  color: #000;
  height: 35px;
  margin-top: 5px;
`;

const P = styled.p`
  color: grey;
`;

const Button = styled.button`
  padding: 7px;
  width: 195px;
  border-radius: 8px;
  margin-top: 25px;
  border: none;
  color: #fff;
  background-color: #3867c1;
`;

const InstallementForm = () => {
  return (
    <Container>
      <Head>
        <H1>Installment details</H1>
      </Head>
      <SubHead>
        <Div>
          <Label>Installment no.</Label>
          <Input style={{ width: "123px" }}></Input>
        </Div>
        <Div>
          <Label>Primary Installment Amount</Label>
          <Input></Input>
          <P>Only Basic Amount</P>
        </Div>
        <Div>
          <Label>Secondary Installment Amount</Label>
          <Input></Input>
          <P>Only Basic Amount</P>
        </Div>
        <Div>
          <Label>Due Date</Label>
          <Input style={{ width: "126px", color: "grey" }} type="date"></Input>
        </Div>
      </SubHead>
      <Button>Add Installment Details</Button>
      <P>To Installment Details</P>
    </Container>
  );
};

export default InstallementForm;
