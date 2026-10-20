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

export const createFooterColCenterTemplate = ({TitleColCenter, LiData = []}) => `
    <div class="footer-col">
        <h4 class="footer-title_a">${TitleColCenter}</h4>
        <ul class="footer-list">
            ${LiData.map(createLiElementTemplate).join('')}
        </ul>
    </div>
`

export const createContactItemTemplate = (text) => `
    <li class="footer-contact-item">${text}</li>
`;

export const createFooterColRightTemplate = ({TitleColRight, texts = []}) => `
    <div class="footer-col">
            <h4 class="footer-title">${TitleColRight}</h4>
            <ul class="footer-list">
                ${texts.map(createContactItemTemplate).join('')}
            </ul>
          </div>
`

export const createFooterGridTemplate = ({FooterColLeft, FooterColCenter1, FooterColCenter2, FooterColRight}) => `
    <div class="footer-grid">
        ${createFooterColLeftTemplate(FooterColLeft)}
        ${createFooterColCenterTemplate(FooterColCenter1)}
        ${createFooterColCenterTemplate(FooterColCenter2)}
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