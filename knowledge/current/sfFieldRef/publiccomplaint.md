---
title: "PublicComplaint"
domain: sfFieldRef
topic: publiccomplaint
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:10.870Z
estimatedTokens: 794
keywords: [PublicComplaint, complaints, submitted, users, API, version, 49.0, later]
---

# PublicComplaint

> Represents the complaints submitted by public users. This object is
      available in API version 49.0 and later.

# PublicComplaint

Represents the complaints submitted by public users. This object is available in API version 49.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [PublicComplaint](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_publiccomplaint.htm "HTML (New Window)") in the Case Management Guide, Emergency Response Management Object Reference, Object Reference for the Salesforce Platform, and Public Sector Solutions Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AccountId | Account ID | reference |  | 18 |  |  |
| BusinessAddress | Business Address | textarea |  | 1000 |  |  |
| BusinessName | Business Name | string |  | 255 |  |  |
| CauseSubtype | Cause Subtype | picklist |  | 40 |  |  |
| CauseType | Cause Type | picklist |  | 40 |  |  |
| Comments | Comments | textarea |  | 65000 |  |  |
| CompensationAmount | Compensation Amount | currency |  |  | 18 | 0 |
| ComplaintCaseId | Case ID | reference |  | 18 |  |  |
| ComplaintCaseStatus | Complaint Case Status | picklist |  | 40 |  |  |
| ComplaintSubType | Subtype | picklist |  | 40 |  |  |
| ComplaintType | Type | picklist |  | 40 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| Description | Description | textarea |  | 20000 |  |  |
| Email | Email ID | email |  | 80 |  |  |
| EscalationCause | Escalation Cause | picklist |  | 40 |  |  |
| FirstName | First Name | string |  | 255 |  |  |
| Id | Public Complaint ID | id |  | 18 |  |  |
| IncidentDate | Incident Date | date |  |  |  |  |
| IsComplainantAuthorized | Is Complainant Authorized | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsReporterConfidential | Is Reporter Confidential | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastName | Last Name | string |  | 255 |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| MobileNumber | Mobile Number | phone |  | 40 |  |  |
| Name | Complaint ID | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| Priority | Priority | picklist |  | 40 |  |  |
| ProductType | Product Type | picklist |  | 40 |  |  |
| ReceivedDate | Received Date | date |  |  |  |  |
| ReporterAddress | Reporter Address | textarea |  | 1000 |  |  |
| ReporterCategory | Reporter Category | picklist |  | 40 |  |  |
| ReporterOrganization | Reporter Organization | string |  | 255 |  |  |
| ShouldInclInRegulatoryRpt | Include In Regulatory Report | boolean |  |  |  |  |
| SourceType | Source Type | picklist |  | 40 |  |  |
| Status | Status | picklist |  | 40 |  |  |
| Subject | Subject | string |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
