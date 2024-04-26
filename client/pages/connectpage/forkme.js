import React from "react";
import "./forkme.scss";
import { t } from "../../locales/";

export const ForkMe = ({ repo = "https://github.com/mickael-kerjean/filestash" }) => {
    return (
        <div className="component_forkme">
        </div>
    );
};

export const PoweredByFilestash = () => {
    return (
        <div className="component_poweredbyfilestash">
            { t("Explanation about how upload the files to S3") } <strong><a href="https://genomixcloud.com">How access to S3 and  Upload the files</a></strong>
        </div>
    );
};
