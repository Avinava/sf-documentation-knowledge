---
title: "MaintenancePlan"
domain: sfFieldRef
topic: maintenanceplan
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:03.580Z
estimatedTokens: 692
keywords: [MaintenancePlan, preventive, maintenance, schedule, assets, service]
---

# MaintenancePlan

> Represents a preventive maintenance schedule for one or more assets in field
		service.

# MaintenancePlan

Represents a preventive maintenance schedule for one or more assets in field service.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [MaintenancePlan](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_maintenanceplan.htm "HTML (New Window)") in the Field Service Developer Guide and Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AccountId | Account ID | reference |  | 18 |  |  |
| ContactId | Contact ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| Description | Description | textarea |  | 32000 |  |  |
| DoesAutoGenerateWorkOrders | Auto-generate work orders | boolean |  |  |  |  |
| DoesGenerateUponCompletion | Generate new batch upon completion | boolean |  |  |  |  |
| EndDate | End Date | date |  |  |  |  |
| GenerationHorizon | Generation Horizon (Days) | int | 9 |  |  |  |
| GenerationTimeframe | Generation Timeframe | int | 9 |  |  |  |
| GenerationTimeframeType | Generation Timeframe Type | picklist |  | 255 |  |  |
| Id | Maintenance Plan ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| LocationId | Location ID | reference |  | 18 |  |  |
| MaintenancePlanNumber | Maintenance Plan Number | string |  | 255 |  |  |
| MaintenancePlanTitle | Maintenance Plan Title | string |  | 255 |  |  |
| MaintenanceWindowEndDays | Maintenance Window End (Days) | int | 9 |  |  |  |
| MaintenanceWindowStartDays | Maintenance Window Start (Days) | int | 9 |  |  |  |
| NextSuggestedMaintenanceDate | Date of the first work order in the next batch | date |  |  |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| ServiceContractId | Service Contract ID | reference |  | 18 |  |  |
| StartDate | Start Date | date |  |  |  |  |
| SvcApptGenerationMethod | Service Appointment Generation Method | picklist |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| WorkOrderGenerationMethod | Work Order Generation Method | picklist |  | 255 |  |  |
| WorkOrderGenerationStatus | Work Order Generation Status | picklist |  | 255 |  |  |
| WorkTypeId | Work Type ID | reference |  | 18 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
