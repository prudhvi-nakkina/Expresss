import React, { useEffect, useState } from "react";
import styled from "styled-components";
import httpManager from "../managers/httpManager";
import utility from "../utility";
import Emoji from "./Emoji";
import "./../dist/main.css";
import NewsWidgetComponent from "./extras/NewsWidgetComponent";
import LogoutComponent from "./LogoutComponent";
import { GoogleLogout } from 'react-google-login';
import cookieManager from "../managers/cookieManager";

const ProfileImage = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  position: "relative";
`;
const ProfileIcon = styled(ProfileImage)`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  margin-left: 12px;
  margin-top: 15px;
  margin-bottom: 15px;
  object-fit: cover;
`;

// each contact section of other users
const ContactComponent = (props) => {
  const colorMoodMapper = {
    happy: "rgb(246 187 122 / 80%)",
    sad: "rgb(252 236 107 / 56%)",
    angry: "#c5e1a5",
    sleepy: "#CAE9F5",
  };
  const { userData, setChat, userInfo, mood } = props;
  const [searchResult, setSearchResult] = useState();

  // display last message and last message time as the recent one
  const otherUser =
    userData.channelUsers?.find(
      (userObj) => userObj.email !== userInfo.email
    ) || userData;

  const lastMessage =
    userData.messages && userData.messages.length
      ? userData.messages[userData.messages.length - 1]
      : {};
  return (
    <div
      className="ContactItem"
      style={{ background: `${colorMoodMapper[mood]}` }}
      onClick={() => setChat({ channelData: userData, otherUser })}
    >
      <ProfileIcon src={otherUser?.profilePic} />

      <div className="ContactInfo">
        <span className="ContactName">{otherUser?.name}</span>
        <span className="MessageText">{lastMessage?.text}</span>
      </div>
      <span className="MessageTime">
        {" "}
        {lastMessage && new Date(lastMessage?.addedOn).getUTCDate()}
      </span>
    </div>
  );
};

// render list of other users
function ContactListComponent(props) {
  const { userInfo, refreshContactList } = props;

  const colorMoodHeaderMapper = {
    happy: "rgb(255 134 52)",
    sad: "rgb(252 233 66)",
    angry: "#267D39",
    sleepy: "#3d5a80",
  };

  const [searchString, setSearchString] = useState("");
  const [searchResult, setSearchResult] = useState("");
  const [contactList, setContactList] = useState([]);
  const [currentMood, setCurrentMood] = useState("");

  const handleCurrentMood = (mood) => {
    updateUserMood(mood);
    setCurrentMood(mood);
    props.handleCurrentmood(mood);
  };

  // update contacts
  const refreshContacts = async () => {
    const contactListData = await httpManager.getChannelList(userInfo.email);
    setContactList(contactListData.data.responseData);
    setSearchString();
    setSearchResult();
  };

  // api call for updating mood
  const updateUserMood = async (mood) => {
    let modfiedUser = userInfo;
    modfiedUser.mood = mood;
    const updateUserMoodData = await httpManager.changeUserMood(modfiedUser);
  };

  useEffect(() => {
    refreshContacts();
  }, [refreshContactList]);

  // api calls after entering email to search user
  const onSearchTextChanged = async (searchText) => {
    setSearchString(searchText);
    if (!utility.validateEmail(searchText)) return;

    const userData = await httpManager.searchUser(searchText);
    if (userData.data?.success) setSearchResult(userData.data.responseData);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      refreshContacts();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const logout = response => {
    window.sessionStorage.removeItem("access_token");
    window.sessionStorage.removeItem("nama");
    // setState(state => ({
    //   isLogined: false,
    //   token: ''
    // }),
    //   console.log(response)
    // );
    cookieManager.clearUserInfo({
      isLogined: false,
      token: ''
    })
  }

  return (
    <div className="container">
      <div
        className="ProfileInfoDiv"
        style={{ background: `${colorMoodHeaderMapper[currentMood]}` }}
      >
        <div>
          <ProfileImage
            src={userInfo.imageUrl || "/resources/profile/elon.jpeg"}
          />
        </div>

        <div>
          <Emoji
            type="happy"
            isSelected={currentMood === "happy"}
            handleOnClick={handleCurrentMood}
          />
          <Emoji
            type="sad"
            isSelected={currentMood === "sad"}
            handleOnClick={handleCurrentMood}
          />
          <Emoji
            type="angry"
            isSelected={currentMood === "angry"}
            handleOnClick={handleCurrentMood}
          />
          <Emoji
            type="sleepy"
            isSelected={currentMood === "sleepy"}
            handleOnClick={handleCurrentMood}
          />
        </div>
      </div>
      <div className="SearchBox">
        <div className="SearchContainer">
          <img className="SearchIcon" src={"/resources/search-icon.svg"} />
          <input
            className="SearchInput"
            placeholder="Search or start new chat"
            value={searchString}
            onChange={(e) => onSearchTextChanged(e.target.value)}
          />
        </div>
      </div>
      {searchResult && (
        <div className="SearchResults">
          <ContactComponent userData={searchResult} setChat={props.setChat} />
        </div>
      )}
      <div className="lists">
        {contactList.map((userData) => (
          <ContactComponent
            userData={userData}
            setChat={props.setChat}
            userInfo={userInfo}
            mood={currentMood}
          />
        ))}
      </div>
      <div className="svgstyled">
        <NewsWidgetComponent />
      </div>
      <div className="logout-button">

        <GoogleLogout
          clientId="135907261663-hdilpg79i6h9qg1c0cjg49nv6g7fqdnk.apps.googleusercontent.com"
          buttonText="Logout"
          onLogoutSuccess={logout}
        >
        </GoogleLogout>
      </div>
    </div>
  );
}

export default ContactListComponent;
