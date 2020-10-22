import React from "react";
import { blackOrWhiteToContrast } from "./blackOrWhiteToContrast";

export const SimpleProgressBar = ({ value, max, caption, color }) => (
  <div className="progressBar container" style={{ borderColor: color }}>
    <div
      className="progressBar inner"
      style={{ width: (value / max) * 100 + "%", backgroundColor: color, color: blackOrWhiteToContrast(color) }}
    >
      {caption}
    </div>
  </div>
);
