import createETemplate from "../templates/createETemplate.js";
import EData from "../../mockData/EData.js";

const initE = (ENode) => {
  ENode.insertAdjacentHTML("beforeend", createETemplate(EData));
};

export default initE;