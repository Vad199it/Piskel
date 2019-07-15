import { resetContextMenu, toolSelectShortcuts, toolSizeSelectShortcuts } from '../ToolsEvents';

export default function () {
  this.addSelectEvent();
  this.addChooseToolSizeEvent();
  this.addChooseColorEvent();
  document.addEventListener('keydown', toolSelectShortcuts(this));
  document.addEventListener('keydown', toolSizeSelectShortcuts(this));
  document.oncontextmenu = resetContextMenu;
  document.addEventListener('mouseup', this.stopDraw.bind(this));
}
