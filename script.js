const button = document.getElementById('myButton')
const messageP = document.getElementById('message')

button.addEventListener('click', () => {
  messageP.innerText = "I said, dont press me";
});
button.onmouseenter = () => {
  messageP.innerText = "What do you expect it will happen here? dont press me";
};

const input = document.getElementById('myInput');
input.addEventListener('input', (event) => {
  console.log('Texto digitado: ${event.target.value}');
});

const div = document.getElementById('myDiv');
div.addEventListener('mouseover', () => {
  div.innerHTML = 'Is this a button? I dont think so'
});

const newDiv = document.createElement('div');

newDiv.textContent = 'This is a new div element';
newDiv.style.backgroundColor = 'lime';
newDiv.style.padding = '10px';
newDiv.style.width = '260px';
newDiv.style.border = '3px solid red';

const content = document.getElementById('content');
content.appendChild(newDiv);

function create() {
  let box = document.querySelector('.box');
  box.style.width = '200px';
  box.style.height = '200px';
  box.style.backgroundColor = 'red';
  box.style.border = '3px solid lime';
  box.textContent = 'I am a box!';
  box.style.color = 'white';
}

function phraseStylizing() {
  const color = document.getElementById('inputColor').value;

  const phrase = document.getElementById('phrase');
  phrase.style.color = color;

  color.value = '';
}

const buttonStylizing = document.getElementById('buttonStylizing');
buttonStylizing.addEventListener('click', phraseStylizing);
