const applyRoutes = (app) => {
  app.get("/", (req, res) => res.send(`API os running fine`));
  //create-user, login, channel, search-user, channel-list, send-messsage
  app.post("/", (req, res) => res.send(`API os running fine`));
  app.post("/", (req, res) => res.send(`API os running fine`));

  app.post("/", (req, res) => res.send(`API os running fine`));
  app.post("/", (req, res) => res.send(`API os running fine`));
  app.get("/", (req, res) => res.send(`API os running fine`));
  app.get("/", (req, res) => res.send(`API os running fine`));
  app.post("/message", (req, res) => res.send(`message`));
};

export default applyRoutes;
