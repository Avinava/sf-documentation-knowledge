---
title: "ServiceResourceCapacity"
domain: sfFieldRef
topic: serviceresourcecapacity
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:13.540Z
estimatedTokens: 447
keywords: [ServiceResourceCapacity, maximum, number, scheduled, hours, service, appointments, capacity-based, resource, specific, time, period, API, version, 38.0]
---

# ServiceResourceCapacity

> Represents the maximum number of scheduled hours or number of service
			appointments that a capacity-based service resource can complete within a specific time
			period. This object is available in API version 38.0 and later.

# ServiceResourceCapacity

Represents the maximum number of scheduled hours or number of service appointments that a capacity-based service resource can complete within a specific time period. This object is available in API version 38.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [ServiceResourceCapacity](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_serviceresourcecapacity.htm "HTML (New Window)") in the Field Service Developer Guide and Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CapacityInHours | Hours per Time Period | double |  |  | 18 | 2 |
| CapacityInWorkItems | Work Items per Time Period | int | 9 |  |  |  |
| CapacityNumber | Resource Capacity Number | string |  | 255 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| EndDate | End Date | date |  |  |  |  |
| Id | Resource Capacity ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| ServiceResourceId | Resource ID | reference |  | 18 |  |  |
| StartDate | Start Date | date |  |  |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TimePeriod | Time Period | picklist |  | 255 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
