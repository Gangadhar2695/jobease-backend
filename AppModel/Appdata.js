import mongoose from "mongoose";


const detailsSchema = new mongoose.Schema({
  role: String,
  experience: String,
  qualification: String,
  salary: String,
  location: String,
  website: String
});

const frequentQuestionsSchema = new mongoose.Schema({
  title: String,
  answer: String
});

const AppSchema = new mongoose.Schema({
  title: String,
  thumbnail: String,
  lastUpdated: String,
  detailsHeader: String,
  Url: String,
  details: detailsSchema,
  keyskills: [String],
  jobdescription: [String],
  highlight: String,
  logo: String,
  description: String,
  frequentQuestions: [frequentQuestionsSchema]
});

const appdata = mongoose.model('appdatas', AppSchema);
export default appdata;