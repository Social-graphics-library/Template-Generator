import { AlertHandler } from "./alertHandler";
import { SGL } from "social-graphics-library";

/**
 * Check template
 */
export class CheckTemplate {

    /**
     * Alert handler of check template
     */
    private alertHandler: AlertHandler;

    /**
     * Sgl of check template
     */
    private sgl: SGL;

    /**
     * Creates an instance of check template.
     */
    constructor(sgl: SGL) {
        this.alertHandler = new AlertHandler();
        this.setCheckListeners();
        this.sgl = sgl;
    }

    /**
     * Sets check listeners
     */
    private setCheckListeners(): void {
        const checkButton = document.getElementById('check-button') as HTMLButtonElement;
        const checkTemplateInput = document.getElementById('template-input') as HTMLInputElement;

        checkButton.addEventListener('click', () => {
            this.checkTemplate(checkTemplateInput);
        });
    }

    /**
     * Checks template
     * @param input 
     */
    private async checkTemplate(input: HTMLInputElement): Promise<void> {
        let file: File
        if (input.files && input.files[0]) {
            file = input.files[0];
        } else {
            this.alertHandler.fireWarning('No file selected');
            return;
        }

        const reader = new FileReader();

        reader.onload = async () => {
            let template = reader.result as string;
            template = this.removeString(template, 'export');
            const templateName: string = file.name.split('.')[0] as string;
            let tmp;

            try {
                tmp = eval('(' + template + '\n)');
            } catch {
                this.alertHandler.fireDanger('Invalid template');
                return;
            }

            if (this.sgl.checkTemplate("advanced", templateName, new tmp())) {
                this.alertHandler.fireSuccess('Template is valid');
            } else {
                this.alertHandler.fireDanger('Template is not valid');
            }
        }

        reader.readAsText(file, "UTF-8");
    }

    /**
     * Removes string
     * @param str 
     * @param remove 
     * @returns string 
     */
    private removeString(str: string, remove: string): string {
        return str.replace(remove, '');
    }

}