import { moveDownShortcut, moveLayerEvent, moveUpShortcut } from '../LayersEvents';

export default function (d) {
  if (d > 0) {
    const downLayerButton = document.querySelector('.layers-control .layer-down');
    downLayerButton.addEventListener('click', moveLayerEvent(this, d));

    document.addEventListener('keydown', moveDownShortcut(this, d));
  } else {
    const upLayerButton = document.querySelector('.layers-control .layer-up');
    upLayerButton.addEventListener('click', moveLayerEvent(this, d));

    document.addEventListener('keydown', moveUpShortcut(this, d));
  }
}
