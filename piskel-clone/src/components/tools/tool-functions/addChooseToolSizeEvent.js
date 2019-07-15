import { chooseToolSize } from '../ToolsEvents';

export default function () {
  const toolsSizeContainer = document.querySelector('.tools-container .tool-size');
  toolsSizeContainer.addEventListener('click', chooseToolSize(this));
}
