export var TaskStatusEnum;
(function (TaskStatusEnum) {
    TaskStatusEnum["Open"] = "OPEN";
    TaskStatusEnum["InProgress"] = "IN_PROGRESS";
    TaskStatusEnum["InReview"] = "IN_REVIEW";
    TaskStatusEnum["Closed"] = "CLOSED";
    TaskStatusEnum["ActionRequired"] = "ACTION_REQUIRED";
})(TaskStatusEnum || (TaskStatusEnum = {}));
(function (TaskStatusEnum) {
    function getDisplayText(value) {
        let result = '';
        switch (value) {
            case TaskStatusEnum.Open:
                result = 'Open';
                break;
            case TaskStatusEnum.InProgress:
                result = 'In Progress';
                break;
            case TaskStatusEnum.InReview:
                result = 'In Review';
                break;
            case TaskStatusEnum.Closed:
                result = 'Closed';
                break;
            case TaskStatusEnum.ActionRequired:
                result = 'Action Required';
                break;
        }
        return result;
    }
    TaskStatusEnum.getDisplayText = getDisplayText;
})(TaskStatusEnum || (TaskStatusEnum = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFzay1zdGF0dXMuZW51bS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3Zlcml0YXMtbGlicmFyeS8iLCJzb3VyY2VzIjpbImxpYi9lbnVtcy90YXNrLXN0YXR1cy5lbnVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sQ0FBTixJQUFZLGNBTVg7QUFORCxXQUFZLGNBQWM7SUFDeEIsK0JBQWEsQ0FBQTtJQUNiLDRDQUEwQixDQUFBO0lBQzFCLHdDQUFzQixDQUFBO0lBQ3RCLG1DQUFpQixDQUFBO0lBQ2pCLG9EQUFrQyxDQUFBO0FBQ3BDLENBQUMsRUFOVyxjQUFjLEtBQWQsY0FBYyxRQU16QjtBQUVELFdBQWlCLGNBQWM7SUFDN0IsU0FBZ0IsY0FBYyxDQUFDLEtBQXFCO1FBQ2xELElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUNoQixRQUFRLEtBQUssRUFBRTtZQUNiLEtBQUssY0FBYyxDQUFDLElBQUk7Z0JBQ3RCLE1BQU0sR0FBRyxNQUFNLENBQUM7Z0JBQ2hCLE1BQU07WUFFUixLQUFLLGNBQWMsQ0FBQyxVQUFVO2dCQUM1QixNQUFNLEdBQUcsYUFBYSxDQUFDO2dCQUN2QixNQUFNO1lBRVIsS0FBSyxjQUFjLENBQUMsUUFBUTtnQkFDMUIsTUFBTSxHQUFHLFdBQVcsQ0FBQztnQkFDckIsTUFBTTtZQUVSLEtBQUssY0FBYyxDQUFDLE1BQU07Z0JBQ3hCLE1BQU0sR0FBRyxRQUFRLENBQUM7Z0JBQ2xCLE1BQU07WUFFUixLQUFLLGNBQWMsQ0FBQyxjQUFjO2dCQUNoQyxNQUFNLEdBQUcsaUJBQWlCLENBQUM7Z0JBQzNCLE1BQU07U0FDVDtRQUVELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7SUF6QmUsNkJBQWMsaUJBeUI3QixDQUFBO0FBQ0gsQ0FBQyxFQTNCZ0IsY0FBYyxLQUFkLGNBQWMsUUEyQjlCIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGVudW0gVGFza1N0YXR1c0VudW0ge1xyXG4gIE9wZW4gPSAnT1BFTicsXHJcbiAgSW5Qcm9ncmVzcyA9ICdJTl9QUk9HUkVTUycsXHJcbiAgSW5SZXZpZXcgPSAnSU5fUkVWSUVXJyxcclxuICBDbG9zZWQgPSAnQ0xPU0VEJyxcclxuICBBY3Rpb25SZXF1aXJlZCA9ICdBQ1RJT05fUkVRVUlSRUQnXHJcbn1cclxuXHJcbmV4cG9ydCBuYW1lc3BhY2UgVGFza1N0YXR1c0VudW0ge1xyXG4gIGV4cG9ydCBmdW5jdGlvbiBnZXREaXNwbGF5VGV4dCh2YWx1ZTogVGFza1N0YXR1c0VudW0pOiBzdHJpbmcge1xyXG4gICAgbGV0IHJlc3VsdCA9ICcnO1xyXG4gICAgc3dpdGNoICh2YWx1ZSkge1xyXG4gICAgICBjYXNlIFRhc2tTdGF0dXNFbnVtLk9wZW46XHJcbiAgICAgICAgcmVzdWx0ID0gJ09wZW4nO1xyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgY2FzZSBUYXNrU3RhdHVzRW51bS5JblByb2dyZXNzOlxyXG4gICAgICAgIHJlc3VsdCA9ICdJbiBQcm9ncmVzcyc7XHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICBjYXNlIFRhc2tTdGF0dXNFbnVtLkluUmV2aWV3OlxyXG4gICAgICAgIHJlc3VsdCA9ICdJbiBSZXZpZXcnO1xyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgY2FzZSBUYXNrU3RhdHVzRW51bS5DbG9zZWQ6XHJcbiAgICAgICAgcmVzdWx0ID0gJ0Nsb3NlZCc7XHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICBjYXNlIFRhc2tTdGF0dXNFbnVtLkFjdGlvblJlcXVpcmVkOlxyXG4gICAgICAgIHJlc3VsdCA9ICdBY3Rpb24gUmVxdWlyZWQnO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfVxyXG59XHJcbiJdfQ==