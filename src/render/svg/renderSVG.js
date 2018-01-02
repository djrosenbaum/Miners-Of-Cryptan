import generateSVG from './generateSVG';
import appendSVG from './appendSVG';

function renderSVG() {
  appendSVG(generateSVG());
}

export default renderSVG;
