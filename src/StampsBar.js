import React, { useState } from "react";

export const StampsBar = ({ targ, curr, stampIcon }) => {
    const xs = new Array(targ).fill(0);
    const [err, setErr] = useState(null);
    return <ul className="stampsDisplay">
        {xs.map((v, i, a) => <li key={i} className={i < curr ? "stamped" : "unstamped"}>
            {!err && <img srcSet={stampIcon.srcset} alt={stampIcon.alt} onError={(e) => { setErr(e) }} />}
            {err && <span>{stampIcon.alt}</span>}
        </li>
        )}
    </ul>;
};
