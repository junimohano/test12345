export declare enum RespondentTypeEnum {
    Reviewer = "REVIEWER",
    RemediationTaskReviewer = "REMEDIATION_TASK_REVIEWER",
    PrivacyTeam = "PRIVACY_TEAM",
    BusinessOwner = "BUSINESS_OWNER",
    VendorContact = "VENDOR_CONTACT",
    HumanResourcesTeam = "HUMAN_RESOURCES_TEAM",
    ItSecurityTeam = "IT_SECURITY_TEAM",
    Other = "OTHER"
}
export declare namespace RespondentTypeEnum {
    function getDisplayText(value: RespondentTypeEnum): string;
}
