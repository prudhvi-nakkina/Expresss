const applyRoutes = (app) => {
  app.get("/", (req, res) => res.send(`API os running fine`));
};

export default applyRoutes;
