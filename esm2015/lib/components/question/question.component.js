import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { QuestionnaireViewModeEnum, QuestionTypeEnum } from '../../enums';
import { QuestionnaireUtilsService } from '../../services';
export class QuestionComponent {
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
        this.questionTypeEnum = QuestionTypeEnum;
        this.answerText = '';
        this.questionForm = this.formBuilder.group({
            answer: null,
            questionId: null
        });
        this.viewMode = this.questionnaireUtilsService.getViewMode();
    }
    ngOnInit() {
        this.processSelectedOption();
        this.formReady.emit(this.questionForm);
        Object.keys(this.questionForm.controls).forEach(key => this.questionForm.controls[key].valueChanges.subscribe(value => this.formValueOfAnswerChanged(value)));
        this.questionnaireUtilsService
            .getViewModeObservable()
            .subscribe((viewMode) => {
            this.viewMode = viewMode;
        });
    }
    isQuestionVisible() {
        switch (this.viewMode) {
            case QuestionnaireViewModeEnum.All:
                return true;
            case QuestionnaireViewModeEnum.Answered:
                return this.question.isAnswered;
            case QuestionnaireViewModeEnum.Unanswered:
                return !this.question.isAnswered;
            default:
                return true;
        }
    }
    /**
     * Check if question was previously answered, and sync it to the form object.
     */
    processSelectedOption() {
        this.questionForm.patchValue({
            questionId: this.question.nodeId,
            answerDescription: this.question.questionDetails.answerDescription
        }, { emitEvent: false });
        const questionAnswer = this.questionnaireUtilsService.getQuestionAnswer(this.question.questionDetails);
        if (questionAnswer) {
            this.questionForm.patchValue({
                answer: questionAnswer
            }, { emitEvent: false });
            this.question.isAnswered = true;
            this.questionAnswer = questionAnswer;
        }
    }
    /**
     * Depending on question type, update the question object
     * @param value form value
     */
    formValueOfAnswerChanged(value) {
        switch (this.question.questionDetails.questionDetailType) {
            case QuestionTypeEnum.SingleSelect:
                // Loop through responses and if previously selected option was found, patch value
                const questionDetailResponses = this.question.questionDetails
                    .questionDetailResponses;
                if (questionDetailResponses) {
                    // Mark the current choice false
                    const prevResponse = questionDetailResponses.find(response => {
                        return response.questionDetailResponsesSelected;
                    });
                    if (prevResponse) {
                        prevResponse.questionDetailResponsesSelected = false;
                    }
                    // Mark the new choice true
                    const newResponse = questionDetailResponses.find(response => {
                        return (response.questionDetailResponsesId ===
                            value.questionDetailResponsesId);
                    });
                    newResponse.questionDetailResponsesSelected = true;
                }
                break;
            case QuestionTypeEnum.MultiSelect:
                if (this.question.questionDetails.questionDetailResponses) {
                    const questionDetailResponse = this.question.questionDetails.questionDetailResponses.find(response => response.questionDetailResponsesId ===
                        value.questionDetailResponsesId);
                    questionDetailResponse.questionDetailResponsesSelected = !questionDetailResponse.questionDetailResponsesSelected;
                }
                break;
            case QuestionTypeEnum.Text:
                // Update value of questionDetailAnswerText on data object
                this.question.questionDetails.questionDetailAnswerText = value;
                break;
            default:
                break;
        }
        // Set answered flag
        if (value && value.answer) {
            this.question.isAnswered = true;
        }
        else {
            this.question.isAnswered = false;
        }
    }
}
QuestionComponent.decorators = [
    { type: Component, args: [{
                selector: 'ta-question',
                template: "<div class=\"question mb-3\" [hidden]=\"!isQuestionVisible()\">\r\n  <div class=\"d-flex\">\r\n    <div\r\n      class=\"question-text mb-3 p-0 mr-auto\"\r\n      [innerHTML]=\"question.questionDetails?.questionDetailText\"\r\n    ></div>\r\n  </div>\r\n\r\n  <form\r\n    [ngSwitch]=\"question.questionDetails.questionDetailType\"\r\n    [formGroup]=\"questionForm\"\r\n  >\r\n    <ta-single-select\r\n      *ngSwitchCase=\"questionTypeEnum.SingleSelect\"\r\n      formControlName=\"answer\"\r\n      [question]=\"question\"\r\n    ></ta-single-select>\r\n\r\n    <ta-multi-select\r\n      *ngSwitchCase=\"questionTypeEnum.MultiSelect\"\r\n      formControlName=\"answer\"\r\n      [question]=\"question\"\r\n    ></ta-multi-select>\r\n\r\n    <ta-text\r\n      *ngSwitchCase=\"questionTypeEnum.Text\"\r\n      formControlName=\"answer\"\r\n      [question]=\"question\"\r\n    ></ta-text>\r\n  </form>\r\n</div>\r\n",
                styles: [".card{box-shadow:0 1px 4px 0 rgba(0,0,0,.15)}.card .card-header{font-size:.875rem}button,input,textarea{outline:0!important;box-shadow:none!important}strong{font-weight:500}input::-ms-clear{display:none;width:0;height:0}input::-ms-reveal{display:none;width:0;height:0}input::-webkit-search-cancel-button,input::-webkit-search-decoration,input::-webkit-search-results-button,input::-webkit-search-results-decoration{display:none}:host .question .question-text{display:inline-block;font-size:16px;color:#333;max-width:860px}:host .question .answer-description{height:120px;border:1px solid #c2c2c2;border-radius:4px;resize:none}:host .question .add-attachments-button{top:-1px;right:0}"]
            }] }
];
/** @nocollapse */
QuestionComponent.ctorParameters = () => [
    { type: FormBuilder },
    { type: QuestionnaireUtilsService }
];
QuestionComponent.propDecorators = {
    question: [{ type: Input }],
    formReady: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlc3Rpb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vdmVyaXRhcy11aS1saWJyYXJ5LyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvcXVlc3Rpb24vcXVlc3Rpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0UsT0FBTyxFQUFFLFdBQVcsRUFBYSxNQUFNLGdCQUFnQixDQUFDO0FBRXhELE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUsxRSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQU8zRCxNQUFNLE9BQU8saUJBQWlCO0lBdUI1QixZQUNVLFdBQXdCLEVBQ3hCLHlCQUFvRDtRQURwRCxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4Qiw4QkFBeUIsR0FBekIseUJBQXlCLENBQTJCO1FBeEI5QyxhQUFRLEdBQTBCO1lBQ2hELE1BQU0sRUFBRSxJQUFJO1lBQ1osUUFBUSxFQUFFLElBQUk7WUFDZCxlQUFlLEVBQUU7Z0JBQ2Ysa0JBQWtCLEVBQUUsSUFBSTtnQkFDeEIsa0JBQWtCLEVBQUUsSUFBSTtnQkFDeEIsbUJBQW1CLEVBQUUsSUFBSTtnQkFDekIsdUJBQXVCLEVBQUUsRUFBRTtnQkFDM0Isb0JBQW9CLEVBQUUsSUFBSTtnQkFDMUIsc0JBQXNCLEVBQUUsSUFBSTthQUNEO1lBQzdCLFFBQVEsRUFBRSxFQUFFO1NBQ2IsQ0FBQztRQUVlLGNBQVMsR0FBRyxJQUFJLFlBQVksRUFBYSxDQUFDO1FBRTNDLHFCQUFnQixHQUFHLGdCQUFnQixDQUFDO1FBQzdDLGVBQVUsR0FBRyxFQUFFLENBQUM7UUFTckIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQztZQUN6QyxNQUFNLEVBQUUsSUFBSTtZQUNaLFVBQVUsRUFBRSxJQUFJO1NBQ2pCLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLHlCQUF5QixDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQy9ELENBQUM7SUFFTSxRQUFRO1FBQ2IsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7UUFDN0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBRXZDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FDcEQsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUM3RCxJQUFJLENBQUMsd0JBQXdCLENBQUMsS0FBSyxDQUFDLENBQ3JDLENBQ0YsQ0FBQztRQUVGLElBQUksQ0FBQyx5QkFBeUI7YUFDM0IscUJBQXFCLEVBQUU7YUFDdkIsU0FBUyxDQUFDLENBQUMsUUFBbUMsRUFBRSxFQUFFO1lBQ2pELElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQzNCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVNLGlCQUFpQjtRQUN0QixRQUFRLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDckIsS0FBSyx5QkFBeUIsQ0FBQyxHQUFHO2dCQUNoQyxPQUFPLElBQUksQ0FBQztZQUNkLEtBQUsseUJBQXlCLENBQUMsUUFBUTtnQkFDckMsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQztZQUNsQyxLQUFLLHlCQUF5QixDQUFDLFVBQVU7Z0JBQ3ZDLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQztZQUNuQztnQkFDRSxPQUFPLElBQUksQ0FBQztTQUNmO0lBQ0gsQ0FBQztJQUVEOztPQUVHO0lBQ0sscUJBQXFCO1FBQzNCLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUMxQjtZQUNFLFVBQVUsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU07WUFDaEMsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsaUJBQWlCO1NBQ25FLEVBQ0QsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQ3JCLENBQUM7UUFDRixNQUFNLGNBQWMsR0FBRyxJQUFJLENBQUMseUJBQXlCLENBQUMsaUJBQWlCLENBQ3JFLElBQUksQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUM5QixDQUFDO1FBQ0YsSUFBSSxjQUFjLEVBQUU7WUFDbEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQzFCO2dCQUNFLE1BQU0sRUFBRSxjQUFjO2FBQ3ZCLEVBQ0QsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQ3JCLENBQUM7WUFDRixJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7WUFDaEMsSUFBSSxDQUFDLGNBQWMsR0FBRyxjQUFjLENBQUM7U0FDdEM7SUFDSCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ssd0JBQXdCLENBQUMsS0FBVTtRQUN6QyxRQUFRLElBQUksQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLGtCQUFrQixFQUFFO1lBQ3hELEtBQUssZ0JBQWdCLENBQUMsWUFBWTtnQkFDaEMsa0ZBQWtGO2dCQUNsRixNQUFNLHVCQUF1QixHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsZUFBZTtxQkFDMUQsdUJBQXVCLENBQUM7Z0JBQzNCLElBQUksdUJBQXVCLEVBQUU7b0JBQzNCLGdDQUFnQztvQkFDaEMsTUFBTSxZQUFZLEdBQUcsdUJBQXVCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFO3dCQUMzRCxPQUFPLFFBQVEsQ0FBQywrQkFBK0IsQ0FBQztvQkFDbEQsQ0FBQyxDQUFDLENBQUM7b0JBQ0gsSUFBSSxZQUFZLEVBQUU7d0JBQ2hCLFlBQVksQ0FBQywrQkFBK0IsR0FBRyxLQUFLLENBQUM7cUJBQ3REO29CQUVELDJCQUEyQjtvQkFDM0IsTUFBTSxXQUFXLEdBQUcsdUJBQXVCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFO3dCQUMxRCxPQUFPLENBQ0wsUUFBUSxDQUFDLHlCQUF5Qjs0QkFDbEMsS0FBSyxDQUFDLHlCQUF5QixDQUNoQyxDQUFDO29CQUNKLENBQUMsQ0FBQyxDQUFDO29CQUNILFdBQVcsQ0FBQywrQkFBK0IsR0FBRyxJQUFJLENBQUM7aUJBQ3BEO2dCQUNELE1BQU07WUFFUixLQUFLLGdCQUFnQixDQUFDLFdBQVc7Z0JBQy9CLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsdUJBQXVCLEVBQUU7b0JBQ3pELE1BQU0sc0JBQXNCLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUN2RixRQUFRLENBQUMsRUFBRSxDQUNULFFBQVEsQ0FBQyx5QkFBeUI7d0JBQ2xDLEtBQUssQ0FBQyx5QkFBeUIsQ0FDbEMsQ0FBQztvQkFDRixzQkFBc0IsQ0FBQywrQkFBK0IsR0FBRyxDQUFDLHNCQUFzQixDQUFDLCtCQUErQixDQUFDO2lCQUNsSDtnQkFDRCxNQUFNO1lBRVIsS0FBSyxnQkFBZ0IsQ0FBQyxJQUFJO2dCQUN4QiwwREFBMEQ7Z0JBQzFELElBQUksQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLHdCQUF3QixHQUFHLEtBQUssQ0FBQztnQkFDL0QsTUFBTTtZQUVSO2dCQUNFLE1BQU07U0FDVDtRQUVELG9CQUFvQjtRQUNwQixJQUFJLEtBQUssSUFBSSxLQUFLLENBQUMsTUFBTSxFQUFFO1lBQ3pCLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztTQUNqQzthQUFNO1lBQ0wsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1NBQ2xDO0lBQ0gsQ0FBQzs7O1lBdkpGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsYUFBYTtnQkFDdkIsaTZCQUF3Qzs7YUFFekM7Ozs7WUFiUSxXQUFXO1lBT1gseUJBQXlCOzs7dUJBUS9CLEtBQUs7d0JBY0wsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbmltcG9ydCB7IFF1ZXN0aW9ubmFpcmVWaWV3TW9kZUVudW0sIFF1ZXN0aW9uVHlwZUVudW0gfSBmcm9tICcuLi8uLi9lbnVtcyc7XHJcbmltcG9ydCB7XHJcbiAgUXVlc3Rpb25EZXRhaWxzSW50ZXJmYWNlLFxyXG4gIFF1ZXN0aW9uVHJlZUludGVyZmFjZVxyXG59IGZyb20gJy4uLy4uL2ludGVyZmFjZXMnO1xyXG5pbXBvcnQgeyBRdWVzdGlvbm5haXJlVXRpbHNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICd0YS1xdWVzdGlvbicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3F1ZXN0aW9uLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9xdWVzdGlvbi5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBRdWVzdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KCkgcHVibGljIHF1ZXN0aW9uOiBRdWVzdGlvblRyZWVJbnRlcmZhY2UgPSB7XHJcbiAgICBub2RlSWQ6IG51bGwsXHJcbiAgICBub2RlVHlwZTogbnVsbCxcclxuICAgIHF1ZXN0aW9uRGV0YWlsczoge1xyXG4gICAgICBxdWVzdGlvbkRldGFpbFRleHQ6IG51bGwsXHJcbiAgICAgIHF1ZXN0aW9uRGV0YWlsVHlwZTogbnVsbCxcclxuICAgICAgY29tbWVudE1lc3NhZ2VDb3VudDogbnVsbCxcclxuICAgICAgcXVlc3Rpb25EZXRhaWxSZXNwb25zZXM6IFtdLFxyXG4gICAgICBxdWVzdGlvbkRldGFpbEFuc3dlcjogbnVsbCxcclxuICAgICAgcmVjb3JkUXVlc3Rpb25FbnRpdHlJZDogbnVsbFxyXG4gICAgfSBhcyBRdWVzdGlvbkRldGFpbHNJbnRlcmZhY2UsXHJcbiAgICBjaGlsZHJlbjogW11cclxuICB9O1xyXG5cclxuICBAT3V0cHV0KCkgcHVibGljIGZvcm1SZWFkeSA9IG5ldyBFdmVudEVtaXR0ZXI8Rm9ybUdyb3VwPigpO1xyXG5cclxuICBwdWJsaWMgcmVhZG9ubHkgcXVlc3Rpb25UeXBlRW51bSA9IFF1ZXN0aW9uVHlwZUVudW07XHJcbiAgcHVibGljIGFuc3dlclRleHQgPSAnJztcclxuICBwdWJsaWMgcXVlc3Rpb25Gb3JtOiBGb3JtR3JvdXA7XHJcbiAgcHVibGljIHZpZXdNb2RlOiBRdWVzdGlvbm5haXJlVmlld01vZGVFbnVtO1xyXG4gIHB1YmxpYyBxdWVzdGlvbkFuc3dlcjogYW55O1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyLFxyXG4gICAgcHJpdmF0ZSBxdWVzdGlvbm5haXJlVXRpbHNTZXJ2aWNlOiBRdWVzdGlvbm5haXJlVXRpbHNTZXJ2aWNlXHJcbiAgKSB7XHJcbiAgICB0aGlzLnF1ZXN0aW9uRm9ybSA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xyXG4gICAgICBhbnN3ZXI6IG51bGwsXHJcbiAgICAgIHF1ZXN0aW9uSWQ6IG51bGxcclxuICAgIH0pO1xyXG4gICAgdGhpcy52aWV3TW9kZSA9IHRoaXMucXVlc3Rpb25uYWlyZVV0aWxzU2VydmljZS5nZXRWaWV3TW9kZSgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5wcm9jZXNzU2VsZWN0ZWRPcHRpb24oKTtcclxuICAgIHRoaXMuZm9ybVJlYWR5LmVtaXQodGhpcy5xdWVzdGlvbkZvcm0pO1xyXG5cclxuICAgIE9iamVjdC5rZXlzKHRoaXMucXVlc3Rpb25Gb3JtLmNvbnRyb2xzKS5mb3JFYWNoKGtleSA9PlxyXG4gICAgICB0aGlzLnF1ZXN0aW9uRm9ybS5jb250cm9sc1trZXldLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUodmFsdWUgPT5cclxuICAgICAgICB0aGlzLmZvcm1WYWx1ZU9mQW5zd2VyQ2hhbmdlZCh2YWx1ZSlcclxuICAgICAgKVxyXG4gICAgKTtcclxuXHJcbiAgICB0aGlzLnF1ZXN0aW9ubmFpcmVVdGlsc1NlcnZpY2VcclxuICAgICAgLmdldFZpZXdNb2RlT2JzZXJ2YWJsZSgpXHJcbiAgICAgIC5zdWJzY3JpYmUoKHZpZXdNb2RlOiBRdWVzdGlvbm5haXJlVmlld01vZGVFbnVtKSA9PiB7XHJcbiAgICAgICAgdGhpcy52aWV3TW9kZSA9IHZpZXdNb2RlO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBpc1F1ZXN0aW9uVmlzaWJsZSgpOiBib29sZWFuIHtcclxuICAgIHN3aXRjaCAodGhpcy52aWV3TW9kZSkge1xyXG4gICAgICBjYXNlIFF1ZXN0aW9ubmFpcmVWaWV3TW9kZUVudW0uQWxsOlxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICBjYXNlIFF1ZXN0aW9ubmFpcmVWaWV3TW9kZUVudW0uQW5zd2VyZWQ6XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucXVlc3Rpb24uaXNBbnN3ZXJlZDtcclxuICAgICAgY2FzZSBRdWVzdGlvbm5haXJlVmlld01vZGVFbnVtLlVuYW5zd2VyZWQ6XHJcbiAgICAgICAgcmV0dXJuICF0aGlzLnF1ZXN0aW9uLmlzQW5zd2VyZWQ7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDaGVjayBpZiBxdWVzdGlvbiB3YXMgcHJldmlvdXNseSBhbnN3ZXJlZCwgYW5kIHN5bmMgaXQgdG8gdGhlIGZvcm0gb2JqZWN0LlxyXG4gICAqL1xyXG4gIHByaXZhdGUgcHJvY2Vzc1NlbGVjdGVkT3B0aW9uKCk6IHZvaWQge1xyXG4gICAgdGhpcy5xdWVzdGlvbkZvcm0ucGF0Y2hWYWx1ZShcclxuICAgICAge1xyXG4gICAgICAgIHF1ZXN0aW9uSWQ6IHRoaXMucXVlc3Rpb24ubm9kZUlkLFxyXG4gICAgICAgIGFuc3dlckRlc2NyaXB0aW9uOiB0aGlzLnF1ZXN0aW9uLnF1ZXN0aW9uRGV0YWlscy5hbnN3ZXJEZXNjcmlwdGlvblxyXG4gICAgICB9LFxyXG4gICAgICB7IGVtaXRFdmVudDogZmFsc2UgfVxyXG4gICAgKTtcclxuICAgIGNvbnN0IHF1ZXN0aW9uQW5zd2VyID0gdGhpcy5xdWVzdGlvbm5haXJlVXRpbHNTZXJ2aWNlLmdldFF1ZXN0aW9uQW5zd2VyKFxyXG4gICAgICB0aGlzLnF1ZXN0aW9uLnF1ZXN0aW9uRGV0YWlsc1xyXG4gICAgKTtcclxuICAgIGlmIChxdWVzdGlvbkFuc3dlcikge1xyXG4gICAgICB0aGlzLnF1ZXN0aW9uRm9ybS5wYXRjaFZhbHVlKFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGFuc3dlcjogcXVlc3Rpb25BbnN3ZXJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHsgZW1pdEV2ZW50OiBmYWxzZSB9XHJcbiAgICAgICk7XHJcbiAgICAgIHRoaXMucXVlc3Rpb24uaXNBbnN3ZXJlZCA9IHRydWU7XHJcbiAgICAgIHRoaXMucXVlc3Rpb25BbnN3ZXIgPSBxdWVzdGlvbkFuc3dlcjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIERlcGVuZGluZyBvbiBxdWVzdGlvbiB0eXBlLCB1cGRhdGUgdGhlIHF1ZXN0aW9uIG9iamVjdFxyXG4gICAqIEBwYXJhbSB2YWx1ZSBmb3JtIHZhbHVlXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBmb3JtVmFsdWVPZkFuc3dlckNoYW5nZWQodmFsdWU6IGFueSk6IHZvaWQge1xyXG4gICAgc3dpdGNoICh0aGlzLnF1ZXN0aW9uLnF1ZXN0aW9uRGV0YWlscy5xdWVzdGlvbkRldGFpbFR5cGUpIHtcclxuICAgICAgY2FzZSBRdWVzdGlvblR5cGVFbnVtLlNpbmdsZVNlbGVjdDpcclxuICAgICAgICAvLyBMb29wIHRocm91Z2ggcmVzcG9uc2VzIGFuZCBpZiBwcmV2aW91c2x5IHNlbGVjdGVkIG9wdGlvbiB3YXMgZm91bmQsIHBhdGNoIHZhbHVlXHJcbiAgICAgICAgY29uc3QgcXVlc3Rpb25EZXRhaWxSZXNwb25zZXMgPSB0aGlzLnF1ZXN0aW9uLnF1ZXN0aW9uRGV0YWlsc1xyXG4gICAgICAgICAgLnF1ZXN0aW9uRGV0YWlsUmVzcG9uc2VzO1xyXG4gICAgICAgIGlmIChxdWVzdGlvbkRldGFpbFJlc3BvbnNlcykge1xyXG4gICAgICAgICAgLy8gTWFyayB0aGUgY3VycmVudCBjaG9pY2UgZmFsc2VcclxuICAgICAgICAgIGNvbnN0IHByZXZSZXNwb25zZSA9IHF1ZXN0aW9uRGV0YWlsUmVzcG9uc2VzLmZpbmQocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UucXVlc3Rpb25EZXRhaWxSZXNwb25zZXNTZWxlY3RlZDtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgaWYgKHByZXZSZXNwb25zZSkge1xyXG4gICAgICAgICAgICBwcmV2UmVzcG9uc2UucXVlc3Rpb25EZXRhaWxSZXNwb25zZXNTZWxlY3RlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC8vIE1hcmsgdGhlIG5ldyBjaG9pY2UgdHJ1ZVxyXG4gICAgICAgICAgY29uc3QgbmV3UmVzcG9uc2UgPSBxdWVzdGlvbkRldGFpbFJlc3BvbnNlcy5maW5kKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICByZXNwb25zZS5xdWVzdGlvbkRldGFpbFJlc3BvbnNlc0lkID09PVxyXG4gICAgICAgICAgICAgIHZhbHVlLnF1ZXN0aW9uRGV0YWlsUmVzcG9uc2VzSWRcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgbmV3UmVzcG9uc2UucXVlc3Rpb25EZXRhaWxSZXNwb25zZXNTZWxlY3RlZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgY2FzZSBRdWVzdGlvblR5cGVFbnVtLk11bHRpU2VsZWN0OlxyXG4gICAgICAgIGlmICh0aGlzLnF1ZXN0aW9uLnF1ZXN0aW9uRGV0YWlscy5xdWVzdGlvbkRldGFpbFJlc3BvbnNlcykge1xyXG4gICAgICAgICAgY29uc3QgcXVlc3Rpb25EZXRhaWxSZXNwb25zZSA9IHRoaXMucXVlc3Rpb24ucXVlc3Rpb25EZXRhaWxzLnF1ZXN0aW9uRGV0YWlsUmVzcG9uc2VzLmZpbmQoXHJcbiAgICAgICAgICAgIHJlc3BvbnNlID0+XHJcbiAgICAgICAgICAgICAgcmVzcG9uc2UucXVlc3Rpb25EZXRhaWxSZXNwb25zZXNJZCA9PT1cclxuICAgICAgICAgICAgICB2YWx1ZS5xdWVzdGlvbkRldGFpbFJlc3BvbnNlc0lkXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgcXVlc3Rpb25EZXRhaWxSZXNwb25zZS5xdWVzdGlvbkRldGFpbFJlc3BvbnNlc1NlbGVjdGVkID0gIXF1ZXN0aW9uRGV0YWlsUmVzcG9uc2UucXVlc3Rpb25EZXRhaWxSZXNwb25zZXNTZWxlY3RlZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICBjYXNlIFF1ZXN0aW9uVHlwZUVudW0uVGV4dDpcclxuICAgICAgICAvLyBVcGRhdGUgdmFsdWUgb2YgcXVlc3Rpb25EZXRhaWxBbnN3ZXJUZXh0IG9uIGRhdGEgb2JqZWN0XHJcbiAgICAgICAgdGhpcy5xdWVzdGlvbi5xdWVzdGlvbkRldGFpbHMucXVlc3Rpb25EZXRhaWxBbnN3ZXJUZXh0ID0gdmFsdWU7XHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFNldCBhbnN3ZXJlZCBmbGFnXHJcbiAgICBpZiAodmFsdWUgJiYgdmFsdWUuYW5zd2VyKSB7XHJcbiAgICAgIHRoaXMucXVlc3Rpb24uaXNBbnN3ZXJlZCA9IHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnF1ZXN0aW9uLmlzQW5zd2VyZWQgPSBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19