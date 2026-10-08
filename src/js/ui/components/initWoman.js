import WomanData from "../../mockData/WomanData.js";
import createWomanTemplate from "../templates/createWomanTemplate.js";


const initWoman = (WomanNode) => {
  WomanNode.insertAdjacentHTML("beforeend", createWomanTemplate(WomanData));
};

export default initWoman;