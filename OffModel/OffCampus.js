import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
  name: String,
  email: String
})

const Offcampus = mongoose.model("offcampus", UserSchema);

export default Offcampus;