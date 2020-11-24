import React, { useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import Search from "../search/search";
import DataChart from "../datachart/datachart";

const buttonStyle = {
  width: "100%",
};

const TradeTab = () => {
  const [dataArr, setDataArr] = useState([]);
  const [labelsArr, setLabelsArr] = useState([]);
  const [dataArrWeek, setDataArrWeek] = useState([]);
  const [labelsArrWeek, setLabelsArrWeek] = useState([]);
  const [view, setView] = useState(["day"]);
  const [currentData, setCurrentData] = useState({
    o: null,
    h: null,
    l: null,
    c: null,
    pc: null,
    ticker: "",
  });

  const dataToChart = (data) => {
    console.log(data);
    const xArr = [];
    const yArr = data.o;
    // const yArr = Object.keys(data).map((key) => {
    //   xArr.push(key.slice(11));
    //   return data[key].close;
    // });
    setDataArr(yArr);
    setLabelsArr(xArr);
  };

  const dataToWeekChart = (data) => {
    const xArr = [];
    const yArr = data.map((obj) => {
      xArr.push(obj.date.slice(0, 11));
      return obj.close;
    });
    setDataArrWeek(yArr);
    setLabelsArrWeek(xArr);
  };

  const displayCurrentData = (data) => {
    setCurrentData(data);
  };

  const setViewType = (typeStr) => {
    setView(typeStr);
  };

  const dataViewMap = {
    day: dataArr,
    week: dataArrWeek,
  };

  const labelsViewMap = {
    day: labelsArr,
    week: labelsArrWeek,
  };

  return (
    <>
      <Row>
        <Col md={8} sm={12}>
          <Search
            receivedIntraday={dataToChart}
            receivedWeek={dataToWeekChart}
            receivedQuote={displayCurrentData}
          />
        </Col>
      </Row>
      <div className="my-3 py-2 border border-secondary border-left-0 border-right-0">
        <Row>
          <Col>
            <h4>{currentData.ticker.toUpperCase()}</h4>
          </Col>
        </Row>
        <Row>
          <Col sm={6} md={3}>
            <h6>
              Current: <span className="text-muted bold"> {currentData.c}</span>
            </h6>
          </Col>
          <Col sm={6} md={3}>
            <h6>
              Open: <span className="text-muted bold">{currentData.o}</span>
            </h6>
          </Col>
          <Col sm={6} md={3}>
            <h6>
              High: <span className="text-muted bold"> {currentData.h}</span>
            </h6>
          </Col>
          <Col sm={6} md={3}>
            <h6>
              Low: <span className="text-muted bold"> {currentData.l}</span>
            </h6>
          </Col>
          {/* <Col sm={6} md={3}>
          <h6>
            Previous Close:
            <span className="text-muted bold"> {currentData.pc}</span>
          </h6>
        </Col> */}
        </Row>
      </div>

      <Row>
        <Col>
          <Row>
            <Col>
              <Link to="/dashboard/buy">
                <Button style={buttonStyle} variant="outline-success">
                  Buy
                </Button>
              </Link>
            </Col>
            <Col>
              <Button style={buttonStyle} variant="outline-danger">
                Sell
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button
            style={buttonStyle}
            variant="info"
            onClick={() => {
              setViewType("day");
            }}
          >
            Day
          </Button>
        </Col>
        <Col>
          <Button
            style={buttonStyle}
            variant="info"
            onClick={() => {
              setViewType("week");
            }}
          >
            Week
          </Button>
        </Col>
      </Row>
      <DataChart dataArr={dataViewMap[view]} labelsArr={labelsViewMap[view]} />
    </>
  );
};
export default TradeTab;
