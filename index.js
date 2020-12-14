export function htmlToElement(html) {
    var htmlString = html;
    var template = document.createElement('template');
    htmlString = htmlString.trim();
    template.innerHTML = htmlString;
    return template.content.firstChild;
}
export function generateBase64(svg) {
    var svgElement = htmlToElement(svg);
    if (!svgElement) {
        throw new Error('Invalid svg');
    }
    var serialize = new XMLSerializer().serializeToString(svgElement);
    var encodedData = window.btoa(serialize);
    return "data:image/svg+xml;base64," + encodedData;
}
export function replaceCount(svg, count) {
    return svg.replace('{{count}}', count.toString());
}
export function scrollTitle(text, time) {
    if (time === void 0) { time = 500; }
    document.title = text;
    setTimeout(function () {
        scrollTitle("" + text.substr(1) + text.substr(0, 1));
    }, time);
}
export function titleCount(count, titleText) {
    var documentTitle = titleText || document.title;
    document.title = "(" + count + ") " + documentTitle;
}
export function incrementTitle(initialCount, titleText) {
    var count = initialCount || 0;
    var documentTitle = titleText || document.title;
    return function (decrement) {
        if (decrement === void 0) { decrement = false; }
        var factor = decrement ? -1 : 1;
        count += factor;
        titleCount(count, documentTitle);
    };
}
export function svgFavicon(svg) {
    if (typeof window === 'undefined') {
        return;
    }
    var link = window.document.querySelector("link[rel*='icon']")
        || window.document.createElement('link');
    link.type = 'image/svg+xml';
    link.rel = 'shortcut icon';
    link.href = generateBase64(svg);
    window.document.getElementsByTagName('head')[0].appendChild(link);
}
export function svgFaviconCounter(svg, initialCount) {
    var faviconSvg = svg;
    if (!svg) {
        throw new Error('No svg provided');
    }
    var count = initialCount || 0;
    return function (updatedCount, decrement, svgString) {
        if (decrement === void 0) { decrement = false; }
        var factor = decrement ? -1 : 1;
        if (svgString) {
            faviconSvg = svgString;
        }
        if (updatedCount) {
            count = updatedCount;
        }
        count += factor;
        var svgWithCount = faviconSvg.replace('{{count}}', count.toString());
        svgFavicon(svgWithCount);
    };
}
