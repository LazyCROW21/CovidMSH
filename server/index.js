const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const jwt = require('jsonwebtoken');
const cookieParser = require("cookie-parser");
const bcrypt = require('bcrypt');

const JWTSECRET = "JWTSECRET";

const users = [
  {
    username: "Admin", //pwd: Admin
    password: "$2b$08$I4NM/x8k0IGL3hR6e/0B2.l4ASs.nvHN4RDS86IhzSgIp2IfLlOnK",
  },
];

const app = express();
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors({
  credentials: true,
  origin: ['http://localhost:8080']
}));

app.post('/login', async (req, res) => {
  const user = users.find((user) => user.username === req.body.username);
  if(user == null) {
    return res.send({login: "fail"});
  }
  try {
    if(bcrypt.compareSync(req.body.password, user.password)) {
      const token = jwt.sign({
        username: users[0].username
      }, JWTSECRET);
      res.cookie('jwt', token, {
        httpOnly: true,
        maxAge: 86400000
      });
      return res.send({login: "success"});
    } else {
      return res.send({login: "fail"});
    }
  } catch (e) {
    return res.send({login: "fail"});
  }
});

app.get('/logincheck', (req, res) => {
  const token = req.cookies['jwt'];
  if(token) {
    const claim = jwt.verify(token, JWTSECRET);
    if(!claim) {
      return res.status(401).send({status: "loggedout"});
    }
    res.status(201).send({status: "loggedin"});
  } else {
    return res.status(401).send({status: "loggedout"});
  }
});

app.post('/logout', (req, res) => {
  res.cookie('jwt', '', {
    maxAge: 0
  });
  res.send({logout: "success"});
});

const api = require("./routes/api");
// const { json } = require("body-parser");
app.use("/api", api);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log("Server Started on port " + port));
