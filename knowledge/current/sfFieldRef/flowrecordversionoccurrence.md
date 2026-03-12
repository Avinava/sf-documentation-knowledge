---
title: "FlowRecordVersionOccurrence"
domain: sfFieldRef
topic: flowrecordversionoccurrence
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:58.418Z
estimatedTokens: 507
keywords: [FlowRecordVersionOccurrence, instance, recurring, flow, runs, schedule, weekly, Wednesdays, creates, occurrence, time, API, version, 60.0, later]
---

# FlowRecordVersionOccurrence

> Represents an instance of a recurring flow that runs on a schedule. For example, a flow that runs weekly on Wednesdays creates an occurrence each time it runs.
		This object is available in API version 60.0 and later.

# FlowRecordVersionOccurrence

Represents an instance of a recurring flow that runs on a schedule. For example, a flow that runs weekly on Wednesdays creates an occurrence each time it runs. This object is available in API version 60.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [FlowRecordVersionOccurrence](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_flowrecordversionoccurrence.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CompletedDate | Completed Date | datetime |  |  |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| DataSpaceId | Data Space ID | reference |  | 18 |  |  |
| Enqueued | Enqueued | int | 9 |  |  |  |
| Entries | Entries | int | 9 |  |  |  |
| ErrorDetail | Error Details | string |  | 255 |  |  |
| Errors | Errors | int | 9 |  |  |  |
| Exits | Exits | int | 9 |  |  |  |
| FlowRecordId | Flow ID | reference |  | 18 |  |  |
| FlowRecordVersionId | Flow Version ID | reference |  | 18 |  |  |
| Id | Flow Version Occurrence ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Flow Version Occurrence Name | string |  | 255 |  |  |
| ProgressStatus | Occurrence Status | picklist |  | 255 |  |  |
| ScheduledDate | Run Date | datetime |  |  |  |  |
| Stopped | Stopped | int | 9 |  |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
