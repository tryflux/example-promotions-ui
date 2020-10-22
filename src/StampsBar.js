import React from "react";

export const StampsBar = ({ targ, curr, stampIcon }) => {
    const xs = new Array(targ).fill(0);
    return <ul className="stampsDisplay">
        {xs.map((v, i, a) => <li className={i < curr ? "stamped" : "unstamped"}>
            <img srcSet={stampIcon} />
        </li>
        )}
    </ul>;
};
