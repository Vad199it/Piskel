import {
  changeBrightness, getElemAndCtx, getElemCoords, setDitheringPixel, setPixel,
} from '../../utils/utils';

export default function (e) {
  if (!this.selectedTool) return;

  const { canv, ctx } = getElemAndCtx('.canvas-container .hover-layer');
  const { canv: layer, ctx: layerCtx } = getElemAndCtx('.canvas-container .layer');
  const { x, y } = getElemCoords(canv, e);

  if (!this.selectedTool.classList.contains('stroke')
        && !this.selectedTool.classList.contains('rect')
        && !this.selectedTool.classList.contains('ellipse')
        && !this.selectedTool.classList.contains('triangle')) {
    canv.style.zIndex = '40';
    layer.style.zIndex = '60';
  }

  this.isMouseDown = true;

  this.tempX = x;
  this.tempY = y;

  const layerData = layerCtx.getImageData(0, 0, layer.width, layer.height);
  const resetImgData = ctx.createImageData(canv.width, canv.height);

  let color1;
  let color2;

  if (e.which === 3) {
    color1 = this.secondColor;
    color2 = this.color;
  } else {
    color1 = this.color;
    color2 = this.secondColor;
  }

  if (this.selectedTool.classList.contains('pen')) {
    setPixel(this.tempX, this.tempY, layer, layerData, color1, this.toolSize);
  } else if (this.selectedTool.classList.contains('mirror-pen')) {
    setPixel(this.tempX, this.tempY, layer, layerData, color1, this.toolSize);
    setPixel(layer.width - this.tempX, this.tempY, layer, layerData, color1, this.toolSize);
  } else if (this.selectedTool.classList.contains('eraser')) {
    setPixel(this.tempX, this.tempY, layer, layerData, 'rgba(0, 0, 0, 0)', this.toolSize);
  } else if (this.selectedTool.classList.contains('lighten')) {
    changeBrightness(x, y, canv, layerData, this.toolSize, 10);
  } else if (this.selectedTool.classList.contains('darken')) {
    changeBrightness(x, y, canv, layerData, this.toolSize, -10);
  } else if (this.selectedTool.classList.contains('dithering')) {
    setDitheringPixel(this.tempX, this.tempY, layer, layerData, color1, color2, this.toolSize);
  } else if (this.selectedTool.classList.contains('color-picker')) {
    this.colorPickerTool(e, x, y);
  }

  layerCtx.putImageData(layerData, 0, 0);
  ctx.putImageData(resetImgData, 0, 0);
}
