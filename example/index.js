// eslint-disable-next-line import/no-extraneous-dependencies
import { render, Component } from 'inferno';
import {
  titleCount, incrementTitle,
  scrollTitle, svgFavicon, generateBase64, replaceCount, svgFaviconCounter,
} from '../dist';
import Logo from './logo.svg';

const svgString = '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"><path style="fill:#7DD2F0;" d="M256.001,503.563c-66.127,0-128.294-25.751-175.053-72.51c-46.759-46.758-72.51-108.927-72.51-175.052S34.188,127.705,80.946,80.947c46.76-46.759,108.927-72.51,175.055-72.51c66.126,0,128.294,25.751,175.052,72.51c46.759,46.759,72.51,108.927,72.51,175.053s-25.752,128.294-72.51,175.053S322.126,503.563,256.001,503.563z M256.001,75.937c-99.288,0-180.064,80.776-180.064,180.064s80.776,180.063,180.064,180.063s180.064-80.776,180.064-180.063S355.287,75.937,256.001,75.937z"/><g style="opacity:0.1;"><path d="M125.946,431.053c-46.758-46.758-72.509-108.927-72.509-175.053s25.751-128.294,72.509-175.052c41.414-41.414,94.92-66.331,152.554-71.491c-7.438-0.666-14.941-1.019-22.5-1.019c-66.127,0-128.294,25.751-175.053,72.51C34.188,127.705,8.437,189.874,8.437,255.999s25.751,128.296,72.509,175.053c46.759,46.758,108.927,72.51,175.053,72.51c7.559,0,15.061-0.353,22.51.019C220.865,497.384,167.361,472.467,125.946,431.053z"/></g><path d="M256.001,512c-68.379,0-132.667-26.628-181.02-74.981C26.628,388.668,0,324.381,0,256.001c0-60.137,21.205-118.499,59.705-164.336c2.997-3.57,8.32-4.032,11.8881.034c3.567,2.997,4.031,8.319,1.034,11.887c-36.473,43.422-55.752,96.494-55.752,153.483c0,63.872,24.872,123.922,70.038,169.086c45.165,45.165,105.215,70.038,169.088,70.038s123.922-24.873,169.086-70.038c45.165-45.165,70.039-105.214,70.039-169.086c0-63.873-24.873-123.923-70.038-169.086c-45.166-45.166-105.215-70.039-169.088-70.039c-59.686,0-116.788,22.064-160.791,62.127c-3.444,3.138-8.781,2.888-11.919-0.558c-3.136-3.446-2.887-8.782,0.558-11.919C130.965,23.626,192.104,0,256.001,0c68.379,0,132.667,26.628,181.019,74.981C485.372,123.332,512,187.619,512,256.001c0,68.38-26.628,132.666-74.98,181.019S324.379,512,256.001,512z M256.001,444.501c-103.941,0-188.501-84.561-188.501-188.5S152.06,67.499,256.001,67.499s188.501,84.562,188.501,188.501c0,26.344-5.358,51.852-15.924,75.812c-10.201,23.131-24.736,43.707-43.202,61.158c-3.387,3.199-8.727,3.05-11.928-0.337c-3.201-3.387-3.05-8.727,0.337-11.928c34.72-32.812,53.842-77.1,53.842-124.705c-0.001-94.634-76.992-171.626-171.627-171.626S84.374,161.366,84.374,256.001s76.992,171.627,171.627,171.627c32.779,0,64.665-9.316,92.216-26.94c3.924-2.511,9.144-1.365,11.654,2.56c2.511,3.925,1.366,9.143-2.559,11.654C327.04,434.266,292.007,444.501,256.001,444.501z"/><text x="170" font-size="20em" fill="#7dd2f0" font-weight="900" y="350">{{count}}</text></svg>';

const increment = incrementTitle(0, 'Hello');
const incrementFavicon = svgFaviconCounter(svgString);

class DemoPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      svgString: '<svg fill="white" id="Capa_1" enable-background="new 0 0 512.001 512.001" height="512" viewBox="0 0 512.001 512.001" width="512" xmlns="http://www.w3.org/2000/svg"><g><path d="m129.86 367.176-122.176 29.089c-3.626.864-6.472 3.673-7.381 7.289-.91 3.616.268 7.437 3.055 9.914 69.41 61.693 163.857 98.525 252.642 98.525 29.446 0 59.693-3.995 89.903-11.873 5.344-1.394 8.546-6.855 7.153-12.2-1.393-5.344-6.856-8.547-12.2-7.153-28.563 7.449-57.112 11.226-84.856 11.226-77.809 0-160.29-29.961-224.361-80.873l105.535-25.127h237.652l105.542 25.129c-17.87 14.213-37.279 26.892-57.903 37.811-4.881 2.584-6.743 8.636-4.159 13.517 2.584 4.88 8.635 6.743 13.517 4.159 27.952-14.8 53.798-32.679 76.82-53.142 2.787-2.477 3.964-6.298 3.054-9.914-.909-3.616-3.755-6.425-7.381-7.289l-120.089-28.592-20.086-80.345c-6.048-24.189-20.802-45.126-41.545-58.955l-36.088-24.059c-9.191-6.131-11.68-18.538-5.548-27.734l29.721-44.582c10.536-15.809 8.433-37.034-4.991-50.458l-73.972-74.16c-8.046-8.039-20.102-9.671-29.999-4.066-9.895 5.605-14.689 16.784-11.93 27.816.087.349.193.692.317 1.029l22.185 60.254c1.49 6.637-.545 13.693-5.372 18.52l-35.98 35.98c-9.883 9.883-13.914 24.44-10.521 37.986l19.44 77.77c3.409 13.636.894 28.164-6.899 39.858-9.125 13.689-32.603 48.906-43.099 64.65zm86.14-41.183v40h-61.315l26.667-40zm75 0v40h-55v-40zm62.193 0 10 40h-52.193v-40zm-173.372-145.949c-1.696-6.772.319-14.048 5.261-18.989l35.98-35.981c9.883-9.882 13.914-24.439 10.519-37.99-.087-.347-.192-.689-.316-1.025l-22.161-60.189c-.56-3.059 1.521-4.614 2.475-5.154.995-.564 3.575-1.614 5.992.801l73.969 74.159c6.716 6.717 7.768 17.329 2.501 25.232l-29.719 44.579c-12.262 18.386-7.3 43.203 11.093 55.469l36.09 24.061c16.594 11.063 28.397 27.812 33.236 47.164l3.454 13.815h-154.207c7.374-14.829 9.33-31.949 5.274-48.175z"/><circle cx="386" cy="475.993" r="10"/></g></svg>',
      count: 1,
      svgCount: 0,
      imageString: '',
      svgCountString: svgString,
    };
    this.onSVGChange = this.onSVGChange.bind(this);
    this.onIncrement = this.onIncrement.bind(this);
  }

  onSVGChange(e) {
    const replacedImageString = replaceCount(e.target.value, this.state.svgCount);
    this.setState({
      imageString: generateBase64(replacedImageString),
      svgCountString: e.target.value,
    });
  }

  onIncrement() {
    const replacedImageString = replaceCount(this.state.svgCountString, this.state.svgCount + 1);
    this.setState({
      imageString: generateBase64(replacedImageString),
      svgCount: this.state.svgCount + 1,
    });
    incrementFavicon();
  }

  componentDidMount() {
    const replacedImageString = replaceCount(this.state.svgCountString, this.state.svgCount);
    this.setState({
      imageString: generateBase64(replacedImageString),
    });
  }

  render() {
    return (
      <div className="app">
        <div className="app-heading">
          <img src={Logo} width="100" alt="logo" />
          <h1 className="app-heading__title">HAT</h1>
          <p className="app-heading__description">Dynamic title and svg favicon</p>
        </div>
        <div>
          <h2 className="section-title">Examples</h2>
          <p className="section-description">These will update site title and favicon.</p>
        </div>
        <div className="basic-item">
          <div>
            <h3 className="basic-item__heading">Increment title</h3>
            <p className="basic-item__description">Update the count in site title</p>
          </div>
          <button className="primary-button" onClick={increment}>Increment title</button>
        </div>
        <div className="basic-item">
          <div>
            <h3 className="basic-item__heading">Set custom count on title</h3>
            <p className="basic-item__description">Update the count in site title with a custom value</p>
          </div>
          <div className="basic-input__button">
            <input className="primary-input" defaultValue={this.state.count} onChange={(e) => {
              this.setState({ count: e.target.value });
            }}></input>
            <button className="primary-button" onClick={() => titleCount(this.state.count, 'Hello')}>Set custom count</button>
          </div>
        </div>
        <div className="basic-item">
          <div>
            <h3 className="basic-item__heading">Set rolling text on title</h3>
            <p className="basic-item__description">Update the title with a rolling text</p>
          </div>
          <button className="primary-button" onClick={() => scrollTitle('This is a long scrolling text. ')}>Set rolling title</button>
        </div>
        <div className="basic-item">
          <div>
            <h3 className="basic-item__heading">Dynamic SVG favicon</h3>
            <p className="basic-item__description">Update favicon dynamically with a svg. (Paste your svg to change site favicon).</p>
          </div>
          <textarea className="primary-textarea" rows={10} onChange={(e) => this.setState({ svgString: e.target.value })}>
            {this.state.svgString}</textarea>
          <button className="primary-button" onClick={() => svgFavicon(this.state.svgString)}>Update favicon</button>
        </div>
        <div className="advanced-item">
          <div>
            <h3 className="basic-item__heading">Dynamic SVG favicon with count</h3>
            <p className="basic-item__description">Update favicon count dynamically with a svg. '{'{{count}}'}' in svg will be replaced by the counter value.</p>
          </div>
          <div className="preview">
            <div class="preview-content">
              <textarea className="primary-textarea" rows={30} onInput={this.onSVGChange}>
                {this.state.svgCountString}</textarea>
              <button className="primary-button" onClick={this.onIncrement}>increment</button>
            </div>
            <div className="preview-image">
              <img src={this.state.imageString} />
            </div>
          </div>
        </div>
        <p className="footer">Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a></p>
      </div>
    );
  }
}

render(
  <DemoPage />,
  document.getElementById('app'),
);
