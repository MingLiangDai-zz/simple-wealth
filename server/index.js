const express = require("express");
const cors = require("cors");
const app = express();
const port = 9000;

/**
 * Init Alpha Vantage with your API key.
 *
 * @param {String} key
 *   Your Alpha Vantage API key.
 */
const alpha = require("alphavantage")({ key: "YXDR223D7MRRGVK1" });

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello");
});

app.get("/stocks/intraday/:ticker", (req, res) => {
  const ticker = req.params.ticker;
  alpha.data.intraday(ticker).then((data) => {
    res.send(data);
  });
});

app.listen(port, () => {
  console.log("Started at port 9000");
});
