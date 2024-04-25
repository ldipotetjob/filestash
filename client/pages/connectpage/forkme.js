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
         { t("Probando para soprte") } <strong><a href="https://genomixcloud.com">Soporte de Genomixxxxxxxx estamos en prueba</a></strong>
        </div>
    );
};
