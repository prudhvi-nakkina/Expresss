import styled from "styled-components";

const Container = styled.div`
display: flex;
flex-direction: column;
height: 100%;
flex: 3;
background: white;
`;

const Profileheader = styled.div`
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

const ConversationComponent = () => {
    return(
    <Container>
        <Profileheader>
        <ProfileImage src="/profile/elon.jpeg">
            </ProfileImage>
        </Profileheader>
    </Container>
    );
}

export default ConversationComponent;