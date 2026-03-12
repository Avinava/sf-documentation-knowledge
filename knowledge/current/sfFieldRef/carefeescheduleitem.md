---
title: "CareFeeScheduleItem"
domain: sfFieldRef
topic: carefeescheduleitem
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:51.415Z
estimatedTokens: 331
keywords: [CareFeeScheduleItem, Stores, procedure, level, fees, fee, schedule, definition]
---

# CareFeeScheduleItem

> Stores procedure level fees for a fee schedule definition.

# CareFeeScheduleItem

Stores procedure level fees for a fee schedule definition.

For more information, see CareFeeScheduleItem in the Salesforce Health Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CareFeeScheduleItemKey | Care Fee Schedule Item Key | string |  | 255 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| FacilityPrice | Facility Price | currency |  |  | 18 | 0 |
| FeeScheduleDefinitionId | Fee Schedule Definition ID | reference |  | 18 |  |  |
| Id | Care Fee Schedule Item ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| NonFacilityPrice | Non-Facility Price | currency |  |  | 18 | 0 |
| ProcedureCodeDescription | Procedure Code Description | string |  | 255 |  |  |
| ProcedureCodeId | Code Set Bundle ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
