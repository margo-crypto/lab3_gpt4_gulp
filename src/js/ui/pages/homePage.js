import initHeader from "./../components/initHeader.js";
import initHero from "./../components/initHero.js";
import initBrands from "./../components/initBrands.js";
import initWhatIsGpt from "./../components/initWhatIsGpt.js";
import initFutureHere from "./../components/initFutureHere.js";
import initBurger from "./../components/initBurger.js";
import initWoman from "../components/initWoman.js";
import initPole from "../components/initPole.js";
import initTekct from "../components/initTekct.js";
import initBloki from "../components/initBloki.js";
import initEnd from "../components/initEnd.js";
import initE from "../components/initE.js";

const createHomePageTemplate = (rootNode) => {
  // формируем шаблон базовых секций для дальнейшего монтирования в них
  // соответствующих разделов
  const template = `
    <section class="section header"></section>
    <section class="section hero_section"></section>
    <section class="section brands_section"></section>
    <section class="section what_is_chatgpt_section"></section>
    <section class="section future_here"></section>
    <section class="section woman"></section>
    <section class="section pole"></section>
    <section class="section Tekct"></section>
    <section class="section bloki"></section>
    <section class="section end"></section>
    <section class="e"></section>

  `;

  rootNode.insertAdjacentHTML("beforeend", template); 
};

const homePage = () => {
  // инициализация элементов страницы
  const rootNode = document.querySelector("#root");
  createHomePageTemplate(rootNode);

  // инициализация шапки страницы с мок датой
  const headerNode = rootNode.querySelector(".header");
  initHeader(headerNode);

  // инициализация хиро раздела
  const heroNode = rootNode.querySelector(".hero_section");
  initHero(heroNode);

  // инициализация хиро раздела
  const brandsNode = rootNode.querySelector(".brands_section");
  initBrands(brandsNode);

  // инициализация хиро раздела
  const whatIsGptNode = rootNode.querySelector(".what_is_chatgpt_section");
  initWhatIsGpt(whatIsGptNode);

  // инициализация раздела "Будущее наступило" с мок датой
  const futureHereNode = rootNode.querySelector(".future_here");
  initFutureHere(futureHereNode);

/*--------------------------3 лаба (написано мной)-------------------------*/

  // инициализация раздела "woman"
  const womanNode = rootNode.querySelector(".woman");
  initWoman(womanNode);

  // инициализация раздела "pole"
  const poleNode = rootNode.querySelector(".pole");
  initPole(poleNode);
 
  // инициализация раздела "Tekct"
  const TekctNode = rootNode.querySelector(".Tekct");
  initTekct(TekctNode);
 
  // инициализация раздела "bloki"
  const blokiNode = rootNode.querySelector(".bloki");
  initBloki(blokiNode);
  
  // инициализация раздела "end"
  const endNode = rootNode.querySelector(".end");
  initEnd(endNode);
  
  // инициализация раздела "e"
  const eNode = rootNode.querySelector(".e");
  initE(eNode);
  
/*-------------------------------------------------------------------------*/
  // инициализация бургера для адаптивного меню
  initBurger(headerNode);
};

export default homePage;
