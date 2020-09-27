const refs = {
  input: document.getElementById('name-input'),
  output: document.getElementById('name-output'),
};

refs.input.addEventListener('input', onInputChange);

function onInputChange() {
  refs.output.textContent =
    refs.input.value === '' ? 'незнакомец' : refs.input.value;
}
