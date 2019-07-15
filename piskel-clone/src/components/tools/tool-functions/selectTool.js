export default function (e) {
  const tool = e.target.tagName === 'I' ? e.target.parentNode : e.target;

  if (!tool.classList.contains('tool') || tool.classList.contains('selected')) return;

  this.changeTool(tool);

  this.resetEvents();

  if (tool.classList.contains('pen')) {
    this.penTool();
  } else if (tool.classList.contains('mirror-pen')) {
    this.mirrorPenTool();
  } else if (tool.classList.contains('eraser')) {
    this.eraserTool();
  } else if (tool.classList.contains('magic-eraser')) {
    this.magicErserTool();
  } else if (tool.classList.contains('paint-bucket')) {
    this.paintBucketTool();
  } else if (tool.classList.contains('paint-bucket-all')) {
    this.paintBucketAllTool();
  } else if (tool.classList.contains('move')) {
    this.moveTool();
  } else if (tool.classList.contains('stroke')) {
    this.strokeTool();
  } else if (tool.classList.contains('rect')) {
    this.rectTool();
  } else if (tool.classList.contains('ellipse')) {
    this.ellipseTool();
  } else if (tool.classList.contains('triangle')) {
    this.triangleTool();
  } else if (tool.classList.contains('lighten')) {
    this.brightnessTool(3);
  } else if (tool.classList.contains('darken')) {
    this.brightnessTool(-3);
  } else if (tool.classList.contains('dithering')) {
    this.ditheringTool();
  }
}
