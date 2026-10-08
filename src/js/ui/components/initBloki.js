import createBlokiTemplate from "../templates/createBlokiTemplate.js";
import BlokiData from "../../mockData/BlokiData.js";

const initBloki = (BlokiNode) => {
  BlokiNode.insertAdjacentHTML("beforeend", createBlokiTemplate(BlokiData));
};

export default initBloki;