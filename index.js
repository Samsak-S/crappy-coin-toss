const parent = document.querySelector('div').childNodes;
parent.forEach((child) => {
    if(child.nodeName === "#text")
        child.remove();
});

document.querySelector(".btn").addEventListener("click", (event) => {

    const parent = document.querySelector('div');

    const children = parent.childNodes;


    parent.lastChild.remove();
    event.preventDefault();
    let random = 0;
    for(let i = 0; i < 10; i++) {
        random += Math.random();
    }
    const x = Math.round(random/10);
    const toss = document.createElement('h1');
    toss.textContent = x===0? 'Heads!': 'Tails!';
    if(toss.textContent === 'Heads!') {
        children[0].style.backgroundColor = 'rgb(198, 185, 185)';
        children[0].style.color = 'rgb(53, 52, 49)';

    }

    else {
        children[0].style.backgroundColor = 'rgb(185, 198, 185)';
        children[0].style.color = 'rgb(51, 53, 50)';
    }
    parent.appendChild(toss);
});