import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
  image: String,
  Description: String,
  Posted:String,
  link:String
})

const Similar = mongoose.model("similarjobs", UserSchema);

export default Similar;