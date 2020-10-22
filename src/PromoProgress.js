import React from "react";
import { SimpleProgressBar } from "./SimpleProgressBar";
import { StampsBar } from "./StampsBar";

export const PromoProgress = ({ promotion }) => {
    const curr = promotion?.value?.current?.decimal;
    if (typeof(curr) === "number" && promotion?.value?.target) {
        const targ = promotion.value.target.decimal;

        if (typeof(promotion?.branding?.symbol?.srcset) === "string") {
            // There's an icon to use as a stamp icon.
            return <StampsBar curr={curr} targ={targ} stampIcon={promotion.branding.symbol.srcset} />
        }
        return <SimpleProgressBar
            color={promotion?.branding?.accentColors[0]}
            value={curr}
            max={targ}
            caption={`${curr} / ${targ} ${promotion.value.current.description}`} />
    }
    if (curr) {
        return <span>You have {`${curr} ${promotion.value.current.description}`}</span>;
    }
    return <></>;
};
