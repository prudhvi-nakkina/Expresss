import UserModel from "../models/user";
import ChannelModel from "../models/channel";
import { sendResponse, sendError } from "../../utility";


//used to check if user already exists and create a user if theres no user with the 
//given email address


module.exports = {
  createUser: async (req, res) => {
    const requestData = req.body;
    const isUserExist = await UserModel.findOneData({
      email: requestData.email,
    });
    if (isUserExist)
      return sendResponse(
        res,
        isUserExist,
        "User fetched successfully",
        true,
        200
      );
// when there is no user use the save data method to store the data on teh server
    const userObj = new UserModel(req.body);
    await userObj.saveData();
    sendResponse(res, userObj, "User created successfully", true, 200);
  },

  // channels are the flow, used for communication between the sender and receiver

  createChannel: async (req, res) => {
    const channelUsers = req.body.channelUsers;
    const firstUser = channelUsers[0];
    const secondUser = channelUsers[1];
    let isChannelAlreadyExist = false;
    let channelModel;

    const channelList = await ChannelModel.findData({
      "channelUsers.email": firstUser.email,
    });

    if (channelList && channelList.length) {
      channelList.forEach((channel) => {
        isChannelAlreadyExist = channel.channelUsers.find(
          (user) => user.email === secondUser.email
        );
        if (isChannelAlreadyExist)
          channelModel = channel
      });
    }
// if theres a group already then we will use it fro chatting 
    if (isChannelAlreadyExist)
      return sendResponse(res, channelModel, "Channel created successfully", true, 200);

    channelModel = new ChannelModel(req.body);
    await channelModel.saveData();
    sendResponse(res, channelModel, "Channel created successfully", true, 200);
  },
  //used to fetch all teh chats 

  getChannelList: async (req, res) => {
    const requestData = req.query;
    const channelList = await ChannelModel.findData({
      "channelUsers.email": requestData.email,
    });
    sendResponse(res, channelList, "Channel list fetched", true, 200);
  },
// used to search for the user by username or email address
  searchUser: async (req, res) => {
    const requestData = req.query;
    const isUserExist = await UserModel.findOneData({
      email: requestData.email,
    });
    if (!isUserExist) return sendError(res, {}, "No user found!");
    sendResponse(res, isUserExist, "User found successfully", true, 200);
  },
  // used to change the theme based on the users mood and update the state on the backend

  changeUserMood: async (req, res) => {
    const requestData = req.body;
    const isUserExist = await UserModel.findOneData({
      email: requestData.email,
    });
    if (!isUserExist) return sendError(res, {}, "No user found!");
    isUserExist.mood=requestData.mood;
    
    const modifiedUser ={
      name:isUserExist.name,
      email: isUserExist.email,
      profilePic: isUserExist.profilePic,
      mood: requestData.mood
    }
    let updatedData = await UserModel.findOneAndUpdateData({_id:requestData._id},modifiedUser);

    
 
    console.log(updatedData)
    sendResponse(res, updatedData, "mood change successfully", true, 200);
  },
  //fetches the request form the body and pushes it to the array of messages of  user with the appropriate sender id

  sendMessage: async (req, res) => {
    const requestData = req.body;
    await ChannelModel.findOneAndUpdateData(
      { _id: requestData.channelId },
      { $push: { messages: requestData.messages } }
    );
    sendResponse(res, {}, "Message sent successfully", true, 200);
  },
};
