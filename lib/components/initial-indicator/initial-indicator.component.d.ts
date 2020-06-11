import { OnChanges, OnInit, SimpleChanges } from '@angular/core';
export declare class InitialIndicatorComponent implements OnInit, OnChanges {
    name: string;
    initial: string;
    private readonly splitKey;
    constructor();
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    private setInitial;
    private getInitial;
    private getWordByIndex;
}
