import { SimpleFileUploadItemContainer } from '../components/file-upload/simple-file-upload/simple-file-upload-item-container.model';
import { QuestionMultiSelectUiTypeEnum } from '../enums/question-multi-select-ui-type.enum';
import { QuestionSingleSelectUiTypeEnum } from '../enums/question-single-select-ui-type.enum';
import { QuestionTypeEnum } from '../enums/question-type.enum';
import { RespondentTypeEnum } from '../enums/respondent-type.enum';
import { Assignee } from '../models/assignee.model';
import { Attachment } from '../models/attachment.model';
export interface QuestionnaireInterface {
    questionnaireId: string;
    recordId: string;
    recordName: string;
    recordType: string;
    respondents: Assignee[];
    reviewers: Assignee[];
    questionContainerViewPages: QuestionContainerViewPageInterface[];
}
export interface QuestionContainerViewPageInterface {
    id: string;
    containerName: string;
    containerDescription: string;
    respondentType: RespondentTypeEnum;
    frameworkControlId: string;
    frameworkControl: FrameworkControlInterface;
    frameworkStandardId: string;
    frameworkStandard: FrameworkInterface;
    frameworkPillarId: string;
    frameworkPillar: FrameworkInterface;
    entityId: string;
    entityType: string;
    introductionMessage: string;
    questionTree: QuestionTreeInterface[];
    rootQuestionCount: number;
    followOnQuestionCount: number;
    conditionCount: number;
    firstRootQuestionText: string;
    totalActiveAnswerCount?: number;
    totalActiveQuestionCount?: number;
}
export interface FrameworkControlInterface {
    id: string;
    description: string;
    levelIdentifier: string;
}
export interface FrameworkInterface {
    id: string;
    name: string;
    description: string;
    levelIdentifier?: string;
}
export interface QuestionTreeInterface {
    nodeId: string;
    nodeType: string;
    questionDetails: QuestionDetailsInterface;
    children: ConditionTreeInterface[];
    isAnswered?: boolean;
}
export interface QuestionDetailsInterface {
    questionDetailText: string;
    questionDetailType: QuestionTypeEnum;
    singleSelectUiType: QuestionSingleSelectUiTypeEnum;
    multiSelectUiType: QuestionMultiSelectUiTypeEnum;
    recordQuestionEntityId: string;
    commentMessageCount: number;
    questionDetailResponses: QuestionDetailResponseInterface[];
    questionDetailAnswer: null;
    questionDetailAnswerText: string;
    attachments: Attachment[];
    answerDescription: string;
    fileContainer?: SimpleFileUploadItemContainer;
}
export interface QuestionDetailResponseInterface {
    questionDetailResponsesId: string;
    questionDetailResponsesChoice: string;
    questionDetailResponsesRiskLevel: null;
    questionDetailResponsesTags: null;
    questionDetailResponsesFlag: boolean;
    responseOptionId: null;
    sequenceNumber: number;
    facts: null;
    questionDetailResponsesSelected: boolean;
}
export interface ConditionTreeInterface {
    nodeId: string;
    nodeType: string;
    conditionDetails: ConditionDetailsInterface;
    children: QuestionTreeInterface[];
    conditionFulfilled?: boolean;
}
export interface ConditionDetailsInterface {
    conditionDetailConditions: ConditionDetailConditionInterface[];
}
export interface ConditionDetailConditionInterface {
    expressionViewStatement: string;
    expressionViewValue: string;
    expressionViewValueId: string;
    expressionViewCondition: null;
}
export interface QuestionAnswersResponseInterface {
    answers: AnswerDetailResponseInterface[];
    submitAction: boolean;
}
export interface AnswerDetailResponseInterface {
    answerDetailText: string;
    questionDetailResponsesIds: string[];
    questionNodeId: string;
    answerDescription: string;
}
export interface AnswersFormInterface {
    questions: QuestionFormInterface[];
}
export interface QuestionFormInterface {
    children: QuestionFormInterface[];
    conditionFulfilled: boolean;
    question: {
        answer: QuestionDetailResponseInterface;
        questionId: string;
        answerDescription: string;
    };
}
export interface QuestionnaireSectionCounts {
    questionTotal: number;
    answerTotal: number;
}
