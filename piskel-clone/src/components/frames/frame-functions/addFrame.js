import { createButton, getElemAndCtx } from '../../utils/utils';
import { copyButtonEvent, deleteButtonEvent, moveButtonMouseDown } from '../framesEvents';

export default function (elem, canvas, num) {
  const framesContainer = document.querySelector('.frames-select .frames-container');
  const frame = canvas || document.createElement('CANVAS');
  const previewContainer = document.createElement('DIV');

  const previewContainerWrapper = document.createElement('DIV');
  previewContainerWrapper.classList.add('preview-container-wrapper');

  const frameNumber = document.createElement('DIV');
  frameNumber.classList.add('frame-number');

  const deleteButton = createButton(
    'delete-button',
    '<i class="fas fa-trash"></i>',
    deleteButtonEvent(this, frame),
  );

  const copyButton = createButton(
    'copy-button',
    '<i class="fas fa-copy"></i>',
    copyButtonEvent(this, frame),
  );

  const moveButton = createButton('move-button', '<i class="fas fa-arrows-alt"></i>');

  moveButton.addEventListener('mousedown', moveButtonMouseDown(this, framesContainer, previewContainerWrapper));

  previewContainer.classList.add('preview-container');

  this.frameCtx = frame.getContext('2d');
  const frameImageData = this.frameCtx.getImageData(0, 0, frame.width, frame.height);

  frame.height = this.canvSize;
  frame.width = this.canvSize;

  if (!canvas) frame.classList.add('frame');
  this.currentFrame = frame;

  previewContainer.classList.add('selected');
  if (this.selected) this.selected.classList.remove('selected');
  this.selected = previewContainer;

  const { canv, ctx } = getElemAndCtx('.canvas-container .layer');

  const imgData = ctx.createImageData(canv.width, canv.height);
  ctx.putImageData(imgData, 0, 0);

  previewContainer.appendChild(frame);
  previewContainer.appendChild(deleteButton);
  previewContainer.appendChild(copyButton);
  previewContainer.appendChild(moveButton);
  previewContainer.appendChild(frameNumber);

  previewContainerWrapper.appendChild(previewContainer);

  if (elem) {
    const i = this.framesList[this.layerNumber].indexOf(elem);
    frameNumber.innerText = i + 1;
    framesContainer.insertBefore(previewContainerWrapper, elem.parentNode.parentNode.nextSibling);
    this.framesList[this.layerNumber].splice(i + 1, 0, frame);
  } else if (!canvas) {
    frameNumber.innerText = this.framesList[this.layerNumber].length + 1;
    framesContainer.appendChild(previewContainerWrapper);
    this.framesList[this.layerNumber].push(frame);
  } else if (num) {
    this.frameCtx.putImageData(frameImageData, 0, 0);
    frameNumber.innerText = num;
    framesContainer.appendChild(previewContainerWrapper);
  }

  const { ctx: additionalCtx } = getElemAndCtx('.canvas-container .additional-layer');
  const resetData = additionalCtx.createImageData(frame.width, frame.height);
  additionalCtx.putImageData(resetData, 0, 0);

  this.framesList.forEach((el, i) => {
    if (i === this.layerNumber || !el[+frameNumber.innerText - 1]) return;

    additionalCtx.drawImage(el[+frameNumber.innerText - 1], 0, 0);
  });

  return frame;
}
