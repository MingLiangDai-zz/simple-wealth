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

  const dataToChart = (data) => {
    const xArr = [];
    const yArr = Object.keys(data).map((key) => {
      xArr.push(key.slice(11));
      return data[key].close;
    });
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
          />
        </Col>
      </Row>
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
