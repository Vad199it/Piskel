import addframe from './frame-functions/addFrame';
import addevents from './frame-functions/addEvents';
import chooseframe from './frame-functions/chooseFrame';
import copyframe from './frame-functions/copyFrame';
import deleteframe from './frame-functions/deleteFrame';
import changenumber from './frame-functions/changeFrameNumber';

export default class Frames {
  constructor() {
    this.framesList = [];
    this.layerNumber = -1;
    this.currentFrame = null;
    this.frameCtx = null;
    this.selected = null;
    this.canvSize = 32;
  }

  addFrame(elem, canvas, num) {
    addframe.call(this, elem, canvas, num);
  }

  addEvents() {
    addevents.call(this);
  }

  chooseFrame(e, frame) {
    chooseframe.call(this, e, frame);
  }

  copyFrame(frame) {
    copyframe.call(this, frame);
  }

  deleteFrame(frame) {
    deleteframe.call(this, frame);
  }

  changeFramesNumbers(pos, delta) {
    changenumber.call(this, pos, delta);
  }
}
