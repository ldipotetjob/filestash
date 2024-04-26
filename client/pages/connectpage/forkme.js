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
            { t("Powered by") } <strong><a href="https://www.filestash.app">Filestash</a></strong>
        </div>
    );
};
