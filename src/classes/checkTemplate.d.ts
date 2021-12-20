import { SGL } from "social-graphics-library";
/**
 * Check template
 */
export declare class CheckTemplate {
    /**
     * Alert handler of check template
     */
    private alertHandler;
    /**
     * Sgl of check template
     */
    private sgl;
    /**
     * Creates an instance of check template.
     */
    constructor(sgl: SGL);
    /**
     * Sets check listeners
     */
    private setCheckListeners;
    /**
     * Checks template
     * @param input
     */
    private checkTemplate;
    /**
     * Removes string
     * @param str
     * @param remove
     * @returns string
     */
    private removeString;
}
