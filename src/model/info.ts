/**
 * Info
 */
export class Info {

    //#region vars
    /**
     * Version  of info
     */
	public readonly _version: string = "1.1.0"

    /**
     * Name  of info
     */
	public readonly _name: string = "sgl-template-generator"

    /**
     * Author  of info
     */
	public readonly _author: string = "Jonas Pfalzgraf"

    /**
     * License  of info
     */
	public readonly _license: string = "MPL-2.0"

    /**
     * Repository  of info
     */
	public readonly _repository: string = "git+https://github.com/Social-graphics-library/Template-Generator.git"

    /**
     * Repository  of info
     */
	public readonly _homepage: string = "https://github.com/Social-graphics-library/Template-Generator#readme"

    /**
     * Install  of info
     */
    public readonly _install: string = "https://github.com/Social-graphics-library/Template-Generator/releases/download/v" + this._version + "/SGL.Template.GeneratorSetup.exe"
    //#endregion

    //#region constructor
    /**
     * Creates an instance of info.
     */
    public constructor() {
        this._version;
        this._name;
        this._author;
        this._license;
        this._repository;
        this._install;
        this._homepage;
    }
	//#endregion

}