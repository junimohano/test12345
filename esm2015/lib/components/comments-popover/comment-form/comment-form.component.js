import * as tslib_1 from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserControllerService } from '../../../services/user-controller';
export class CommentFormComponent {
    constructor(formBuilder, userControllerService) {
        this.formBuilder = formBuilder;
        this.userControllerService = userControllerService;
        this.commentPlaceholder = '';
        this.canHideActions = false;
        this.formSubmitted = new EventEmitter();
        this.formCancelled = new EventEmitter();
        this.commentForm = this.formBuilder.group({
            comment: ['', Validators.required]
        });
        this.MENTION_CONFIG = {
            triggerChar: '@',
            maxItems: 10,
            labelKey: 'externalUserEmail',
            mentionSelect: this.onMentionSelect.bind(this)
        };
        this.mentionUsers = [];
        this.focused = false;
    }
    ngOnInit() {
        if (this.commentPlaceholder) {
            this.commentForm.patchValue({
                comment: this.commentPlaceholder
            });
        }
    }
    onSubmit() {
        this.formSubmitted.emit(this.commentForm.value);
    }
    onCancel(event) {
        this.formCancelled.emit();
    }
    textFocus() {
        this.focused = true;
    }
    textFocusout() { }
    searchTerm(searchTerm) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const users = yield this.userControllerService
                .getUsers$(0, searchTerm)
                .toPromise();
            this.mentionUsers = users.content;
        });
    }
    resetForm() {
        this.commentForm.reset();
    }
    onMentionSelect(user) {
        return `[~${user.externalUserEmail}]`;
    }
}
CommentFormComponent.decorators = [
    { type: Component, args: [{
                selector: 'ta-comment-form',
                template: "<form [formGroup]=\"commentForm\" (ngSubmit)=\"onSubmit()\">\r\n  <textarea\r\n    class=\"mb-2\"\r\n    rows=\"2\"\r\n    formControlName=\"comment\"\r\n    (focus)=\"textFocus()\"\r\n    (focusout)=\"textFocusout()\"\r\n  ></textarea>\r\n  <div\r\n    class=\"comment-footer d-flex justify-content-end\"\r\n    *ngIf=\"focused || !canHideActions || commentForm.valid\"\r\n  >\r\n    <button\r\n      type=\"button\"\r\n      taButton\r\n      taType=\"flat\"\r\n      class=\"btn-sm\"\r\n      (click)=\"onCancel($event)\"\r\n    >\r\n      Cancel\r\n    </button>\r\n    <button\r\n      [disabled]=\"!commentForm.valid\"\r\n      taButton\r\n      taType=\"primary\"\r\n      class=\"btn-sm\"\r\n      type=\"submit\"\r\n    >\r\n      Comment\r\n    </button>\r\n  </div>\r\n</form>\r\n",
                styles: [":host textarea{width:100%;border:1px solid #c2c2c2;border-radius:4px;resize:none;padding:8px}:host .btn{min-width:0}"]
            }] }
];
/** @nocollapse */
CommentFormComponent.ctorParameters = () => [
    { type: FormBuilder },
    { type: UserControllerService }
];
CommentFormComponent.propDecorators = {
    commentPlaceholder: [{ type: Input }],
    canHideActions: [{ type: Input }],
    formSubmitted: [{ type: Output }],
    formCancelled: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWVudC1mb3JtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3Zlcml0YXMtdWktbGlicmFyeS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NvbW1lbnRzLXBvcG92ZXIvY29tbWVudC1mb3JtL2NvbW1lbnQtZm9ybS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0UsT0FBTyxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV6RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQU8xRSxNQUFNLE9BQU8sb0JBQW9CO0lBbUIvQixZQUNVLFdBQXdCLEVBQ3hCLHFCQUE0QztRQUQ1QyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QiwwQkFBcUIsR0FBckIscUJBQXFCLENBQXVCO1FBcEJ0Qyx1QkFBa0IsR0FBRyxFQUFFLENBQUM7UUFDeEIsbUJBQWMsR0FBRyxLQUFLLENBQUM7UUFFdEIsa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ3hDLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUVsRCxnQkFBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDO1lBQzFDLE9BQU8sRUFBRSxDQUFDLEVBQUUsRUFBRSxVQUFVLENBQUMsUUFBUSxDQUFDO1NBQ25DLENBQUMsQ0FBQztRQUNJLG1CQUFjLEdBQUc7WUFDdEIsV0FBVyxFQUFFLEdBQUc7WUFDaEIsUUFBUSxFQUFFLEVBQUU7WUFDWixRQUFRLEVBQUUsbUJBQW1CO1lBQzdCLGFBQWEsRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7U0FDL0MsQ0FBQztRQUNLLGlCQUFZLEdBQVUsRUFBRSxDQUFDO1FBQ3pCLFlBQU8sR0FBRyxLQUFLLENBQUM7SUFLcEIsQ0FBQztJQUVHLFFBQVE7UUFDYixJQUFJLElBQUksQ0FBQyxrQkFBa0IsRUFBRTtZQUMzQixJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQztnQkFDMUIsT0FBTyxFQUFFLElBQUksQ0FBQyxrQkFBa0I7YUFDakMsQ0FBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDO0lBRU0sUUFBUTtRQUNiLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVNLFFBQVEsQ0FBQyxLQUFVO1FBQ3hCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUVNLFNBQVM7UUFDZCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztJQUN0QixDQUFDO0lBRU0sWUFBWSxLQUFVLENBQUM7SUFFakIsVUFBVSxDQUFDLFVBQWtCOztZQUN4QyxNQUFNLEtBQUssR0FBRyxNQUFNLElBQUksQ0FBQyxxQkFBcUI7aUJBQzNDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsVUFBVSxDQUFDO2lCQUN4QixTQUFTLEVBQUUsQ0FBQztZQUNmLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQztRQUNwQyxDQUFDO0tBQUE7SUFFTSxTQUFTO1FBQ2QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRU8sZUFBZSxDQUFDLElBQVM7UUFDL0IsT0FBTyxLQUFLLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxDQUFDO0lBQ3hDLENBQUM7OztZQWhFRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IsbXlCQUE0Qzs7YUFFN0M7Ozs7WUFSUSxXQUFXO1lBRVgscUJBQXFCOzs7aUNBUTNCLEtBQUs7NkJBQ0wsS0FBSzs0QkFFTCxNQUFNOzRCQUNOLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuaW1wb3J0IHsgVXNlckNvbnRyb2xsZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvdXNlci1jb250cm9sbGVyJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAndGEtY29tbWVudC1mb3JtJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY29tbWVudC1mb3JtLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9jb21tZW50LWZvcm0uY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29tbWVudEZvcm1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBjb21tZW50UGxhY2Vob2xkZXIgPSAnJztcclxuICBASW5wdXQoKSBwdWJsaWMgY2FuSGlkZUFjdGlvbnMgPSBmYWxzZTtcclxuXHJcbiAgQE91dHB1dCgpIHB1YmxpYyBmb3JtU3VibWl0dGVkID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgpIHB1YmxpYyBmb3JtQ2FuY2VsbGVkID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblxyXG4gIHB1YmxpYyBjb21tZW50Rm9ybSA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xyXG4gICAgY29tbWVudDogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXVxyXG4gIH0pO1xyXG4gIHB1YmxpYyBNRU5USU9OX0NPTkZJRyA9IHtcclxuICAgIHRyaWdnZXJDaGFyOiAnQCcsXHJcbiAgICBtYXhJdGVtczogMTAsXHJcbiAgICBsYWJlbEtleTogJ2V4dGVybmFsVXNlckVtYWlsJyxcclxuICAgIG1lbnRpb25TZWxlY3Q6IHRoaXMub25NZW50aW9uU2VsZWN0LmJpbmQodGhpcylcclxuICB9O1xyXG4gIHB1YmxpYyBtZW50aW9uVXNlcnM6IGFueVtdID0gW107XHJcbiAgcHVibGljIGZvY3VzZWQgPSBmYWxzZTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlcixcclxuICAgIHByaXZhdGUgdXNlckNvbnRyb2xsZXJTZXJ2aWNlOiBVc2VyQ29udHJvbGxlclNlcnZpY2VcclxuICApIHt9XHJcblxyXG4gIHB1YmxpYyBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmNvbW1lbnRQbGFjZWhvbGRlcikge1xyXG4gICAgICB0aGlzLmNvbW1lbnRGb3JtLnBhdGNoVmFsdWUoe1xyXG4gICAgICAgIGNvbW1lbnQ6IHRoaXMuY29tbWVudFBsYWNlaG9sZGVyXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIG9uU3VibWl0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5mb3JtU3VibWl0dGVkLmVtaXQodGhpcy5jb21tZW50Rm9ybS52YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgb25DYW5jZWwoZXZlbnQ6IGFueSk6IHZvaWQge1xyXG4gICAgdGhpcy5mb3JtQ2FuY2VsbGVkLmVtaXQoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB0ZXh0Rm9jdXMoKTogdm9pZCB7XHJcbiAgICB0aGlzLmZvY3VzZWQgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHRleHRGb2N1c291dCgpOiB2b2lkIHt9XHJcblxyXG4gIHB1YmxpYyBhc3luYyBzZWFyY2hUZXJtKHNlYXJjaFRlcm06IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgY29uc3QgdXNlcnMgPSBhd2FpdCB0aGlzLnVzZXJDb250cm9sbGVyU2VydmljZVxyXG4gICAgICAuZ2V0VXNlcnMkKDAsIHNlYXJjaFRlcm0pXHJcbiAgICAgIC50b1Byb21pc2UoKTtcclxuICAgIHRoaXMubWVudGlvblVzZXJzID0gdXNlcnMuY29udGVudDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyByZXNldEZvcm0oKTogdm9pZCB7XHJcbiAgICB0aGlzLmNvbW1lbnRGb3JtLnJlc2V0KCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uTWVudGlvblNlbGVjdCh1c2VyOiBhbnkpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIGBbfiR7dXNlci5leHRlcm5hbFVzZXJFbWFpbH1dYDtcclxuICB9XHJcbn1cclxuIl19