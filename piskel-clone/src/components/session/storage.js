export default function () {
  if (sessionStorage.getItem('key')) {
    document.querySelector('.canvas-menu').innerHTML = sessionStorage.getItem('canvas-menu');
  }
}
