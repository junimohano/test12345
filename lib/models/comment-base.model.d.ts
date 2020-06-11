import { Attachment } from './attachment.model';
export declare abstract class CommentBase {
    id: string;
    appName: string;
    attachments: Attachment;
    created: Date;
    createdByFullName: string;
    createdById: string;
    entityId: string;
    entityTitle: string;
    entityType: string;
    mentionedUsers: {
        email: string;
        firstName: string;
        lastName: string;
    }[];
    messageText: string;
    modifier: string;
    sequenceNumber: number;
    status: string;
    version: number;
}
