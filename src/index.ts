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

export function rollingTitle(text: string, time: number = 500) {
  document.title = text;
  setTimeout(() => {
    rollingTitle(`${text.substr(1)}${text.substr(0, 1)}`);
  }, time);
}

export function setTitleCount(count: string | number, titleText?: string) {
  const documentTitle = titleText || document.title;
  document.title = `(${count}) ${documentTitle}`;
}

export function titleCounter(initialCount?: number, titleText?: string) {
  let count = initialCount || 0;
  const documentTitle = titleText || document.title;
  return (decrement: boolean = false) => {
    const factor = decrement ? -1 : 1;
    count += factor;
    setTitleCount(count, documentTitle);
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
  let faviconSvg = svg;
  if (!svg) {
    throw new Error('No svg provided');
  }
  let count = initialCount || 0;
  return (updatedCount?: number, decrement: boolean = false, svgString?: string) => {
    const factor = decrement ? -1 : 1;
    if (svgString) {
      faviconSvg = svgString;
    }
    if (updatedCount) {
      count = updatedCount;
    }
    count += factor;
    const svgWithCount = faviconSvg.replace('{{count}}', count.toString());
    svgFavicon(svgWithCount);
  };
}
