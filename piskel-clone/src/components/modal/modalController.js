import eventForApper from './eventForAppear';
import eventForDisapper from './eventForDisappear';

export default function ModalController() {
  document.querySelector('.hot-keys').addEventListener('click', eventForApper);
  document.querySelector('.modal_cross').addEventListener('click', eventForDisapper);
}
