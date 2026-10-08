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

export const createLeftBlokiTemplate = (Data_0) => `
    <div class="left_blok ">
        ${createBlokTemplate(Data_0)}
    </div>
`

export const createCenterBlokiTemplate = ({Data_1, Data_2}) => `
    <div class="center_bloki">
        ${createBlokTemplate(Data_1)}
        ${createBlokTemplate(Data_2)}
    </div>

`

export const createRightBlokiTemplate = ({Data_3, Data_4}) => `
    <div class="right_bloki">
        ${createBlokTemplate(Data_3)}
        ${createBlokTemplate(Data_4)}
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