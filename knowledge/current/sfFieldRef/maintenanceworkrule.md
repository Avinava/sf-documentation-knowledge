---
title: "MaintenanceWorkRule"
domain: sfFieldRef
topic: maintenanceworkrule
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:03.603Z
estimatedTokens: 503
keywords: [MaintenanceWorkRule, recurrence, pattern, maintenance, record, API, version, 49.0, later]
---

# MaintenanceWorkRule

> Represents the recurrence pattern for a maintenance record. This object
    is available in API version 49.0 and later.

# MaintenanceWorkRule

Represents the recurrence pattern for a maintenance record. This object is available in API version 49.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [MaintenanceWorkRule](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_maintenanceworkrule.htm "HTML (New Window)") in the Field Service Developer Guide and Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| Id | Maintenance Work Rule ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Maintenance Work Rule Name | string |  | 255 |  |  |
| NextSuggestedMaintenanceDate | Date of the first work order in the next batch | date |  |  |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| ParentMaintenancePlanId | Maintenance Plan ID | reference |  | 18 |  |  |
| ParentMaintenanceRecordId | Maintenance Asset ID | reference |  | 18 |  |  |
| RecordsetFilterCriteriaId | Recordset Filter Criteria ID | reference |  | 18 |  |  |
| RecurrencePattern | Recurrence Pattern | string |  | 255 |  |  |
| SortOrder | Sort Order | int | 9 |  |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| Title | Maintenance Work Rule Title | string |  | 255 |  |  |
| Type | Maintenance Work Rule Type | picklist |  | 255 |  |  |
| WorkTypeId | Work Type ID | reference |  | 18 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
