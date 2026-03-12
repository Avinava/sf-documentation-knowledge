---
title: "TimeSheetEntry"
domain: sfFieldRef
topic: timesheetentry
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:15.354Z
estimatedTokens: 494
keywords: [TimeSheetEntry, span, time, service, resource, spends, task, API, version, 47.0, later]
---

# TimeSheetEntry

> Represents a span of time that a service resource spends on a field
			service task. This object is available in API version 47.0 and later.

# TimeSheetEntry

Represents a span of time that a service resource spends on a field service task. This object is available in API version 47.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [TimeSheetEntry](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_timesheetentry.htm "HTML (New Window)") in the Energy and Utilities Cloud Developer Guide, Field Service Developer Guide, and Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| Description | Description | textarea |  | 32000 |  |  |
| DurationInMinutes | Duration (In Minutes) | int | 9 |  |  |  |
| EndTime | End Time | datetime |  |  |  |  |
| Id | Time Sheet Entry ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| LocationTimeZone | Location Time Zone | picklist |  | 255 |  |  |
| StartTime | Start Time | datetime |  |  |  |  |
| Status | Status | picklist |  | 40 |  |  |
| Subject | Subject | string |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TimeSheetEntryNumber | Name | string |  | 255 |  |  |
| TimeSheetId | Time Sheet ID | reference |  | 18 |  |  |
| Type | Type | picklist |  | 40 |  |  |
| WorkOrderId | Work Order ID | reference |  | 18 |  |  |
| WorkOrderLineItemId | Work Order Line Item ID | reference |  | 18 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
