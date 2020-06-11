import { HttpClient, HttpParams } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { VERITAS_API_PROXY_PREFIX_URL } from '../../constants';
import { CustomEncoder } from '../../custom-encoder';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
var UserControllerService = /** @class */ (function () {
    function UserControllerService(httpClient, veritasApiProxyPrefixUrl) {
        this.httpClient = httpClient;
        this.veritasApiProxyPrefixUrl = veritasApiProxyPrefixUrl;
        this.url = this.veritasApiProxyPrefixUrl + "/users";
        this.maxRows = 10;
    }
    UserControllerService.prototype.getUsers$ = function (page, search) {
        if (search === void 0) { search = null; }
        var params = new HttpParams({ encoder: new CustomEncoder() })
            .append('page', page.toString())
            .append('size', this.maxRows.toString());
        if (search) {
            params = params.append('search', search);
        }
        return this.httpClient.get(this.url, {
            params: params
        });
    };
    UserControllerService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    UserControllerService.ctorParameters = function () { return [
        { type: HttpClient },
        { type: String, decorators: [{ type: Inject, args: [VERITAS_API_PROXY_PREFIX_URL,] }] }
    ]; };
    UserControllerService.ngInjectableDef = i0.defineInjectable({ factory: function UserControllerService_Factory() { return new UserControllerService(i0.inject(i1.HttpClient), i0.inject("VERITAS_API_PROXY_PREFIX_URL")); }, token: UserControllerService, providedIn: "root" });
    return UserControllerService;
}());
export { UserControllerService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1jb250cm9sbGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly92ZXJpdGFzLXVpLWxpYnJhcnkvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvdXNlci1jb250cm9sbGVyL3VzZXItY29udHJvbGxlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDOUQsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHbkQsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0QsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7QUFJckQ7SUFPRSwrQkFDVSxVQUFzQixFQUV0Qix3QkFBZ0M7UUFGaEMsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUV0Qiw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQVE7UUFOekIsUUFBRyxHQUFNLElBQUksQ0FBQyx3QkFBd0IsV0FBUSxDQUFDO1FBQy9DLFlBQU8sR0FBRyxFQUFFLENBQUM7SUFNM0IsQ0FBQztJQUVHLHlDQUFTLEdBQWhCLFVBQ0UsSUFBWSxFQUNaLE1BQXFCO1FBQXJCLHVCQUFBLEVBQUEsYUFBcUI7UUFFckIsSUFBSSxNQUFNLEdBQUcsSUFBSSxVQUFVLENBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSxhQUFhLEVBQUUsRUFBRSxDQUFDO2FBQzFELE1BQU0sQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO2FBQy9CLE1BQU0sQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBRTNDLElBQUksTUFBTSxFQUFFO1lBQ1YsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1NBQzFDO1FBRUQsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBMEIsSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUM1RCxNQUFNLFFBQUE7U0FDUCxDQUFDLENBQUM7SUFDTCxDQUFDOztnQkE1QkYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFYUSxVQUFVOzZDQWtCZCxNQUFNLFNBQUMsNEJBQTRCOzs7Z0NBbEJ4QztDQXNDQyxBQTdCRCxJQTZCQztTQTFCWSxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwUGFyYW1zIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5cclxuaW1wb3J0IHsgVkVSSVRBU19BUElfUFJPWFlfUFJFRklYX1VSTCB9IGZyb20gJy4uLy4uL2NvbnN0YW50cyc7XHJcbmltcG9ydCB7IEN1c3RvbUVuY29kZXIgfSBmcm9tICcuLi8uLi9jdXN0b20tZW5jb2Rlcic7XHJcbmltcG9ydCB7IFBhZ2VJbnRlcmZhY2UgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL3BhZ2UuaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgQXNzaWduZWUgfSBmcm9tICcuLi8uLi9tb2RlbHMvYXNzaWduZWUubW9kZWwnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgVXNlckNvbnRyb2xsZXJTZXJ2aWNlIHtcclxuICBwcml2YXRlIHJlYWRvbmx5IHVybCA9IGAke3RoaXMudmVyaXRhc0FwaVByb3h5UHJlZml4VXJsfS91c2Vyc2A7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBtYXhSb3dzID0gMTA7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBodHRwQ2xpZW50OiBIdHRwQ2xpZW50LFxyXG4gICAgQEluamVjdChWRVJJVEFTX0FQSV9QUk9YWV9QUkVGSVhfVVJMKVxyXG4gICAgcHJpdmF0ZSB2ZXJpdGFzQXBpUHJveHlQcmVmaXhVcmw6IHN0cmluZ1xyXG4gICkge31cclxuXHJcbiAgcHVibGljIGdldFVzZXJzJChcclxuICAgIHBhZ2U6IG51bWJlcixcclxuICAgIHNlYXJjaDogc3RyaW5nID0gbnVsbFxyXG4gICk6IE9ic2VydmFibGU8UGFnZUludGVyZmFjZTxBc3NpZ25lZT4+IHtcclxuICAgIGxldCBwYXJhbXMgPSBuZXcgSHR0cFBhcmFtcyh7IGVuY29kZXI6IG5ldyBDdXN0b21FbmNvZGVyKCkgfSlcclxuICAgICAgLmFwcGVuZCgncGFnZScsIHBhZ2UudG9TdHJpbmcoKSlcclxuICAgICAgLmFwcGVuZCgnc2l6ZScsIHRoaXMubWF4Um93cy50b1N0cmluZygpKTtcclxuXHJcbiAgICBpZiAoc2VhcmNoKSB7XHJcbiAgICAgIHBhcmFtcyA9IHBhcmFtcy5hcHBlbmQoJ3NlYXJjaCcsIHNlYXJjaCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuaHR0cENsaWVudC5nZXQ8UGFnZUludGVyZmFjZTxBc3NpZ25lZT4+KHRoaXMudXJsLCB7XHJcbiAgICAgIHBhcmFtc1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==