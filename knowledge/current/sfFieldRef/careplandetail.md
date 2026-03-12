---
title: "CarePlanDetail"
domain: sfFieldRef
topic: careplandetail
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:51.664Z
estimatedTokens: 454
keywords: [CarePlanDetail, additional, associated, care, plan, record, may, things, addressed, contributors, supporting, API, version, 61.0, later]
---

# CarePlanDetail

> Represents additional information associated with a care plan record. These
         details may be things addressed by the care plan, contributors in the care plan, supporting
         information, and so on. This object is available in API version 61.0 and later.

# CarePlanDetail

Represents additional information associated with a care plan record. These details may be things addressed by the care plan, contributors in the care plan, supporting information, and so on. This object is available in API version 61.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see CarePlanDetail in the Life Sciences Cloud Developer Guide and Public Sector Solutions Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CarePlanId | Care Plan ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| DetailCodeId | Detail Code ID | reference |  | 18 |  |  |
| DetailRecordId | Detail Record ID | reference |  | 18 |  |  |
| DetailType | Detail Type | picklist |  | 40 |  |  |
| Id | Care Plan Detail ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Care Plan Detail Name | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| ProblemPriority | Problem Priority | picklist |  | 40 |  |  |
| SequenceNumber | Sequence Number | int | 9 |  |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TaskJobStatus | Task Job Status | picklist |  | 255 |  |  |
| TaskJobStatusMessage | Task Job Status Message | textarea |  | 2000 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
