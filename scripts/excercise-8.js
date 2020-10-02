const refs = {
  boxesContainer: document.getElementById('boxes'),
  controlsPanel: document.getElementById('controls'),
  buttonRender: document.querySelector('[data-action="render"]'),
  buttonDestroy: document.querySelector('[data-action="destroy"]'),
};

refs.buttonRender.addEventListener('click', onButtonRenderClick);
refs.buttonDestroy.addEventListener('click', onButtonDestroyClick);

function onButtonRenderClick() {
  refs.boxesContainer.innerHTML = '';
  createBoxes();
}

function createBoxes(amount) {
  amount = document.querySelector('input[type="number"]').valueAsNumber;
  if (amount <= 0) {
    return;
  }

  const boxSize = 30;

  let murkupOfBoxes = '';
  for (let i = 0; i < amount; i += 1) {
    murkupOfBoxes += `<div class='box' style="width: ${
      boxSize + 10 * i
    }px; height: ${boxSize + 10 * i}px; background-color: rgb(${getRandomColor(
      255,
    )}, ${getRandomColor(255)}, ${getRandomColor(255)});"></div>`;
  }

  refs.boxesContainer.insertAdjacentHTML('beforeend', murkupOfBoxes);

  function getRandomColor(value) {
    return Math.floor(Math.random() * Math.floor(value));
  }
}

function onButtonDestroyClick() {
  refs.boxesContainer.innerHTML = '';
}
