const express = require("express");
const cors = require("cors");
const logger = require("morgan");

const app = express();

require("dotenv").config();

app.use(express.json());
app.use(cors());
app.use(logger("dev"));

app.use("/api/books", require("./routes/api/books"));

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Express Server is running on port:${port}`);
});
