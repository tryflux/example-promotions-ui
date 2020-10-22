import { Barcode } from "./Barcode";
import { QrCode } from "./QrCode";
import React from "react";
import { blackOrWhiteToContrast } from "./blackOrWhiteToContrast";

export const PromoCode = ({ promotion }) => <>
  {promotion.code && promotion.code.type === "CODE_QR" && <QrCode code={promotion.code} color={blackOrWhiteToContrast(promotion.branding.primaryColor)} />}
  {promotion.code && promotion.code.type === "ALPHANUMERIC" && <div class="alphanumericCode" style={{ color: blackOrWhiteToContrast(promotion.branding.primaryColor) }}>{promotion.code}</div>}
  {promotion.code && promotion.code.type !== "CODE_QR" && promotion.code.type !== "ALPHANUMERIC" && <Barcode code={promotion.code} color={blackOrWhiteToContrast(promotion.branding.primaryColor)} />}
</>;
