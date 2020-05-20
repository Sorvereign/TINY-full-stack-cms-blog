const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");

const app = express();

const db = require("./models");
const withAuth = require("./middleware/");
//This should be in a env variable but since
//this is just a simple app there's no problem.
const secret = "Secret";

db.mongoose
  .connect(`mongodb://localhost/api`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Successfully connected");
  })
  .catch((err) => {
    console.error("Connection error", err);
    process.exit();
  });

var corsOptions = {
  origin: "http://localhost:3000",
};

app.use(cookieParser());

app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

// I already create the admin user so this
// isn't useful anymore

/*app.post("/register", (req, res) => {
  const { email, password } = req.body;
  const user = new db.user({ email, password });
  user.save((err) => {
    if (err) {
      res.status(500).send(`Error adding user ${err}`);
    } else {
      res.status(200).send("User successfully added");
    }
  });
});*/

app.get("/dashboard", withAuth, function (req, res) {
  res.send("Yeah!!");
});

app.get("/check-token", withAuth, function (req, res) {
  res.sendStatus(200);
});

app.get("/get-posts", function (req, res) {
  db.post.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

app.get("/get-post/:id", function (req, res) {
  db.post.findById(req.params.id, function (error, data) {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

app.post("/add-post", function (req, res, next) {
  db.post.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      console.log(data);
      res.json(data);
    }
  });
});

app.delete("/remove-post/:id", function (req, res, next) {
  db.post.findByIdAndRemove(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      console.log(data);
      res.json(data);
    }
  });
});

app.put("/update-post/:id", function (req, res, next) {
  db.post.findByIdAndUpdate(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      console.log(data);
      res.json(data);
    }
  });
});

app.post("/authenticate", function (req, res) {
  const { email, password } = req.body;
  db.user.findOne({ email }, function (err, user) {
    if (err) {
      console.log(err);
      res.status(500).json({
        error: "Internal error please try again",
      });
    } else if (!user) {
      res.status(401).json({
        error: "Incorrect email or password",
      });
    } else {
      user.isCorrectPassword(password, function (err, same) {
        if (err) {
          res.status(500).json({ error: "Internal error" });
        } else {
          const payload = { email };
          const token = jwt.sign(payload, secret, {
            //That's enough, again, this
            //is just a simple app
            expiresIn: "1h",
          });
          res.cookie("token", token, { httpOnly: true }).sendStatus(200);
        }
      });
    }
  });
});

const PORT = process.env.PORT | 8080;

app.listen(PORT, () => {
  console.log(`Server is running in port ${PORT}`);
});
