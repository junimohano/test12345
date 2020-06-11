import { Observable } from 'rxjs';
import { QuestionnaireViewModeEnum } from '../../enums/questionnaire-view-mode.enum';
import { ConditionTreeInterface, QuestionDetailsInterface } from '../../interfaces/questionnaire.interface';
export declare class QuestionnaireUtilsService {
    private reviewMode;
    private viewMode;
    private _viewModeSubject$;
    constructor();
    /**
     * Toggles whether to display the questionnaire in review mode.
     */
    getReviewMode(): boolean;
    setReviewMode(reviewMode: boolean): void;
    /**
     * Communicate whether to show all, unanswered, or answered questions
     */
    getViewMode(): QuestionnaireViewModeEnum;
    changeViewMode(viewMode: QuestionnaireViewModeEnum): void;
    getViewModeObservable(): Observable<string>;
    /**
     * Return the question's current anwer. Can be a response object or a string.
     * @param question to check
     */
    getQuestionAnswer(questionDetails: QuestionDetailsInterface): any;
    /**
     * Used by parent question with a conditionTree to see if it should display it
     * @param conditionTree conditionTree
     */
    getConditionFulfilled(conditionTree: ConditionTreeInterface, questionDetails: QuestionDetailsInterface): boolean;
    /**
     * Check that given condition is fulfilled by parent question
     * @param conditionDetailCondition conditionDetailCondition
     */
    private checkCondition;
}
