/**
 * Template
 */
export class Template {
    
    /**
     * Width of template
     */
    public width: string;

    /**
     * Height of template
     */
    public height: string;

    /**
     * Name of template
     */
    public name: string;

    /**
     * Content  of template
     */
    public content: string;

    /**
     * Export string of template
     */
    public exportString: string;

    /**
     * Template raw string of template
     */
    private templateRawString: string = `export class {templateName} {

    static readonly width: number = {templateWidth};

    static readonly height: number = {templateHeight};

    static template(teamName: string, playerName: string): string {
        teamName;
        playerName;
        return '{templateContent}';
        }
    }`;

    /**
     * Creates an instance of template.
     * @param width
     * @param height
     * @param name
     * @param content
     */
    constructor(width: string, height: string, name:string, content: string) {
        this.width = width;
        this.height = height;
        this.name = name;
        this.content = this.parseContent(content);
        this.exportString = "";
        this.parseTemplate();
    }

    /**
     * Parses template
     */
    private parseTemplate(): void {
        this.exportString = this.templateRawString
            .replace("{templateName}", this.name + "-template")
            .replace("{templateWidth}", this.width.toString())
            .replace("{templateHeight}", this.height.toString())
            .replace("{templateContent}", this.content);
    }

    /**
     * Parses content
     * @param content
     * @returns content
     */
    private parseContent(content: string):string {
        let result = content.replace("{player}", "' + playerName + '")
                            .replace("{team}", "' + teamName + '");
        return result;
    }
}