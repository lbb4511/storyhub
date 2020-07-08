/// <reference types="./types" />
declare class Editor {
    element: HTMLPreElement;
    range: Range;
    composingLock: boolean;
    processTimeoutId: number;
    hlToolbarTimeoutId: number;
    constructor(vditor: IVditor);
    private bindEvent;
}
export { Editor };
