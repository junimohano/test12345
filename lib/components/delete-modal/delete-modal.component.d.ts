import { AfterViewInit, ElementRef, EventEmitter, OnInit } from '@angular/core';
import { TaActiveModal } from '@trustarc/ui-toolkit';
export declare class DeleteModalComponent implements OnInit, AfterViewInit {
    modalService: TaActiveModal;
    title: string;
    description: string;
    primaryButtonText: string;
    secondaryButtonText: string;
    cancelButtonText: string;
    isSecondaryButtonEnabled: boolean;
    clickPrimary: EventEmitter<any>;
    clickSecondary: EventEmitter<any>;
    afterCancelled: EventEmitter<any>;
    primaryButton: ElementRef;
    constructor(modalService: TaActiveModal);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    onClickCancel(): void;
    private initDefaultFocus;
}
