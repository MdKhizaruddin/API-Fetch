import React from "react";
import { Card } from "react-bootstrap";
import "./ApiCard.css"

const ApiCard = ({ item }) => {
  return (
    <div>
      <Card style={{ width: "300px" }} md={4} className="card">
        <img src={item.avatar} alt="empimage" style={{ width: "200px" }} />
        <h3>
          
          {item.first_name} {item.last_name}
        </h3>
        <p>{item.id}</p>
        <p>{item.email}</p>
      </Card>
    </div>
  );
};

export default ApiCard;
