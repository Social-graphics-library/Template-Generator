/**
 * Renderer
 */
export declare class Renderer {
    /**
     * Instance of app
     */
    private static instance;
    /**
     * Alert handler of renderer
     */
    private alertHandler;
    /**
     * Creates an instance of renderer.
     */
    private constructor();
    /**
     * Gets instance
     * @returns instance
     */
    static getInstance(): Renderer;
    /**
     * Renders main
     * @param appRoot
     */
    renderMain(appRoot: HTMLDivElement): void;
    /**
     * Copys to clipboard
     * @param element
     */
    private copyToClipboard;
}
