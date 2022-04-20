import mongoose from "mongoose";

const DB_CONNECTION_URL = "mongodb://localhost:27017/test";

const connectDB = () => {
  const options = {
    keepAlive: 1,
    autoReconnect: 1,
    poolSize: 10,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };
  return mongoose.connect(DB_CONNECTION_URL, {});
};
