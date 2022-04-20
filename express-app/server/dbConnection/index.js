import mongoose from "mongoose";

const DB_CONNECTION_URL = "mongodb://localhost:27017/test";

const connectDB = () => {
  console.log("DB trying to connect on " + new Date());
  const options = {
    keepAlive: 1,
    // autoReconnect: true, //These are not supported (errors showing up)
    // poolSize: 10, //These are not supported (errors showing up)
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };
  return mongoose.connect(DB_CONNECTION_URL, options);
};
export default connectDB;
