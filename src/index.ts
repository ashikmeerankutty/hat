export function generateBase64(svg: Node) {
  const serialize = new XMLSerializer().serializeToString(svg);
  const encodedData = window.btoa(serialize);
  return `data:image/svg+xml;base64,${encodedData}`;
}

export function htmlToElement(html: string) {
  let htmlString = html;
  const template = document.createElement('template');
  htmlString = htmlString.trim();
  template.innerHTML = htmlString;
  return template.content.firstChild;
}

export function scrollTitle(text: string, time: number = 500) {
  document.title = text;
  setTimeout(() => {
    scrollTitle(`${text.substr(1)}${text.substr(0, 1)}`);
  }, time);
}

export function titleCount(count: string | number, titleText?: string) {
  const documentTitle = titleText || document.title;
  document.title = `(${count}) ${documentTitle}`;
}

export function incrementTitle(initialCount?: number, titleText?: string) {
  let count = initialCount || 0;
  const documentTitle = titleText || document.title;
  return () => {
    count += 1;
    titleCount(count, documentTitle);
  };
}

export function svgFavicon(svg: string) {
  if (typeof window === 'undefined') {
    return;
  }
  const link: HTMLLinkElement = window.document.querySelector("link[rel*='icon']")
    || window.document.createElement('link');
  link.type = 'image/svg+xml';
  link.rel = 'shortcut icon';
  const svgElement = htmlToElement(svg);
  if (svgElement) {
    link.href = generateBase64(svgElement);
    window.document.getElementsByTagName('head')[0].appendChild(link);
  } else {
    throw new Error('Invalid svg');
  }
}
