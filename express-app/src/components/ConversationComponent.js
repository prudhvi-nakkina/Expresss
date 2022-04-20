import styled from "styled-components";
import { SearchContainer, SearchInput } from "./ContactListComponent";

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
  align-items: center;
  gap: 10px;
`;

const ProfileImage = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`;

const ChatBox = styled.div`
  display: flex;
  background: #f0f0f0;
  padding: 10px;
  align-items: center;
  bottom: 0;
`;

const EmojiImage = styled.img`
  width: 28px;
  height: 28px;
  opacity: 0.4;
  cursor: pointer;
`;

const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

const ConversationComponent = () => {
    return(
    <Container>
        <Profileheader>
        <ProfileImage src="/profile/elon.jpeg">
            </ProfileImage>
        Prudhvi Nakkina
        </Profileheader>
        <MessageContainer>

        </MessageContainer>
        <ChatBox>
            <SearchContainer>
                <EmojiImage src={"/data.svg"}></EmojiImage>
                <SearchInput placeholder="Type a Message">

                </SearchInput>
            </SearchContainer>
        </ChatBox>
    </Container>
    );
}

export default ConversationComponent;