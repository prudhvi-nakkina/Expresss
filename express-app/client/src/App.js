import React, { useState } from "react";
import styled from "styled-components";
import ContactListComponent from "./components/ContactListComponent";
import ConversationComponent from "./components/ConversationComponent";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 100%;
  background: #f8f9fb;
`;

const Placeholder = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.45);
  gap: 10px;
  span {
    font-size: 32px;
    color: #525252;
  }
`;

const ChatPlaceholder = styled.img`
  width: 240px;
  height: 240px;
  border-radius: 50%;
  object-fit: contain;
`;

function App(props) {
  const { userInfo } = props;
  const [selectedChat, setChat] = useState();
  const [refreshContactList, toggleRefreshContactList] = useState(false);
  return (
    <Container>
      <ContactListComponent
        setChat={setChat}
        userInfo={userInfo}
        profileImg={userInfo.imageUrl}
        refreshContactList={refreshContactList}
      />
      {selectedChat ? (
        <ConversationComponent
          selectedChat={selectedChat}
          userInfo={userInfo}
          refreshContactList={() =>
            toggleRefreshContactList(!refreshContactList)
          }
        />
      ) : (
        <Placeholder>
          <ChatPlaceholder src="/welcome-placeholder.jpeg" />
          <span>Keep Your Phone Connected</span>
          Expresso lets you express yourself and connects with your friends with
          the same expression
        </Placeholder>
      )}
    </Container>
  );
}

export default App;
