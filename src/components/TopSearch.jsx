import styled from "styled-components";
import { CiSearch } from "react-icons/ci";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  color: grey;
  width: 100%;
`;

const SearchSection = styled.div`
  display: flex;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1.5px solid #bfbfbf;
  border-radius: 5px;
  height: 35px;
`;

const Input = styled.input`
  border: none;
  outline: none;
  color: grey;
  &.custom-input::placeholder {
    color: rgb(201, 208, 215);
  }
`;

const SearchBtn = styled.button`
  border: none;
  border-radius: 4.5px;
  padding: 0 17px;
  height: 35px;
  background-color: #3867c1;
  color: white;
  margin-left: 7px;
`;

const Profile = styled.img`
  width: 35px;
  height: 35px;
  object-fit: cover;
  border-radius: 50%;
`;

const TopSearch = () => {
  return (
    <Wrapper>
      <SearchSection>
        <InputContainer>
          <CiSearch style={{ margin: "20px" }} />
          <Input className="custom-input" placeholder="Search by Phone no." />
        </InputContainer>
        <SearchBtn>Search</SearchBtn>
      </SearchSection>
      <Profile src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
    </Wrapper>
  );
};

export default TopSearch;
