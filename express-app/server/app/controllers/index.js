import UserModel from "../models/users";
import ChannelModel from "../models/channels";
import {sendResponse,sendError} from "../../utility";


module.exports = {
    createUser: async (req,res)=>{
        const userObj = new UserModel(req.body);
        await userObj.saveData();
        sendResponse(res,userObj, "user added successful", true ,200);
    },

    loginUser: async (req,res)=>{
      const requestData = req.body;
      const isUserExist = await UserModel.findOneData({
          phoneNumber: requestData.phoneNumber,
          password: requestData.password,
      });
      if (!isUserExist)
      return sendError(res,{},"Invalid Credentials");
      sendResponse(res, isUserExist, "User logged in Successfully", true, 200);

    },
    createChannel: async(req,res)=>{

    },
    getChannelList: async(req,res)=>{

    },
    sendMessage: async(req,res)=>{

    },
    searchUser: async (req,res)=>{

    },




};