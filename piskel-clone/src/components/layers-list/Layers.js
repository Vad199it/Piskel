/* eslint-disable no-param-reassign */
import movelayer from './layer-function/moveLayer';
import removelayer from './layer-function/removeLayer';
import addlayer from './layer-function/addLayer';
import addcoords from './layer-function/addCoordsEvent';
import addcanvsize from './layer-function/addChooseCanvSizeEvent';
import {
  changeSize,
} from './LayersEvents';

export default class Layers {
  constructor(frames) {
    this.frames = frames;
    this.selectedLayer = null;
    this.layer = document.querySelector('.layers-container .layer');
  }

  addEvents() {
    this.addChangeSizeEvent();
    this.addChooseCanvSizeEvent();
    this.addLayer();
    this.removeLayer();
    this.moveLayer(1);
    this.moveLayer(-1);
    Layers.addCoordsEvent();
  }

  addChangeSizeEvent() {
    changeSize(this)();
    window.addEventListener('resize', changeSize(this));
  }

  addChooseCanvSizeEvent() {
    addcanvsize.call(this);
  }

  static addCoordsEvent() {
    addcoords.call(this);
  }

  addLayer() {
    addlayer.call(this);
  }

  removeLayer() {
    removelayer.call(this);
  }

  moveLayer(d) {
    movelayer.call(this, d);
  }
}
