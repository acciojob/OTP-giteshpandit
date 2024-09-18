const codes = document.querySelectorAll('.code');

input.forEach((input, index) => {
  input.addEventListener('input', () => {
    if (input.value.length === 1 && index < input.length - 1) {
      input[index + 1].focus();
    }
  });

  input.addEventListener('keydown', (event) => {
    if (event.key === 'Backspace' && input.value.=== ''){
      if (index > 0) {
        input[index - 1].focus();
        input[index - 1].value = '';
      }
    }
  });
