import express from "express";

import bodyParser from "body-parser";
import cors from "cors";
import fs from "fs";

const app = express();

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

// parse application/json
app.use(bodyParser.json());

app.use(bodyParser.text());

app.use(cors());

app.post("/", (req, res) => {
  console.log("measurement recorded");

  const data = fs.readFileSync("measurements.json");
  const recordedMeasurements = JSON.parse(data.toString());

  recordedMeasurements.push(req.body);

  fs.writeFileSync("measurements.json", JSON.stringify(recordedMeasurements));
  res.status(200).send("recorded");
});

app.listen(4500, () => {
  console.log("listening on port 4500");
});
