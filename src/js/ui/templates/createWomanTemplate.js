export const createWomanLeftTitleTemplate = (TitleData) => `
    <h2>${TitleData}</h2>
`

export const createWomanLeftTextTemplate = (textData) => `
    <p class="container__content_2">
        ${textData}
    </p>

`

export const createWomanLeftHrefTemplate = ({Href, text}) => `
    <li class="item_ccskrf">
        <a class="cta" href="${Href}">${text}</a>
    </li>
`

export const createWomanLeftTemplate = ({TitleData, textData, HrefData}) => `
    <div class="woman_left">
        <p class="container__content_1">Запросить ранний доступ</p>
        ${createWomanLeftTitleTemplate(TitleData)}
        ${createWomanLeftTextTemplate(textData)}
        ${createWomanLeftHrefTemplate(HrefData)}
    </div>
`

export const createWomanRightTemplate = ({src, alt}) => `
    <div class="woman_right">
        <img src="${src}" alt="${alt}" />
    </div>
`

const createWomanTemplate = ({rightData, leftData}) => {
  return `
    ${createWomanRightTemplate(rightData)}
    ${createWomanLeftTemplate(leftData)}
  `;
};

export default createWomanTemplate;