declare class Template {
    width: number;
    height: number;
    content: SVGElement;
    exportString: string;
    constructor(width: number, height: number, content: SVGElement);
    export(): object;
}
