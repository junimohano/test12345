import { ChangeDetectorRef } from '@angular/core';
export declare abstract class ChangeDetectableComponentBase implements ChangeDetectorRef {
    protected changeDetectorRef: ChangeDetectorRef;
    private readonly isChangeDetectorDestroyed;
    constructor(changeDetectorRef: ChangeDetectorRef);
    markForCheck(): void;
    detach(): void;
    detectChanges(): void;
    checkNoChanges(): void;
    reattach(): void;
}
