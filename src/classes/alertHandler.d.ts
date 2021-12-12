/**
 * Alert handler
 */
export declare class AlertHandler {
    /**
     * Structures alert handler
     * @param mode
     * @returns structure
     */
    private structure;
    /**
     * Fires warning
     * @param [message]
     */
    fireWarning(message?: string): void;
    /**
     * Fires success
     * @param [message]
     */
    fireSuccess(message?: string): void;
    /**
     * Fires danger
     * @param [message]
     */
    fireDanger(message?: string): void;
    /**
     * Fires info
     * @param [message]
     */
    fireInfo(message?: string): void;
    /**
     * Fires light
     * @param [message]
     */
    fireLight(message?: string): void;
    /**
     * Fires dark
     * @param [message]
     */
    fireDark(message?: string): void;
    /**
     * Fires primary
     * @param [message]
     */
    firePrimary(message?: string): void;
    /**
     * Fires secondary
     * @param [message]
     */
    fireSecondary(message?: string): void;
    /**
     * Fires timer
     * @param alert
     */
    private fireTimer;
    private sleep;
}
