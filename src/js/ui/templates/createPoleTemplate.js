export const createPoleTextTemplate = ({title, text}) => `
    <div class="text_2">
        <p class="t1">${title}</p>
        <p class="t2">${text}</p>
    </div>
`

export const createPoleBattonTemplate = (text) => `
    <button class="nachat_button btn">${text}</button>
`

const createPoleTemplate = ({textData, battonData}) => {
  return `
    ${createPoleTextTemplate(textData)}
    ${createPoleBattonTemplate(battonData)}
  `;
};

export default createPoleTemplate;
