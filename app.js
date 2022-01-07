// import functions and grab DOM elements
import { getBbabys } from './fetch-utils.js';
import { renderBbabyLicense } from './render-utils.js';
// let state
const beanieBabyBox = document.getElementById('beanie-baby-box');
// set event listeners 
window.addEventListener('load', async() => {
    const bbabys = await getBbabys();

    for (let bbaby of bbabys) {
        const bbabyEl = renderBbabyLicense(bbaby);

        beanieBabyBox.append(bbabyEl);
    }
});
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
