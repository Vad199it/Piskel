import { getElemAndCtx, getElemCoords, setPixel } from '../../utils/utils';

export default function (e) {
  if (!this.selectedTool) return;
  const { canv, ctx } = getElemAndCtx('.canvas-container .hover-layer');
  const { x, y } = getElemCoords(canv, e);
  if (this.tempX === x && this.tempY === y) return;

  const imgData = ctx.createImageData(canv.width, canv.height);

  if (this.selectedTool.classList.contains('mirror-pen')) {
    setPixel(x, y, canv, imgData, this.hoverColor, this.toolSize);
    setPixel(canv.width - x, y, canv, imgData, this.hoverColor, this.toolSize);
  } else {
    setPixel(x, y, canv, imgData, this.hoverColor, this.toolSize);
  }

  ctx.putImageData(imgData, 0, 0);

  this.tempX = x;
  this.tempY = y;
}
