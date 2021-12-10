/**
 * App
 */
export class App {

    /**
     * Instance of app
     */
    private static instance: App

    /**
     * App target of app
     */
    private appTarget: HTMLDivElement = <HTMLDivElement>document.getElementById('app');

    /**
     * Creates an instance of app.
     */
    private constructor() {
        console.log('App initialized');
    }

    /**
     * Gets instance
     * @returns instance 
     */
    public static getInstance(): App {
        if (!App.instance) {
            App.instance = new App();
        }

        return App.instance;
    }

    /**
     * Runs app
     * @returns run 
     */
    public async run(): Promise<void> {
        const target = this.appTarget;
        console.log('App running');
        target.innerHTML = '<h1>App running</h1>';
    }
}