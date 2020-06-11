import { OnInit } from '@angular/core';
import { TaskStatusEnum } from '../../enums';
export declare class TaskStatusTagComponent implements OnInit {
    taskStatus: TaskStatusEnum;
    taskStatusEnum: typeof TaskStatusEnum;
    constructor();
    ngOnInit(): void;
}
