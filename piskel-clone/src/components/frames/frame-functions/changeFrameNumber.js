export default function (pos, delta) {
  let i = pos;
  const frameContainerList = document.getElementsByClassName('preview-container');

  while (i < this.framesList[this.layerNumber].length) {
    const num = frameContainerList[i].lastChild;
    const text = +num.innerText + delta;
    num.innerText = text;

    i += 1;
  }
}
