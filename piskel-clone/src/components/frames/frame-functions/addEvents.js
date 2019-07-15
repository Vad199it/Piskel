import { addFrameButtonClickEvent, frameShorcuts } from '../framesEvents';

export default function () {
  const addFrameButton = document.querySelector('.frames-select .addFrame-button');
  addFrameButton.addEventListener('click', addFrameButtonClickEvent(this));

  const framesContainer = document.querySelector('.frames-select .frames-container');
  framesContainer.addEventListener('click', this.chooseFrame.bind(this));

  document.addEventListener('keydown', frameShorcuts(this));
}
