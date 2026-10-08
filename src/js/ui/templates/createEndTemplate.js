export const createElementsCenterTemplate = ({textTitleData, textButtonData}) => `
    <div class="element_center">
        <h1 class="text_end">${textTitleData}</h1>
        <button class="buttons__end">${textButtonData}</button>
    </div>
`

export const createFooterColLeftTemplate = ({GPT4, alt, adress, text}) => `
    <div class="footer-col footer-col-left">
        <img src="${GPT4}" alt="${alt}" class="image" />
        <p class="footer-address">${adress}</p>
        <p class="footer-copyright">${text}</p>
    </div>
`

export const createLiElementTemplate = (textLi) => `
    <li class="ccskrf_li"><a href="#" class="footer-link">${textLi}</a></li> 
`

export const createFooterColCenter1Template = ({TitleColCenter, LiData1, LiData2, LiData3, LiData4}) => `
    <div class="footer-col">
        <h4 class="footer-title_a">${TitleColCenter}</h4>
        <ul class="footer-list">
            ${createLiElementTemplate(LiData1)}
            ${createLiElementTemplate(LiData2)}
            ${createLiElementTemplate(LiData3)}
            ${createLiElementTemplate(LiData4)}
        </ul>
    </div>
`

export const createFooterColCenter2Template = ({TitleColCenter, LiData1, LiData2, LiData3}) => `
    <div class="footer-col">
        <h4 class="footer-title_a">${TitleColCenter}</h4>
        <ul class="footer-list">
            ${createLiElementTemplate(LiData1)}
            ${createLiElementTemplate(LiData2)}
            ${createLiElementTemplate(LiData3)}
        </ul>
    </div>
`

export const createFooterColRightTemplate = ({TitleColRight, text1, text2, text3}) => `
    <div class="footer-col">
            <h4 class="footer-title">${TitleColRight}</h4>
            <ul class="footer-list">
              <li class="footer-contact-item">${text1}</li>
              <li class="footer-contact-item">${text2}</li>
              <li class="footer-contact-item">${text3}</li>
            </ul>
          </div>
`

export const createFooterGridTemplate = ({FooterColLeft, FooterColCenter1, FooterColCenter2, FooterColRight}) => `
    <div class="footer-grid">
        ${createFooterColLeftTemplate(FooterColLeft)}
        ${createFooterColCenter1Template(FooterColCenter1)}
        ${createFooterColCenter2Template(FooterColCenter2)}
        ${createFooterColRightTemplate(FooterColRight)}   
    </div>
`

const createEndTemplate = ({ElementsCenter, FooterGrid}) => {
    return `
    ${createElementsCenterTemplate(ElementsCenter)}
    ${createFooterGridTemplate(FooterGrid)}
    `;
};

export default createEndTemplate;