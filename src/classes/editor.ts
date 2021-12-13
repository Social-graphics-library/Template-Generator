import CodeMirror from 'codemirror';
import { Template } from '../model/template';
import { AlertHandler } from './alertHandler';

/**
 * Editor
 */
export class Editor {

    /**
     * Instance of app
     */
    private static instance: Editor

    /**
     * Target of editor
     */
    private target: HTMLDivElement

    /**
     * Editor value
     */
    private editor: CodeMirror.Editor

    /**
     * Alert handler of editor
     */
    private alertHandler: AlertHandler 

    /**
     * Creates an instance of editor.
     */
    constructor() {
        this.alertHandler = new AlertHandler();
        console.log('Editor initialized');
        this.target = document.getElementById('editor') as HTMLDivElement;

        const editor = CodeMirror(this.target, {
            lineNumbers: true,
            mode: 'svg',
            theme: 'monokai',
            value: '<svg></svg>'
        });

        editor.setSize('100%', '100%');

        this.editor = editor;

        this.setEditorListener();
    }

    /**
     * Gets instance
     * @returns instance 
     */
    public static getInstance(): Editor {
        if (!Editor.instance) {
            Editor.instance = new Editor();
        }

        return Editor.instance;
    }

    /**
     * Sets editor listener
     */
    private setEditorListener(): void {
        const fileDropZone = <HTMLInputElement>document.getElementById('svg-drop-zone') as HTMLInputElement;
        const fileDropZoneSubmit = <HTMLButtonElement>document.getElementById('submit-drop') as HTMLButtonElement;
        const fileSave = <HTMLButtonElement>document.getElementById('save-button') as HTMLButtonElement;

        fileDropZoneSubmit.addEventListener('click', () => {
            console.log('submit');
            const reader = new FileReader();
            reader.onload = () => {
                let result = <string>reader.result;
                this.editor.setValue(result);
            };

            if (fileDropZone.files !== null
                && fileDropZone.files.length > 0
                && fileDropZone.files[0] !== undefined
                && fileDropZone.files[0].type === 'image/svg+xml') {
                reader.readAsText(fileDropZone.files[0]);
            }
        });

        fileSave.addEventListener('click', () => {
            this.saveEdit()
        });
    }

    /**
     * Saves edit
     * @returns edit 
     */
    public saveEdit(): void {
        const templateString: string = this.editor.getValue();
        const width = document.getElementById('width-input') as HTMLInputElement;
        const height = document.getElementById('height-input') as HTMLInputElement;
        const name = document.getElementById('name-input') as HTMLInputElement;
        const mode = document.getElementById('export-mode-select') as HTMLSelectElement;
        let template: Template;
        let file: File;

        if (width.value !== '' && height.value !== '' && name.value !== '') {

            if (templateString !== undefined) {
                template = new Template(width.value, height.value, name.value, templateString);
            } else {
                console.log('Template is undefined');
                this.alertHandler.fireDanger('Template is undefined');
                return;
            }

            switch (mode.value) {
                case 'typescript':
                    file = new File([template.exportString], name.value + '-template.ts', { type: 'text/plain' });

                    // save file in downloads folder
                    let a = document.createElement('a');
                    a.href = URL.createObjectURL(file);
                    a.download = name.value + '-template.ts';
                    a.click();
                    console.log('Saved');
                    this.alertHandler.fireSuccess('Saved');
                    break;

                case 'javascript':
                    file = new File([template.exportString], name.value + '-template.js', { type: 'text/plain' });

                    // save file in downloads folder
                    let b = document.createElement('a');
                    b.href = URL.createObjectURL(file);
                    b.download = name.value + '-template.js';
                    b.click();
                    console.log('Saved');
                    this.alertHandler.fireSuccess('Saved');
                    break;
            
                default:
                    this.alertHandler.fireDanger('Export mode is undefined');
                    console.log('Export mode is undefined');
                    break;
            }

            
        } else {
            console.log('Inputs are empty');
            this.alertHandler.fireWarning('Inputs are empty');
        }
    }
}