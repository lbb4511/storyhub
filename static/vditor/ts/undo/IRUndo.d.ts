/// <reference types="./types" />
declare class IRUndo {
    private undoStack;
    private redoStack;
    private stackSize;
    private dmp;
    private lastText;
    private hasUndo;
    constructor();
    clearStack(vditor: IVditor): void;
    resetIcon(vditor: IVditor): void;
    undo(vditor: IVditor): void;
    redo(vditor: IVditor): void;
    recordFirstWbr(vditor: IVditor, event: KeyboardEvent): void;
    addToUndoStack(vditor: IVditor): void;
    private renderDiff;
}
export { IRUndo };
