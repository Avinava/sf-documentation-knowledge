---
title: "WorkCapacityUsage"
domain: sfFieldRef
topic: workcapacityusage
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:17.310Z
estimatedTokens: 681
keywords: [WorkCapacityUsage, capacity, usage, specific, service, territory, workstream, whole, period, API, version, 59.0, later]
---

# WorkCapacityUsage

> Represents the capacity usage in a specific service territory for a
			workstream or for the whole service territory in a given period. This object is
		available in API version 59.0 and later.

# WorkCapacityUsage

Represents the capacity usage in a specific service territory for a workstream or for the whole service territory in a given period. This object is available in API version 59.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [WorkCapacityUsage](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_workcapacityusage.htm "HTML (New Window)") in the Field Service Developer Guide and Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AvailCapacityHours | Available Capacity (in hours) | double |  |  | 18 | 2 |
| CapacityLimitRelaxation | Limit Override Policy | string |  | 255 |  |  |
| ConsumptionToLimitRatio | Consumption to Limit Ratio (%) | double |  |  | 18 | 2 |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| EndDate | End Date | date |  |  |  |  |
| Id | Work Capacity Usage ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsSvcTerrOnlyLimit | Service Territory Limit | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| LimitationPercentage | Limitation (in percentage) | double |  |  | 18 | 2 |
| LimitationUnits | Limitation Units | picklist |  | 255 |  |  |
| LimitationValue | Limitation (in hours) | double |  |  | 18 | 2 |
| OriginalLimit | Original Limitation | double |  |  | 18 | 2 |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| ServiceTerritoryId | Territory ID | reference |  | 18 |  |  |
| StartDate | Start Date | date |  |  |  |  |
| SvcApptField | Service Appointment Field | picklist |  | 255 |  |  |
| SvcApptFieldValDplyNm | Field Value Display Name | string |  | 255 |  |  |
| SvcApptFieldValue | Field Value | string |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TimeConsumedInHours | Time Consumed (in hours) | double |  |  | 18 | 0 |
| TimeConsumedInMinutes | Time Consumed (in minutes) | double |  |  | 18 | 2 |
| TimePeriod | Time Period | picklist |  | 255 |  |  |
| WcuUniqueField1 | Wcu Unique Field1 | string |  | 255 |  |  |
| WcuUniqueField2 | Wcu Unique Field2 | string |  | 255 |  |  |
| WorkCapacityUsageNumber | Usage Number | string |  | 255 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
