import { addCoordsEvent, removeCoordsEvent } from '../LayersEvents';

export default function () {
  const layer = document.querySelector('.canvas-container .layer');
  const hoverLayer = document.querySelector('.canvas-container .hover-layer');
  const coordsInfo = document.querySelector('.canvas-info .coords');

  layer.addEventListener('mouseover', addCoordsEvent(layer, hoverLayer, coordsInfo));
  hoverLayer.addEventListener('mouseover', addCoordsEvent(layer, hoverLayer, coordsInfo));
  layer.addEventListener('mouseout', removeCoordsEvent(coordsInfo));
  hoverLayer.addEventListener('mouseout', removeCoordsEvent(coordsInfo));
}
