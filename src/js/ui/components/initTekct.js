import createTekctTemplate from "../templates/createTekctTemplate.js";
import TekctData from "../../mockData/TekctData.js";

const initTekct = (TekctNode) => {
  TekctNode.insertAdjacentHTML("beforeend", createTekctTemplate(TekctData));
};

export default initTekct;