import "./styles.css";

import PromotionCard from "./PromotionCard";
import React from "react";
import { usePromotions } from "./usePromotions";

export default function App() {
  const promotions = usePromotions("https://api.test.tryflux.com/promotions")
  return (
    
    <div className="App">
      <h1>Your Promotions</h1>
      <ul className="promotionsList">
        {promotions?.items?.map((promotion) => (
          <li key={promotion.id}>
            <PromotionCard promotion={promotion} />
          </li>
        ))}
      </ul>
      <br />
      Showing {promotions?.items?.length} of {promotions?.total} results
    </div>
  );
}
