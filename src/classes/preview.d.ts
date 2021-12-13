import CodeMirror from "codemirror";
/**
 * Preview
 */
export declare class Preview {
    /**
     * Status of preview
     */
    private status;
    /**
     * Window of preview
     */
    private window;
    /**
     * Instance of preview
     */
    private static instance;
    /**
     * Template of preview
     */
    private editor;
    /**
     * Close of preview
     */
    private close;
    /**
     * Creates an instance of preview.
     */
    constructor(editor: CodeMirror.Editor);
    /**
     * Gets instance
     * @returns instance
     */
    static getInstance(editor: CodeMirror.Editor): Preview;
    /**
     * Gets status
     * @returns true if status
     */
    getStatus(): boolean;
    /**
     * Sets status
     * @param status
     */
    setStatus(status: boolean): void;
    /**
     * Registers events
     */
    private registerEvents;
    /**
     * Renders preview
     */
    private renderPreview;
    /**
     * Parses svg
     * @param svg
     * @returns svg
     */
    private parseSVG;
    /**
     * Renders window
     */
    private renderWindow;
    /**
     * Removes window
     */
    private removeWindow;
}
