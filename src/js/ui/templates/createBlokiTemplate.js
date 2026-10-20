export const createBlokTemplate = ({namber, src_bloka, alt_bloka, deta, card_title, card_link}) => `
    <div class="blok_${namber} blok">
        <div class="foto">
            <img src="${src_bloka}" alt="${alt_bloka}" class="image_b" />
        </div> 
        <div class="card_content">
            <span class="card__date">${deta}</span>
            <h3 class="card_title">
                ${card_title}
            </h3>
            <li class="card_link_ccskrf">
                <a href="#" class="card_link">${card_link}</a>
            </li>
        </div>       
    </div>
`

export const createLeftBlokiTemplate = (bloki = []) => `
    <div class="left_blok ">
        ${bloki.map(createBlokTemplate).join('')}
    </div>
`

export const createCenterBlokiTemplate = (bloki = []) => `
    <div class="center_bloki">
        ${bloki.map(createBlokTemplate).join('')}
    </div>

`

export const createRightBlokiTemplate = (bloki = []) => `
    <div class="right_bloki">
        ${bloki.map(createBlokTemplate).join('')}
    </div>
`

const createBlokiTemplate = ({leftData, centerData, rightData}) => {
    return `
    ${createLeftBlokiTemplate(leftData)}
    ${createCenterBlokiTemplate(centerData)}
    ${createRightBlokiTemplate(rightData)}
    `;
};

export default createBlokiTemplate;