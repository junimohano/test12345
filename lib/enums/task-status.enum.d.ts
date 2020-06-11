export declare enum TaskStatusEnum {
    Open = "OPEN",
    InProgress = "IN_PROGRESS",
    InReview = "IN_REVIEW",
    Closed = "CLOSED",
    ActionRequired = "ACTION_REQUIRED"
}
export declare namespace TaskStatusEnum {
    function getDisplayText(value: TaskStatusEnum): string;
}
