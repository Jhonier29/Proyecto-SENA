const mostrarBtn1 = document.getElementById('mostrarBtn1');
const mensaje_1 = document.getElementById('mensaje_1');
const mostrarBtn2 = document.getElementById('mostrarBtn2');
const mensaje_2 = document.getElementById('mensaje_2');

mostrarBtn1.addEventListener('click', () => {
  if (mensaje_1.classList.contains('d-none')) {
    mensaje_1.classList.remove('d-none');
  } else {
    mensaje_1.classList.add('d-none');

  }
});
mostrarBtn2.addEventListener('click', () => {
  if (mensaje_2.classList.contains('d-none')) {
    mensaje_2.classList.remove('d-none');
  } else {
    mensaje_2.classList.add('d-none');

  }
});