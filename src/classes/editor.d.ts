import '../../node_modules/codemirror/mode/xml/xml';
/**
 * Editor
 */
export declare class Editor {
    /**
     * Target of editor
     */
    private target;
    /**
     * Editor value
     */
    private editor;
    /**
     * Preview of editor
     */
    private preview;
    /**
     * Alert handler of editor
     */
    private alertHandler;
    /**
     * Creates an instance of editor.
     */
    constructor();
    /**
     * Sets editor listener
     */
    private setEditorListener;
    /**
     * Saves edit
     * @returns edit
     */
    saveEdit(): void;
}
