import { getElemAndCtx } from '../../utils/utils';

export default function (frame) {
  if (this.framesList[this.layerNumber].length === 1) {
    const { canv, ctx } = getElemAndCtx('.canvas-container .layer');
    let imgData = ctx.createImageData(canv.width, canv.height);
    ctx.putImageData(imgData, 0, 0);

    const frameCtx = frame.getContext('2d');

    imgData = frameCtx.createImageData(frame.width, frame.height);
    frameCtx.putImageData(imgData, 0, 0);

    return;
  }

  const pos = this.framesList[this.layerNumber].indexOf(frame);
  const framesContainer = document.querySelector('.frames-container');
  let frameContainerWrapper = frame.parentNode.parentNode;
  framesContainer.removeChild(frameContainerWrapper);

  if (pos === 0) {
    frameContainerWrapper = this.framesList[this.layerNumber][pos + 1].parentNode.parentNode;
  } else {
    frameContainerWrapper = this.framesList[this.layerNumber][pos - 1].parentNode.parentNode;
  }
  this.framesList[this.layerNumber].splice(pos, 1);
  let i = this.framesList[this.layerNumber].indexOf(frameContainerWrapper.firstChild.firstChild);
  if (pos !== 0) i += 1;
  this.changeFramesNumbers(i, -1);

  if (this.currentFrame === frame) {
    frameContainerWrapper.firstChild.classList.add('selected');
    this.selected = frameContainerWrapper.firstChild;
    this.currentFrame = frameContainerWrapper.firstChild.firstChild;
    this.frameCtx = this.currentFrame.getContext('2d');

    const { canv, ctx } = getElemAndCtx('.canvas-container .layer');
    const imgData = ctx.createImageData(canv.width, canv.height);
    ctx.putImageData(imgData, 0, 0);

    ctx.drawImage(this.currentFrame, 0, 0);
  }
}
