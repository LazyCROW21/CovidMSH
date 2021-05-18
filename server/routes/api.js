const express = require("express");
const mongodb = require("mongodb");

const router = express.Router();

// get all requests
router.get("/getrequests", async (req, res) => {
  const requests = await loadRequestCollection();
  res.send(await requests.find({}).toArray());
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

module.exports = router;
