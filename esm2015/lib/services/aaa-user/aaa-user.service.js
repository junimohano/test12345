import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class AaaUserService {
    constructor() {
        this.fullName = '';
    }
    set setFullName(fullName) {
        this.fullName = fullName;
    }
    get getFullName() {
        return this.fullName;
    }
}
AaaUserService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
AaaUserService.ctorParameters = () => [];
AaaUserService.ngInjectableDef = i0.defineInjectable({ factory: function AaaUserService_Factory() { return new AaaUserService(); }, token: AaaUserService, providedIn: "root" });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWFhLXVzZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3Zlcml0YXMtbGlicmFyeS8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9hYWEtdXNlci9hYWEtdXNlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBSzNDLE1BQU0sT0FBTyxjQUFjO0lBR3pCO1FBRlEsYUFBUSxHQUFHLEVBQUUsQ0FBQztJQUVQLENBQUM7SUFFaEIsSUFBVyxXQUFXLENBQUMsUUFBZ0I7UUFDckMsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7SUFDM0IsQ0FBQztJQUVELElBQVcsV0FBVztRQUNwQixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdkIsQ0FBQzs7O1lBZEYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQWFhVXNlclNlcnZpY2Uge1xyXG4gIHByaXZhdGUgZnVsbE5hbWUgPSAnJztcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICBwdWJsaWMgc2V0IHNldEZ1bGxOYW1lKGZ1bGxOYW1lOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuZnVsbE5hbWUgPSBmdWxsTmFtZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgZ2V0RnVsbE5hbWUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5mdWxsTmFtZTtcclxuICB9XHJcbn1cclxuIl19