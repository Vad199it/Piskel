import Frames from '../frames';
import Tools from '../tools';
import Layers from '../layers-list';
import Preview from '../preview';

import renderFrames from '../templates/frames.template';
import renderTools from '../templates/tools.template';
import renderPreview from '../preview/preview.template';
import renderLayers from '../templates/layers.template';
import mainStructure from '../structure/mainStructure';
import modalController from '../modal/modalController';
import saveSession from '../session/storage';

export default function renderPage() {
  mainStructure.render();
  renderTools();
  renderFrames();
  renderPreview();
  renderLayers();
  saveSession();
  modalController();
  const frames = new Frames();

  const layers = new Layers(frames);
  layers.addEvents();

  frames.addEvents();

  const tools = new Tools(frames);
  tools.addEvents();

  const preview = new Preview(frames);
  preview.addEvents();
}
