import { AlertHandler } from "./alertHandler";
import $ from 'jquery';
import { SGL } from 'social-graphics-library'
import { Editor } from "./editor";
import { CheckTemplate } from "./checkTemplate";
import { Info } from "../model/info";

/**
 * Renderer
 */
export class Renderer {

    /**
     * Instance of app
     */
    private static instance: Renderer

    /**
     * Alert handler of renderer
     */
    private alertHandler: AlertHandler

    /**
     * Sgl instance of renderer
     */
    private sgl: SGL

    /**
     * Info instance of renderer
     */
    private info: Info

    /**
     * Creates an instance of renderer.
     */
    private constructor(target: HTMLDivElement) {
        this.info = new Info();
        this.sgl = new SGL();
        this.renderNavigation(target);
        this.renderMainPage(target);
        this.renderFooter();
        this.alertHandler = new AlertHandler();
        console.log('Renderer initialized');
    }

    /**
     * Gets instance
     * @returns instance
     */
    public static getInstance(target: HTMLDivElement): Renderer {
        if (!Renderer.instance) {
            Renderer.instance = new Renderer(target);
        }

        return Renderer.instance;
    }

    /**
     * Renders navigation
     * @param appRoot
     */
    private renderNavigation(appRoot: HTMLDivElement):void {
        const appNavigation = document.createElement('div');
        const navigation = document.createElement('nav');
        const optionMain = document.createElement('button');
        const optionCheck = document.createElement('button');

        appNavigation.classList.add('app-navigation');
        optionMain.classList.add('app-navigation__option-main');
        optionMain.classList.add('nav-item');
        optionMain.classList.add('btn');
        optionMain.innerHTML = 'Generate new template';
        optionMain.onclick = () => {
            this.renderMainPage(appRoot);
        }
        optionCheck.classList.add('app-navigation__option-check');
        optionCheck.classList.add('nav-item');
        optionCheck.classList.add('btn');
        optionCheck.innerHTML = 'Check template';
        optionCheck.onclick = () => {
            this.renderCheckPage(appRoot);
        }
        navigation.appendChild(optionMain);
        navigation.appendChild(optionCheck);
        appNavigation.appendChild(navigation);
        appRoot.appendChild(appNavigation);
    }

    /**
     * Renders footer
     */
    private renderFooter():void {
        const appFooter = document.createElement('footer');
        const footer = document.createElement('div');
        const footerText = document.createElement('p');
        const footerLink = document.createElement('a');

        appFooter.classList.add('app-footer');
        footer.classList.add('app-footer__footer');
        footerText.classList.add('app-footer__footer-text');
        footerLink.classList.add('app-footer__footer-link');
        footerLink.innerHTML = 'Github';
        footerLink.id = 'footer-link';
        footerLink.href = this.info._homepage;
        footerLink.target = '_blank';

        footerText.innerHTML = this.info._name
                                + ' © ' + new Date().getFullYear().toString() + ' v'
                                + this.info._version + ' by '
                                + this.info._author
                                + ' |  ';

        footer.appendChild(footerText);
        footer.appendChild(footerLink);
        appFooter.appendChild(footer);
        try {
            document.body.removeChild(document.getElementsByTagName('footer')[0] as HTMLDivElement);
        } catch {
            console.log('No footer found');
        }
        document.body.appendChild(appFooter);
    }

    /**
     * Renders main
     * @param appRoot
     */
    private renderMainPage(appRoot: HTMLDivElement):void {
        const appBody = document.createElement('div');
        const appBodyTitle = document.createElement('h1');
        const svgDropZone = document.createElement('input');
        const widthInput = document.createElement('input');
        const heightInput = document.createElement('input');
        const nameInput = document.createElement('input');
        const editor = document.createElement('div');
        const submitDrop = document.createElement('button');
        const saveButton = document.createElement('button');
        const infoBox = document.createElement('pre');
        const breakText = document.createElement('br');
        const infoBoxText1 = document.createElement('code');
        const infoBoxText2 = document.createElement('code');
        const fileForm = document.createElement('form');
        const valuesForm = document.createElement('form');
        const exportModeSelectBox = document.createElement('select');
        const exportModeSelectOJavaScript = document.createElement('option');
        const exportModeSelectOTypeScript = document.createElement('option');
        const previewButton = document.createElement('button');
        const iconOne = document.createElement('img');
        const iconTwo = document.createElement('img');

        appBody.classList.add('app-body');

        //#region appBodyTitle
        appBodyTitle.classList.add('app-body__title');
        appBodyTitle.innerHTML = 'Generate';
        //#endregion
        
        //#region svgDropZone
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
        svgDropZone.required = true;
        //#endregion
        
        //#region widthInput
        widthInput.type = 'number';
        widthInput.classList.add('app-body__width-input');
        widthInput.classList.add('form-control');
        widthInput.placeholder = 'Width';
        widthInput.id = 'width-input';
        widthInput.required = true;
        //#endregion
        
        //#region heightInput
        heightInput.type = 'number';
        heightInput.classList.add('app-body__height-input');
        heightInput.classList.add('form-control');
        heightInput.id = 'height-input';
        heightInput.placeholder = 'Height';
        heightInput.required = true;
        //#endregion
        
        //#region nameInput
        nameInput.type = 'text';
        nameInput.classList.add('app-body__name-input');
        nameInput.classList.add('form-control');
        nameInput.placeholder = 'Template name';
        nameInput.id = 'name-input';
        nameInput.required = true;
        //#endregion
        
        //#region editor
        editor.classList.add('app-body__editor');
        editor.id = 'editor';
        //#endregion
        
        //#region submitDrop
        submitDrop.classList.add('app-body__submit-drop');
        submitDrop.classList.add('btn');
        submitDrop.classList.add('btn-primary');
        submitDrop.innerHTML = 'Submit';
        submitDrop.id = 'submit-drop';
        //#endregion

        //#region saveButton
        saveButton.classList.add('app-body__save-button');
        saveButton.classList.add('btn');
        saveButton.classList.add('btn-success');
        saveButton.innerHTML = 'Save';
        saveButton.id = 'save-button';
        //#endregion

        //#region infoBox
        iconOne.src = './assets/copy-solid.svg';
        iconOne.classList.add('app-body__icon');
        iconOne.classList.add('app-body__icon-copy');
        iconOne.classList.add('icon');
        iconOne.classList.add('icon-copy');
        iconTwo.src = './assets/copy-solid.svg';
        iconTwo.classList.add('app-body__icon');
        iconTwo.classList.add('app-body__icon-copy');
        iconTwo.classList.add('icon');
        iconTwo.classList.add('icon-copy');
        infoBox.classList.add('app-body__info-box');
        infoBox.id = 'info-box';
        infoBoxText1.classList.add('app-body__info-box-text-1');
        infoBoxText1.id = 'info-box-text-1';
        infoBoxText1.innerHTML = 'Key for the player name:          {player}';
        infoBoxText1.appendChild(iconOne);
        const cp1 = document.createElement('p');
        cp1.innerHTML = '{player}';
        infoBoxText1.onclick = () => {
            this.copyToClipboard(cp1);
            this.alertHandler.fireSuccess('"{player}" Copied to clipboard');
        };
        infoBoxText2.classList.add('app-body__info-box-text-2');
        infoBoxText2.id = 'info-box-text-2';
        infoBoxText2.innerHTML = 'Key for the team name (optional): {team}';
        infoBoxText2.appendChild(iconTwo);
        const cp2 = document.createElement('p');
        cp2.innerHTML = '{team}';
        infoBoxText2.onclick = () => {
            this.copyToClipboard(cp2);
            this.alertHandler.fireSuccess('"{team}" Copied to clipboard');
        };
        //#endregion

        //#region fileForm
        fileForm.classList.add('app-body__file-form');
        fileForm.id = 'file-form';
        fileForm.setAttribute('enctype', 'multipart/form-data');
        fileForm.setAttribute('action', '#');
        fileForm.onsubmit = () => {
            return false
        };
        //#endregion

        //#region valuesForm
        valuesForm.classList.add('app-body__values-form');
        valuesForm.id = 'values-form';
        valuesForm.setAttribute('enctype', 'multipart/form-data');
        valuesForm.setAttribute('action', '#');
        valuesForm.onsubmit = () => {
            return false
        };
        //#endregion
        
        //#region exortModeSelect
        exportModeSelectBox.classList.add('app-body__export-mode-select');
        exportModeSelectBox.classList.add('form-control');
        exportModeSelectBox.id = 'export-mode-select';
        exportModeSelectBox.required = true;
        
        exportModeSelectOJavaScript.classList.add('app-body__export-mode-select-option');
        exportModeSelectOJavaScript.classList.add('form-control');
        exportModeSelectOJavaScript.innerHTML = 'JavaScript';
        exportModeSelectOJavaScript.value = 'javascript';
        exportModeSelectOJavaScript.id = 'export-mode-select-option-javascript';
        exportModeSelectOJavaScript.selected = true;

        exportModeSelectOTypeScript.classList.add('app-body__export-mode-select-option');
        exportModeSelectOTypeScript.classList.add('form-control');
        exportModeSelectOTypeScript.innerHTML = 'TypeScript';
        exportModeSelectOTypeScript.value = 'typescript';
        exportModeSelectOTypeScript.id = 'export-mode-select-option-typescript';
        
        exportModeSelectBox.appendChild(exportModeSelectOJavaScript);
        exportModeSelectBox.appendChild(exportModeSelectOTypeScript);
        //#endregion

        //#region previewButton
        previewButton.classList.add('app-body__preview-button');
        previewButton.classList.add('btn');
        previewButton.classList.add('btn-light');
        previewButton.innerHTML = 'Preview';
        previewButton.id = 'preview-button';
        //#endregion

        infoBox.appendChild(infoBoxText1);
        infoBox.appendChild(breakText);
        infoBox.appendChild(infoBoxText2);

        fileForm.appendChild(svgDropZone);
        fileForm.appendChild(submitDrop);
        fileForm.appendChild(infoBox);
        appBody.appendChild(appBodyTitle);
        appBody.appendChild(fileForm);
        appBody.appendChild(editor);
        appBody.appendChild(previewButton);
        valuesForm.appendChild(nameInput);
        valuesForm.appendChild(widthInput);
        valuesForm.appendChild(heightInput);
        valuesForm.appendChild(exportModeSelectBox);
        valuesForm.appendChild(saveButton);
        appBody.appendChild(valuesForm);
        appRoot.innerHTML = '';
        this.renderNavigation(appRoot);
        appRoot.appendChild(appBody);
        this.renderFooter();
        const editorIni = new Editor();
        editorIni;
    }

    /**
     * Renders check page
     * @param appRoot
     */
    public renderCheckPage(appRoot: HTMLDivElement): void {
        appRoot.innerHTML = '';
        this.renderNavigation(appRoot);
        console.log(SGL.info());
        this.sgl;

        const appBody = document.createElement('div');
        appBody.classList.add('app-body');
        appBody.id = 'app-body';

        const appBodyTitle = document.createElement('h1');
        appBodyTitle.classList.add('app-body__title');
        appBodyTitle.innerHTML = 'Check';

        const appBodyText = document.createElement('p');
        appBodyText.classList.add('app-body__text');
        appBodyText.innerHTML = 'Select your template and click the button below to see the result of the Check.';

        const templateInput = document.createElement('input');
        templateInput.classList.add('app-body__template-input');
        templateInput.classList.add('form-control');
        templateInput.id = 'template-input';
        templateInput.type = 'file';
        templateInput.required = true;
        templateInput.accept = '.js';

        const templateInputLabel = document.createElement('label');
        templateInputLabel.classList.add('app-body__template-input-label');
        templateInputLabel.innerHTML = '!Warning! Only .js files are allowed';
        templateInputLabel.setAttribute('for', 'template-input');

        const checkButton = document.createElement('button');
        checkButton.classList.add('app-body__check-button');
        checkButton.classList.add('btn');
        checkButton.classList.add('btn-success');
        checkButton.innerHTML = 'Check';
        checkButton.id = 'check-button';

        const checkResult = document.createElement('div');
        checkResult.classList.add('app-body__check-result');
        checkResult.id = 'check-result';

        appBody.appendChild(appBodyTitle);
        appBody.appendChild(appBodyText);
        appBody.appendChild(templateInput);
        appBody.appendChild(templateInputLabel);
        appBody.appendChild(checkButton);
        appBody.appendChild(checkResult);
        appRoot.appendChild(appBody);
        new CheckTemplate(this.sgl);
    }

    /**
     * Copys to clipboard
     * @param element
     */
    private copyToClipboard(element: HTMLElement): void {
        var $temp = $("<input>");
        $("body").append($temp);
        $temp.val($(element).text()).select();
        document.execCommand("copy");
        $temp.remove();
    }
}