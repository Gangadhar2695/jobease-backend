import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
  name: String,
  email: String
})

const Category = mongoose.model("categories", UserSchema);

export default Category;