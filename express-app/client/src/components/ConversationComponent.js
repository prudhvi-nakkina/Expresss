import React, { useEffect, useState } from "react";
import styled from "styled-components";
// import { SearchContainer, SearchInput } from "./ContactListComponent";
import Picker from "emoji-picker-react";
import httpManager from "../managers/httpManager";
import "./../dist/main.css";


const MessageDiv = styled.div`
  display: flex;
  justify-content: ${(props) => (props.isYours ? "flex-end" : "flex-start")};
  margin: 5px 15px;
`;
const Message = styled.div`
  background: ${(props) => (props.isYours ? "#daf8cb" : "white")};
  padding: 8px 10px;
  border-radius: 4px;
  max-width: 50%;
  color: #303030;
  font-size: 14px;
`;

// conversation panel for texting other users
function ConversationComponent(props) {
  const { selectedChat, userInfo, refreshContactList, currentMood } = props;
  const [text, setText] = useState("");
  const [pickerVisible, togglePicker] = useState(false);
  const [messageList, setMessageList] = useState([]);

  // themes based on mood
  const colorMoodMapper = {
    happy: "/resources/happy.jpg",
    sad: "/resources/sad.png",
    angry: "resources/relaxx.jpg",
    sleepy: "/resources/sleepy.png",
  };

  useEffect(() => {
    setMessageList(selectedChat.channelData.messages);
  }, [selectedChat]);

  // make api calls to send message on press of enter button
  const onEnterPress = async (event) => {
    let channelId = selectedChat.channelData._id;
    if (event.key === "Enter") {
      if (!messageList || !messageList.length) {
        const channelUsers = [
          {
            email: userInfo.email,
            name: userInfo.name,
            profilePic: userInfo.imageUrl,
          },
          {
            email: selectedChat.otherUser.email,
            name: selectedChat.otherUser.name,
            profilePic: selectedChat.otherUser.profilePic,
          },
        ];
        const channelResponse = await httpManager.createChannel({
          channelUsers,
        });
        channelId = channelResponse.data.responseData._id;
      }
      refreshContactList();
      // setting messages for user
      const messages = [...messageList];
      const msgReqData = {
        text,
        senderEmail: userInfo.email,
        addedOn: new Date().getTime(),
      };
      const messageResponse = await httpManager.sendMessage({
        channelId,
        messages: msgReqData,
      });
      messages.push(msgReqData);
      setMessageList(messages);
      setText("");
    }
  };
  return (
    <div className="Container">
      <div className="ProfileHeader">
        <div className="ProfileInfo">
          <img
            className="ProfileImage"
            src={selectedChat.otherUser.profilePic}
          />
          <span className="ContactName">{selectedChat.otherUser.name}</span>
        </div>
      </div>
      <div
        className="MessageContainer"
        style={{ backgroundImage: `url(${colorMoodMapper[currentMood]})` }}
      >
        {messageList?.map((messageData) => (
          <MessageDiv isYours={messageData.senderEmail === userInfo.email}>
            <Message isYours={messageData.senderEmail === userInfo.email}>
              {[messageData.text]}
            </Message>
          </MessageDiv>
        ))}
      </div>

      <div className="ChatBox">
        <div className="SearchContainer">
          {pickerVisible && (
            <Picker
              pickerStyle={{ position: "absolute", bottom: "60px" }}
              onEmojiClick={(e, emoji) => {
                setText(text + emoji.emoji);
                togglePicker(false);
              }}
            />
          )}
          <img
            className="EmojiImage"
            src={"/resources/data.svg"}
            onClick={() => togglePicker((pickerVisible) => !pickerVisible)}
          />
          <input
            className="SearchInput"
            placeholder="Type a message"
            value={text}
            onKeyDown={onEnterPress}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}

export default ConversationComponent;
