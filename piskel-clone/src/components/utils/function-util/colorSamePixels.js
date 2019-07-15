export default function (x0, y0, color, imgData, canv) {
  const { data } = imgData;
  const stack = [{ x: x0, y: y0 }];

  let rgb = color;
  rgb = rgb.replace(/[^\d,]/g, '').split(',');

  let n = (y0 * canv.width + x0) * 4;
  const currentData = [];

  let isCurrentColor = true;

  for (let k = 0; k < 4; k += 1) {
    currentData.push(data[n + k]);

    if (data[n + k] !== +rgb[k]) {
      isCurrentColor = false;
    }
  }

  if (isCurrentColor) {
    return;
  }

  function check(d = 0) {
    let isSame = true;

    for (let k = 0; k < 4; k += 1) {
      if (data[n + k + d] !== currentData[k]) {
        isSame = false;
        break;
      }
    }

    return isSame;
  }

  let newPixel;

  function setColor() {
    while (stack.length > 0) {
      newPixel = stack.shift();
      const { x } = newPixel;
      let { y } = newPixel;

      n = (y * canv.width + x) * 4;
      while (y >= 0 && check()) {
        n -= canv.width * 4;
        y -= 1;
      }
      n += canv.width * 4;
      y += 1;

      let isLeft = false;
      let isRight = false;
      while (y < canv.height && check()) {
        for (let k = 0; k < 4; k += 1) {
          data[n + k] = +rgb[k];
        }

        if (x > 0) {
          if (check(-4)) {
            if (!isLeft) {
              stack.push({ x: x - 1, y });
              isLeft = true;
            }
          } else if (isLeft) {
            isLeft = false;
          }
        }

        if (x < canv.width - 1) {
          if (check(4)) {
            if (!isRight) {
              stack.push({ x: x + 1, y });
              isRight = true;
            }
          } else if (isRight) {
            isRight = false;
          }
        }

        n += canv.width * 4;
        y += 1;
      }
    }
  }
  setColor();

  const ctx = canv.getContext('2d');
  ctx.putImageData(imgData, 0, 0);
}
