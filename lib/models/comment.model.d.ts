import { CommentBase } from './comment-base.model';
import { CommentReply } from './comment-reply.model';
export declare class Comment extends CommentBase {
    commentMessageReplies: CommentReply[];
    isEditing: boolean;
}
