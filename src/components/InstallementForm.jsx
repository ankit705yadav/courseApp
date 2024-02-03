import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  gap: 5px;
`;

const Head = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: start;
  flex-direction: column;
  padding-left: 50px;
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
  flex-direction: row;
  gap: 5px;
`;

const Div = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  border: 1px solid red;
`;

const Label = styled.label`
  background-color: #808080;
  color: #fff;
  padding: 10px;
  width: 100%;
  border-radius: 3px;
`;

const Input = styled.input`
  border: none;
  outline: none;
  margin-top: 15px;
  padding-top: 10px;
  border-radius: 3px;
  background-color: #ecf1f4;
  color: #000;
`;

const P = styled.p`
  margin-top: 5px;
  color: grey;
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
          <Input />
        </Div>
        <Div>
          <Label>Primary Installment Amount</Label>
          <Input />
          <P>Only Basic Amount</P>
        </Div>
        <Div>
          <Label>Secondary Installment Amount</Label>
          <Input />
          <P>Only Basic Amount</P>
        </Div>
        <Div>
          <Label>Due Date</Label>
          <Input />
        </Div>
      </SubHead>
    </Container>
  );
};

export default InstallementForm;
