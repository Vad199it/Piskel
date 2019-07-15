import { canvasSizeShortcut, chooseCanvasSize } from '../LayersEvents';

export default function () {
  const canvsSizeContainer = document.querySelector('.canvas-size');

  canvsSizeContainer.addEventListener('click', chooseCanvasSize(this));
  document.addEventListener('keydown', canvasSizeShortcut(this));
}
