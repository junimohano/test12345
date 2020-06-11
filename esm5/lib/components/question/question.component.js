import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { QuestionnaireViewModeEnum, QuestionTypeEnum } from '../../enums';
import { QuestionnaireUtilsService } from '../../services';
var QuestionComponent = /** @class */ (function () {
    function QuestionComponent(formBuilder, questionnaireUtilsService) {
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
    QuestionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.processSelectedOption();
        this.formReady.emit(this.questionForm);
        Object.keys(this.questionForm.controls).forEach(function (key) {
            return _this.questionForm.controls[key].valueChanges.subscribe(function (value) {
                return _this.formValueOfAnswerChanged(value);
            });
        });
        this.questionnaireUtilsService
            .getViewModeObservable()
            .subscribe(function (viewMode) {
            _this.viewMode = viewMode;
        });
    };
    QuestionComponent.prototype.isQuestionVisible = function () {
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
    };
    /**
     * Check if question was previously answered, and sync it to the form object.
     */
    QuestionComponent.prototype.processSelectedOption = function () {
        this.questionForm.patchValue({
            questionId: this.question.nodeId,
            answerDescription: this.question.questionDetails.answerDescription
        }, { emitEvent: false });
        var questionAnswer = this.questionnaireUtilsService.getQuestionAnswer(this.question.questionDetails);
        if (questionAnswer) {
            this.questionForm.patchValue({
                answer: questionAnswer
            }, { emitEvent: false });
            this.question.isAnswered = true;
            this.questionAnswer = questionAnswer;
        }
    };
    /**
     * Depending on question type, update the question object
     * @param value form value
     */
    QuestionComponent.prototype.formValueOfAnswerChanged = function (value) {
        switch (this.question.questionDetails.questionDetailType) {
            case QuestionTypeEnum.SingleSelect:
                // Loop through responses and if previously selected option was found, patch value
                var questionDetailResponses = this.question.questionDetails
                    .questionDetailResponses;
                if (questionDetailResponses) {
                    // Mark the current choice false
                    var prevResponse = questionDetailResponses.find(function (response) {
                        return response.questionDetailResponsesSelected;
                    });
                    if (prevResponse) {
                        prevResponse.questionDetailResponsesSelected = false;
                    }
                    // Mark the new choice true
                    var newResponse = questionDetailResponses.find(function (response) {
                        return (response.questionDetailResponsesId ===
                            value.questionDetailResponsesId);
                    });
                    newResponse.questionDetailResponsesSelected = true;
                }
                break;
            case QuestionTypeEnum.MultiSelect:
                if (this.question.questionDetails.questionDetailResponses) {
                    var questionDetailResponse = this.question.questionDetails.questionDetailResponses.find(function (response) {
                        return response.questionDetailResponsesId ===
                            value.questionDetailResponsesId;
                    });
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
    };
    QuestionComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ta-question',
                    template: "<div class=\"question mb-3\" [hidden]=\"!isQuestionVisible()\">\r\n  <div class=\"d-flex\">\r\n    <div\r\n      class=\"question-text mb-3 p-0 mr-auto\"\r\n      [innerHTML]=\"question.questionDetails?.questionDetailText\"\r\n    ></div>\r\n  </div>\r\n\r\n  <form\r\n    [ngSwitch]=\"question.questionDetails.questionDetailType\"\r\n    [formGroup]=\"questionForm\"\r\n  >\r\n    <ta-single-select\r\n      *ngSwitchCase=\"questionTypeEnum.SingleSelect\"\r\n      formControlName=\"answer\"\r\n      [question]=\"question\"\r\n    ></ta-single-select>\r\n\r\n    <ta-multi-select\r\n      *ngSwitchCase=\"questionTypeEnum.MultiSelect\"\r\n      formControlName=\"answer\"\r\n      [question]=\"question\"\r\n    ></ta-multi-select>\r\n\r\n    <ta-text\r\n      *ngSwitchCase=\"questionTypeEnum.Text\"\r\n      formControlName=\"answer\"\r\n      [question]=\"question\"\r\n    ></ta-text>\r\n  </form>\r\n</div>\r\n",
                    styles: [".card{box-shadow:0 1px 4px 0 rgba(0,0,0,.15)}.card .card-header{font-size:.875rem}button,input,textarea{outline:0!important;box-shadow:none!important}strong{font-weight:500}input::-ms-clear{display:none;width:0;height:0}input::-ms-reveal{display:none;width:0;height:0}input::-webkit-search-cancel-button,input::-webkit-search-decoration,input::-webkit-search-results-button,input::-webkit-search-results-decoration{display:none}:host .question .question-text{display:inline-block;font-size:16px;color:#333;max-width:860px}:host .question .answer-description{height:120px;border:1px solid #c2c2c2;border-radius:4px;resize:none}:host .question .add-attachments-button{top:-1px;right:0}"]
                }] }
    ];
    /** @nocollapse */
    QuestionComponent.ctorParameters = function () { return [
        { type: FormBuilder },
        { type: QuestionnaireUtilsService }
    ]; };
    QuestionComponent.propDecorators = {
        question: [{ type: Input }],
        formReady: [{ type: Output }]
    };
    return QuestionComponent;
}());
export { QuestionComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlc3Rpb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vdmVyaXRhcy11aS1saWJyYXJ5LyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvcXVlc3Rpb24vcXVlc3Rpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0UsT0FBTyxFQUFFLFdBQVcsRUFBYSxNQUFNLGdCQUFnQixDQUFDO0FBRXhELE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUsxRSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzRDtJQTRCRSwyQkFDVSxXQUF3QixFQUN4Qix5QkFBb0Q7UUFEcEQsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsOEJBQXlCLEdBQXpCLHlCQUF5QixDQUEyQjtRQXhCOUMsYUFBUSxHQUEwQjtZQUNoRCxNQUFNLEVBQUUsSUFBSTtZQUNaLFFBQVEsRUFBRSxJQUFJO1lBQ2QsZUFBZSxFQUFFO2dCQUNmLGtCQUFrQixFQUFFLElBQUk7Z0JBQ3hCLGtCQUFrQixFQUFFLElBQUk7Z0JBQ3hCLG1CQUFtQixFQUFFLElBQUk7Z0JBQ3pCLHVCQUF1QixFQUFFLEVBQUU7Z0JBQzNCLG9CQUFvQixFQUFFLElBQUk7Z0JBQzFCLHNCQUFzQixFQUFFLElBQUk7YUFDRDtZQUM3QixRQUFRLEVBQUUsRUFBRTtTQUNiLENBQUM7UUFFZSxjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQWEsQ0FBQztRQUUzQyxxQkFBZ0IsR0FBRyxnQkFBZ0IsQ0FBQztRQUM3QyxlQUFVLEdBQUcsRUFBRSxDQUFDO1FBU3JCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUM7WUFDekMsTUFBTSxFQUFFLElBQUk7WUFD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QUFFLGFBQWE7b0JBQ3ZCLGk2QkFBd0M7O2lCQUV6Qzs7OztnQkFiUSxXQUFXO2dCQU9YLHlCQUF5Qjs7OzJCQVEvQixLQUFLOzRCQWNMLE1BQU07O0lBb0lULHdCQUFDO0NBQUEsQUF4SkQsSUF3SkM7U0FuSlksaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuaW1wb3J0IHsgUXVlc3Rpb25uYWlyZVZpZXdNb2RlRW51bSwgUXVlc3Rpb25UeXBlRW51bSB9IGZyb20gJy4uLy4uL2VudW1zJztcclxuaW1wb3J0IHtcclxuICBRdWVzdGlvbkRldGFpbHNJbnRlcmZhY2UsXHJcbiAgUXVlc3Rpb25UcmVlSW50ZXJmYWNlXHJcbn0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcyc7XHJcbmltcG9ydCB7IFF1ZXN0aW9ubmFpcmVVdGlsc1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3RhLXF1ZXN0aW9uJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vcXVlc3Rpb24uY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3F1ZXN0aW9uLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFF1ZXN0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKSBwdWJsaWMgcXVlc3Rpb246IFF1ZXN0aW9uVHJlZUludGVyZmFjZSA9IHtcclxuICAgIG5vZGVJZDogbnVsbCxcclxuICAgIG5vZGVUeXBlOiBudWxsLFxyXG4gICAgcXVlc3Rpb25EZXRhaWxzOiB7XHJcbiAgICAgIHF1ZXN0aW9uRGV0YWlsVGV4dDogbnVsbCxcclxuICAgICAgcXVlc3Rpb25EZXRhaWxUeXBlOiBudWxsLFxyXG4gICAgICBjb21tZW50TWVzc2FnZUNvdW50OiBudWxsLFxyXG4gICAgICBxdWVzdGlvbkRldGFpbFJlc3BvbnNlczogW10sXHJcbiAgICAgIHF1ZXN0aW9uRGV0YWlsQW5zd2VyOiBudWxsLFxyXG4gICAgICByZWNvcmRRdWVzdGlvbkVudGl0eUlkOiBudWxsXHJcbiAgICB9IGFzIFF1ZXN0aW9uRGV0YWlsc0ludGVyZmFjZSxcclxuICAgIGNoaWxkcmVuOiBbXVxyXG4gIH07XHJcblxyXG4gIEBPdXRwdXQoKSBwdWJsaWMgZm9ybVJlYWR5ID0gbmV3IEV2ZW50RW1pdHRlcjxGb3JtR3JvdXA+KCk7XHJcblxyXG4gIHB1YmxpYyByZWFkb25seSBxdWVzdGlvblR5cGVFbnVtID0gUXVlc3Rpb25UeXBlRW51bTtcclxuICBwdWJsaWMgYW5zd2VyVGV4dCA9ICcnO1xyXG4gIHB1YmxpYyBxdWVzdGlvbkZvcm06IEZvcm1Hcm91cDtcclxuICBwdWJsaWMgdmlld01vZGU6IFF1ZXN0aW9ubmFpcmVWaWV3TW9kZUVudW07XHJcbiAgcHVibGljIHF1ZXN0aW9uQW5zd2VyOiBhbnk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIsXHJcbiAgICBwcml2YXRlIHF1ZXN0aW9ubmFpcmVVdGlsc1NlcnZpY2U6IFF1ZXN0aW9ubmFpcmVVdGlsc1NlcnZpY2VcclxuICApIHtcclxuICAgIHRoaXMucXVlc3Rpb25Gb3JtID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7XHJcbiAgICAgIGFuc3dlcjogbnVsbCxcclxuICAgICAgcXVlc3Rpb25JZDogbnVsbFxyXG4gICAgfSk7XHJcbiAgICB0aGlzLnZpZXdNb2RlID0gdGhpcy5xdWVzdGlvbm5haXJlVXRpbHNTZXJ2aWNlLmdldFZpZXdNb2RlKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnByb2Nlc3NTZWxlY3RlZE9wdGlvbigpO1xyXG4gICAgdGhpcy5mb3JtUmVhZHkuZW1pdCh0aGlzLnF1ZXN0aW9uRm9ybSk7XHJcblxyXG4gICAgT2JqZWN0LmtleXModGhpcy5xdWVzdGlvbkZvcm0uY29udHJvbHMpLmZvckVhY2goa2V5ID0+XHJcbiAgICAgIHRoaXMucXVlc3Rpb25Gb3JtLmNvbnRyb2xzW2tleV0udmFsdWVDaGFuZ2VzLnN1YnNjcmliZSh2YWx1ZSA9PlxyXG4gICAgICAgIHRoaXMuZm9ybVZhbHVlT2ZBbnN3ZXJDaGFuZ2VkKHZhbHVlKVxyXG4gICAgICApXHJcbiAgICApO1xyXG5cclxuICAgIHRoaXMucXVlc3Rpb25uYWlyZVV0aWxzU2VydmljZVxyXG4gICAgICAuZ2V0Vmlld01vZGVPYnNlcnZhYmxlKClcclxuICAgICAgLnN1YnNjcmliZSgodmlld01vZGU6IFF1ZXN0aW9ubmFpcmVWaWV3TW9kZUVudW0pID0+IHtcclxuICAgICAgICB0aGlzLnZpZXdNb2RlID0gdmlld01vZGU7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGlzUXVlc3Rpb25WaXNpYmxlKCk6IGJvb2xlYW4ge1xyXG4gICAgc3dpdGNoICh0aGlzLnZpZXdNb2RlKSB7XHJcbiAgICAgIGNhc2UgUXVlc3Rpb25uYWlyZVZpZXdNb2RlRW51bS5BbGw6XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIGNhc2UgUXVlc3Rpb25uYWlyZVZpZXdNb2RlRW51bS5BbnN3ZXJlZDpcclxuICAgICAgICByZXR1cm4gdGhpcy5xdWVzdGlvbi5pc0Fuc3dlcmVkO1xyXG4gICAgICBjYXNlIFF1ZXN0aW9ubmFpcmVWaWV3TW9kZUVudW0uVW5hbnN3ZXJlZDpcclxuICAgICAgICByZXR1cm4gIXRoaXMucXVlc3Rpb24uaXNBbnN3ZXJlZDtcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENoZWNrIGlmIHF1ZXN0aW9uIHdhcyBwcmV2aW91c2x5IGFuc3dlcmVkLCBhbmQgc3luYyBpdCB0byB0aGUgZm9ybSBvYmplY3QuXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBwcm9jZXNzU2VsZWN0ZWRPcHRpb24oKTogdm9pZCB7XHJcbiAgICB0aGlzLnF1ZXN0aW9uRm9ybS5wYXRjaFZhbHVlKFxyXG4gICAgICB7XHJcbiAgICAgICAgcXVlc3Rpb25JZDogdGhpcy5xdWVzdGlvbi5ub2RlSWQsXHJcbiAgICAgICAgYW5zd2VyRGVzY3JpcHRpb246IHRoaXMucXVlc3Rpb24ucXVlc3Rpb25EZXRhaWxzLmFuc3dlckRlc2NyaXB0aW9uXHJcbiAgICAgIH0sXHJcbiAgICAgIHsgZW1pdEV2ZW50OiBmYWxzZSB9XHJcbiAgICApO1xyXG4gICAgY29uc3QgcXVlc3Rpb25BbnN3ZXIgPSB0aGlzLnF1ZXN0aW9ubmFpcmVVdGlsc1NlcnZpY2UuZ2V0UXVlc3Rpb25BbnN3ZXIoXHJcbiAgICAgIHRoaXMucXVlc3Rpb24ucXVlc3Rpb25EZXRhaWxzXHJcbiAgICApO1xyXG4gICAgaWYgKHF1ZXN0aW9uQW5zd2VyKSB7XHJcbiAgICAgIHRoaXMucXVlc3Rpb25Gb3JtLnBhdGNoVmFsdWUoXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgYW5zd2VyOiBxdWVzdGlvbkFuc3dlclxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgeyBlbWl0RXZlbnQ6IGZhbHNlIH1cclxuICAgICAgKTtcclxuICAgICAgdGhpcy5xdWVzdGlvbi5pc0Fuc3dlcmVkID0gdHJ1ZTtcclxuICAgICAgdGhpcy5xdWVzdGlvbkFuc3dlciA9IHF1ZXN0aW9uQW5zd2VyO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRGVwZW5kaW5nIG9uIHF1ZXN0aW9uIHR5cGUsIHVwZGF0ZSB0aGUgcXVlc3Rpb24gb2JqZWN0XHJcbiAgICogQHBhcmFtIHZhbHVlIGZvcm0gdmFsdWVcclxuICAgKi9cclxuICBwcml2YXRlIGZvcm1WYWx1ZU9mQW5zd2VyQ2hhbmdlZCh2YWx1ZTogYW55KTogdm9pZCB7XHJcbiAgICBzd2l0Y2ggKHRoaXMucXVlc3Rpb24ucXVlc3Rpb25EZXRhaWxzLnF1ZXN0aW9uRGV0YWlsVHlwZSkge1xyXG4gICAgICBjYXNlIFF1ZXN0aW9uVHlwZUVudW0uU2luZ2xlU2VsZWN0OlxyXG4gICAgICAgIC8vIExvb3AgdGhyb3VnaCByZXNwb25zZXMgYW5kIGlmIHByZXZpb3VzbHkgc2VsZWN0ZWQgb3B0aW9uIHdhcyBmb3VuZCwgcGF0Y2ggdmFsdWVcclxuICAgICAgICBjb25zdCBxdWVzdGlvbkRldGFpbFJlc3BvbnNlcyA9IHRoaXMucXVlc3Rpb24ucXVlc3Rpb25EZXRhaWxzXHJcbiAgICAgICAgICAucXVlc3Rpb25EZXRhaWxSZXNwb25zZXM7XHJcbiAgICAgICAgaWYgKHF1ZXN0aW9uRGV0YWlsUmVzcG9uc2VzKSB7XHJcbiAgICAgICAgICAvLyBNYXJrIHRoZSBjdXJyZW50IGNob2ljZSBmYWxzZVxyXG4gICAgICAgICAgY29uc3QgcHJldlJlc3BvbnNlID0gcXVlc3Rpb25EZXRhaWxSZXNwb25zZXMuZmluZChyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5xdWVzdGlvbkRldGFpbFJlc3BvbnNlc1NlbGVjdGVkO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBpZiAocHJldlJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgIHByZXZSZXNwb25zZS5xdWVzdGlvbkRldGFpbFJlc3BvbnNlc1NlbGVjdGVkID0gZmFsc2U7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLy8gTWFyayB0aGUgbmV3IGNob2ljZSB0cnVlXHJcbiAgICAgICAgICBjb25zdCBuZXdSZXNwb25zZSA9IHF1ZXN0aW9uRGV0YWlsUmVzcG9uc2VzLmZpbmQocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgIHJlc3BvbnNlLnF1ZXN0aW9uRGV0YWlsUmVzcG9uc2VzSWQgPT09XHJcbiAgICAgICAgICAgICAgdmFsdWUucXVlc3Rpb25EZXRhaWxSZXNwb25zZXNJZFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBuZXdSZXNwb25zZS5xdWVzdGlvbkRldGFpbFJlc3BvbnNlc1NlbGVjdGVkID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICBjYXNlIFF1ZXN0aW9uVHlwZUVudW0uTXVsdGlTZWxlY3Q6XHJcbiAgICAgICAgaWYgKHRoaXMucXVlc3Rpb24ucXVlc3Rpb25EZXRhaWxzLnF1ZXN0aW9uRGV0YWlsUmVzcG9uc2VzKSB7XHJcbiAgICAgICAgICBjb25zdCBxdWVzdGlvbkRldGFpbFJlc3BvbnNlID0gdGhpcy5xdWVzdGlvbi5xdWVzdGlvbkRldGFpbHMucXVlc3Rpb25EZXRhaWxSZXNwb25zZXMuZmluZChcclxuICAgICAgICAgICAgcmVzcG9uc2UgPT5cclxuICAgICAgICAgICAgICByZXNwb25zZS5xdWVzdGlvbkRldGFpbFJlc3BvbnNlc0lkID09PVxyXG4gICAgICAgICAgICAgIHZhbHVlLnF1ZXN0aW9uRGV0YWlsUmVzcG9uc2VzSWRcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBxdWVzdGlvbkRldGFpbFJlc3BvbnNlLnF1ZXN0aW9uRGV0YWlsUmVzcG9uc2VzU2VsZWN0ZWQgPSAhcXVlc3Rpb25EZXRhaWxSZXNwb25zZS5xdWVzdGlvbkRldGFpbFJlc3BvbnNlc1NlbGVjdGVkO1xyXG4gICAgICAgIH1cclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIGNhc2UgUXVlc3Rpb25UeXBlRW51bS5UZXh0OlxyXG4gICAgICAgIC8vIFVwZGF0ZSB2YWx1ZSBvZiBxdWVzdGlvbkRldGFpbEFuc3dlclRleHQgb24gZGF0YSBvYmplY3RcclxuICAgICAgICB0aGlzLnF1ZXN0aW9uLnF1ZXN0aW9uRGV0YWlscy5xdWVzdGlvbkRldGFpbEFuc3dlclRleHQgPSB2YWx1ZTtcclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU2V0IGFuc3dlcmVkIGZsYWdcclxuICAgIGlmICh2YWx1ZSAmJiB2YWx1ZS5hbnN3ZXIpIHtcclxuICAgICAgdGhpcy5xdWVzdGlvbi5pc0Fuc3dlcmVkID0gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMucXVlc3Rpb24uaXNBbnN3ZXJlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=