const container = document.getElementById('container');

function createDivs(n) {
    for (let i = 0; i < n; i++) {
        const div = document.createElement('div');
        div.classList.add('box');
        container.appendChild(div);
    }
};

createDivs(256);

const containerWidth = container.clientWidth;
const containerHeight = container.clientHeight;
const squareSize = Math.min(containerWidth / 16, containerHeight / 16);

const randomColor = Math.floor(Math.random()*16777215).toString(16);

const boxes = document.querySelectorAll(".box");
 boxes.forEach(box => {
    box.style.width = squareSize + "px";
     box.style.height = squareSize + "px";
    box.addEventListener("mouseover", event => {
        event.target.style.backgroundColor = "#" + randomColor;
    });
 });

const h1 = document.querySelector('h1');

const button = document.createElement('button');

button.classList.add('btn');
button.textContent = 'Click me';
button.addEventListener('click', onButtonClick);


function onButtonClick() {
    const squaresNumber = prompt("Enter the number of squares per side");
    if (squaresNumber !== null && squaresNumber !== "") {
        if (squaresNumber > 100) {
            alert("The number of squares per side should be less than 100");
        } else if (squaresNumber < 1) {
            alert("The number of squares per side should be greater than 1");
        } else {
            container.innerHTML = '';
            createDivs(squaresNumber * squaresNumber);
            const containerWidth = container.clientWidth;
            const containerHeight = container.clientHeight;
            const squareSize = Math.min(containerWidth / squaresNumber, containerHeight / squaresNumber);

            const randomColor = Math.floor(Math.random()*16777215).toString(16);

            const boxes = document.querySelectorAll(".box");
            boxes.forEach(box => {
                box.style.width = squareSize + "px";
                box.style.height = squareSize + "px";
                box.addEventListener("mouseover", event => {
                    event.target.style.backgroundColor = "#" + randomColor;
                });
            });
        }
    } else {
        console.log("user cancelled input")
    }
}

h1.appendChild(button);

