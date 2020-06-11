import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { QuestionTypeEnum } from '../../enums/question-type.enum';
import { QuestionnaireViewModeEnum } from '../../enums/questionnaire-view-mode.enum';
import * as i0 from "@angular/core";
var QuestionnaireUtilsService = /** @class */ (function () {
    function QuestionnaireUtilsService() {
        this.reviewMode = false;
        this.viewMode = QuestionnaireViewModeEnum.All;
        this._viewModeSubject$ = new Subject();
    }
    /**
     * Toggles whether to display the questionnaire in review mode.
     */
    QuestionnaireUtilsService.prototype.getReviewMode = function () {
        return this.reviewMode;
    };
    QuestionnaireUtilsService.prototype.setReviewMode = function (reviewMode) {
        this.reviewMode = reviewMode;
    };
    /**
     * Communicate whether to show all, unanswered, or answered questions
     */
    QuestionnaireUtilsService.prototype.getViewMode = function () {
        return this.viewMode;
    };
    QuestionnaireUtilsService.prototype.changeViewMode = function (viewMode) {
        this.viewMode = viewMode;
        this._viewModeSubject$.next(this.viewMode);
    };
    QuestionnaireUtilsService.prototype.getViewModeObservable = function () {
        return this._viewModeSubject$.asObservable();
    };
    /**
     * Return the question's current anwer. Can be a response object or a string.
     * @param question to check
     */
    QuestionnaireUtilsService.prototype.getQuestionAnswer = function (questionDetails) {
        switch (questionDetails.questionDetailType) {
            case QuestionTypeEnum.SingleSelect:
                // Loop through responses and if previously selected option was found, patch value
                var questionDetailResponses = questionDetails.questionDetailResponses;
                if (questionDetailResponses) {
                    var selectedResponse = questionDetailResponses.find(function (response) {
                        return response.questionDetailResponsesSelected;
                    });
                    if (selectedResponse) {
                        return selectedResponse;
                    }
                }
                break;
            case QuestionTypeEnum.Text:
                var textResponse = questionDetails.questionDetailAnswerText;
                if (textResponse) {
                    return textResponse;
                }
                break;
            default:
                break;
        }
        return null;
    };
    /**
     * Used by parent question with a conditionTree to see if it should display it
     * @param conditionTree conditionTree
     */
    QuestionnaireUtilsService.prototype.getConditionFulfilled = function (conditionTree, questionDetails) {
        // Depending on question type, get the appropriate answer object/string
        // Currently only supports single select
        var selectedResponse = questionDetails.questionDetailResponses.find(function (response) {
            return response.questionDetailResponsesSelected;
        });
        if (conditionTree.conditionDetails &&
            conditionTree.conditionDetails.conditionDetailConditions) {
            var conditionDetailConditions = conditionTree.conditionDetails.conditionDetailConditions;
            // Loop through all conditions and make sure they are all fulfilled
            for (var i = 0; i < conditionDetailConditions.length; i++) {
                var conditionDetailCondition = conditionDetailConditions[i];
                if (!this.checkCondition(conditionDetailCondition, selectedResponse)) {
                    return false;
                }
            }
            return true;
        }
        else {
            return false;
        }
    };
    /**
     * Check that given condition is fulfilled by parent question
     * @param conditionDetailCondition conditionDetailCondition
     */
    QuestionnaireUtilsService.prototype.checkCondition = function (conditionDetailCondition, currentResponse) {
        // Currently only supports single select
        if (currentResponse && conditionDetailCondition.expressionViewValueId) {
            var answer = currentResponse;
            var questionResponseId = answer.questionDetailResponsesId;
            var conditionValueId = conditionDetailCondition.expressionViewValueId;
            if (questionResponseId === conditionValueId) {
                return true;
            }
        }
        return false;
    };
    QuestionnaireUtilsService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    QuestionnaireUtilsService.ctorParameters = function () { return []; };
    QuestionnaireUtilsService.ngInjectableDef = i0.defineInjectable({ factory: function QuestionnaireUtilsService_Factory() { return new QuestionnaireUtilsService(); }, token: QuestionnaireUtilsService, providedIn: "root" });
    return QuestionnaireUtilsService;
}());
export { QuestionnaireUtilsService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlc3Rpb25uYWlyZS11dGlscy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vdmVyaXRhcy1saWJyYXJ5LyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL3F1ZXN0aW9ubmFpcmUtdXRpbHMvcXVlc3Rpb25uYWlyZS11dGlscy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFjLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUUzQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNsRSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQzs7QUFRckY7SUFRRTtRQUpRLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFDbkIsYUFBUSxHQUFHLHlCQUF5QixDQUFDLEdBQUcsQ0FBQztRQUN6QyxzQkFBaUIsR0FBRyxJQUFJLE9BQU8sRUFBTyxDQUFDO0lBRWhDLENBQUM7SUFFaEI7O09BRUc7SUFDSSxpREFBYSxHQUFwQjtRQUNFLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN6QixDQUFDO0lBRU0saURBQWEsR0FBcEIsVUFBcUIsVUFBbUI7UUFDdEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7SUFDL0IsQ0FBQztJQUVEOztPQUVHO0lBQ0ksK0NBQVcsR0FBbEI7UUFDRSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdkIsQ0FBQztJQUVNLGtEQUFjLEdBQXJCLFVBQXNCLFFBQW1DO1FBQ3ZELElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFTSx5REFBcUIsR0FBNUI7UUFDRSxPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUMvQyxDQUFDO0lBRUQ7OztPQUdHO0lBQ0kscURBQWlCLEdBQXhCLFVBQXlCLGVBQXlDO1FBQ2hFLFFBQVEsZUFBZSxDQUFDLGtCQUFrQixFQUFFO1lBQzFDLEtBQUssZ0JBQWdCLENBQUMsWUFBWTtnQkFDaEMsa0ZBQWtGO2dCQUNsRixJQUFNLHVCQUF1QixHQUFHLGVBQWUsQ0FBQyx1QkFBdUIsQ0FBQztnQkFDeEUsSUFBSSx1QkFBdUIsRUFBRTtvQkFDM0IsSUFBTSxnQkFBZ0IsR0FBRyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsVUFBQSxRQUFRO3dCQUM1RCxPQUFPLFFBQVEsQ0FBQywrQkFBK0IsQ0FBQztvQkFDbEQsQ0FBQyxDQUFDLENBQUM7b0JBRUgsSUFBSSxnQkFBZ0IsRUFBRTt3QkFDcEIsT0FBTyxnQkFBZ0IsQ0FBQztxQkFDekI7aUJBQ0Y7Z0JBQ0QsTUFBTTtZQUNSLEtBQUssZ0JBQWdCLENBQUMsSUFBSTtnQkFDeEIsSUFBTSxZQUFZLEdBQUcsZUFBZSxDQUFDLHdCQUF3QixDQUFDO2dCQUM5RCxJQUFJLFlBQVksRUFBRTtvQkFDaEIsT0FBTyxZQUFZLENBQUM7aUJBQ3JCO2dCQUNELE1BQU07WUFDUjtnQkFDRSxNQUFNO1NBQ1Q7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRDs7O09BR0c7SUFDSSx5REFBcUIsR0FBNUIsVUFDRSxhQUFxQyxFQUNyQyxlQUF5QztRQUV6Qyx1RUFBdUU7UUFDdkUsd0NBQXdDO1FBQ3hDLElBQU0sZ0JBQWdCLEdBQW9DLGVBQWUsQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQ3BHLFVBQUEsUUFBUTtZQUNOLE9BQU8sUUFBUSxDQUFDLCtCQUErQixDQUFDO1FBQ2xELENBQUMsQ0FDRixDQUFDO1FBRUYsSUFDRSxhQUFhLENBQUMsZ0JBQWdCO1lBQzlCLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyx5QkFBeUIsRUFDeEQ7WUFDQSxJQUFNLHlCQUF5QixHQUM3QixhQUFhLENBQUMsZ0JBQWdCLENBQUMseUJBQXlCLENBQUM7WUFFM0QsbUVBQW1FO1lBQ25FLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyx5QkFBeUIsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ3pELElBQU0sd0JBQXdCLEdBQUcseUJBQXlCLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzlELElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLHdCQUF3QixFQUFFLGdCQUFnQixDQUFDLEVBQUU7b0JBQ3BFLE9BQU8sS0FBSyxDQUFDO2lCQUNkO2FBQ0Y7WUFDRCxPQUFPLElBQUksQ0FBQztTQUNiO2FBQU07WUFDTCxPQUFPLEtBQUssQ0FBQztTQUNkO0lBQ0gsQ0FBQztJQUVEOzs7T0FHRztJQUNLLGtEQUFjLEdBQXRCLFVBQ0Usd0JBQTJELEVBQzNELGVBQW9CO1FBRXBCLHdDQUF3QztRQUN4QyxJQUFJLGVBQWUsSUFBSSx3QkFBd0IsQ0FBQyxxQkFBcUIsRUFBRTtZQUNyRSxJQUFNLE1BQU0sR0FBb0MsZUFBZSxDQUFDO1lBQ2hFLElBQU0sa0JBQWtCLEdBQUcsTUFBTSxDQUFDLHlCQUF5QixDQUFDO1lBQzVELElBQU0sZ0JBQWdCLEdBQUcsd0JBQXdCLENBQUMscUJBQXFCLENBQUM7WUFFeEUsSUFBSSxrQkFBa0IsS0FBSyxnQkFBZ0IsRUFBRTtnQkFDM0MsT0FBTyxJQUFJLENBQUM7YUFDYjtTQUNGO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDOztnQkEzSEYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7Ozs7b0NBZEQ7Q0F3SUMsQUE1SEQsSUE0SEM7U0F6SFkseUJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcblxyXG5pbXBvcnQgeyBRdWVzdGlvblR5cGVFbnVtIH0gZnJvbSAnLi4vLi4vZW51bXMvcXVlc3Rpb24tdHlwZS5lbnVtJztcclxuaW1wb3J0IHsgUXVlc3Rpb25uYWlyZVZpZXdNb2RlRW51bSB9IGZyb20gJy4uLy4uL2VudW1zL3F1ZXN0aW9ubmFpcmUtdmlldy1tb2RlLmVudW0nO1xyXG5pbXBvcnQge1xyXG4gIENvbmRpdGlvbkRldGFpbENvbmRpdGlvbkludGVyZmFjZSxcclxuICBDb25kaXRpb25UcmVlSW50ZXJmYWNlLFxyXG4gIFF1ZXN0aW9uRGV0YWlsUmVzcG9uc2VJbnRlcmZhY2UsXHJcbiAgUXVlc3Rpb25EZXRhaWxzSW50ZXJmYWNlXHJcbn0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9xdWVzdGlvbm5haXJlLmludGVyZmFjZSc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBRdWVzdGlvbm5haXJlVXRpbHNTZXJ2aWNlIHtcclxuICBwcml2YXRlIHJldmlld01vZGUgPSBmYWxzZTtcclxuICBwcml2YXRlIHZpZXdNb2RlID0gUXVlc3Rpb25uYWlyZVZpZXdNb2RlRW51bS5BbGw7XHJcbiAgcHJpdmF0ZSBfdmlld01vZGVTdWJqZWN0JCA9IG5ldyBTdWJqZWN0PGFueT4oKTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICAvKipcclxuICAgKiBUb2dnbGVzIHdoZXRoZXIgdG8gZGlzcGxheSB0aGUgcXVlc3Rpb25uYWlyZSBpbiByZXZpZXcgbW9kZS5cclxuICAgKi9cclxuICBwdWJsaWMgZ2V0UmV2aWV3TW9kZSgpIHtcclxuICAgIHJldHVybiB0aGlzLnJldmlld01vZGU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0UmV2aWV3TW9kZShyZXZpZXdNb2RlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLnJldmlld01vZGUgPSByZXZpZXdNb2RlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ29tbXVuaWNhdGUgd2hldGhlciB0byBzaG93IGFsbCwgdW5hbnN3ZXJlZCwgb3IgYW5zd2VyZWQgcXVlc3Rpb25zXHJcbiAgICovXHJcbiAgcHVibGljIGdldFZpZXdNb2RlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMudmlld01vZGU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY2hhbmdlVmlld01vZGUodmlld01vZGU6IFF1ZXN0aW9ubmFpcmVWaWV3TW9kZUVudW0pIHtcclxuICAgIHRoaXMudmlld01vZGUgPSB2aWV3TW9kZTtcclxuICAgIHRoaXMuX3ZpZXdNb2RlU3ViamVjdCQubmV4dCh0aGlzLnZpZXdNb2RlKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRWaWV3TW9kZU9ic2VydmFibGUoKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcclxuICAgIHJldHVybiB0aGlzLl92aWV3TW9kZVN1YmplY3QkLmFzT2JzZXJ2YWJsZSgpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmV0dXJuIHRoZSBxdWVzdGlvbidzIGN1cnJlbnQgYW53ZXIuIENhbiBiZSBhIHJlc3BvbnNlIG9iamVjdCBvciBhIHN0cmluZy5cclxuICAgKiBAcGFyYW0gcXVlc3Rpb24gdG8gY2hlY2tcclxuICAgKi9cclxuICBwdWJsaWMgZ2V0UXVlc3Rpb25BbnN3ZXIocXVlc3Rpb25EZXRhaWxzOiBRdWVzdGlvbkRldGFpbHNJbnRlcmZhY2UpOiBhbnkge1xyXG4gICAgc3dpdGNoIChxdWVzdGlvbkRldGFpbHMucXVlc3Rpb25EZXRhaWxUeXBlKSB7XHJcbiAgICAgIGNhc2UgUXVlc3Rpb25UeXBlRW51bS5TaW5nbGVTZWxlY3Q6XHJcbiAgICAgICAgLy8gTG9vcCB0aHJvdWdoIHJlc3BvbnNlcyBhbmQgaWYgcHJldmlvdXNseSBzZWxlY3RlZCBvcHRpb24gd2FzIGZvdW5kLCBwYXRjaCB2YWx1ZVxyXG4gICAgICAgIGNvbnN0IHF1ZXN0aW9uRGV0YWlsUmVzcG9uc2VzID0gcXVlc3Rpb25EZXRhaWxzLnF1ZXN0aW9uRGV0YWlsUmVzcG9uc2VzO1xyXG4gICAgICAgIGlmIChxdWVzdGlvbkRldGFpbFJlc3BvbnNlcykge1xyXG4gICAgICAgICAgY29uc3Qgc2VsZWN0ZWRSZXNwb25zZSA9IHF1ZXN0aW9uRGV0YWlsUmVzcG9uc2VzLmZpbmQocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UucXVlc3Rpb25EZXRhaWxSZXNwb25zZXNTZWxlY3RlZDtcclxuICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgIGlmIChzZWxlY3RlZFJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBzZWxlY3RlZFJlc3BvbnNlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBRdWVzdGlvblR5cGVFbnVtLlRleHQ6XHJcbiAgICAgICAgY29uc3QgdGV4dFJlc3BvbnNlID0gcXVlc3Rpb25EZXRhaWxzLnF1ZXN0aW9uRGV0YWlsQW5zd2VyVGV4dDtcclxuICAgICAgICBpZiAodGV4dFJlc3BvbnNlKSB7XHJcbiAgICAgICAgICByZXR1cm4gdGV4dFJlc3BvbnNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBicmVhaztcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVXNlZCBieSBwYXJlbnQgcXVlc3Rpb24gd2l0aCBhIGNvbmRpdGlvblRyZWUgdG8gc2VlIGlmIGl0IHNob3VsZCBkaXNwbGF5IGl0XHJcbiAgICogQHBhcmFtIGNvbmRpdGlvblRyZWUgY29uZGl0aW9uVHJlZVxyXG4gICAqL1xyXG4gIHB1YmxpYyBnZXRDb25kaXRpb25GdWxmaWxsZWQoXHJcbiAgICBjb25kaXRpb25UcmVlOiBDb25kaXRpb25UcmVlSW50ZXJmYWNlLFxyXG4gICAgcXVlc3Rpb25EZXRhaWxzOiBRdWVzdGlvbkRldGFpbHNJbnRlcmZhY2VcclxuICApOiBib29sZWFuIHtcclxuICAgIC8vIERlcGVuZGluZyBvbiBxdWVzdGlvbiB0eXBlLCBnZXQgdGhlIGFwcHJvcHJpYXRlIGFuc3dlciBvYmplY3Qvc3RyaW5nXHJcbiAgICAvLyBDdXJyZW50bHkgb25seSBzdXBwb3J0cyBzaW5nbGUgc2VsZWN0XHJcbiAgICBjb25zdCBzZWxlY3RlZFJlc3BvbnNlOiBRdWVzdGlvbkRldGFpbFJlc3BvbnNlSW50ZXJmYWNlID0gcXVlc3Rpb25EZXRhaWxzLnF1ZXN0aW9uRGV0YWlsUmVzcG9uc2VzLmZpbmQoXHJcbiAgICAgIHJlc3BvbnNlID0+IHtcclxuICAgICAgICByZXR1cm4gcmVzcG9uc2UucXVlc3Rpb25EZXRhaWxSZXNwb25zZXNTZWxlY3RlZDtcclxuICAgICAgfVxyXG4gICAgKTtcclxuXHJcbiAgICBpZiAoXHJcbiAgICAgIGNvbmRpdGlvblRyZWUuY29uZGl0aW9uRGV0YWlscyAmJlxyXG4gICAgICBjb25kaXRpb25UcmVlLmNvbmRpdGlvbkRldGFpbHMuY29uZGl0aW9uRGV0YWlsQ29uZGl0aW9uc1xyXG4gICAgKSB7XHJcbiAgICAgIGNvbnN0IGNvbmRpdGlvbkRldGFpbENvbmRpdGlvbnM6IENvbmRpdGlvbkRldGFpbENvbmRpdGlvbkludGVyZmFjZVtdID1cclxuICAgICAgICBjb25kaXRpb25UcmVlLmNvbmRpdGlvbkRldGFpbHMuY29uZGl0aW9uRGV0YWlsQ29uZGl0aW9ucztcclxuXHJcbiAgICAgIC8vIExvb3AgdGhyb3VnaCBhbGwgY29uZGl0aW9ucyBhbmQgbWFrZSBzdXJlIHRoZXkgYXJlIGFsbCBmdWxmaWxsZWRcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb25kaXRpb25EZXRhaWxDb25kaXRpb25zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgY29uZGl0aW9uRGV0YWlsQ29uZGl0aW9uID0gY29uZGl0aW9uRGV0YWlsQ29uZGl0aW9uc1tpXTtcclxuICAgICAgICBpZiAoIXRoaXMuY2hlY2tDb25kaXRpb24oY29uZGl0aW9uRGV0YWlsQ29uZGl0aW9uLCBzZWxlY3RlZFJlc3BvbnNlKSkge1xyXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENoZWNrIHRoYXQgZ2l2ZW4gY29uZGl0aW9uIGlzIGZ1bGZpbGxlZCBieSBwYXJlbnQgcXVlc3Rpb25cclxuICAgKiBAcGFyYW0gY29uZGl0aW9uRGV0YWlsQ29uZGl0aW9uIGNvbmRpdGlvbkRldGFpbENvbmRpdGlvblxyXG4gICAqL1xyXG4gIHByaXZhdGUgY2hlY2tDb25kaXRpb24oXHJcbiAgICBjb25kaXRpb25EZXRhaWxDb25kaXRpb246IENvbmRpdGlvbkRldGFpbENvbmRpdGlvbkludGVyZmFjZSxcclxuICAgIGN1cnJlbnRSZXNwb25zZTogYW55XHJcbiAgKTogYm9vbGVhbiB7XHJcbiAgICAvLyBDdXJyZW50bHkgb25seSBzdXBwb3J0cyBzaW5nbGUgc2VsZWN0XHJcbiAgICBpZiAoY3VycmVudFJlc3BvbnNlICYmIGNvbmRpdGlvbkRldGFpbENvbmRpdGlvbi5leHByZXNzaW9uVmlld1ZhbHVlSWQpIHtcclxuICAgICAgY29uc3QgYW5zd2VyOiBRdWVzdGlvbkRldGFpbFJlc3BvbnNlSW50ZXJmYWNlID0gY3VycmVudFJlc3BvbnNlO1xyXG4gICAgICBjb25zdCBxdWVzdGlvblJlc3BvbnNlSWQgPSBhbnN3ZXIucXVlc3Rpb25EZXRhaWxSZXNwb25zZXNJZDtcclxuICAgICAgY29uc3QgY29uZGl0aW9uVmFsdWVJZCA9IGNvbmRpdGlvbkRldGFpbENvbmRpdGlvbi5leHByZXNzaW9uVmlld1ZhbHVlSWQ7XHJcblxyXG4gICAgICBpZiAocXVlc3Rpb25SZXNwb25zZUlkID09PSBjb25kaXRpb25WYWx1ZUlkKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbn1cclxuIl19