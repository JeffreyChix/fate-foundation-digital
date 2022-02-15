import mongoose from "mongoose";

const connectionString = "mongodb://mongo:27017/cinema";

mongoose.connect(connectionString, { useNewUrlParser: true }).catch((e) => {
  console.error("Connection error", e.message);
});

const db = mongoose.connection;

export default db;
