/**
 * Renderer
 */
export class Renderer {

    /**
     * Instance of app
     */
    private static instance: Renderer

    /**
     * Creates an instance of renderer.
     */
    private constructor() {
        console.log('Renderer initialized');
    }

    /**
     * Gets instance
     * @returns instance 
     */
    public static getInstance(): Renderer {
        if (!Renderer.instance) {
            Renderer.instance = new Renderer();
        }

        return Renderer.instance;
    }

    /**
     * Renders main
     * @param appRoot 
     */
    public renderMain(appRoot: HTMLDivElement):void {
        const appNavigation = document.createElement('div');
        const navigation = document.createElement('nav');
        const optionMain = document.createElement('button');
        const appBody = document.createElement('div');

        appNavigation.classList.add('app-navigation');  
        appBody.classList.add('app-body');
        optionMain.classList.add('app-navigation__option-main');

        appNavigation.appendChild(navigation);
        appRoot.appendChild(appNavigation);
        appRoot.appendChild(appBody);
    }
}