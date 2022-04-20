import UserModel from "../models/users";
import ChannelModel from "../models/channels";
import {sendResponse,sendError} from "../../utility";


module.exports = {
    createUser: async (req,res)=>{
        const userObj = new UserModel(req.body);
        await userObj.saveData();
        sendResponse(res,userObj, "user added successful", true ,200);
    },

    loginUser: async(req,res)=>{

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