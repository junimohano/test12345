import { SimpleChange } from '@angular/core';
export declare function stringContains(value: string, search: string): boolean;
export declare function generateErrorMessage(message: string, httpError: any): string;
export declare function onlyUnique(value: any, index: number, self: any[]): boolean;
export declare const nameOf: <T>(name: Extract<keyof T, string>) => string;
export declare function flatMap<TDestination>(items: any[], key: string): TDestination[];
export declare function getZoneOffset(): string;
export declare function getEnumKeys(enumType: any): string[];
export declare function isPropertyChanged(simpleChange: SimpleChange): boolean;
export declare function omitDeep(collection: any, ...excludeKeys: string[]): any;
export declare function getProgress(loaded: number, total: number): number;