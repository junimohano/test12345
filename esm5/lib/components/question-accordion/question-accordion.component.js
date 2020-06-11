import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { QuestionnaireUtilsService } from '../../services';
import { SimpleFileUploadComponent } from '../file-upload';
var QuestionAccordionComponent = /** @class */ (function () {
    function QuestionAccordionComponent(formBuilder, questionnaireUtilsService) {
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
    Object.defineProperty(QuestionAccordionComponent.prototype, "children", {
        get: function () {
            return this.questionAccordionForm.get('children');
        },
        enumerable: true,
        configurable: true
    });
    QuestionAccordionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.formReady.emit(this.questionAccordionForm);
        this.questionAccordionForm.valueChanges.subscribe(function (value) {
            _this.formValueChanged(value);
        });
        this.reviewMode = this.questionnaireUtilsService.getReviewMode();
    };
    /**
     * Propagate main questionForm to questionAccordionForm
     * @param questionForm questionForm
     */
    QuestionAccordionComponent.prototype.questionFormReady = function (questionForm) {
        this.questionAccordionForm.setControl('question', questionForm);
    };
    /**
     * Propagate child questionForm to questionAccordionForm
     * @param questionForm questionForm
     */
    QuestionAccordionComponent.prototype.childFormReady = function (questionForm) {
        this.children.push(questionForm);
    };
    QuestionAccordionComponent.prototype.onAddAttachments = function () {
        this.simpleFileUploadComponent.fileUploadComponent.openUploadBrowser();
    };
    QuestionAccordionComponent.prototype.formValueChanged = function (value) {
        // Check if new answer fulfills the condition of this question
        for (var i = 0; i < this.question.children.length; i++) {
            var conditionChild = this.question.children[i];
            // set this so that UI can store whether to show follow up questions
            conditionChild.conditionFulfilled = this.questionnaireUtilsService.getConditionFulfilled(conditionChild, this.question.questionDetails);
            this.questionAccordionForm.patchValue({ conditionFulfilled: conditionChild.conditionFulfilled }, { emitEvent: false });
        }
    };
    QuestionAccordionComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ta-question-accordion',
                    template: "<div class=\"question-accordion mb-3\">\r\n  <div class=\"review-info\" *ngIf=\"reviewMode; else editMode\">\r\n    <table>\r\n      <tr>\r\n        <td>\r\n          Response\r\n        </td>\r\n        <td>\r\n          --\r\n        </td>\r\n      </tr>\r\n      <tr>\r\n        <td>\r\n          Comments\r\n        </td>\r\n        <td>\r\n          --\r\n        </td>\r\n      </tr>\r\n      <tr>\r\n        <td>\r\n          Attachments\r\n        </td>\r\n        <td>--</td>\r\n      </tr>\r\n    </table>\r\n  </div>\r\n\r\n  <ng-template #editMode>\r\n    <section class=\"col-8 pl-0 pr-3\">\r\n      <ta-question\r\n        [question]=\"question\"\r\n        (formReady)=\"questionFormReady($event)\"\r\n      ></ta-question>\r\n\r\n      <ng-container\r\n        *ngTemplateOutlet=\"\r\n          childQuestions;\r\n          context: {\r\n            children: question.children\r\n          }\r\n        \"\r\n      ></ng-container>\r\n\r\n      <ng-template #childQuestions let-children=\"children\">\r\n        <ng-container *ngFor=\"let conditionTree of children\">\r\n          <div [hidden]=\"!conditionTree.conditionFulfilled\">\r\n            <ng-container *ngFor=\"let childQuestion of conditionTree.children\">\r\n              <ta-question\r\n                class=\"d-block mt-4\"\r\n                [question]=\"childQuestion\"\r\n                (formReady)=\"childFormReady($event)\"\r\n              ></ta-question>\r\n\r\n              <ng-container\r\n                *ngTemplateOutlet=\"\r\n                  childQuestions;\r\n                  context: {\r\n                    children: childQuestion.children\r\n                  }\r\n                \"\r\n              ></ng-container>\r\n            </ng-container>\r\n          </div>\r\n        </ng-container>\r\n      </ng-template>\r\n    </section>\r\n\r\n    <div class=\"d-flex mt-3\">\r\n      <!-- todo : formControlName=\"answerDescription\" -->\r\n      <!-- answerDescription: null -->\r\n      <textarea\r\n        class=\"answer-description flex-fill px-2 py-1 mr-3 mb-1\"\r\n        placeholder=\"Describe the policy, process, procedure, or mechanism that is in place. (Optional)\"\r\n      ></textarea>\r\n\r\n      <div class=\"d-flex flex-column p-0 col-4\">\r\n        <ta-progressbar\r\n          *ngIf=\"question.questionDetails?.fileContainer?.isLoading\"\r\n          class=\"position-absolute w-100 p-1 mt-n4\"\r\n          type=\"info\"\r\n          [showValue]=\"true\"\r\n          [value]=\"question.questionDetails?.fileContainer?.progress\"\r\n        ></ta-progressbar>\r\n\r\n        <button\r\n          class=\"add-attachments-button position-absolute\"\r\n          taButton\r\n          taType=\"circle\"\r\n          (click)=\"onAddAttachments()\"\r\n        >\r\n          <ta-icon icon=\"plus-circle\"></ta-icon>\r\n        </button>\r\n\r\n        <ta-simple-file-upload\r\n          [id]=\"'file-upload-question-' + question?.nodeId\"\r\n          [attachments]=\"question.questionDetails?.attachments\"\r\n          [files]=\"question.questionDetails?.fileContainer?.files\"\r\n          [uploadHidden]=\"true\"\r\n          (afterFilesSelected)=\"afterFilesSelected.emit([question, $event])\"\r\n          (clickAttachment)=\"clickAttachment.emit($event)\"\r\n          (deleteAttachment)=\"deleteAttachment.emit([question, $event])\"\r\n        ></ta-simple-file-upload>\r\n      </div>\r\n    </div>\r\n  </ng-template>\r\n\r\n  <div class=\"actions m-4\">\r\n    <div class=\"d-flex\">\r\n      <ta-comments-popover\r\n        [entityId]=\"question.questionDetails?.recordQuestionEntityId\"\r\n      ></ta-comments-popover>\r\n\r\n      <ta-question-more-menu></ta-question-more-menu>\r\n\r\n      <ta-toggleswitch\r\n        *ngIf=\"reviewMode\"\r\n        theme=\"secondary\"\r\n        type=\"icon\"\r\n        class=\"mt-1\"\r\n      ></ta-toggleswitch>\r\n    </div>\r\n  </div>\r\n</div>\r\n",
                    styles: [".card{box-shadow:0 1px 4px 0 rgba(0,0,0,.15)}.card .card-header{font-size:.875rem}button,input,textarea{outline:0!important;box-shadow:none!important}strong{font-weight:500}input::-ms-clear{display:none;width:0;height:0}input::-ms-reveal{display:none;width:0;height:0}input::-webkit-search-cancel-button,input::-webkit-search-decoration,input::-webkit-search-results-button,input::-webkit-search-results-decoration{display:none}:host .question-accordion{position:relative;border-radius:4px;border:1px solid #f3f3f3;background-color:#fff;padding:24px;box-shadow:2px 2px 4px 0 rgba(0,0,0,.05)}:host .question-accordion .actions{position:absolute;top:0;right:0}:host .question-accordion .review-info{width:80%}:host .question-accordion .review-info table{width:100%}:host .question-accordion .review-info table tr{border:1px solid #f3f3f3}:host .question-accordion .review-info table tr td{padding:12px 16px}:host .question-accordion .review-info table tr td:first-child{width:200px;font-weight:700}:host .question-accordion .answer-description{height:120px;border:1px solid #c2c2c2;border-radius:4px;resize:none}:host .question-accordion .add-attachments-button{top:-1px;right:0}"]
                }] }
    ];
    /** @nocollapse */
    QuestionAccordionComponent.ctorParameters = function () { return [
        { type: FormBuilder },
        { type: QuestionnaireUtilsService }
    ]; };
    QuestionAccordionComponent.propDecorators = {
        question: [{ type: Input }],
        formReady: [{ type: Output }],
        afterFilesSelected: [{ type: Output }],
        deleteAttachment: [{ type: Output }],
        clickAttachment: [{ type: Output }],
        simpleFileUploadComponent: [{ type: ViewChild, args: [SimpleFileUploadComponent,] }]
    };
    return QuestionAccordionComponent;
}());
export { QuestionAccordionComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlc3Rpb24tYWNjb3JkaW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3Zlcml0YXMtdWktbGlicmFyeS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3F1ZXN0aW9uLWFjY29yZGlvbi9xdWVzdGlvbi1hY2NvcmRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFFTCxNQUFNLEVBQ04sU0FBUyxFQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBYSxXQUFXLEVBQWEsTUFBTSxnQkFBZ0IsQ0FBQztBQVFuRSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzRCxPQUFPLEVBQ0wseUJBQXlCLEVBRTFCLE1BQU0sZ0JBQWdCLENBQUM7QUFFeEI7SUF1Q0Usb0NBQ1UsV0FBd0IsRUFDeEIseUJBQW9EO1FBRHBELGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLDhCQUF5QixHQUF6Qix5QkFBeUIsQ0FBMkI7UUFuQzlDLGFBQVEsR0FBMEI7WUFDaEQsTUFBTSxFQUFFLElBQUk7WUFDWixRQUFRLEVBQUUsSUFBSTtZQUNkLGVBQWUsRUFBRTtnQkFDZixrQkFBa0IsRUFBRSxJQUFJO2dCQUN4QixrQkFBa0IsRUFBRSxJQUFJO2dCQUN4QixtQkFBbUIsRUFBRSxJQUFJO2dCQUN6Qix1QkFBdUIsRUFBRSxFQUFFO2dCQUMzQixvQkFBb0IsRUFBRSxJQUFJO2dCQUMxQixzQkFBc0IsRUFBRSxJQUFJO2FBQ0Q7WUFDN0IsUUFBUSxFQUFFLEVBQUU7U0FDYixDQUFDO1FBRWUsY0FBUyxHQUFHLElBQUksWUFBWSxFQUFhLENBQUM7UUFDMUMsdUJBQWtCLEdBQUcsSUFBSSxZQUFZLEVBRW5ELENBQUM7UUFDYSxxQkFBZ0IsR0FBRyxJQUFJLFlBQVksRUFFakQsQ0FBQztRQUNhLG9CQUFlLEdBQUcsSUFBSSxZQUFZLEVBQWMsQ0FBQztRQWdCaEUsSUFBSSxDQUFDLHFCQUFxQixHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDO1lBQ2xELFFBQVEsRUFBRSxJQUFJO1lBQ2QsUUFBUSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQztZQUNwQyxrQkFBa0IsRUFBRSxLQUFLO1NBQzFCLENBQUMsQ0FBQztJQUNMLENBQUM7SUFiRCxzQkFBWSxnREFBUTthQUFwQjtZQUNFLE9BQU8sSUFBSSxDQUFDLHFCQUFxQixDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQWMsQ0FBQztRQUNqRSxDQUFDOzs7T0FBQTtJQWFNLDZDQUFRLEdBQWY7UUFBQSxpQkFNQztRQUxDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLFVBQUEsS0FBSztZQUNyRCxLQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDL0IsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUNuRSxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksc0RBQWlCLEdBQXhCLFVBQXlCLFlBQXVCO1FBQzlDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxVQUFVLENBQUMsVUFBVSxFQUFFLFlBQVksQ0FBQyxDQUFDO0lBQ2xFLENBQUM7SUFFRDs7O09BR0c7SUFDSSxtREFBYyxHQUFyQixVQUFzQixZQUF1QjtRQUMzQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRU0scURBQWdCLEdBQXZCO1FBQ0UsSUFBSSxDQUFDLHlCQUF5QixDQUFDLG1CQUFtQixDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDekUsQ0FBQztJQUVPLHFEQUFnQixHQUF4QixVQUF5QixLQUFVO1FBQ2pDLDhEQUE4RDtRQUM5RCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3RELElBQU0sY0FBYyxHQUEyQixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN6RSxvRUFBb0U7WUFDcEUsY0FBYyxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxxQkFBcUIsQ0FDdEYsY0FBYyxFQUNkLElBQUksQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUM5QixDQUFDO1lBQ0YsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFVBQVUsQ0FDbkMsRUFBRSxrQkFBa0IsRUFBRSxjQUFjLENBQUMsa0JBQWtCLEVBQUUsRUFDekQsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQ3JCLENBQUM7U0FDSDtJQUNILENBQUM7O2dCQTVGRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjtvQkFDakMsMjJIQUFrRDs7aUJBRW5EOzs7O2dCQWxCbUIsV0FBVztnQkFRdEIseUJBQXlCOzs7MkJBWS9CLEtBQUs7NEJBY0wsTUFBTTtxQ0FDTixNQUFNO21DQUdOLE1BQU07a0NBR04sTUFBTTs0Q0FFTixTQUFTLFNBQUMseUJBQXlCOztJQWdFdEMsaUNBQUM7Q0FBQSxBQTdGRCxJQTZGQztTQXhGWSwwQkFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5wdXQsXHJcbiAgT25Jbml0LFxyXG4gIE91dHB1dCxcclxuICBWaWV3Q2hpbGRcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybUFycmF5LCBGb3JtQnVpbGRlciwgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuaW1wb3J0IHtcclxuICBDb25kaXRpb25UcmVlSW50ZXJmYWNlLFxyXG4gIFF1ZXN0aW9uRGV0YWlsc0ludGVyZmFjZSxcclxuICBRdWVzdGlvblRyZWVJbnRlcmZhY2VcclxufSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzJztcclxuaW1wb3J0IHsgQXR0YWNobWVudCB9IGZyb20gJy4uLy4uL21vZGVscyc7XHJcbmltcG9ydCB7IFF1ZXN0aW9ubmFpcmVVdGlsc1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcyc7XHJcbmltcG9ydCB7XHJcbiAgU2ltcGxlRmlsZVVwbG9hZENvbXBvbmVudCxcclxuICBTaW1wbGVGaWxlVXBsb2FkSXRlbVxyXG59IGZyb20gJy4uL2ZpbGUtdXBsb2FkJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAndGEtcXVlc3Rpb24tYWNjb3JkaW9uJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vcXVlc3Rpb24tYWNjb3JkaW9uLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9xdWVzdGlvbi1hY2NvcmRpb24uY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUXVlc3Rpb25BY2NvcmRpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBxdWVzdGlvbjogUXVlc3Rpb25UcmVlSW50ZXJmYWNlID0ge1xyXG4gICAgbm9kZUlkOiBudWxsLFxyXG4gICAgbm9kZVR5cGU6IG51bGwsXHJcbiAgICBxdWVzdGlvbkRldGFpbHM6IHtcclxuICAgICAgcXVlc3Rpb25EZXRhaWxUZXh0OiBudWxsLFxyXG4gICAgICBxdWVzdGlvbkRldGFpbFR5cGU6IG51bGwsXHJcbiAgICAgIGNvbW1lbnRNZXNzYWdlQ291bnQ6IG51bGwsXHJcbiAgICAgIHF1ZXN0aW9uRGV0YWlsUmVzcG9uc2VzOiBbXSxcclxuICAgICAgcXVlc3Rpb25EZXRhaWxBbnN3ZXI6IG51bGwsXHJcbiAgICAgIHJlY29yZFF1ZXN0aW9uRW50aXR5SWQ6IG51bGxcclxuICAgIH0gYXMgUXVlc3Rpb25EZXRhaWxzSW50ZXJmYWNlLFxyXG4gICAgY2hpbGRyZW46IFtdXHJcbiAgfTtcclxuXHJcbiAgQE91dHB1dCgpIHB1YmxpYyBmb3JtUmVhZHkgPSBuZXcgRXZlbnRFbWl0dGVyPEZvcm1Hcm91cD4oKTtcclxuICBAT3V0cHV0KCkgcHVibGljIGFmdGVyRmlsZXNTZWxlY3RlZCA9IG5ldyBFdmVudEVtaXR0ZXI8XHJcbiAgICBbUXVlc3Rpb25UcmVlSW50ZXJmYWNlLCBTaW1wbGVGaWxlVXBsb2FkSXRlbVtdXVxyXG4gID4oKTtcclxuICBAT3V0cHV0KCkgcHVibGljIGRlbGV0ZUF0dGFjaG1lbnQgPSBuZXcgRXZlbnRFbWl0dGVyPFxyXG4gICAgW1F1ZXN0aW9uVHJlZUludGVyZmFjZSwgQXR0YWNobWVudF1cclxuICA+KCk7XHJcbiAgQE91dHB1dCgpIHB1YmxpYyBjbGlja0F0dGFjaG1lbnQgPSBuZXcgRXZlbnRFbWl0dGVyPEF0dGFjaG1lbnQ+KCk7XHJcblxyXG4gIEBWaWV3Q2hpbGQoU2ltcGxlRmlsZVVwbG9hZENvbXBvbmVudClcclxuICBwdWJsaWMgc2ltcGxlRmlsZVVwbG9hZENvbXBvbmVudDogU2ltcGxlRmlsZVVwbG9hZENvbXBvbmVudDtcclxuXHJcbiAgcHVibGljIHF1ZXN0aW9uQWNjb3JkaW9uRm9ybTogRm9ybUdyb3VwO1xyXG4gIHB1YmxpYyByZXZpZXdNb2RlOiBib29sZWFuO1xyXG5cclxuICBwcml2YXRlIGdldCBjaGlsZHJlbigpOiBGb3JtQXJyYXkge1xyXG4gICAgcmV0dXJuIHRoaXMucXVlc3Rpb25BY2NvcmRpb25Gb3JtLmdldCgnY2hpbGRyZW4nKSBhcyBGb3JtQXJyYXk7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyLFxyXG4gICAgcHJpdmF0ZSBxdWVzdGlvbm5haXJlVXRpbHNTZXJ2aWNlOiBRdWVzdGlvbm5haXJlVXRpbHNTZXJ2aWNlXHJcbiAgKSB7XHJcbiAgICB0aGlzLnF1ZXN0aW9uQWNjb3JkaW9uRm9ybSA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xyXG4gICAgICBxdWVzdGlvbjogbnVsbCxcclxuICAgICAgY2hpbGRyZW46IHRoaXMuZm9ybUJ1aWxkZXIuYXJyYXkoW10pLFxyXG4gICAgICBjb25kaXRpb25GdWxmaWxsZWQ6IGZhbHNlXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuZm9ybVJlYWR5LmVtaXQodGhpcy5xdWVzdGlvbkFjY29yZGlvbkZvcm0pO1xyXG4gICAgdGhpcy5xdWVzdGlvbkFjY29yZGlvbkZvcm0udmFsdWVDaGFuZ2VzLnN1YnNjcmliZSh2YWx1ZSA9PiB7XHJcbiAgICAgIHRoaXMuZm9ybVZhbHVlQ2hhbmdlZCh2YWx1ZSk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMucmV2aWV3TW9kZSA9IHRoaXMucXVlc3Rpb25uYWlyZVV0aWxzU2VydmljZS5nZXRSZXZpZXdNb2RlKCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBQcm9wYWdhdGUgbWFpbiBxdWVzdGlvbkZvcm0gdG8gcXVlc3Rpb25BY2NvcmRpb25Gb3JtXHJcbiAgICogQHBhcmFtIHF1ZXN0aW9uRm9ybSBxdWVzdGlvbkZvcm1cclxuICAgKi9cclxuICBwdWJsaWMgcXVlc3Rpb25Gb3JtUmVhZHkocXVlc3Rpb25Gb3JtOiBGb3JtR3JvdXApOiB2b2lkIHtcclxuICAgIHRoaXMucXVlc3Rpb25BY2NvcmRpb25Gb3JtLnNldENvbnRyb2woJ3F1ZXN0aW9uJywgcXVlc3Rpb25Gb3JtKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFByb3BhZ2F0ZSBjaGlsZCBxdWVzdGlvbkZvcm0gdG8gcXVlc3Rpb25BY2NvcmRpb25Gb3JtXHJcbiAgICogQHBhcmFtIHF1ZXN0aW9uRm9ybSBxdWVzdGlvbkZvcm1cclxuICAgKi9cclxuICBwdWJsaWMgY2hpbGRGb3JtUmVhZHkocXVlc3Rpb25Gb3JtOiBGb3JtR3JvdXApOiB2b2lkIHtcclxuICAgIHRoaXMuY2hpbGRyZW4ucHVzaChxdWVzdGlvbkZvcm0pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG9uQWRkQXR0YWNobWVudHMoKTogdm9pZCB7XHJcbiAgICB0aGlzLnNpbXBsZUZpbGVVcGxvYWRDb21wb25lbnQuZmlsZVVwbG9hZENvbXBvbmVudC5vcGVuVXBsb2FkQnJvd3NlcigpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBmb3JtVmFsdWVDaGFuZ2VkKHZhbHVlOiBhbnkpOiB2b2lkIHtcclxuICAgIC8vIENoZWNrIGlmIG5ldyBhbnN3ZXIgZnVsZmlsbHMgdGhlIGNvbmRpdGlvbiBvZiB0aGlzIHF1ZXN0aW9uXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucXVlc3Rpb24uY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc3QgY29uZGl0aW9uQ2hpbGQ6IENvbmRpdGlvblRyZWVJbnRlcmZhY2UgPSB0aGlzLnF1ZXN0aW9uLmNoaWxkcmVuW2ldO1xyXG4gICAgICAvLyBzZXQgdGhpcyBzbyB0aGF0IFVJIGNhbiBzdG9yZSB3aGV0aGVyIHRvIHNob3cgZm9sbG93IHVwIHF1ZXN0aW9uc1xyXG4gICAgICBjb25kaXRpb25DaGlsZC5jb25kaXRpb25GdWxmaWxsZWQgPSB0aGlzLnF1ZXN0aW9ubmFpcmVVdGlsc1NlcnZpY2UuZ2V0Q29uZGl0aW9uRnVsZmlsbGVkKFxyXG4gICAgICAgIGNvbmRpdGlvbkNoaWxkLFxyXG4gICAgICAgIHRoaXMucXVlc3Rpb24ucXVlc3Rpb25EZXRhaWxzXHJcbiAgICAgICk7XHJcbiAgICAgIHRoaXMucXVlc3Rpb25BY2NvcmRpb25Gb3JtLnBhdGNoVmFsdWUoXHJcbiAgICAgICAgeyBjb25kaXRpb25GdWxmaWxsZWQ6IGNvbmRpdGlvbkNoaWxkLmNvbmRpdGlvbkZ1bGZpbGxlZCB9LFxyXG4gICAgICAgIHsgZW1pdEV2ZW50OiBmYWxzZSB9XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==