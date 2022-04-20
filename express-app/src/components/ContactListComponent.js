import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  flex: 1.6;
`;

const ProfileInfoDiv = styled.div`
  display: flex;
  flex-direction: row;
  background: #ededed;
  padding: 10px;
`;

const ProfileImage = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`;

const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  background: white;
  border-radius: 16px;
  width: 100%;
  padding: 5px 10px;
`;

const SearchBox = styled.div`
  background: #f6f6f6;
  padding: 10px;
`;

const SearchIcon = styled.img`
  width: 28px;
  height: 28px;
`;

const SearchInput = styled.input`
  width: 100%;
  outline: none;
  border: none;
  font-size: 15px;
`;


const ContactListComponent = () => {
    return(
    <Container>
        <ProfileInfoDiv>
            <ProfileImage src="/profile/elon.jpeg">

            </ProfileImage>
        </ProfileInfoDiv>
        <SearchBox>
            <SearchContainer>
                <SearchIcon src={"/search-icon.svg"}></SearchIcon>
                <SearchInput placeholder="Search or start new chat">
                </SearchInput>
            </SearchContainer>
        </SearchBox>
        </Container>
    );
};

export default ContactListComponent;