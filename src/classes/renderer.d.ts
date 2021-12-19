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
     * Sgl instance of renderer
     */
    private sgl;
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
     * Renders navigation
     * @param appRoot
     */
    private renderNavigation;
    /**
     * Renders main
     * @param appRoot
     */
    renderMainPage(appRoot: HTMLDivElement): void;
    renderCheckPage(appRoot: HTMLDivElement): void;
    /**
     * Copys to clipboard
     * @param element
     */
    private copyToClipboard;
}
