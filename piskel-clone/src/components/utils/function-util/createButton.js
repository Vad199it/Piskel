export default function (cl, html, clickEvent) {
  const button = document.createElement('BUTTON');
  button.classList.add(cl);
  button.innerHTML = html;
  if (clickEvent) button.onclick = clickEvent;

  return button;
}
