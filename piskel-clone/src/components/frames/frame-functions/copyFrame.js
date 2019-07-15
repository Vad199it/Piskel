import { getElemAndCtx } from '../../utils/utils';

export default function (frame) {
  this.addFrame(frame);
  this.frameCtx.drawImage(frame, 0, 0);

  const { ctx } = getElemAndCtx('.canvas-container .layer');
  ctx.drawImage(frame, 0, 0);

  const pos = this.framesList[this.layerNumber].indexOf(frame) + 1;
  this.changeFramesNumbers(pos, 1);
}
