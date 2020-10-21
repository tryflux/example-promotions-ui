import QRious from "qrious";
import React from "react";
import { useBarcode } from 'react-barcodes';

const QrCode = ({code, color}) => {
  const qr = new QRious({
    value: code.code,
    background: "transparent",
    foreground: color
  });
  const image = qr.toDataURL();

  return (
    <div>
      <img src={image} />
    </div>
  );
}

const SimpleProgressBar = ({ value, max, caption, color }) => (
  <div className="progressBar container" style={{ borderColor: color }} >
    <div
      className="progressBar inner"
      style={{ width: (value / max) * 100 + "%", backgroundColor: color, color: blackOrWhiteToContrast(color) }}
    >
      {caption}
    </div>
  </div>
);

const Barcode = ({ code, color }) => {

  const { inputRef } = useBarcode({
    value: code.code,
    options: {
      displayValue: false,
      background: "transparent",
      lineColor: color
    }
  });
  
  return <div>
    <svg ref={inputRef} />
    <p>{code.title}</p>
  </div>;
}

function blackOrWhiteToContrast(color) {
  const r = parseInt(color[1] + color[2], 16);
  const g = parseInt(color[3] + color[4], 16);
  const b = parseInt(color[5] + color[6], 16);
  const avg = (r + g + b) / 3;
  if ((avg / 255) < 0.5) return "#ffffff"
  return "#000000"
}

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
      {promotion.value.current && promotion.value.target && (
        <SimpleProgressBar 
          color={promotion?.branding?.accentColors[0]}
          value={promotion.value.current.decimal}
          max={promotion.value.target.decimal}
          caption={`${promotion.value.current.decimal} / ${promotion.value.target.decimal} ${promotion.value.current.description}`}
        />
      )}
      {promotion.value.current && !promotion.value.target && (
        <span>You have {`${promotion.value.current.decimal} ${promotion.value.current.description}`}</span>
      )}
      {promotion.code && promotion.code.type === "CODE_QR" && <QrCode code={promotion.code} color={blackOrWhiteToContrast(promotion.branding.primaryColor)} /> }
      {promotion.code && promotion.code.type !== "CODE_QR" && <Barcode code={promotion.code} color={blackOrWhiteToContrast(promotion.branding.primaryColor)} />}
    </div>
  </div>
);

export default PromotionCard;
