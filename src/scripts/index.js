import "../styles/index.scss";
if (process.env.NODE_ENV === "development") {
  require("../index.html");
}

// APP //
import App from "./App/App";

const app = new App();
app.init();
