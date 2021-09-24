import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import ApiCard from "./ApiCard";
import axios from "axios";

const Apifetching = () => {
  const [resdata, setResdata] = useState([]);

  useEffect(() => {
    const getResData = async () => {
      try {
        const response = await axios.get("https://reqres.in/api/users?page=2");
        const myResData = response.data;
        setResdata(myResData);
      } catch (error) {
        console.log(error);
      }
    }
    getResData();
  }, []);
  return (
    <div>
      <Row>
        {resdata.data &&
          resdata.data.map((item) => (
            <Col md={3}>
              <ApiCard item={item} />
            </Col>
          ))}
      </Row>
    </div>
  );
};

export default Apifetching;
