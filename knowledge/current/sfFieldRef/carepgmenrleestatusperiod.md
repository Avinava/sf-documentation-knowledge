---
title: "CarePgmEnrleeStatusPeriod"
domain: sfFieldRef
topic: carepgmenrleestatusperiod
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:51.560Z
estimatedTokens: 350
keywords: [CarePgmEnrleeStatusPeriod, historical, changes, status, stage, care, program, enrollee, API, version, 61.0, later]
---

# CarePgmEnrleeStatusPeriod

> Represents the historical changes to the status or stage of a care program
         enrollee. This object is available in API version 61.0 and later.

# CarePgmEnrleeStatusPeriod

Represents the historical changes to the status or stage of a care program enrollee. This object is available in API version 61.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see CarePgmEnrleeStatusPeriod in the Life Sciences Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CareProgramEnrolleeId | Care Program Enrollee ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| EffectiveEndDateTime | Effective End Date | datetime |  |  |  |  |
| EffectiveStartDateTime | Effective Start Date | datetime |  |  |  |  |
| Id | Care Pgm Enrlee Status Period ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| Status | Status | picklist |  | 40 |  |  |
| StatusReason | Status Reason | string |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
