const refs = {
  inputValue: document.getElementById('font-size-control'),
  outputText: document.getElementById('text'),
};

refs.inputValue.addEventListener('change', onInputChange);

function onInputChange() {
  refs.outputText.style.fontSize = `${refs.inputValue.valueAsNumber}px`;
}
