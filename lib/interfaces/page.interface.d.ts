export interface PageInterface<T> {
    content: T[];
    totalElements: number;
    last?: boolean;
}
