import app from "express";
const connectDB = () => {};
const app = new APP();
const PORT = 3001;
const startServer = () => {
  Promise.all([connectDB()]).then(() => {
    app.listen(PORT);
    console.log(`Server started on port ${PORT}`);
  });
};

startServer();
