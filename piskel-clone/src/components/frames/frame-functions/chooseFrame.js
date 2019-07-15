import { getElemAndCtx } from '../../utils/utils';

export default function (e, frame) {
  const target = frame || e.target;
  if (!target.classList.contains('frame')) return;
  if (this.currentFrame === target) return;

  const { canv, ctx } = getElemAndCtx('.canvas-container .layer');
  const { ctx: additionalCtx } = getElemAndCtx('.canvas-container .additional-layer');

  const imgData = ctx.createImageData(canv.width, canv.height);
  ctx.putImageData(imgData, 0, 0);
  additionalCtx.putImageData(imgData, 0, 0);

  ctx.drawImage(target, 0, 0);

  const framePos = this.framesList[this.layerNumber].indexOf(target);

  this.framesList.forEach((elem, i) => {
    if (i === this.layerNumber || !elem[framePos]) return;

    additionalCtx.drawImage(elem[framePos], 0, 0);
  });

  this.selected.classList.remove('selected');
  target.parentNode.classList.add('selected');

  this.selected = target.parentNode;
  this.currentFrame = target;
  this.frameCtx = target.getContext('2d');

  const { ctx: hoverCtx } = getElemAndCtx('.canvas-container .hover-layer');
  hoverCtx.putImageData(imgData, 0, 0);
}
