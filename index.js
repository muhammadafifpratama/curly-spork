// require("rootpath")();
const express = require("express");
const app = express();
// const cors = require("cors");
// const errorHandler = require("./middlewares/error-handler");
const router = require("./routers");
const config = require('./config/config.json');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", router);
// app.use(cors());

// api routes
// app.use('/users', require('./users/users.controller'));

// global error handler
// app.use(errorHandler);

app.get('/', (req, res) => {
  res.send(`<h1>muncul kan</h1>`)
})

// start server
const port =
  process.env.NODE_ENV === "production" ? process.env.PORT || 80 : 3000;
app.listen(port, () => console.log("Server listening on port " + port));
