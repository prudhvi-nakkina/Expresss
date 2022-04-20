import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
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

const ContactItem = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  border-bottom: 1px solid #f2f2f2;
  background: white;
  cursor: pointer;
  padding: 15px 12px;
`;

const ProfileIcon = styled(ProfileImage)`
  width: 38px;
  height: 38px;
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const ContactName = styled.span`
  width: 100;
  font-size: 16px;
  color: black;
`;

const ContactComponent = () =>{
  return <ContactItem>
      <ProfileIcon src="/profile/elon.jpeg"></ProfileIcon>
      <ContactInfo>
          <ContactName>
              
          </ContactName>
      </ContactInfo>
    </ContactItem>;
}


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
        <ContactComponent>

        </ContactComponent>
    </Container>
    );
};

export default ContactListComponent;