const parent = document.querySelector('div').childNodes;
parent.forEach((child) => {
    if(child.nodeName === "#text")
        child.remove();
});

button = document.querySelector(".btn");
button.addEventListener("click", (event) => {

    const parent = document.querySelector('div');

    const children = parent.childNodes;


    parent.lastChild.remove();
    event.preventDefault();
    let x = Math.random();
    x = Math.round(x);

    const toss = document.createElement('h1');
    toss.textContent = x===0? 'Heads!': 'Tails!';
    if(toss.textContent === 'Heads!') {
        children[0].className = 'btn-heads';

    }
    else {
        children[0].className = 'btn-tails';
    }
    parent.appendChild(toss);
});

button.addEventListener('mouseover', () => {
    const nodes = document.querySelector('div').childNodes;
    const text = nodes[1].textContent;
    if(text === 'Heads!') {
        nodes[0].className = 'btn-hover-heads';
        console.log(nodes[0]);
    }
    else if(text === 'Tails!') {
        nodes[0].className = 'btn-hover-tails';
        console.log(nodes[0]);
    }
    else {
        nodes[0].className = 'btn-hover';
    }
});

button.addEventListener('mouseout', () => {
    const nodes = document.querySelector('div').childNodes;
    const text = nodes[1].textContent;
    if(text === 'Heads!') {
        nodes[0].className = 'btn-heads';
        console.log(nodes[0]);
    }
    else if(text === 'Tails!') {
        nodes[0].className = 'btn-tails';
        console.log(nodes[0]);
    }
    else {
        nodes[0].className = 'btn';
    }
});
