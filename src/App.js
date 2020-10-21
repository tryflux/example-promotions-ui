import React from "react";
import PromotionCard from "./PromotionCard";
import "./styles.css";

const exampleResponse = require("./data.json");
export default function App() {
  return (
    <div className="App">
      <h1>Your Promotions</h1>
      <ul className="promotionsList">
        {exampleResponse.items.map((promotion) => (
          <li key={promotion.id}>
            <PromotionCard promotion={promotion} />
          </li>
        ))}
      </ul>
      <br />
      Showing {exampleResponse.items.length} of {exampleResponse.total} results
    </div>
  );
}
