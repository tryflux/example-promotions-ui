import QRious from "qrious";
import React from "react";

export const QrCode = ({ code, color }) => {
  const qr = new QRious({
    value: code.code,
    background: "transparent",
    foreground: color
  });
  const image = qr.toDataURL();

  return (
    <div>
      <img alt={code.title} src={image} />
    </div>
  );
};
