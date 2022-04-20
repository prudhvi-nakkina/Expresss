
import * as Controller from "../app/controllers";
import * as Validation from "../utility/validations";
const applyRoutes = (app) => {
  app.get("/", (req, res) => res.send(`API is running fine`));
  //create-user, login, channel, search-user, channel-list, send-messsage
  app.post("/user", Validation.validateCreateUser, Controller.createUser);

  app.post("/login", Controller.loginUser);
  app.post("/channel", Controller.createChannel);
  app.get("/search-user", Controller.searchUser);
  app.get("/channel-list", Controller.getChannelList);
  app.post("/message", Controller.sendMessage);
};

export default applyRoutes;
