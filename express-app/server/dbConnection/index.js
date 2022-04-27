import mongoose from "mongoose";

// connecting to cloud database using mongo atlas

const DB_CONNECTION_URL = `mongodb+srv://expresso:expresso@cluster0.wkeqy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

const connectDB = () => {
  console.log("DB trying to connect on " + new Date());

  const options = {
    keepAlive: 1,
    autoReconnect: true,
    poolSize: 10,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };
  return mongoose.connect(DB_CONNECTION_URL, options);
};
export default connectDB;
