const express = require("express");
const mongodb = require("mongodb");

const router = express.Router();

/* 
***************************************************************************************************************************************
***************************************************        Request APIs           *****************************************************
***************************************************************************************************************************************
*/
// get all requests
router.get("/getrequests", async (req, res) => {
  const requests = await loadRequestCollection();
  res.send(await requests.find({}).toArray());
});

// sets the request completed flag to true
router.put("/requestcompleted/:id", async (req, res) => {
  const requests = await loadRequestCollection();
  await requests.updateOne({_id: new mongodb.ObjectID(req.params.id)}, { $set: {completed: true} });
  res.status(200).send({status: "updated"});
});

// add request
router.post("/addrequest", async (req, res) => {
  const requests = await loadRequestCollection();
  requests.insertOne({
    requesterName: req.body.reqName,
    requesterPhone: req.body.reqPhone,
    requesterEmail: req.body.reqEmail,
    requesterPINCODE: req.body.reqPINCODE,
    requesterAddress: req.body.reqAddress,
    requesterAdditionalInfo: req.body.reqAdditionalInfo,
    personCount: req.body.personCnt,
    people: req.body.people,
    createdAt: new Date(),
    completed: false
  });
  res.status(201).send({status: "inserted"});
});

// delete request
router.delete("/deleterequest/:id", async (req, res) => {
    const requests = await loadRequestCollection();
    await requests.deleteOne({_id: new mongodb.ObjectID(req.params.id)});
    res.status(200).send({status: "deleted"});
});

async function loadRequestCollection() {
  const client = await mongodb.MongoClient.connect(
    "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );
  return client.db("covidapp").collection("requests");
}


/* 
***************************************************************************************************************************************
***************************************************        Article APIs           *****************************************************
***************************************************************************************************************************************
*/
// get all articles
router.get("/getarticles", async (req, res) => {
  const articles = await loadArticleCollection();
  res.send(await articles.find({}).toArray());
});

// add articles
router.post("/addarticle", async (req, res) => {
  const articles = await loadArticleCollection();
  var result = await articles.insertOne({
    title: req.body.title,
    body: req.body.body,
    createdAt: new Date()
  });
  // console.log(idk.ops[0]._id);
  res.status(201).send({status: "inserted", insertID: result.ops[0]._id});
});

// update articles
router.put("/updatearticle/:id", async (req, res) => {
  const articles = await loadArticleCollection();
  await articles.updateOne({_id: new mongodb.ObjectID(req.params.id)}, { $set: {title: req.body.title, body: req.body.body} });
  res.status(200).send({status: "updated"});
});

// delete articles
router.delete("/deletearticle/:id", async (req, res) => {
    const articles = await loadArticleCollection();
    await articles.deleteOne({_id: new mongodb.ObjectID(req.params.id)});
    res.status(200).send({status: "deleted"});
});

async function loadArticleCollection() {
  const client = await mongodb.MongoClient.connect(
    "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );
  return client.db("covidapp").collection("articles");
}


/* 
***************************************************************************************************************************************
***************************************************        Message APIs           *****************************************************
***************************************************************************************************************************************
*/
// get all Messages
router.get("/getmessages", async (req, res) => {
  const messages = await loadMessageCollection();
  res.send(await messages.find({}).toArray());
});

// add Message
router.post("/addmessage", async (req, res) => {
  const messages = await loadMessageCollection();
  messages.insertOne({
    name: req.body.name,
    phone: req.body.phone,
    subject: req.body.subject,
    message: req.body.message,
    createdAt: new Date()
  });
  res.status(201).send({status: "inserted"});
});

// delete Message
router.delete("/deletemessage/:id", async (req, res) => {
    const messages = await loadMessageCollection();
    await messages.deleteOne({_id: new mongodb.ObjectID(req.params.id)});
    res.status(200).send({status: "deleted"});
});

async function loadMessageCollection() {
  const client = await mongodb.MongoClient.connect(
    "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );
  return client.db("covidapp").collection("messages");
}


module.exports = router;
