import { TMode } from '../model/TMode'

/**
 * Alert handler
 */
export class AlertHandler {

    /**
     * Structures alert handler
     * @param mode 
     * @returns structure 
     */
    private structure(mode: TMode, content: string): string {
        return '<div class="alert alert-' + mode + '" role="alert">' + content + '</div>'
    }

    /**
     * Fires warning
     * @param [message] 
     */
    public fireWarning(message?:string): void {
        if (message == undefined) {
            message = "Warning: Something went wrong!";
        }
        this.fireTimer(this.structure('warning', message ));
    }
    
    /**
     * Fires success
     * @param [message] 
     */
    public fireSuccess(message?:string): void {
        if (message == undefined) {
            message = "Success: Something went right!";
        }
        this.fireTimer(this.structure('success', message ));
    }

    /**
     * Fires danger
     * @param [message] 
     */
    public fireDanger(message?:string): void {
        if (message == undefined) {
            message = "Danger: Something went wrong!";
        }
        this.fireTimer(this.structure('danger', message ));
    }

    /**
     * Fires info
     * @param [message] 
     */
    public fireInfo(message?:string): void {
        if (message == undefined) {
            message = "Info: Something went right!";
        }
        this.fireTimer(this.structure('info', message ));
    }

    /**
     * Fires light
     * @param [message] 
     */
    public fireLight(message?:string): void {
        if (message == undefined) {
            message = "Light: Something went right!";
        }
        this.fireTimer(this.structure('light', message ));
    }

    /**
     * Fires dark
     * @param [message] 
     */
    public fireDark(message?:string): void {
        if (message == undefined) {
            message = "Dark: Something went right!";
        }
        this.fireTimer(this.structure('dark', message ));
    }

    /**
     * Fires primary
     * @param [message] 
     */
    public firePrimary(message?:string): void {
        if (message == undefined) {
            message = "Primary: Something went right!";
        }
        this.fireTimer(this.structure('primary', message ));
    }

    /**
     * Fires secondary
     * @param [message] 
     */
    public fireSecondary(message?:string): void {
        if (message == undefined) {
            message = "Secondary: Something went right!";
        }
        this.fireTimer(this.structure('secondary', message ));
    }

    /**
     * Fires timer
     * @param alert 
     */
    private async fireTimer(alert: string): Promise<void> {
        let response = document.createElement('div');
        response.innerHTML = alert;
        document.getElementsByTagName('footer')[0]?.appendChild(response);
        await this.sleep(5000);
        document.getElementsByTagName('footer')[0]?.removeChild(response)
    }

    //generate a sleep function
    private async sleep(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}