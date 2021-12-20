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
     * Info instance of renderer
     */
    private info;
    /**
     * Creates an instance of renderer.
     */
    private constructor();
    /**
     * Gets instance
     * @returns instance
     */
    static getInstance(target: HTMLDivElement): Renderer;
    /**
     * Renders navigation
     * @param appRoot
     */
    private renderNavigation;
    /**
     * Renders footer
     */
    private renderFooter;
    /**
     * Renders main
     * @param appRoot
     */
    private renderMainPage;
    /**
     * Renders check page
     * @param appRoot
     */
    renderCheckPage(appRoot: HTMLDivElement): void;
    /**
     * Copys to clipboard
     * @param element
     */
    private copyToClipboard;
}
