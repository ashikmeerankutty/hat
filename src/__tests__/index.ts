import {
  titleCount, incrementTitle, htmlToElement, svgFavicon,
} from '../index';

describe('tests title operations', () => {
  it('show count', () => {
    document.title = 'Hello';
    titleCount(1);
    expect(document.title).toBe('(1) Hello');
  });

  it('show count with custom text', () => {
    titleCount(1, 'Hello');
    expect(document.title).toBe('(1) Hello');
  });

  it('increment count in title', () => {
    const increment = incrementTitle(0, 'Hello');
    increment();
    expect(document.title).toBe('(1) Hello');
    increment();
    expect(document.title).toBe('(2) Hello');
  });

  it('updates favicon with an svg', () => {
    const svgLogo = `<svg width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M438.675 412.091C434.701 411.821 430.726 411.483 426.752 411.348C421.969 411.078 417.186 410.471 413.346 407.501C395.967 394.271 401.625 380.097 409.776 359.713C410.787 357.148 412.403 353.706 414.155 350.128C414.155 350.061 414.155 349.993 414.222 349.993C415.57 347.158 417.052 344.391 418.533 341.624C436.317 314.422 447.702 283.306 451.407 250.773C451.541 249.828 451.609 248.95 451.676 248.005C451.811 246.588 451.945 245.17 452.08 243.753C454.236 217.361 451.339 190.295 442.717 163.769C435.442 141.225 424.664 120.571 411.056 102.481C408.968 99.7141 406.812 96.9467 404.589 94.3143C401.625 90.7369 398.459 87.2271 395.293 83.8522C392.464 80.9499 389.635 78.0475 386.603 75.2801C384.111 72.9852 381.618 70.6903 378.991 68.5304C376.364 66.303 373.67 64.1431 370.975 62.1182C364.104 56.8534 356.829 52.0611 349.352 47.7413L349.217 47.6738C346.118 45.8514 343.087 44.1639 339.853 42.6115C338.304 41.8016 336.687 41.0591 335.071 40.2491C333.858 39.7092 332.713 39.1691 331.568 38.6292C330.49 38.1567 329.412 37.6842 328.334 37.2117C328.065 37.0767 327.796 37.0093 327.526 36.8743C326.381 36.4018 325.236 35.9293 324.091 35.4568C307.385 28.6396 289.601 23.9823 271.009 21.6199C262.386 20.4725 253.764 20 245.141 20C243.12 20 241.167 20 239.146 20C196.37 21.3499 154.807 35.9968 120.587 61.7807C119.038 63.0631 117.488 64.2781 116.006 65.5605C70.2669 102.279 42.0418 157.019 38.4716 215.202C38.4042 216.619 38.3368 218.036 38.2694 219.386C38.202 220.736 38.1348 222.154 38.1348 223.571C38 224.584 38 225.731 38 226.879V228.836C38 230.186 38 231.536 38.0673 232.886C38.0673 234.506 38.1347 236.261 38.2694 237.881C38.4041 241.255 38.741 244.63 39.0104 248.005C39.0104 248.073 39.0104 248.208 39.0104 248.275C40.6271 264.407 44.1301 280.674 49.7212 296.671C60.9708 328.664 79.3609 356.203 102.399 378.072C103.746 379.355 105.094 380.637 106.508 381.852C106.71 382.054 106.912 382.189 107.114 382.392L107.047 382.324C106.239 380.839 105.43 379.22 104.824 377.532C99.1656 361.333 107.788 344.189 123.955 338.519C127.525 337.236 131.028 336.696 134.531 336.696C135.272 336.561 136.013 336.359 136.821 336.291C141.335 335.819 147.802 334.334 149.284 329.204C150.092 326.369 149.553 323.399 148.677 320.632C145.781 311.587 139.516 304.365 134.598 296.468C129.614 288.503 125.572 279.999 122.406 271.157C98.4919 203.187 134.262 128.468 202.029 104.574C223.248 97.0817 245.343 95.1242 267.438 98.9716C310.214 106.396 346.859 134.948 364.441 174.771C395.428 245.035 359.591 325.897 288.59 351.006C284.953 352.288 281.248 353.436 277.543 354.381C260.837 358.633 243.322 359.578 226.279 357.013C218.129 355.798 210.045 353.976 202.366 351.006C194.686 348.036 187.074 344.526 179.058 342.771C175.623 342.029 172.052 341.624 168.752 342.906C162.891 345.201 162.621 354.043 163.228 359.24C163.295 359.51 163.228 359.713 163.295 359.983C166.798 375.17 159.253 391.301 144.299 396.634C137.967 398.861 131.365 398.861 125.37 397.106C126.515 397.916 127.66 398.726 128.873 399.536C131.365 401.224 133.858 402.844 136.417 404.396C137.495 405.071 138.506 405.678 139.583 406.353C139.853 406.556 140.19 406.691 140.459 406.893C141.267 407.433 142.143 407.906 143.019 408.378C143.76 408.851 144.568 409.256 145.377 409.728C145.848 409.998 146.32 410.268 146.791 410.471C147.869 411.078 148.947 411.618 150.025 412.158C151.911 413.171 153.864 414.116 155.75 415.06C162.554 418.368 169.493 421.203 176.498 423.7C179.395 424.78 182.359 425.725 185.255 426.602C188.893 427.75 192.598 428.762 196.303 429.64C197.65 429.91 198.93 430.315 200.277 430.585C202.366 431.057 204.454 431.462 206.542 431.867C207.822 432.137 209.169 432.34 210.517 432.61C211.19 432.745 211.864 432.812 212.605 432.947C214.289 433.217 215.973 433.487 217.724 433.69C217.792 433.69 217.859 433.69 217.927 433.69C231.669 435.58 245.68 436.052 259.759 435.107C261.308 434.972 262.858 434.905 264.407 434.702C267.506 434.432 270.604 434.027 273.77 433.622C289.331 431.462 304.892 427.48 320.184 421.54C324.158 420.055 327.998 418.368 331.77 416.613C332.713 416.14 333.656 415.735 334.599 415.398C335.205 415.128 335.812 414.79 336.418 414.521C341.133 413.103 345.714 411.888 348.948 411.213C370.369 406.623 385.256 403.383 395.293 422.89C399.268 430.382 396.304 440.642 395.495 448.674C394.62 459.136 397.786 469.531 404.724 477.833C419.881 495.855 447.836 497.069 464.408 479.25C477.005 465.751 478.554 444.692 468.045 429.437C460.905 418.975 449.925 413.103 438.675 412.091Z" fill="white"/>
    </svg>`;
    svgFavicon(svgLogo);
    const link = window.document.querySelector("link[rel*='icon']");
    expect(link).toBeTruthy();
  });
});

describe('test utility functions', () => {
  it('create an html element from an html string', () => {
    const htmlElement = htmlToElement('<div>Hello</div>');
    expect(htmlElement).toBeInstanceOf(Node);
  });

  it('converts svg string to svg element', () => {
    const htmlElement = htmlToElement(`<svg width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M438.675 412.091C434.701 411.821 430.726 411.483 426.752 411.348C421.969 411.078 417.186 410.471 413.346 407.501C395.967 394.271 401.625 380.097 409.776 359.713C410.787 357.148 412.403 353.706 414.155 350.128C414.155 350.061 414.155 349.993 414.222 349.993C415.57 347.158 417.052 344.391 418.533 341.624C436.317 314.422 447.702 283.306 451.407 250.773C451.541 249.828 451.609 248.95 451.676 248.005C451.811 246.588 451.945 245.17 452.08 243.753C454.236 217.361 451.339 190.295 442.717 163.769C435.442 141.225 424.664 120.571 411.056 102.481C408.968 99.7141 406.812 96.9467 404.589 94.3143C401.625 90.7369 398.459 87.2271 395.293 83.8522C392.464 80.9499 389.635 78.0475 386.603 75.2801C384.111 72.9852 381.618 70.6903 378.991 68.5304C376.364 66.303 373.67 64.1431 370.975 62.1182C364.104 56.8534 356.829 52.0611 349.352 47.7413L349.217 47.6738C346.118 45.8514 343.087 44.1639 339.853 42.6115C338.304 41.8016 336.687 41.0591 335.071 40.2491C333.858 39.7092 332.713 39.1691 331.568 38.6292C330.49 38.1567 329.412 37.6842 328.334 37.2117C328.065 37.0767 327.796 37.0093 327.526 36.8743C326.381 36.4018 325.236 35.9293 324.091 35.4568C307.385 28.6396 289.601 23.9823 271.009 21.6199C262.386 20.4725 253.764 20 245.141 20C243.12 20 241.167 20 239.146 20C196.37 21.3499 154.807 35.9968 120.587 61.7807C119.038 63.0631 117.488 64.2781 116.006 65.5605C70.2669 102.279 42.0418 157.019 38.4716 215.202C38.4042 216.619 38.3368 218.036 38.2694 219.386C38.202 220.736 38.1348 222.154 38.1348 223.571C38 224.584 38 225.731 38 226.879V228.836C38 230.186 38 231.536 38.0673 232.886C38.0673 234.506 38.1347 236.261 38.2694 237.881C38.4041 241.255 38.741 244.63 39.0104 248.005C39.0104 248.073 39.0104 248.208 39.0104 248.275C40.6271 264.407 44.1301 280.674 49.7212 296.671C60.9708 328.664 79.3609 356.203 102.399 378.072C103.746 379.355 105.094 380.637 106.508 381.852C106.71 382.054 106.912 382.189 107.114 382.392L107.047 382.324C106.239 380.839 105.43 379.22 104.824 377.532C99.1656 361.333 107.788 344.189 123.955 338.519C127.525 337.236 131.028 336.696 134.531 336.696C135.272 336.561 136.013 336.359 136.821 336.291C141.335 335.819 147.802 334.334 149.284 329.204C150.092 326.369 149.553 323.399 148.677 320.632C145.781 311.587 139.516 304.365 134.598 296.468C129.614 288.503 125.572 279.999 122.406 271.157C98.4919 203.187 134.262 128.468 202.029 104.574C223.248 97.0817 245.343 95.1242 267.438 98.9716C310.214 106.396 346.859 134.948 364.441 174.771C395.428 245.035 359.591 325.897 288.59 351.006C284.953 352.288 281.248 353.436 277.543 354.381C260.837 358.633 243.322 359.578 226.279 357.013C218.129 355.798 210.045 353.976 202.366 351.006C194.686 348.036 187.074 344.526 179.058 342.771C175.623 342.029 172.052 341.624 168.752 342.906C162.891 345.201 162.621 354.043 163.228 359.24C163.295 359.51 163.228 359.713 163.295 359.983C166.798 375.17 159.253 391.301 144.299 396.634C137.967 398.861 131.365 398.861 125.37 397.106C126.515 397.916 127.66 398.726 128.873 399.536C131.365 401.224 133.858 402.844 136.417 404.396C137.495 405.071 138.506 405.678 139.583 406.353C139.853 406.556 140.19 406.691 140.459 406.893C141.267 407.433 142.143 407.906 143.019 408.378C143.76 408.851 144.568 409.256 145.377 409.728C145.848 409.998 146.32 410.268 146.791 410.471C147.869 411.078 148.947 411.618 150.025 412.158C151.911 413.171 153.864 414.116 155.75 415.06C162.554 418.368 169.493 421.203 176.498 423.7C179.395 424.78 182.359 425.725 185.255 426.602C188.893 427.75 192.598 428.762 196.303 429.64C197.65 429.91 198.93 430.315 200.277 430.585C202.366 431.057 204.454 431.462 206.542 431.867C207.822 432.137 209.169 432.34 210.517 432.61C211.19 432.745 211.864 432.812 212.605 432.947C214.289 433.217 215.973 433.487 217.724 433.69C217.792 433.69 217.859 433.69 217.927 433.69C231.669 435.58 245.68 436.052 259.759 435.107C261.308 434.972 262.858 434.905 264.407 434.702C267.506 434.432 270.604 434.027 273.77 433.622C289.331 431.462 304.892 427.48 320.184 421.54C324.158 420.055 327.998 418.368 331.77 416.613C332.713 416.14 333.656 415.735 334.599 415.398C335.205 415.128 335.812 414.79 336.418 414.521C341.133 413.103 345.714 411.888 348.948 411.213C370.369 406.623 385.256 403.383 395.293 422.89C399.268 430.382 396.304 440.642 395.495 448.674C394.62 459.136 397.786 469.531 404.724 477.833C419.881 495.855 447.836 497.069 464.408 479.25C477.005 465.751 478.554 444.692 468.045 429.437C460.905 418.975 449.925 413.103 438.675 412.091Z" fill="white"/>
    </svg>`);
    expect(htmlElement).toBeInstanceOf(Node);
  });
});