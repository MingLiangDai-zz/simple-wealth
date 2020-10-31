const express = require("express");
const cors = require("cors");
var yahooFinance = require("yahoo-finance");

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

app.get("/stocks/intraday/:ticker", async (req, res) => {
  const ticker = req.params.ticker;
  const response = await alpha.data.intraday(ticker, null, null, "5min");
  const polished = await alpha.util.polish(response);
  res.send(polished);
});

app.get("/stocks/historical/:ticker", async (req, res) => {
  const ticker = req.params.ticker;
  const yahooRes = await yahooFinance.historical({
    symbol: ticker.toUpperCase(),
    from: "2020-10-20",
    to: "2020-10-30",
    // period: 'd'  // 'd' (daily), 'w' (weekly), 'm' (monthly), 'v' (dividends only)
  });
  console.log(yahooRes);
  res.send(
    yahooRes.map((obj) => ({
      date: obj.date,
      open: obj.open,
      close: obj.close,
      symbol: obj.symbol,
    }))
  );
});

app.listen(port, () => {
  console.log("Started at port 9000");
});
