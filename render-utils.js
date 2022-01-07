export function renderBbabyDetail(bbaby){
    const div = document.createElement('div');
    const img = document.createElement('img');
    const descriptionEl = document.createElement('p');
    const nameEl = document.createElement('p');
    const ageEl = document.createElement('p');
    const fluffEl = document.createElement('p');
    const typeEl = document.createElement('p');
    const ageAndTypeEl = document.createElement('div');

    div.classList.add('bbaby-detail');

    nameEl. textContent = bbaby.name;
    nameEl.classList.add('name');

    descriptionEl.textContent = bbaby.description;
    descriptionEl.classList.add('description');

    ageEl.textContent = `${bbaby.age} years old`;
    ageEl.classList.add('age');

    fluffEl.textContent = bbaby.fluff;
    fluffEl.classList.add('fluff');

    typeEl.textContent = bbaby.type;
    typeEl.classList.add('type');

    ageAndTypeEl.classList.add('age-and-type');

    ageAndTypeEl.append(ageEl, typeEl);

    img.src = `../assets/${bbaby.type}.png`;

    div.append(nameEl, img, ageAndTypeEl, descriptionEl);
    
    return div;
}

export function renderBbabyLicense(bbaby){
    const div = document.createElement('div');
    const a = document.createElement('a');
    const img = document.createElement('img');
    const p = document.createElement('p');

    div.classList.add('bbaby-license');

    p.textContent = bbaby.name;
    img.src = `./assets/${bbaby.type}.png`;
    a.href = `./detail/?id=${bbaby.id}`;
    div.append(p, img);

    a.append(div);

    return a;
}