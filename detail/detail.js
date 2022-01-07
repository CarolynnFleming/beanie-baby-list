import { getBbaby } from '../fetch-utils.js';
import { renderBbabyDetail } from '../render-utils.js';

const boxDetail = document.getElementById('beanie-baby-detail-box');

window.addEventListener('load', async() => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');

    const bbaby = await getBbaby(id);

    const bbabyDetailEl = renderBbabyDetail(bbaby);

    boxDetail.append(bbabyDetailEl);
});