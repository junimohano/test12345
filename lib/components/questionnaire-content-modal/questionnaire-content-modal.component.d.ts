import { OnInit } from '@angular/core';
import { TaActiveModal } from '@trustarc/ui-toolkit';
export declare class QuestionnaireContentModalComponent implements OnInit {
    modalService: TaActiveModal;
    recordId: string;
    reviewMode: boolean;
    constructor(modalService: TaActiveModal);
    ngOnInit(): void;
}
