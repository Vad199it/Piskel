import addevents from './tool-functions/addEvents';
import addChooseToolSizeevent from './tool-functions/addChooseToolSizeEvent';
import selecttool from './tool-functions/selectTool';
import colorPickertool from './tool-functions/colorPickerTool';
import switchlayers from './tool-functions/switchLayers';
import stopdraw from './tool-functions/stopDraw';
import point from './tool-functions/pointer';
import {
  getElemAndCtx,
} from '../utils/utils';

import {
  mouseOutEvent,
  penToolMouseMove,
  mirrorPenToolMouseMove,
  paintBucketToolEvent,
  paintBucketAllToolEvent,
  moveToolEvent,
  strokeEvent,
  rectEvent,
  ellipseEvent,
  triangleEvent,
  brightnessMove,
  ditheringMove,
  chooseColor,
} from './ToolsEvents';

export default class Tools {
  constructor(frames) {
    this.frames = frames;
    this.selectedTool = null;
    this.toolSize = 1;
    this.selectedSize = null;
    this.color = 'rgba(0, 0, 0, 255)';
    this.secondColor = 'rgba(255, 255, 255, 255)';
    this.hoverColor = 'rgba(255, 255, 255, 40)';
    this.isMouseDown = false;
    this.tempX = 0;
    this.tempY = 0;
    const { canv, ctx } = getElemAndCtx('.canvas-container .layer');
    this.canv = canv;
    this.ctx = ctx;
  }

  addEvents() {
    addevents.call(this);
  }

  addChooseToolSizeEvent() {
    addChooseToolSizeevent.call(this);
  }

  resetToolSize() {
    let currentSize = document.querySelector('.tools-container .active');
    currentSize.classList.remove('active');
    currentSize = document.querySelector('.tools-container .px1');
    currentSize.classList.add('active');
    this.toolSize = 1;
    this.selectedSize = currentSize;
  }

  resetEvents() {
    const { canv: hoverCanv } = getElemAndCtx('.canvas-container .hover-layer');
    this.canv.onmousemove = null;
    document.onmouseup = null;
    hoverCanv.onmousedown = null;
  }

  changeTool(tool) {
    if (this.selectedTool) {
      this.selectedTool.classList.remove('selected');
    }

    tool.classList.add('selected');
    this.selectedTool = tool;
  }

  selectTool(e) {
    selecttool.call(this, e);
  }

  addSelectEvent() {
    const toolsSelectContainier = document.querySelector('.tools-container .tools-select');
    toolsSelectContainier.addEventListener('click', this.selectTool.bind(this));

    const { canv: hoverCanv, ctx: hoverCtx } = getElemAndCtx('.canvas-container .hover-layer');

    const imgData = hoverCtx.getImageData(0, 0, hoverCanv.width, hoverCanv.height);

    hoverCanv.addEventListener('mousedown', this.switchLayers.bind(this));
    hoverCanv.addEventListener('mousemove', this.pointer.bind(this));
    hoverCanv.addEventListener('mouseout', mouseOutEvent(this, imgData, hoverCanv, hoverCtx));
  }

  // tools
  penTool(color) {
    this.resetEvents();

    this.canv.onmousemove = penToolMouseMove(this, color);
  }

  mirrorPenTool() {
    this.resetEvents();
    this.canv.onmousemove = mirrorPenToolMouseMove(this);
  }

  eraserTool() {
    this.penTool('rgba(0, 0, 0, 0)');
  }

  magicErserTool() {
    this.paintBucketTool('rgb( , , , )');
  }

  paintBucketTool(mainColor) {
    const { canv: hoverCanv } = getElemAndCtx('.canvas-container .hover-layer');

    this.resetEvents();
    this.resetToolSize();

    hoverCanv.onmousedown = paintBucketToolEvent(this, mainColor);
  }

  paintBucketAllTool() {
    const { canv: hoverCanv } = getElemAndCtx('.canvas-container .hover-layer');

    this.resetEvents();
    this.resetToolSize();

    hoverCanv.onmousedown = paintBucketAllToolEvent(this);
  }

  moveTool() {
    const { canv: hoverCanv } = getElemAndCtx('.canvas-container .hover-layer');

    this.resetEvents();

    hoverCanv.onmousedown = moveToolEvent(this);
  }

  strokeTool() {
    const { canv: hoverCanv, ctx: hoverCtx } = getElemAndCtx('.canvas-container .hover-layer');

    this.resetEvents();

    hoverCanv.onmousedown = strokeEvent(this, hoverCanv, hoverCtx);
  }

  rectTool() {
    const { canv: hoverCanv, ctx: hoverCtx } = getElemAndCtx('.canvas-container .hover-layer');

    this.resetEvents();

    hoverCanv.onmousedown = rectEvent(this, hoverCanv, hoverCtx);
  }

  ellipseTool() {
    const { canv: hoverCanv, ctx: hoverCtx } = getElemAndCtx('.canvas-container .hover-layer');

    this.resetEvents();

    hoverCanv.onmousedown = ellipseEvent(this, hoverCanv, hoverCtx);
  }

  triangleTool() {
    const { canv: hoverCanv, ctx: hoverCtx } = getElemAndCtx('.canvas-container .hover-layer');

    this.resetEvents();

    hoverCanv.onmousedown = triangleEvent(this, hoverCanv, hoverCtx);
  }

  brightnessTool(inc) {
    this.resetEvents();

    this.canv.onmousemove = brightnessMove(this, inc);
  }

  ditheringTool() {
    this.resetEvents();

    this.canv.onmousemove = ditheringMove(this);
  }

  colorPickerTool(e, x, y) {
    colorPickertool.call(this, e, x, y);
  }

  // events
  addChooseColorEvent() {
    const colorPallete = document.querySelector('.choose-color .color');
    const secondColorPallete = document.querySelector('.choose-color .second-color');

    colorPallete.addEventListener('change', chooseColor(this, colorPallete, secondColorPallete));
    secondColorPallete.addEventListener('change', chooseColor(this, colorPallete, secondColorPallete));
  }

  pointer(e) {
    point.call(this, e);
  }

  stopDraw(e) {
    stopdraw.call(this, e);
  }

  switchLayers(e) {
    switchlayers.call(this, e);
  }
}
