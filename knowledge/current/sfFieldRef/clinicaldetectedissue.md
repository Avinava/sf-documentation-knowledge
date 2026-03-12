---
title: "ClinicalDetectedIssue"
domain: sfFieldRef
topic: clinicaldetectedissue
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:53.210Z
estimatedTokens: 303
keywords: [ClinicalDetectedIssue, detected, issue, resulting, clinical, activity, API, version, 55.0, later]
---

# ClinicalDetectedIssue

> Represents information about a detected issue resulting from a
         clinical activity. This object is available in API version 55.0 and later.

# ClinicalDetectedIssue

Represents information about a detected issue resulting from a clinical activity. This object is available in API version 55.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see ClinicalDetectedIssue in the Salesforce Health Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Id | Clinical Detected Issue ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| PatientId | Account ID | reference |  | 18 |  |  |
| Status | Status | picklist |  | 40 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
