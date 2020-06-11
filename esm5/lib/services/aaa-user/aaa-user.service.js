import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
var AaaUserService = /** @class */ (function () {
    function AaaUserService() {
        this.fullName = '';
    }
    Object.defineProperty(AaaUserService.prototype, "setFullName", {
        set: function (fullName) {
            this.fullName = fullName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AaaUserService.prototype, "getFullName", {
        get: function () {
            return this.fullName;
        },
        enumerable: true,
        configurable: true
    });
    AaaUserService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    AaaUserService.ctorParameters = function () { return []; };
    AaaUserService.ngInjectableDef = i0.defineInjectable({ factory: function AaaUserService_Factory() { return new AaaUserService(); }, token: AaaUserService, providedIn: "root" });
    return AaaUserService;
}());
export { AaaUserService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWFhLXVzZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3Zlcml0YXMtbGlicmFyeS8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9hYWEtdXNlci9hYWEtdXNlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBRTNDO0lBTUU7UUFGUSxhQUFRLEdBQUcsRUFBRSxDQUFDO0lBRVAsQ0FBQztJQUVoQixzQkFBVyx1Q0FBVzthQUF0QixVQUF1QixRQUFnQjtZQUNyQyxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUMzQixDQUFDOzs7T0FBQTtJQUVELHNCQUFXLHVDQUFXO2FBQXRCO1lBQ0UsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3ZCLENBQUM7OztPQUFBOztnQkFkRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7Ozt5QkFKRDtDQWlCQyxBQWZELElBZUM7U0FaWSxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQWFhVXNlclNlcnZpY2Uge1xyXG4gIHByaXZhdGUgZnVsbE5hbWUgPSAnJztcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICBwdWJsaWMgc2V0IHNldEZ1bGxOYW1lKGZ1bGxOYW1lOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuZnVsbE5hbWUgPSBmdWxsTmFtZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgZ2V0RnVsbE5hbWUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5mdWxsTmFtZTtcclxuICB9XHJcbn1cclxuIl19