export default function (selector) {
  const canv = document.querySelector(selector);
  const ctx = canv.getContext('2d');
  return {
    canv,
    ctx,
  };
}
