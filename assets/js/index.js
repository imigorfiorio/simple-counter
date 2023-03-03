let container = document.querySelector('.container');
let title = document.querySelector('.title');
let wrapper = document.querySelector('.wrapper');

let counter = document.createElement('div');
counter.className = 'counter';
counter.innerHTML = '0';

let minus = document.createElement('button');
minus.className = 'minus';
minus.innerHTML = '-';

let plus = document.createElement('button');
plus.className = 'plus';
plus.innerHTML = '+';

let reset = document.createElement('button');
reset.className = 'reset';
reset.innerHTML = 'RESET';

let author = document.querySelector('.author');

document.body.append(container, wrapper, minus, counter, plus, reset);
container.append(title, wrapper, minus, counter, plus, reset, author);
wrapper.append(minus, counter, plus);

let number = 0;

minus.addEventListener('click', () => {
  number--;
  document.querySelector('.counter').innerHTML = number;
});

plus.addEventListener('click', () => {
  number++;
  document.querySelector('.counter').innerHTML = number;
});

reset.addEventListener('click', () => {
  number = 0;
  document.querySelector('.counter').innerHTML = number;
});

document.addEventListener('keydown', function (event) {
  if (event.key === '-') {
    number--;
    document.querySelector('.counter').innerText = number;
  }
});

document.addEventListener('keydown', function (event) {
  if (event.key === '+') {
    number++;
    document.querySelector('.counter').innerText = number;
  }
});

document.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    number = 0;
    document.querySelector('.counter').innerText = number;
  }
});
