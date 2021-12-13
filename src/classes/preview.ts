import CodeMirror from "codemirror"

/**
 * Preview
 */
export class Preview {

    /**
     * Status of preview
     */
    private status: boolean 

    /**
     * Window of preview
     */
    private window: HTMLDivElement

    /**
     * Instance of preview
     */
    private static instance: Preview

    /**
     * Template of preview
     */
    private editor: CodeMirror.Editor

    /**
     * Close of preview
     */
    private close: HTMLButtonElement

    /**
     * Creates an instance of preview.
     */
    constructor(editor: CodeMirror.Editor) {
        this.status = false
        this.window = document.createElement('div')
        this.window.classList.add('preview')
        this.window.id = 'preview'
        this.editor = editor
        const closeButton = document.createElement('button')
        closeButton.classList.add('close-button')
        closeButton.classList.add('btn')
        closeButton.classList.add('btn-light')
        closeButton.innerHTML = '&times;'
        closeButton.id = 'close-button'
        this.close = closeButton
        this.registerEvents()
        console.log('Preview initialized')
    }

    /**
     * Gets instance
     * @returns instance 
     */
    public static getInstance(editor: CodeMirror.Editor): Preview {
        if (!Preview.instance) {
            Preview.instance = new Preview(editor);
        }

        return Preview.instance;
    }

    /**
     * Gets status
     * @returns true if status 
     */
    public getStatus(): boolean {
        return this.status
    }

    /**
     * Sets status
     * @param status 
     */
    public setStatus(status: boolean): void {
        this.status = status

        switch (this.status) {
            case true:
                this.renderWindow()
                break
        
            case false:
                this.removeWindow()
                break;
        }
    }

    /**
     * Registers events
     */
    private registerEvents(): void {
        const target = document.getElementById('preview-button') as HTMLButtonElement

        target.addEventListener('click', (event: MouseEvent) => {
            if (event.target === target) {
                switch (this.status) {
                    case true:
                        this.setStatus(false)
                        console.log('Preview closed')
                        break
                        
                    case false:
                        this.setStatus(true)
                        console.log('Preview opened')
                        break;
                }
            }
        })

        this.close.addEventListener('click', (event: MouseEvent) => {
            if (event.target === this.close) {
                this.setStatus(false)
            }
        })
    }

    /**
     * Renders preview
     */
    private renderPreview(): void {
        const target = this.window
        const svg = this.parseSVG(this.editor.getValue())
        target.innerHTML = ''
        target.appendChild(svg)
        target.appendChild(this.close)
    }

    /**
     * Parses svg
     * @param svg 
     * @returns svg 
     */
    private parseSVG(svg: string): SVGElement {
        const parser = new DOMParser()
        const doc = parser.parseFromString(svg, 'image/svg+xml')
        const svgElement = <SVGElement>doc.getElementsByTagName('svg')[0]
        return svgElement
    }

    /**
     * Renders window
     */
    private renderWindow(): void {
        document.body.appendChild(this.window)
        this.renderPreview()
    }

    /**
     * Removes window
     */
    private removeWindow(): void {
        document.body.removeChild(this.window)
    }

}