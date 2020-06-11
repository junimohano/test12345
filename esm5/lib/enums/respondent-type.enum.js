export var RespondentTypeEnum;
(function (RespondentTypeEnum) {
    RespondentTypeEnum["Reviewer"] = "REVIEWER";
    RespondentTypeEnum["RemediationTaskReviewer"] = "REMEDIATION_TASK_REVIEWER";
    RespondentTypeEnum["PrivacyTeam"] = "PRIVACY_TEAM";
    RespondentTypeEnum["BusinessOwner"] = "BUSINESS_OWNER";
    RespondentTypeEnum["VendorContact"] = "VENDOR_CONTACT";
    RespondentTypeEnum["HumanResourcesTeam"] = "HUMAN_RESOURCES_TEAM";
    RespondentTypeEnum["ItSecurityTeam"] = "IT_SECURITY_TEAM";
    RespondentTypeEnum["Other"] = "OTHER";
})(RespondentTypeEnum || (RespondentTypeEnum = {}));
(function (RespondentTypeEnum) {
    function getDisplayText(value) {
        var result = '';
        switch (value) {
            case RespondentTypeEnum.Reviewer:
                result = 'Reviewer';
                break;
            case RespondentTypeEnum.RemediationTaskReviewer:
                result = 'Remediation Task Reviewer';
                break;
            case RespondentTypeEnum.PrivacyTeam:
                result = 'Privacy Team';
                break;
            case RespondentTypeEnum.BusinessOwner:
                result = 'Business Owner';
                break;
            case RespondentTypeEnum.VendorContact:
                result = 'Vendor Contact';
                break;
            case RespondentTypeEnum.HumanResourcesTeam:
                result = 'Human Resources Team';
                break;
            case RespondentTypeEnum.ItSecurityTeam:
                result = 'IT/Security Team';
                break;
            case RespondentTypeEnum.Other:
                result = 'Other';
                break;
            default:
                result = value;
                break;
        }
        return result;
    }
    RespondentTypeEnum.getDisplayText = getDisplayText;
})(RespondentTypeEnum || (RespondentTypeEnum = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzcG9uZGVudC10eXBlLmVudW0uanMiLCJzb3VyY2VSb290Ijoibmc6Ly92ZXJpdGFzLXVpLWxpYnJhcnkvIiwic291cmNlcyI6WyJsaWIvZW51bXMvcmVzcG9uZGVudC10eXBlLmVudW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxDQUFOLElBQVksa0JBU1g7QUFURCxXQUFZLGtCQUFrQjtJQUM1QiwyQ0FBcUIsQ0FBQTtJQUNyQiwyRUFBcUQsQ0FBQTtJQUNyRCxrREFBNEIsQ0FBQTtJQUM1QixzREFBZ0MsQ0FBQTtJQUNoQyxzREFBZ0MsQ0FBQTtJQUNoQyxpRUFBMkMsQ0FBQTtJQUMzQyx5REFBbUMsQ0FBQTtJQUNuQyxxQ0FBZSxDQUFBO0FBQ2pCLENBQUMsRUFUVyxrQkFBa0IsS0FBbEIsa0JBQWtCLFFBUzdCO0FBRUQsV0FBaUIsa0JBQWtCO0lBQ2pDLFNBQWdCLGNBQWMsQ0FBQyxLQUF5QjtRQUN0RCxJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDaEIsUUFBUSxLQUFLLEVBQUU7WUFDYixLQUFLLGtCQUFrQixDQUFDLFFBQVE7Z0JBQzlCLE1BQU0sR0FBRyxVQUFVLENBQUM7Z0JBQ3BCLE1BQU07WUFFUixLQUFLLGtCQUFrQixDQUFDLHVCQUF1QjtnQkFDN0MsTUFBTSxHQUFHLDJCQUEyQixDQUFDO2dCQUNyQyxNQUFNO1lBRVIsS0FBSyxrQkFBa0IsQ0FBQyxXQUFXO2dCQUNqQyxNQUFNLEdBQUcsY0FBYyxDQUFDO2dCQUN4QixNQUFNO1lBRVIsS0FBSyxrQkFBa0IsQ0FBQyxhQUFhO2dCQUNuQyxNQUFNLEdBQUcsZ0JBQWdCLENBQUM7Z0JBQzFCLE1BQU07WUFFUixLQUFLLGtCQUFrQixDQUFDLGFBQWE7Z0JBQ25DLE1BQU0sR0FBRyxnQkFBZ0IsQ0FBQztnQkFDMUIsTUFBTTtZQUVSLEtBQUssa0JBQWtCLENBQUMsa0JBQWtCO2dCQUN4QyxNQUFNLEdBQUcsc0JBQXNCLENBQUM7Z0JBQ2hDLE1BQU07WUFFUixLQUFLLGtCQUFrQixDQUFDLGNBQWM7Z0JBQ3BDLE1BQU0sR0FBRyxrQkFBa0IsQ0FBQztnQkFDNUIsTUFBTTtZQUVSLEtBQUssa0JBQWtCLENBQUMsS0FBSztnQkFDM0IsTUFBTSxHQUFHLE9BQU8sQ0FBQztnQkFDakIsTUFBTTtZQUVSO2dCQUNFLE1BQU0sR0FBRyxLQUFLLENBQUM7Z0JBQ2YsTUFBTTtTQUNUO1FBRUQsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQztJQXpDZSxpQ0FBYyxpQkF5QzdCLENBQUE7QUFDSCxDQUFDLEVBM0NnQixrQkFBa0IsS0FBbEIsa0JBQWtCLFFBMkNsQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBlbnVtIFJlc3BvbmRlbnRUeXBlRW51bSB7XHJcbiAgUmV2aWV3ZXIgPSAnUkVWSUVXRVInLFxyXG4gIFJlbWVkaWF0aW9uVGFza1Jldmlld2VyID0gJ1JFTUVESUFUSU9OX1RBU0tfUkVWSUVXRVInLFxyXG4gIFByaXZhY3lUZWFtID0gJ1BSSVZBQ1lfVEVBTScsXHJcbiAgQnVzaW5lc3NPd25lciA9ICdCVVNJTkVTU19PV05FUicsXHJcbiAgVmVuZG9yQ29udGFjdCA9ICdWRU5ET1JfQ09OVEFDVCcsXHJcbiAgSHVtYW5SZXNvdXJjZXNUZWFtID0gJ0hVTUFOX1JFU09VUkNFU19URUFNJyxcclxuICBJdFNlY3VyaXR5VGVhbSA9ICdJVF9TRUNVUklUWV9URUFNJyxcclxuICBPdGhlciA9ICdPVEhFUidcclxufVxyXG5cclxuZXhwb3J0IG5hbWVzcGFjZSBSZXNwb25kZW50VHlwZUVudW0ge1xyXG4gIGV4cG9ydCBmdW5jdGlvbiBnZXREaXNwbGF5VGV4dCh2YWx1ZTogUmVzcG9uZGVudFR5cGVFbnVtKTogc3RyaW5nIHtcclxuICAgIGxldCByZXN1bHQgPSAnJztcclxuICAgIHN3aXRjaCAodmFsdWUpIHtcclxuICAgICAgY2FzZSBSZXNwb25kZW50VHlwZUVudW0uUmV2aWV3ZXI6XHJcbiAgICAgICAgcmVzdWx0ID0gJ1Jldmlld2VyJztcclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIGNhc2UgUmVzcG9uZGVudFR5cGVFbnVtLlJlbWVkaWF0aW9uVGFza1Jldmlld2VyOlxyXG4gICAgICAgIHJlc3VsdCA9ICdSZW1lZGlhdGlvbiBUYXNrIFJldmlld2VyJztcclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIGNhc2UgUmVzcG9uZGVudFR5cGVFbnVtLlByaXZhY3lUZWFtOlxyXG4gICAgICAgIHJlc3VsdCA9ICdQcml2YWN5IFRlYW0nO1xyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgY2FzZSBSZXNwb25kZW50VHlwZUVudW0uQnVzaW5lc3NPd25lcjpcclxuICAgICAgICByZXN1bHQgPSAnQnVzaW5lc3MgT3duZXInO1xyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgY2FzZSBSZXNwb25kZW50VHlwZUVudW0uVmVuZG9yQ29udGFjdDpcclxuICAgICAgICByZXN1bHQgPSAnVmVuZG9yIENvbnRhY3QnO1xyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgY2FzZSBSZXNwb25kZW50VHlwZUVudW0uSHVtYW5SZXNvdXJjZXNUZWFtOlxyXG4gICAgICAgIHJlc3VsdCA9ICdIdW1hbiBSZXNvdXJjZXMgVGVhbSc7XHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICBjYXNlIFJlc3BvbmRlbnRUeXBlRW51bS5JdFNlY3VyaXR5VGVhbTpcclxuICAgICAgICByZXN1bHQgPSAnSVQvU2VjdXJpdHkgVGVhbSc7XHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICBjYXNlIFJlc3BvbmRlbnRUeXBlRW51bS5PdGhlcjpcclxuICAgICAgICByZXN1bHQgPSAnT3RoZXInO1xyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXN1bHQgPSB2YWx1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH1cclxufVxyXG4iXX0=