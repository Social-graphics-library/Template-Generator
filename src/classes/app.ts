import { Guid } from "./guid";
import { Renderer } from "./renderer";

/**
 * App
 */
export class App {

    /**
     * Instance of app
     */
    private static instance: App

    /**
     * Id  of app
     */
    public id: string

    /**
     * App target of app
     */
    private appTarget: HTMLDivElement = <HTMLDivElement>document.getElementById('app');

    /**
     * Creates an instance of app.
     */
    private constructor() {
        this.id = Guid.newGuid();
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
        const render = Renderer.getInstance();
        console.log('App running');
        render.renderMainPage(target);
    }
}