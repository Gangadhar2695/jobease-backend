import express from "express"
import cors from "cors"

const app = express()

app.use(express.json());
app.use(cors());

import './db/connection.js';

import Users from "./Models/User.js";
import Category from "./model/Category.js";
import Offcampus from "./OffModel/OffCampus.js";
import appdata from "./AppModel/Appdata.js";
import Similar from "./Similarjobs/Similarmodel.js";


app.post("/login", async (req, res) => {

  let user = new Users(req.body);
  let result = await user.save();
  res.send(result);

})




app.post("/Subscribe", async (req, res) => {
  let category = new Category(req.body);
  let results = await category.save();
  res.send(results);
})

// app.get("/getCategories", async (req, res) => {
//   try {
//     const Data = await Category.find({})
//     console.log(Data)
//     res.status(200).send({ status: 'OK', data: Data });
//   } catch (err) {
//     console.log(err)
//     res.status(500).send({ status: 'Error', message: err.message });
//   }
// })

app.get("/Offcampus", async (req, res) => {
  try {
    const Datas = await Offcampus.find({})
    // console.log('offcampus',Datas)
    res.status(200).send({ status: 'OK', data: Datas });
  } catch (err) {
    console.log(err)
    res.status(500).send({ status: 'Error', message: err.message });
  }
})

app.get("/Appdata", async (req, res) => {
  try {
    const AppData = await appdata.find({})
    // console.log('Appdata',AppData)
    res.status(200).send({ status: 'OK', data: AppData });
  } catch (err) {
    console.log(err)
    res.status(500).send({ status: 'Error', message: err.message });
  }
})


app.get("/getUsers", async (req, res) => {
  try {
    const users = await Users.find({})
    // console.log('userdata',users)
    res.status(200).send({ status: 'OK', data: users });
  } catch (err) {
    console.log(err)
    res.status(500).send({ status: 'Error', message: err.message });
  }
})

app.get("/similarjobs",async (req,res)=>{
  try {
    const similar = await Similar.find({})
    // console.log('similar',similar)
    res.status(200).send({ status: 'OK', data: similar });
  } catch (err) {
    console.log(err)
    res.status(500).send({ status: 'Error', message: err.message });
  }
})


const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`server at http://localhost:${port}`)
})


