import componentToHex from './componentToHex';

export default function (r, g, b) {
  return `#${componentToHex(r)}${componentToHex(g)}${componentToHex(b)}`;
}
