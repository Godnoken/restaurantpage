import "../css/reset.scss";
import "../css/style.scss";
import createMenu from "./menu.js";
import createHeader from "./header";
import createFooter from "./footer";

const root = document.querySelector("#root");


root.appendChild(createHeader());
root.appendChild(createMenu());
root.appendChild(createFooter());