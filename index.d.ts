export declare function htmlToElement(html: string): ChildNode | null;
export declare function generateBase64(svg: string): string;
export declare function replaceCount(svg: string, count: number): string;
export declare function scrollTitle(text: string, time?: number): void;
export declare function titleCount(count: string | number, titleText?: string): void;
export declare function incrementTitle(initialCount?: number, titleText?: string): (decrement?: boolean) => void;
export declare function svgFavicon(svg: string): void;
export declare function svgFaviconCounter(svg: string, initialCount?: number): (updatedCount?: number | undefined, decrement?: boolean, svgString?: string | undefined) => void;
