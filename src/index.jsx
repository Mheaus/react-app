import React from "react";
import ReactDOM from "react-dom";

import "./style";
import App from "./pages";
import registerServiceWorker from "./utils/registerServiceWorker";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
