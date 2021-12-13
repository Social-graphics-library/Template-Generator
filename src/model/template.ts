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
     * Template raw string type script of template
     */
    private templateRawStringTypeScript: string = `export class {templateName} {

    static readonly width: number = {templateWidth};

    static readonly height: number = {templateHeight};

    static template(teamName: string, playerName: string): string {
        teamName;
        playerName;
        return '{templateContent}';
        }
    }`;

    private templateRawStringJavascript: string = `export class {templateName} {
        static template(teamName, playerName) {
            teamName;
            playerName;
            return '{templateContent}';
        }
    }
    /**
     * Width  of example template
     */
    Example_Template.width = {templateWidth};
    /**
     * Height  of example template
     */
    Example_Template.height = {templateHeight};`;

    /**
     * Creates an instance of template.
     * @param width 
     * @param height 
     * @param name 
     * @param content 
     */
    constructor(width: string, height: string, name: string, content: string) {
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
        const mode = <HTMLSelectElement>document.getElementById("export-mode-select");

        switch (mode.value) {
            case "typescript":
                this.exportString = this.templateRawStringTypeScript
                    .replace("{templateName}", this.name + "-template")
                    .replace("{templateWidth}", this.width.toString())
                    .replace("{templateHeight}", this.height.toString())
                    .replace("{templateContent}", this.content);
                break;

            case "javascript":
                this.exportString = this.templateRawStringJavascript
                    .replace("{templateName}", this.name + "-template")
                    .replace("{templateWidth}", this.width.toString())
                    .replace("{templateHeight}", this.height.toString())
                    .replace("{templateContent}", this.content);
                break;
        
            default:
                
                console.log("Error: Unknown export mode");
                break;
        }
    }

    /**
     * Parses content
     * @param content 
     * @returns content 
     */
    private parseContent(content: string): string {
        let result = content.replace("{player}", "' + playerName + '")
            .replace("{team}", "' + teamName + '");
        return result;
    }
}