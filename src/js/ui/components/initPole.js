import PoleData from "../../mockData/PoleData.js";
import createPoleTemplate from "../templates/createPoleTemplate.js";

const initPole = (PoleNode) => {
  PoleNode.insertAdjacentHTML("beforeend", createPoleTemplate(PoleData));
};

export default initPole;