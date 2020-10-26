import React from "react";
import { Form } from "react-bootstrap";
const search = () => {
  const search = (ticker) => {
    fetch("http://localhost:9000/stocks/intraday/" + ticker)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.error(err));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const ticker = e.target.search.value;
    search(ticker);
  };
  return (
    <div>
      <Form className="form-inline" onSubmit={handleSubmit}>
        <i className="fas fa-search" style={{ display: "inline-block" }}></i>
        <Form.Control
          name="search"
          type="text"
          placeholder="Search Ticker Symbol"
        />
      </Form>
    </div>
  );
};

export default search;
