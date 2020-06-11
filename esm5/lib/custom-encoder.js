var CustomEncoder = /** @class */ (function () {
    function CustomEncoder() {
    }
    CustomEncoder.prototype.encodeKey = function (key) {
        return encodeURIComponent(key);
    };
    CustomEncoder.prototype.encodeValue = function (value) {
        return encodeURIComponent(value);
    };
    CustomEncoder.prototype.decodeKey = function (key) {
        return decodeURIComponent(key);
    };
    CustomEncoder.prototype.decodeValue = function (value) {
        return decodeURIComponent(value);
    };
    return CustomEncoder;
}());
export { CustomEncoder };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLWVuY29kZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly92ZXJpdGFzLWxpYnJhcnkvIiwic291cmNlcyI6WyJsaWIvY3VzdG9tLWVuY29kZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7SUFBQTtJQWdCQSxDQUFDO0lBZlEsaUNBQVMsR0FBaEIsVUFBaUIsR0FBVztRQUMxQixPQUFPLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFTSxtQ0FBVyxHQUFsQixVQUFtQixLQUFhO1FBQzlCLE9BQU8sa0JBQWtCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVNLGlDQUFTLEdBQWhCLFVBQWlCLEdBQVc7UUFDMUIsT0FBTyxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRU0sbUNBQVcsR0FBbEIsVUFBbUIsS0FBYTtRQUM5QixPQUFPLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFDSCxvQkFBQztBQUFELENBQUMsQUFoQkQsSUFnQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwUGFyYW1ldGVyQ29kZWMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcblxyXG5leHBvcnQgY2xhc3MgQ3VzdG9tRW5jb2RlciBpbXBsZW1lbnRzIEh0dHBQYXJhbWV0ZXJDb2RlYyB7XHJcbiAgcHVibGljIGVuY29kZUtleShrZXk6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KGtleSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZW5jb2RlVmFsdWUodmFsdWU6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBkZWNvZGVLZXkoa2V5OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChrZXkpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGRlY29kZVZhbHVlKHZhbHVlOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudCh2YWx1ZSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==