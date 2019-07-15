import { addLayerEvent, addLayerShortcut } from '../LayersEvents';

export default function () {
  addLayerEvent(this)();

  const addLayerButton = document.querySelector('.layers-control .layer-add');
  addLayerButton.addEventListener('click', addLayerEvent(this));
  document.addEventListener('keydown', addLayerShortcut(this));
}
