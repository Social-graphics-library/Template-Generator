/**
 * Itemplate
 */
export interface Itemplate {

    /**
     * Width of the template
     */
    width: number;

    /**
     * Height of the template
     */
    height: number;

    /**
     *
     * @param teamName
     * @param playerName
     * @returns template
     */
    template(teamName: string, playerName: string): string
}