import { EventEmitter, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UserControllerService } from '../../../services/user-controller';
export declare class CommentFormComponent implements OnInit {
    private formBuilder;
    private userControllerService;
    commentPlaceholder: string;
    canHideActions: boolean;
    formSubmitted: EventEmitter<any>;
    formCancelled: EventEmitter<any>;
    commentForm: import("@angular/forms").FormGroup;
    MENTION_CONFIG: {
        triggerChar: string;
        maxItems: number;
        labelKey: string;
        mentionSelect: any;
    };
    mentionUsers: any[];
    focused: boolean;
    constructor(formBuilder: FormBuilder, userControllerService: UserControllerService);
    ngOnInit(): void;
    onSubmit(): void;
    onCancel(event: any): void;
    textFocus(): void;
    textFocusout(): void;
    searchTerm(searchTerm: string): Promise<void>;
    resetForm(): void;
    private onMentionSelect;
}
