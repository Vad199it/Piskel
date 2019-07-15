import { rgbToHex } from '../../utils/utils';

export default function (e, x, y) {
  this.resetEvents();

  const imgData = this.ctx.getImageData(0, 0, this.canv.width, this.canv.height);
  const { data } = imgData;

  const n = (y * this.canv.width + x) * 4;
  console.log(n);
  const pixelColor = rgbToHex(data[n + 0], data[n + 1], data[n + 2]);
  console.log(pixelColor);
  if (e.which === 3) {
    const secondColorPallete = document.querySelector('.choose-color .second-color');
    secondColorPallete.value = pixelColor;

    this.secondColor = `rgba(${data[n + 0]}, ${data[n + 1]}, ${data[n + 2]}, 255)`;
  } else {
    const colorPallete = document.querySelector('.choose-color .color');
    colorPallete.value = pixelColor;

    this.color = `rgba(${data[n + 0]}, ${data[n + 1]}, ${data[n + 2]}, 255)`;
  }
}
