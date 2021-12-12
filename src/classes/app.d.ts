/**
 * App
 */
export declare class App {
    /**
     * Instance of app
     */
    private static instance;
    id: string;
    /**
     * App target of app
     */
    private appTarget;
    /**
     * Creates an instance of app.
     */
    private constructor();
    /**
     * Gets instance
     * @returns instance
     */
    static getInstance(): App;
    /**
     * Runs app
     * @returns run
     */
    run(): Promise<void>;
}
