---
title: "WorkCapacityLimit"
domain: sfFieldRef
topic: workcapacitylimit
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:17.276Z
estimatedTokens: 638
keywords: [WorkCapacityLimit, capacity, limit, specific, service, territory, workstream, whole, period, API, version, 59.0, later]
---

# WorkCapacityLimit

> Represents the capacity limit in a specific service territory for a
         workstream or for the whole service territory in  a given
         period.
      This object is available in API version 59.0 and later.

# WorkCapacityLimit

Represents the capacity limit in a specific service territory for a workstream or for the whole service territory in a given period. This object is available in API version 59.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [WorkCapacityLimit](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_workcapacitylimit.htm "HTML (New Window)") in the Field Service Developer Guide and Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CapacityLimitRelaxation | Limit Override Policy | string |  | 255 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| Description | Description | string |  | 255 |  |  |
| EndDate | End Date | date |  |  |  |  |
| Id | Work Capacity Limit ID | id |  | 18 |  |  |
| IsActive | Active | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsFriday | Friday | boolean |  |  |  |  |
| IsMonday | Monday | boolean |  |  |  |  |
| IsSaturday | Saturday | boolean |  |  |  |  |
| IsSunday | Sunday | boolean |  |  |  |  |
| IsSvcTerrOnlyLimit | Service Territory Limit | boolean |  |  |  |  |
| IsThursday | Thursday | boolean |  |  |  |  |
| IsTuesday | Tuesday | boolean |  |  |  |  |
| IsWednesday | Wednesday | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| LimitationUnits | Limitation Units | picklist |  | 255 |  |  |
| LimitationValue | Limitation Value | double |  |  | 18 | 2 |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| ServiceTerritoryId | Territory ID | reference |  | 18 |  |  |
| StartDate | Start Date | date |  |  |  |  |
| SvcApptField | Service Appointment Field | picklist |  | 255 |  |  |
| SvcApptFieldValDplyNm | Field Value Display Name | string |  | 255 |  |  |
| SvcApptFieldValue | Field Value | string |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TimePeriod | Time Period | picklist |  | 255 |  |  |
| WorkCapacityLimitNumber | Limit Number | string |  | 255 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
