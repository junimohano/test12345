import { HttpClient, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AnswerDetailResponseInterface, QuestionnaireInterface } from '../../interfaces/questionnaire.interface';
import { Attachment } from '../../models/attachment.model';
export declare class DashBoardSurveyControllerService {
    private httpClient;
    private veritasApiProxyPrefixUrl;
    private readonly url;
    constructor(httpClient: HttpClient, veritasApiProxyPrefixUrl: string);
    /**
     * GET List Tasks Data
     */
    getQuestionContainerViewPages(recordId: string): Observable<QuestionnaireInterface>;
    postAttachments$(recordId: string, questionNodeId: string, files: File[]): Observable<HttpEvent<Attachment[]>>;
    deleteAttachment$(recordId: string, questionNodeId: string, attachmentId: string): Observable<Attachment[]>;
    private mapGetQuestionContainerViewPages;
    postQuestionDetailResponses(answers: AnswerDetailResponseInterface[], submitAction: boolean, recordId: string): Observable<any>;
}
