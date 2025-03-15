const parent = document.querySelector('div').childNodes;
parent.forEach((child) => {
    if(child.nodeName === "#text")
        child.remove();
    console.log(child);
});
console.log(parent);
document.querySelector(".btn").addEventListener("click", (event) => {

    const parent = document.querySelector('div');

    parent.lastChild.remove();
    event.preventDefault();
    let random = 0;
    for(let i = 0; i < 10; i++) {
        random += Math.random();
    }
    const x = Math.round(random/10);
    const toss = document.createElement('h1');
    toss.textContent = x===0? 'Heads!': 'Tails';
    parent.appendChild(toss);
});