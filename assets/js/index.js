let container = document.querySelector('.container');
let title = document.querySelector('.title');
let wrapper = document.querySelector('.wrapper');

let number = document.createElement('div');
number.className = 'number';
number.innerHTML = '0';

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

document.body.append(container, wrapper, minus, number, plus, reset);
container.append(title, wrapper, minus, number, plus, reset, author);
wrapper.append(minus, number, plus);

let n = 0;

function updateNumber(num) {
  document.querySelector('.number').innerHTML = num;
}

minus.addEventListener('click', () => {
  n--;
  updateNumber(n);
});

plus.addEventListener('click', () => {
  n++;
  updateNumber(n);
});

reset.addEventListener('click', () => {
  n = 0;
  updateNumber(n);
});

document.addEventListener('keydown', function (event) {
  if (event.key === '-') {
    n--;
    updateNumber(n);
  }
});

document.addEventListener('keydown', function (event) {
  if (event.key === '+') {
    n++;
    updateNumber(n);
  }
});

document.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    n = 0;
    updateNumber(n);
  }
});
