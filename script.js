const codes = document.querySelectorAll('.code');

codes.forEach((input, index) => {
  input.addEventListener('input', () => {
    if (input.value.length === 1 && index < codes.length - 1) {
      codes[index + 1].focus();
    }
  });

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Backspace') {
      if (input.value.length === 0 && index > 0) {
        codes[index - 1].focus();
      }
    }
  });
});
