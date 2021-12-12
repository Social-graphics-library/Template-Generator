/**
 * Editor
 */
export declare class Editor {
    /**
     * Instance of app
     */
    private static instance;
    /**
     * Target of editor
     */
    private target;
    /**
     * Editor value
     */
    private editor;
    /**
     * Creates an instance of editor.
     */
    constructor();
    /**
     * Gets instance
     * @returns instance
     */
    static getInstance(): Editor;
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
