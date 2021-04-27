import React from "react";

const PageContext = React.createContext({
    display: false,
    msg: "default value",
    onclick: () => undefined
});

export  default PageContext;