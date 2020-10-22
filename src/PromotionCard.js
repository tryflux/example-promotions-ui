import { PromoCode } from "./PromoCode";
import { PromoProgress } from "./PromoProgress";
import React from "react";
import { blackOrWhiteToContrast } from "./blackOrWhiteToContrast";

const PromotionCard = ({ promotion }) => (
  <div
    className="promotion"
    style={{ backgroundColor: promotion.branding.primaryColor }}
  >
    <img
      srcSet={promotion.branding.logo.srcset}
      alt={promotion.branding.logo.alt}
    />
    <div className="promoData" style={{color: blackOrWhiteToContrast(promotion.branding.primaryColor)}}>
      <h2>{promotion.name}</h2>
      <p>{promotion.description}</p>
      <PromoProgress promotion={promotion} />
      {promotion.code && <PromoCode promotion={promotion} />}
    </div>
  </div>
);

export default PromotionCard;
