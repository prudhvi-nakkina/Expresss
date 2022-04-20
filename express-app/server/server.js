import APP from "express";
import connectDB from "./dbConnection";
const app = new APP();
const PORT = 3005;
const startServer = () => {
  Promise.all([connectDB()]).then(() => {
    app.listen(PORT);
    console.log(`Server started on Port ${PORT}`);
  });
};

startServer();
