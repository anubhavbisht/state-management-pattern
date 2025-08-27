import { navigate } from "./routes/index";
import { mountHeader } from "./components/header.js";
export { stateMgr } from "./state-manage";

const headerDiv = document.getElementById("header");

const header = mountHeader();

headerDiv.appendChild(header);

navigate("");
