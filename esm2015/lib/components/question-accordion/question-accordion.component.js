import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { QuestionnaireUtilsService } from '../../services';
import { SimpleFileUploadComponent } from '../file-upload';
export class QuestionAccordionComponent {
    constructor(formBuilder, questionnaireUtilsService) {
        this.formBuilder = formBuilder;
        this.questionnaireUtilsService = questionnaireUtilsService;
        this.question = {
            nodeId: null,
            nodeType: null,
            questionDetails: {
                questionDetailText: null,
                questionDetailType: null,
                commentMessageCount: null,
                questionDetailResponses: [],
                questionDetailAnswer: null,
                recordQuestionEntityId: null
            },
            children: []
        };
        this.formReady = new EventEmitter();
        this.afterFilesSelected = new EventEmitter();
        this.deleteAttachment = new EventEmitter();
        this.clickAttachment = new EventEmitter();
        this.questionAccordionForm = this.formBuilder.group({
            question: null,
            children: this.formBuilder.array([]),
            conditionFulfilled: false
        });
    }
    get children() {
        return this.questionAccordionForm.get('children');
    }
    ngOnInit() {
        this.formReady.emit(this.questionAccordionForm);
        this.questionAccordionForm.valueChanges.subscribe(value => {
            this.formValueChanged(value);
        });
        this.reviewMode = this.questionnaireUtilsService.getReviewMode();
    }
    /**
     * Propagate main questionForm to questionAccordionForm
     * @param questionForm questionForm
     */
    questionFormReady(questionForm) {
        this.questionAccordionForm.setControl('question', questionForm);
    }
    /**
     * Propagate child questionForm to questionAccordionForm
     * @param questionForm questionForm
     */
    childFormReady(questionForm) {
        this.children.push(questionForm);
    }
    onAddAttachments() {
        this.simpleFileUploadComponent.fileUploadComponent.openUploadBrowser();
    }
    formValueChanged(value) {
        // Check if new answer fulfills the condition of this question
        for (let i = 0; i < this.question.children.length; i++) {
            const conditionChild = this.question.children[i];
            // set this so that UI can store whether to show follow up questions
            conditionChild.conditionFulfilled = this.questionnaireUtilsService.getConditionFulfilled(conditionChild, this.question.questionDetails);
            this.questionAccordionForm.patchValue({ conditionFulfilled: conditionChild.conditionFulfilled }, { emitEvent: false });
        }
    }
}
QuestionAccordionComponent.decorators = [
    { type: Component, args: [{
                selector: 'ta-question-accordion',
                template: "<div class=\"question-accordion mb-3\">\r\n  <div class=\"review-info\" *ngIf=\"reviewMode; else editMode\">\r\n    <table>\r\n      <tr>\r\n        <td>\r\n          Response\r\n        </td>\r\n        <td>\r\n          --\r\n        </td>\r\n      </tr>\r\n      <tr>\r\n        <td>\r\n          Comments\r\n        </td>\r\n        <td>\r\n          --\r\n        </td>\r\n      </tr>\r\n      <tr>\r\n        <td>\r\n          Attachments\r\n        </td>\r\n        <td>--</td>\r\n      </tr>\r\n    </table>\r\n  </div>\r\n\r\n  <ng-template #editMode>\r\n    <section class=\"col-8 pl-0 pr-3\">\r\n      <ta-question\r\n        [question]=\"question\"\r\n        (formReady)=\"questionFormReady($event)\"\r\n      ></ta-question>\r\n\r\n      <ng-container\r\n        *ngTemplateOutlet=\"\r\n          childQuestions;\r\n          context: {\r\n            children: question.children\r\n          }\r\n        \"\r\n      ></ng-container>\r\n\r\n      <ng-template #childQuestions let-children=\"children\">\r\n        <ng-container *ngFor=\"let conditionTree of children\">\r\n          <div [hidden]=\"!conditionTree.conditionFulfilled\">\r\n            <ng-container *ngFor=\"let childQuestion of conditionTree.children\">\r\n              <ta-question\r\n                class=\"d-block mt-4\"\r\n                [question]=\"childQuestion\"\r\n                (formReady)=\"childFormReady($event)\"\r\n              ></ta-question>\r\n\r\n              <ng-container\r\n                *ngTemplateOutlet=\"\r\n                  childQuestions;\r\n                  context: {\r\n                    children: childQuestion.children\r\n                  }\r\n                \"\r\n              ></ng-container>\r\n            </ng-container>\r\n          </div>\r\n        </ng-container>\r\n      </ng-template>\r\n    </section>\r\n\r\n    <div class=\"d-flex mt-3\">\r\n      <!-- todo : formControlName=\"answerDescription\" -->\r\n      <!-- answerDescription: null -->\r\n      <textarea\r\n        class=\"answer-description flex-fill px-2 py-1 mr-3 mb-1\"\r\n        placeholder=\"Describe the policy, process, procedure, or mechanism that is in place. (Optional)\"\r\n      ></textarea>\r\n\r\n      <div class=\"d-flex flex-column p-0 col-4\">\r\n        <ta-progressbar\r\n          *ngIf=\"question.questionDetails?.fileContainer?.isLoading\"\r\n          class=\"position-absolute w-100 p-1 mt-n4\"\r\n          type=\"info\"\r\n          [showValue]=\"true\"\r\n          [value]=\"question.questionDetails?.fileContainer?.progress\"\r\n        ></ta-progressbar>\r\n\r\n        <button\r\n          class=\"add-attachments-button position-absolute\"\r\n          taButton\r\n          taType=\"circle\"\r\n          (click)=\"onAddAttachments()\"\r\n        >\r\n          <ta-icon icon=\"plus-circle\"></ta-icon>\r\n        </button>\r\n\r\n        <ta-simple-file-upload\r\n          [id]=\"'file-upload-question-' + question?.nodeId\"\r\n          [attachments]=\"question.questionDetails?.attachments\"\r\n          [files]=\"question.questionDetails?.fileContainer?.files\"\r\n          [uploadHidden]=\"true\"\r\n          (afterFilesSelected)=\"afterFilesSelected.emit([question, $event])\"\r\n          (clickAttachment)=\"clickAttachment.emit($event)\"\r\n          (deleteAttachment)=\"deleteAttachment.emit([question, $event])\"\r\n        ></ta-simple-file-upload>\r\n      </div>\r\n    </div>\r\n  </ng-template>\r\n\r\n  <div class=\"actions m-4\">\r\n    <div class=\"d-flex\">\r\n      <ta-comments-popover\r\n        [entityId]=\"question.questionDetails?.recordQuestionEntityId\"\r\n      ></ta-comments-popover>\r\n\r\n      <ta-question-more-menu></ta-question-more-menu>\r\n\r\n      <ta-toggleswitch\r\n        *ngIf=\"reviewMode\"\r\n        theme=\"secondary\"\r\n        type=\"icon\"\r\n        class=\"mt-1\"\r\n      ></ta-toggleswitch>\r\n    </div>\r\n  </div>\r\n</div>\r\n",
                styles: [".card{box-shadow:0 1px 4px 0 rgba(0,0,0,.15)}.card .card-header{font-size:.875rem}button,input,textarea{outline:0!important;box-shadow:none!important}strong{font-weight:500}input::-ms-clear{display:none;width:0;height:0}input::-ms-reveal{display:none;width:0;height:0}input::-webkit-search-cancel-button,input::-webkit-search-decoration,input::-webkit-search-results-button,input::-webkit-search-results-decoration{display:none}:host .question-accordion{position:relative;border-radius:4px;border:1px solid #f3f3f3;background-color:#fff;padding:24px;box-shadow:2px 2px 4px 0 rgba(0,0,0,.05)}:host .question-accordion .actions{position:absolute;top:0;right:0}:host .question-accordion .review-info{width:80%}:host .question-accordion .review-info table{width:100%}:host .question-accordion .review-info table tr{border:1px solid #f3f3f3}:host .question-accordion .review-info table tr td{padding:12px 16px}:host .question-accordion .review-info table tr td:first-child{width:200px;font-weight:700}:host .question-accordion .answer-description{height:120px;border:1px solid #c2c2c2;border-radius:4px;resize:none}:host .question-accordion .add-attachments-button{top:-1px;right:0}"]
            }] }
];
/** @nocollapse */
QuestionAccordionComponent.ctorParameters = () => [
    { type: FormBuilder },
    { type: QuestionnaireUtilsService }
];
QuestionAccordionComponent.propDecorators = {
    question: [{ type: Input }],
    formReady: [{ type: Output }],
    afterFilesSelected: [{ type: Output }],
    deleteAttachment: [{ type: Output }],
    clickAttachment: [{ type: Output }],
    simpleFileUploadComponent: [{ type: ViewChild, args: [SimpleFileUploadComponent,] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlc3Rpb24tYWNjb3JkaW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3Zlcml0YXMtdWktbGlicmFyeS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3F1ZXN0aW9uLWFjY29yZGlvbi9xdWVzdGlvbi1hY2NvcmRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFFTCxNQUFNLEVBQ04sU0FBUyxFQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBYSxXQUFXLEVBQWEsTUFBTSxnQkFBZ0IsQ0FBQztBQVFuRSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzRCxPQUFPLEVBQ0wseUJBQXlCLEVBRTFCLE1BQU0sZ0JBQWdCLENBQUM7QUFPeEIsTUFBTSxPQUFPLDBCQUEwQjtJQWtDckMsWUFDVSxXQUF3QixFQUN4Qix5QkFBb0Q7UUFEcEQsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsOEJBQXlCLEdBQXpCLHlCQUF5QixDQUEyQjtRQW5DOUMsYUFBUSxHQUEwQjtZQUNoRCxNQUFNLEVBQUUsSUFBSTtZQUNaLFFBQVEsRUFBRSxJQUFJO1lBQ2QsZUFBZSxFQUFFO2dCQUNmLGtCQUFrQixFQUFFLElBQUk7Z0JBQ3hCLGtCQUFrQixFQUFFLElBQUk7Z0JBQ3hCLG1CQUFtQixFQUFFLElBQUk7Z0JBQ3pCLHVCQUF1QixFQUFFLEVBQUU7Z0JBQzNCLG9CQUFvQixFQUFFLElBQUk7Z0JBQzFCLHNCQUFzQixFQUFFLElBQUk7YUFDRDtZQUM3QixRQUFRLEVBQUUsRUFBRTtTQUNiLENBQUM7UUFFZSxjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQWEsQ0FBQztRQUMxQyx1QkFBa0IsR0FBRyxJQUFJLFlBQVksRUFFbkQsQ0FBQztRQUNhLHFCQUFnQixHQUFHLElBQUksWUFBWSxFQUVqRCxDQUFDO1FBQ2Esb0JBQWUsR0FBRyxJQUFJLFlBQVksRUFBYyxDQUFDO1FBZ0JoRSxJQUFJLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUM7WUFDbEQsUUFBUSxFQUFFLElBQUk7WUFDZCxRQUFRLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDO1lBQ3BDLGtCQUFrQixFQUFFLEtBQUs7U0FDMUIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQWJELElBQVksUUFBUTtRQUNsQixPQUFPLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFjLENBQUM7SUFDakUsQ0FBQztJQWFNLFFBQVE7UUFDYixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMscUJBQXFCLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUN4RCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDL0IsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUNuRSxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksaUJBQWlCLENBQUMsWUFBdUI7UUFDOUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUUsWUFBWSxDQUFDLENBQUM7SUFDbEUsQ0FBQztJQUVEOzs7T0FHRztJQUNJLGNBQWMsQ0FBQyxZQUF1QjtRQUMzQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRU0sZ0JBQWdCO1FBQ3JCLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxtQkFBbUIsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQ3pFLENBQUM7SUFFTyxnQkFBZ0IsQ0FBQyxLQUFVO1FBQ2pDLDhEQUE4RDtRQUM5RCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3RELE1BQU0sY0FBYyxHQUEyQixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN6RSxvRUFBb0U7WUFDcEUsY0FBYyxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxxQkFBcUIsQ0FDdEYsY0FBYyxFQUNkLElBQUksQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUM5QixDQUFDO1lBQ0YsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFVBQVUsQ0FDbkMsRUFBRSxrQkFBa0IsRUFBRSxjQUFjLENBQUMsa0JBQWtCLEVBQUUsRUFDekQsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQ3JCLENBQUM7U0FDSDtJQUNILENBQUM7OztZQTVGRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjtnQkFDakMsMjJIQUFrRDs7YUFFbkQ7Ozs7WUFsQm1CLFdBQVc7WUFRdEIseUJBQXlCOzs7dUJBWS9CLEtBQUs7d0JBY0wsTUFBTTtpQ0FDTixNQUFNOytCQUdOLE1BQU07OEJBR04sTUFBTTt3Q0FFTixTQUFTLFNBQUMseUJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDb21wb25lbnQsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LFxyXG4gIE9uSW5pdCxcclxuICBPdXRwdXQsXHJcbiAgVmlld0NoaWxkXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1BcnJheSwgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbmltcG9ydCB7XHJcbiAgQ29uZGl0aW9uVHJlZUludGVyZmFjZSxcclxuICBRdWVzdGlvbkRldGFpbHNJbnRlcmZhY2UsXHJcbiAgUXVlc3Rpb25UcmVlSW50ZXJmYWNlXHJcbn0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcyc7XHJcbmltcG9ydCB7IEF0dGFjaG1lbnQgfSBmcm9tICcuLi8uLi9tb2RlbHMnO1xyXG5pbXBvcnQgeyBRdWVzdGlvbm5haXJlVXRpbHNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMnO1xyXG5pbXBvcnQge1xyXG4gIFNpbXBsZUZpbGVVcGxvYWRDb21wb25lbnQsXHJcbiAgU2ltcGxlRmlsZVVwbG9hZEl0ZW1cclxufSBmcm9tICcuLi9maWxlLXVwbG9hZCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3RhLXF1ZXN0aW9uLWFjY29yZGlvbicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3F1ZXN0aW9uLWFjY29yZGlvbi5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vcXVlc3Rpb24tYWNjb3JkaW9uLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFF1ZXN0aW9uQWNjb3JkaW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKSBwdWJsaWMgcXVlc3Rpb246IFF1ZXN0aW9uVHJlZUludGVyZmFjZSA9IHtcclxuICAgIG5vZGVJZDogbnVsbCxcclxuICAgIG5vZGVUeXBlOiBudWxsLFxyXG4gICAgcXVlc3Rpb25EZXRhaWxzOiB7XHJcbiAgICAgIHF1ZXN0aW9uRGV0YWlsVGV4dDogbnVsbCxcclxuICAgICAgcXVlc3Rpb25EZXRhaWxUeXBlOiBudWxsLFxyXG4gICAgICBjb21tZW50TWVzc2FnZUNvdW50OiBudWxsLFxyXG4gICAgICBxdWVzdGlvbkRldGFpbFJlc3BvbnNlczogW10sXHJcbiAgICAgIHF1ZXN0aW9uRGV0YWlsQW5zd2VyOiBudWxsLFxyXG4gICAgICByZWNvcmRRdWVzdGlvbkVudGl0eUlkOiBudWxsXHJcbiAgICB9IGFzIFF1ZXN0aW9uRGV0YWlsc0ludGVyZmFjZSxcclxuICAgIGNoaWxkcmVuOiBbXVxyXG4gIH07XHJcblxyXG4gIEBPdXRwdXQoKSBwdWJsaWMgZm9ybVJlYWR5ID0gbmV3IEV2ZW50RW1pdHRlcjxGb3JtR3JvdXA+KCk7XHJcbiAgQE91dHB1dCgpIHB1YmxpYyBhZnRlckZpbGVzU2VsZWN0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPFxyXG4gICAgW1F1ZXN0aW9uVHJlZUludGVyZmFjZSwgU2ltcGxlRmlsZVVwbG9hZEl0ZW1bXV1cclxuICA+KCk7XHJcbiAgQE91dHB1dCgpIHB1YmxpYyBkZWxldGVBdHRhY2htZW50ID0gbmV3IEV2ZW50RW1pdHRlcjxcclxuICAgIFtRdWVzdGlvblRyZWVJbnRlcmZhY2UsIEF0dGFjaG1lbnRdXHJcbiAgPigpO1xyXG4gIEBPdXRwdXQoKSBwdWJsaWMgY2xpY2tBdHRhY2htZW50ID0gbmV3IEV2ZW50RW1pdHRlcjxBdHRhY2htZW50PigpO1xyXG5cclxuICBAVmlld0NoaWxkKFNpbXBsZUZpbGVVcGxvYWRDb21wb25lbnQpXHJcbiAgcHVibGljIHNpbXBsZUZpbGVVcGxvYWRDb21wb25lbnQ6IFNpbXBsZUZpbGVVcGxvYWRDb21wb25lbnQ7XHJcblxyXG4gIHB1YmxpYyBxdWVzdGlvbkFjY29yZGlvbkZvcm06IEZvcm1Hcm91cDtcclxuICBwdWJsaWMgcmV2aWV3TW9kZTogYm9vbGVhbjtcclxuXHJcbiAgcHJpdmF0ZSBnZXQgY2hpbGRyZW4oKTogRm9ybUFycmF5IHtcclxuICAgIHJldHVybiB0aGlzLnF1ZXN0aW9uQWNjb3JkaW9uRm9ybS5nZXQoJ2NoaWxkcmVuJykgYXMgRm9ybUFycmF5O1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlcixcclxuICAgIHByaXZhdGUgcXVlc3Rpb25uYWlyZVV0aWxzU2VydmljZTogUXVlc3Rpb25uYWlyZVV0aWxzU2VydmljZVxyXG4gICkge1xyXG4gICAgdGhpcy5xdWVzdGlvbkFjY29yZGlvbkZvcm0gPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHtcclxuICAgICAgcXVlc3Rpb246IG51bGwsXHJcbiAgICAgIGNoaWxkcmVuOiB0aGlzLmZvcm1CdWlsZGVyLmFycmF5KFtdKSxcclxuICAgICAgY29uZGl0aW9uRnVsZmlsbGVkOiBmYWxzZVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmZvcm1SZWFkeS5lbWl0KHRoaXMucXVlc3Rpb25BY2NvcmRpb25Gb3JtKTtcclxuICAgIHRoaXMucXVlc3Rpb25BY2NvcmRpb25Gb3JtLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUodmFsdWUgPT4ge1xyXG4gICAgICB0aGlzLmZvcm1WYWx1ZUNoYW5nZWQodmFsdWUpO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLnJldmlld01vZGUgPSB0aGlzLnF1ZXN0aW9ubmFpcmVVdGlsc1NlcnZpY2UuZ2V0UmV2aWV3TW9kZSgpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUHJvcGFnYXRlIG1haW4gcXVlc3Rpb25Gb3JtIHRvIHF1ZXN0aW9uQWNjb3JkaW9uRm9ybVxyXG4gICAqIEBwYXJhbSBxdWVzdGlvbkZvcm0gcXVlc3Rpb25Gb3JtXHJcbiAgICovXHJcbiAgcHVibGljIHF1ZXN0aW9uRm9ybVJlYWR5KHF1ZXN0aW9uRm9ybTogRm9ybUdyb3VwKTogdm9pZCB7XHJcbiAgICB0aGlzLnF1ZXN0aW9uQWNjb3JkaW9uRm9ybS5zZXRDb250cm9sKCdxdWVzdGlvbicsIHF1ZXN0aW9uRm9ybSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBQcm9wYWdhdGUgY2hpbGQgcXVlc3Rpb25Gb3JtIHRvIHF1ZXN0aW9uQWNjb3JkaW9uRm9ybVxyXG4gICAqIEBwYXJhbSBxdWVzdGlvbkZvcm0gcXVlc3Rpb25Gb3JtXHJcbiAgICovXHJcbiAgcHVibGljIGNoaWxkRm9ybVJlYWR5KHF1ZXN0aW9uRm9ybTogRm9ybUdyb3VwKTogdm9pZCB7XHJcbiAgICB0aGlzLmNoaWxkcmVuLnB1c2gocXVlc3Rpb25Gb3JtKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBvbkFkZEF0dGFjaG1lbnRzKCk6IHZvaWQge1xyXG4gICAgdGhpcy5zaW1wbGVGaWxlVXBsb2FkQ29tcG9uZW50LmZpbGVVcGxvYWRDb21wb25lbnQub3BlblVwbG9hZEJyb3dzZXIoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZm9ybVZhbHVlQ2hhbmdlZCh2YWx1ZTogYW55KTogdm9pZCB7XHJcbiAgICAvLyBDaGVjayBpZiBuZXcgYW5zd2VyIGZ1bGZpbGxzIHRoZSBjb25kaXRpb24gb2YgdGhpcyBxdWVzdGlvblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnF1ZXN0aW9uLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IGNvbmRpdGlvbkNoaWxkOiBDb25kaXRpb25UcmVlSW50ZXJmYWNlID0gdGhpcy5xdWVzdGlvbi5jaGlsZHJlbltpXTtcclxuICAgICAgLy8gc2V0IHRoaXMgc28gdGhhdCBVSSBjYW4gc3RvcmUgd2hldGhlciB0byBzaG93IGZvbGxvdyB1cCBxdWVzdGlvbnNcclxuICAgICAgY29uZGl0aW9uQ2hpbGQuY29uZGl0aW9uRnVsZmlsbGVkID0gdGhpcy5xdWVzdGlvbm5haXJlVXRpbHNTZXJ2aWNlLmdldENvbmRpdGlvbkZ1bGZpbGxlZChcclxuICAgICAgICBjb25kaXRpb25DaGlsZCxcclxuICAgICAgICB0aGlzLnF1ZXN0aW9uLnF1ZXN0aW9uRGV0YWlsc1xyXG4gICAgICApO1xyXG4gICAgICB0aGlzLnF1ZXN0aW9uQWNjb3JkaW9uRm9ybS5wYXRjaFZhbHVlKFxyXG4gICAgICAgIHsgY29uZGl0aW9uRnVsZmlsbGVkOiBjb25kaXRpb25DaGlsZC5jb25kaXRpb25GdWxmaWxsZWQgfSxcclxuICAgICAgICB7IGVtaXRFdmVudDogZmFsc2UgfVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=