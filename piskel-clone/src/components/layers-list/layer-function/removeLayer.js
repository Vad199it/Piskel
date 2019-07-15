import { removeLayerEvent, removeLayerShortcut } from '../LayersEvents';

export default function () {
  const removeLayerButton = document.querySelector('.layers-control .layer-remove');

  removeLayerButton.addEventListener('click', removeLayerEvent(this));
  document.addEventListener('keydown', removeLayerShortcut(this));
}
