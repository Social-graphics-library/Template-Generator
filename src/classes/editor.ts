import CodeMirror from 'codemirror';

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
     * Creates an instance of editor.
     */
    constructor() {
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

    private setEditorListener(): void {
        const fileDropZone = <HTMLInputElement>document.getElementById('svg-drop-zone') as HTMLInputElement;
        const fileDropZoneSubmit = <HTMLButtonElement>document.getElementById('submit-drop') as HTMLButtonElement;

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
    } 
}