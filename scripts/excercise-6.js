const inputRef = document.getElementById('validation-input');

inputRef.addEventListener('blur', onInputChange);

function onInputChange() {
  inputRef.classList.remove('valid', 'invalid');
  inputRef.value.length === Number(inputRef.dataset.length)
    ? inputRef.classList.add('valid')
    : inputRef.classList.add('invalid');
}
