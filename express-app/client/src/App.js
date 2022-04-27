import React, { useState } from "react";
import styled from "styled-components";
import ContactListComponent from "./components/ContactListComponent";
import ConversationComponent from "./components/ConversationComponent";
import NewsWidgetComponent from "./components/extras/NewsWidgetComponent";

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  flex-direction: row;
  align-items: center;
  background: #f8f9fb;
`;

const ChatPlaceholder = styled.img`
  width: 240px;
  height: 240px;
  border-radius: 50%;
  object-fit: contain;
`;
const Placeholder = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  gap: 10px;
  color: rgba(0, 0, 0, 0.45);

  span {
    font-size: 32px;
    color: #525252;
  }
`;

function App(props) {
  const { userInfo } = props;
  const [selectedChat, setChat] = useState();
  const [refreshContactList, toggleRefreshContactList] = useState(false);
  const [currentMood,setCurrentMood] = useState(userInfo.mood)

  const handleCurrentmood=(mood)=>{
    setCurrentMood(mood)
  }

  return (
    <Container>
      <ContactListComponent
        setChat={setChat}
        userInfo={userInfo}
        refreshContactList={refreshContactList}
        handleCurrentmood={handleCurrentmood}
      />
      {selectedChat ? (
        <ConversationComponent
          selectedChat={selectedChat}
          userInfo={userInfo}
          currentMood={currentMood}
          refreshContactList={() =>
            toggleRefreshContactList(!refreshContactList)
          }
        />
      ) : (
        <Placeholder>
          <ChatPlaceholder src="/resources/logo.jpg" />
          <span>Search for your friends using email</span>
          Expresso loads your data from a Remote mongoDB
         <NewsWidgetComponent/>
        </Placeholder>
      )}
    </Container>
  );
}

export default App;
