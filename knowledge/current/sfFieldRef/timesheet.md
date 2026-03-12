---
title: "TimeSheet"
domain: sfFieldRef
topic: timesheet
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:15.347Z
estimatedTokens: 457
keywords: [TimeSheet, schedule, service, resource’s, time, Workforce, Engagement, API, v47.0, later]
---

# TimeSheet

> Represents a schedule of a service resource’s time in Field Service or
			Workforce Engagement. This object is available in API v47.0 and later.

# TimeSheet

Represents a schedule of a service resource’s time in Field Service or Workforce Engagement. This object is available in API v47.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [TimeSheet](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_timesheet.htm "HTML (New Window)") in the Energy and Utilities Cloud Developer Guide, Field Service Developer Guide, and Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| EndDate | Time Sheet End Date | date |  |  |  |  |
| Id | Time Sheet ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| ServiceResourceId | Resource ID | reference |  | 18 |  |  |
| StartDate | Time Sheet Start Date | date |  |  |  |  |
| Status | Status | picklist |  | 40 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TimeSheetEntryCount | Time Sheet Entry Count | int | 9 |  |  |  |
| TimeSheetNumber | Name | string |  | 255 |  |  |
| TotalDurationInHours | Total Duration (In Hours) | double |  |  | 18 | 2 |
| TotalDurationInMinutes | Total Duration (In Minutes) | int | 9 |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
