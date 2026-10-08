import createEndTemplate from "../templates/createEndTemplate.js";
import EndData from "../../mockData/EndData.js";

const initEnd = (EndNode) => {
  EndNode.insertAdjacentHTML("beforeend", createEndTemplate(EndData));
};

export default initEnd;