/* eslint-disable no-param-reassign */
const fullScreenRequest = previewContainerWrapper => () => {
  if (document.fullscreen) {
    document.exitFullscreen();
  } else {
    previewContainerWrapper.requestFullscreen();
  }
};

const changeFps = context => () => {
  if (context.range.value === '0') {
    context.isAnimation = false;
    context.fpsValue.innerText = 0;
    return;
  }
  context.isAnimation = true;

  context.FPS = +context.range.value;
  context.fpsValue.innerText = context.FPS;
  context.animationInterval = 1000 / context.FPS;

  context.animateFrames(context.animationInterval);
};

export {
  fullScreenRequest,
  changeFps,
};
