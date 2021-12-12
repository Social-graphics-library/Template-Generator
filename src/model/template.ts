/**
 * Template
 */
class Template {
    
    /**
     * Width of template
     */
    public width: number;

    /**
     * Height of template
     */
    public height: number;

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
     * @param content 
     */
    constructor(width: number, height: number, name:string, content: string) {
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
            .replace("{templateName}", this.name)
            .replace("{templateWidth}", this.width.toString())
            .replace("{templateHeight}", this.height.toString())
            .replace("{templateContent}", this.content); 
    }

    private parseContent(content: string):string {
        let result = content.replace("{player}", " + playerName + ")
                            .replace("{team}", " + teamName + ");
        return result;
    }
}