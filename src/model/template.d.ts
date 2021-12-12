/**
 * Template
 */
export declare class Template {
    /**
     * Width of template
     */
    width: string;
    /**
     * Height of template
     */
    height: string;
    /**
     * Name of template
     */
    name: string;
    /**
     * Content  of template
     */
    content: string;
    /**
     * Export string of template
     */
    exportString: string;
    /**
     * Template raw string of template
     */
    private templateRawString;
    /**
     * Creates an instance of template.
     * @param width
     * @param height
     * @param name
     * @param content
     */
    constructor(width: string, height: string, name: string, content: string);
    /**
     * Parses template
     */
    private parseTemplate;
    /**
     * Parses content
     * @param content
     * @returns content
     */
    private parseContent;
}
