export function htmlToElement(html: string) {
  let htmlString = html;
  const template = document.createElement('template');
  htmlString = htmlString.trim();
  template.innerHTML = htmlString;
  return template.content.firstChild;
}

export function generateBase64(svg: string) {
  const svgElement = htmlToElement(svg);
  if (!svgElement) {
    throw new Error('Invalid svg');
  }
  const serialize = new XMLSerializer().serializeToString(svgElement);
  const encodedData = window.btoa(serialize);
  return `data:image/svg+xml;base64,${encodedData}`;
}

export function replaceCount(svg: string, count: number) {
  return svg.replace('{{count}}', count.toString());
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
  link.href = generateBase64(svg);
  window.document.getElementsByTagName('head')[0].appendChild(link);
}

export function svgFaviconCounter(svg: string, initialCount?: number) {
  if (!svg) {
    throw new Error('No svg provided');
  }
  let count = initialCount || 0;
  return () => {
    count += 1;
    const svgWithCount = svg.replace('{{count}}', count.toString());
    svgFavicon(svgWithCount);
  };
}
