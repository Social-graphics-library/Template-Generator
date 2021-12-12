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
        const svgDropZone = document.createElement('input');
        const widthInput = document.createElement('input');
        const heightInput = document.createElement('input');
        const editor = document.createElement('div');
        const submitDrop = document.createElement('button');
        const saveButton = document.createElement('button');
        const infoBox = document.createElement('div');
        const breakText = document.createElement('br');
        const infoBoxText = document.createElement('p');
        const infoBoxText1= document.createElement('code');
        const infoBoxText2= document.createElement('code');

        appNavigation.classList.add('app-navigation');  
        appBody.classList.add('app-body');
        optionMain.classList.add('app-navigation__option-main');
        optionMain.classList.add('nav-item');
        optionMain.classList.add('btn');
        optionMain.innerHTML = 'Generate new template';
        svgDropZone.type = 'file';
        svgDropZone.accept = 'image/svg+xml';
        svgDropZone.classList.add('app-body__svg-drop-zone');
        svgDropZone.classList.add('form-control');
        svgDropZone.id = 'svg-drop-zone';
        svgDropZone.setAttribute('aria-describedby', 'file-drop-zone');
        svgDropZone.setAttribute('aria-label', 'Drop SVG file here');
        svgDropZone.setAttribute('aria-live', 'polite');
        svgDropZone.setAttribute('aria-valuetext', 'Drop SVG file here');
        svgDropZone.setAttribute('aria-valuenow', '0');
        svgDropZone.setAttribute('aria-valuemin', '0');
        svgDropZone.setAttribute('aria-valuemax', '1');
        widthInput.type = 'number';
        widthInput.classList.add('app-body__width-input');
        widthInput.classList.add('form-control');
        widthInput.placeholder = 'Width';
        heightInput.type = 'number';
        heightInput.classList.add('app-body__height-input');
        heightInput.classList.add('form-control');
        heightInput.placeholder = 'Height';
        editor.classList.add('app-body__editor');
        editor.id = 'editor';
        submitDrop.classList.add('app-body__submit-drop');
        submitDrop.classList.add('btn');
        submitDrop.classList.add('btn-primary');
        submitDrop.innerHTML = 'Submit';
        submitDrop.id = 'submit-drop';
        saveButton.classList.add('app-body__save-button');
        saveButton.classList.add('btn');
        saveButton.classList.add('btn-success');
        saveButton.innerHTML = 'Save';
        saveButton.id = 'save-button';
        infoBox.classList.add('app-body__info-box');
        infoBox.id = 'info-box';
        infoBoxText.classList.add('app-body__info-box-text');
        infoBoxText.id = 'info-box-text';
        infoBoxText.innerHTML = '';
        infoBoxText1.classList.add('app-body__info-box-text-1');
        infoBoxText1.id = 'info-box-text-1';
        infoBoxText1.innerHTML = 'Key for the player name:          {player}';
        infoBoxText2.classList.add('app-body__info-box-text-2');
        infoBoxText2.id = 'info-box-text-2';
        infoBoxText2.innerHTML = 'Key for the team name (optional): {team}';

        navigation.appendChild(optionMain);

        infoBoxText.appendChild(infoBoxText1);
        infoBoxText.appendChild(breakText);
        infoBoxText.appendChild(infoBoxText2);
        infoBox.appendChild(infoBoxText);

        appBody.appendChild(svgDropZone);
        appBody.appendChild(submitDrop);
        appBody.appendChild(infoBox);
        appBody.appendChild(editor);
        appBody.appendChild(widthInput);
        appBody.appendChild(heightInput);
        appBody.appendChild(saveButton);
        appNavigation.appendChild(navigation);
        appRoot.appendChild(appNavigation);
        appRoot.appendChild(appBody);
    }
}