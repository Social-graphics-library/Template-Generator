import { Editor } from "./editor";
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
        render.renderMain(target);
        const editor = Editor.getInstance();
        editor;
    }
}