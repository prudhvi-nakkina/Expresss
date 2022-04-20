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
`;




function App() {
  const [selectedChat, setChat] = useState()
  return (
    <Container>
      <ContactListComponent>

      </ContactListComponent>

      {selectedChat?<ConversationComponent />:<Placeholder></Placeholder>}
    </Container>
  );
}

export default App;
