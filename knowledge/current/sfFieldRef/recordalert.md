---
title: "RecordAlert"
domain: sfFieldRef
topic: recordalert
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:11.753Z
estimatedTokens: 448
keywords: [RecordAlert, alert, message, specific, record, tracks, status, active, period, API, version, 54.0, later]
---

# RecordAlert

> Represents an alert message about a specific record and tracks the status and
         active period of the alert. This object is available in API version 54.0 and later.

# RecordAlert

Represents an alert message about a specific record and tracks the status and active period of the alert. This object is available in API version 54.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see RecordAlert in the Industries Common Resources Developer Guide and Life Sciences Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Description | Description | string |  | 255 |  |  |
| EffectiveDate | Effective Start Date | datetime |  |  |  |  |
| Id | Record Alert ID | id |  | 18 |  |  |
| IsActive | Active | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| ParentId | Parent Record ID | reference |  | 18 |  |  |
| RecordAlertCategoryId | Record Alert Category ID | reference |  | 18 |  |  |
| Severity | Severity | picklist |  | 40 |  |  |
| SnoozeUntilDate | Snooze Until Date | datetime |  |  |  |  |
| SourceSystemIdentifier | Source System ID | string |  | 255 |  |  |
| Subject | Subject | string |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| ValidUntilDate | Valid Until Date | datetime |  |  |  |  |
| WhatId | What Record ID | reference |  | 18 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
