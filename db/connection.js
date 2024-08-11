import mongoose from "mongoose";

const mongo_url = "mongodb+srv://gangadharveeravalli09:5kJfCNYLjtfzhO8H@jobease.7nhrv.mongodb.net/?retryWrites=true&w=majority&appName=Jobease"

mongoose.connect(mongo_url)

// const connectDB = async () => {
//   try {
//     await mongoose.connect('mongodb://0.0.0.0:27017/login-details', {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log("MongoDB database connected");
//   } catch (error) {
//     console.error("MongoDB connection error:", error);
//     process.exit(1);
//   }
// };

// connectDB();

// export default connectDB;