import {
  titleCount, incrementTitle, scrollTitle, svgFavicon,
} from '../dist';

/**
 * Increment title count
 */
const increment = incrementTitle(100, 'Hello');
const incrementButton = document.getElementById('increment');
incrementButton.addEventListener('click', increment);

/**
 * set title count
 */
const countButton = document.getElementById('count');
countButton.addEventListener('click', () => {
  titleCount(100, 'Hello');
});

/**
 * Rolling title count
 */
const rollingButton = document.getElementById('rolling');
rollingButton.addEventListener('click', () => {
  scrollTitle('Hello World ', 500);
});

/**
 * SVG Favicon
 */

const svgFaviconButton = document.getElementById('svgFavicon');
svgFaviconButton.addEventListener('click', () => {
  const svgContent = document.getElementById('svgInput').value;
  svgFavicon(svgContent);
});
