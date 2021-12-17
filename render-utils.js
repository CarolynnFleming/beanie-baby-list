export function renderBbabyList(bbaby){
    const bbabyEl = document.createElement('a');
    const typeEl = document.createElement('p');
    const nameEl = document.createElement('p');
    const yearEl = document.createElement('p');
    const fluffEl = document.createElement('p');

    bbabyEl.classList.add('bbaby');
    bbabyEl.href = `./bbaby/?id=${bbaby.id}`;
    typeEl.textContent = bbaby.type;
    nameEl.textContent = bbaby.name;
    yearEl.textContent = bbaby.year;
    fluffEl.textContent = bbaby.fluff;

    bbabyEl.append(typeEl, nameEl, yearEl, fluffEl);

    return bbabyEl; 
}