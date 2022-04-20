import styled from "styled-components";
import { SearchContainer, SearchInput } from "./ContactListComponent";
import { messagesList } from "../mockData";

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
  background: #e5ddd6;
  overflow-y: auto;
`;

const MessageDiv = styled.div`
  justify-content: ${props => (props.isYours ? "flex-end" : "flex-start")};
  display: flex;
  margin: 5px 15px;
`;

const Message = styled.div`
  max-width: 50%;
  color: #303030;
  padding: 8px 10px;
  font-size: 14px;
  border-radius: 4px;
  background: ${props => (props.isYours ? "#daf8cb" : "white")};
`;

const ConversationComponent = () => {
    return(
    <Container>
        <Profileheader>
        <ProfileImage src="/profile/elon.jpeg">
            </ProfileImage>
        Prudhvi Nakkina
        </Profileheader>
        <MessageContainer>
            {messagesList.map((messageData) => (
                <MessageDiv isYours={messageData.senderID === 0}>
                <Message isYours={messageData.senderID === 0}>
                    {messageData.text}
                </Message>
            </MessageDiv>
            ))}
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