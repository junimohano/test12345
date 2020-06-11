import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommentEntityTypeEnum } from '../../enums/comment-entity-type.enum';
import { PageInterface } from '../../interfaces/page.interface';
import { AnswerDetailResponseInterface } from '../../interfaces/questionnaire.interface';
import { Comment } from '../../models/comment.model';
export declare class DashBoardCommentControllerService {
    private httpClient;
    private veritasApiProxyPrefixUrl;
    private readonly url;
    constructor(httpClient: HttpClient, veritasApiProxyPrefixUrl: string);
    getComments$(entityId: string, page?: number, maxRows?: number): Observable<PageInterface<Comment>>;
    createComment$(entityId: string, entityType: CommentEntityTypeEnum, message: string): Observable<Comment>;
    updateComment$(entityId: string, entityType: CommentEntityTypeEnum, commentId: string, message: string): Observable<Comment>;
    deleteComment$(entityId: string, commentId: string): Observable<Comment>;
    getQuestionContainerViewPages(taskId: string): Observable<any>;
    getAttachmentDownloadUrl$(attachmentId: string): Observable<any>;
    private mapGetQuestionContainerViewPages;
    postQuestionDetailResponses(answers: AnswerDetailResponseInterface[], submitAction: boolean, taskId: string): Observable<any>;
}
