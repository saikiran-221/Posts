const express = require('express');
const multer = require('multer');
const uploadFile = require('./services/storage.service');
const postModel = require('./models/post.model');
const cors = require('cors');

const app = express();
app.use(cors())
app.use(express.json());

const upload = multer({storage: multer.memoryStorage() })

app.post('/create-post', upload.single("image"), async (req,res) => {

  const result = await uploadFile(req.file.buffer);

  const post = await postModel.create({
    image: result.url,
    caption: req.body.caption
  })

  return res.status(201).json({
    message: "Post created successfully",
    post
  })
})

app.get("/posts", async (req,res) => {

  const post = await postModel.find()

  return res.status(200).json({
    message: "posts fetched successfully",
    post
  })
})

app.delete("/posts/:id", async(req,res) => {
  try{const {id} = req.params;
  
  await postModel.findByIdAndDelete({
    _id: id 
  })

  res.status(209).json({
    message: "Deleted successfully"
  })}

  catch(error){
    console.log(error.message)
  }
})

app.patch("/posts/:id", async(req,res) => {
  const id = req.params.id;
  
  const caption = req.body.caption;

  await postModel.findByIdAndUpdate({
    _id : id},{
      caption : caption
    })

    res.status(200).json({
      message : "Note updated successfully"
    })
})

module.exports = app