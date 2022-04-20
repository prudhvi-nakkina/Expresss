import styled from "styled-components";
import { SearchContainer, SearchInput } from "./ContactListComponent";
import { messagesList } from "../mockData";
import Picker from "emoji-picker-react";
import React, { useState } from "react";

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

const ConversationComponent = (props) => {
    const {selectedChat} = props;
    const [text, setText] = useState("");
    const [pickerVisible, togglePicker] = useState(false);
    const onEmojiClick = (event, emojiObj) => {
        setText(text + emojiObj.emoji)
    };
    return(
    <Container>
        <Profileheader>
        <ProfileImage src={selectedChat.profilePic}/>
         {selectedChat.name}
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
                {pickerVisible && (<Picker pickerStyle={{position: "absolute", bottom: "60px"}} onEmojiClick={onEmojiClick} />)}
                <EmojiImage src={"/data.svg"} onClick={() => togglePicker(!pickerVisible)}></EmojiImage>
                <SearchInput placeholder="Type a Message" value = {text} onChange={(e) => setText(e.target.value)}>
                </SearchInput>
            </SearchContainer>
        </ChatBox>
    </Container>
    );
}

export default ConversationComponent;