const express = require("express");
const cors = require("cors");
var yahooFinance = require("yahoo-finance");
var moment = require("moment-business-days");
const finnhub = require("finnhub");
const api_key = finnhub.ApiClient.instance.authentications["api_key"];
api_key.apiKey = "sandbox_bujldkn48v6rjdbe1kig";
const finnhubClient = new finnhub.DefaultApi();

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

app.get("/stocks/quote/:ticker", async (req, res) => {
  const ticker = req.params.ticker;
  finnhubClient.quote(ticker, (error, data, response) => {
    data["ticker"] = ticker;
    res.send(data);
  });
});

app.get("/stocks/intraday/:ticker", async (req, res) => {
  const ticker = req.params.ticker;

  // const momentDate = moment(new Date().setHours(0, 0, 0, 0));
  // const dayInSeconds = 86400;
  // if (momentDate.isBusinessDay() && new Date().getHours() >= 9) {
  //   finnhubClient.stockCandles(
  //     ticker,
  //     "5",
  //     Math.floor(momentDate.toDate() / 1000),
  //     Math.floor(new Date() / 1000),
  //     {},
  //     (error, data, response) => {
  //       res.send(data);
  //     }
  //   );
  // } else {
  //   const previousDayInSeconds = Math.floor(
  //     momentDate.prevBusinessDay().toDate() / 1000
  //   );
  //   console.log(previousDayInSeconds);
  //   finnhubClient.stockCandles(
  //     ticker,
  //     "5",
  //     previousDayInSeconds,
  //     previousDayInSeconds + dayInSeconds,
  //     {},
  //     (error, data, response) => {
  //       res.send(data);
  //     }
  //   );
  // }

  // const response = await alpha.data.intraday(ticker, null, null, "5min");
  // const polished = await alpha.util.polish(response);
  // res.send(polished);
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
