---
title: "OrgIncidentSummary"
domain: sfFieldRef
topic: orgincidentsummary
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:06.125Z
estimatedTokens: 492
keywords: [OrgIncidentSummary, statistics, according, various, categories, incidents, organization, non-compliance, laws, corruptions, health, safety, discrimination, marketing, labeling]
---

# OrgIncidentSummary

> Represents statistics according to various categories of incidents in
         an organization, such as non-compliance with laws, corruptions, health and safety,
         discrimination, marketing and labeling, and customer privacy.

# OrgIncidentSummary

Represents statistics according to various categories of incidents in an organization, such as non-compliance with laws, corruptions, health and safety, discrimination, marketing and labeling, and customer privacy.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see OrgIncidentSummary in the Net Zero Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| Category | Category | picklist |  | 40 |  |  |
| CorrectiveActionType | Corrective Action Type | picklist |  | 40 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Description | Description | textarea |  | 32000 |  |  |
| DisclsReportingPeriodId | Disclosure Reporting Period ID | reference |  | 18 |  |  |
| FineAmount | Fine Amount | currency |  |  | 18 | 0 |
| HazardType | Hazard Type | picklist |  | 40 |  |  |
| HoursWorked | Hours Worked | double |  |  | 18 | 0 |
| Id | Organization Incident Summary ID | id |  | 18 |  |  |
| IncidentCount | Incident Count | double |  |  | 18 | 0 |
| IncidentSubtype | Incident Subtype | picklist |  | 40 |  |  |
| IncidentType | Incident Type | picklist |  | 40 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsWorkRelated | Work Related | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| PenaltyType | Penalty Type | picklist |  | 40 |  |  |
| SubsidiaryAccountId | Account ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
