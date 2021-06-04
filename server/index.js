const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const passport = require("passport");
const flash = require("express-flash");
const session = require("express-session");

const initializePassport = require("./passport-config");
initializePassport(passport);

const app = express();
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());
app.use(cors());
app.use(flash());
app.use(
  session({
    secret: "FULLYSECURED",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());

const api = require("./routes/api");
app.use("/api", checkAuthenticated, api);

// Login and Auth
app.post(
  "/login",
  checkNotAuth,
  passport.authenticate("local", {
    successRedirect: "/loginsuccess",
    failureRedirect: "/loginfailed",
    failureFlash: true,
  })
);

app.delete('/logout', (req, res) => {
  req.logOut();
  res.status(201).send({logout: "success"});
});

app.get("/loginsuccess", checkAuthenticated, (req, res) => {
  res.status(201).send({ login: "success" });
});

app.get("/loginfailed", checkNotAuth, (req, res) => {
  res.status(201).send({ login: "fail" });
});

function checkAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.status(403).send({ error: "403" });
}

function checkNotAuth(req, res, next) {
  if (req.isAuthenticated()) {
    return res.status(201).send({ status: "Already logged in" });
  }
  next();
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log("Server Started on port " + port));
