import { getElemAndCtx, setPixel } from '../../utils/utils';

export default function (e) {
  if (!this.selectedTool) {
    return;
  }
  this.isMouseDown = false;

  const { canv, ctx } = getElemAndCtx('.canvas-container .layer');
  const { canv: hoverCanv, ctx: hoverCtx } = getElemAndCtx('.canvas-container .hover-layer');
  let imgData;

  imgData = ctx.getImageData(0, 0, canv.width, canv.height);
  this.frames.frameCtx.putImageData(imgData, 0, 0);

  if (!this.selectedTool.classList.contains('stroke')
        && !this.selectedTool.classList.contains('rect')
        && !this.selectedTool.classList.contains('ellipse')
        && !this.selectedTool.classList.contains('triangle')) {
    canv.style.zIndex = '40';
    hoverCanv.style.zIndex = '60';
  }

  if (e.target.tagName === 'CANVAS') {
    imgData = hoverCtx.createImageData(canv.width, canv.height);

    setPixel(this.tempX, this.tempY, hoverCanv, imgData, this.hoverColor, this.toolSize);
    hoverCtx.putImageData(imgData, 0, 0);
  }
}
