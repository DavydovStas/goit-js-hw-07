const refs = {
  value: document.getElementById('value'),
  decrementBtn: document.querySelector('[data-action="decrement"]'),
  incrementBtn: document.querySelector('[data-action="increment"]'),
};

let counterValue = refs.value.textContent;

refs.decrementBtn.addEventListener('click', decrement);
refs.incrementBtn.addEventListener('click', increment);

function decrement() {
  counterValue = Number(counterValue) - 1;
  refs.value.textContent = counterValue;
}

function increment() {
  counterValue = Number(counterValue) + 1;
  refs.value.textContent = counterValue;
}
