---
title: "FlowRecordElementOccurrence"
domain: sfFieldRef
topic: flowrecordelementoccurrence
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:58.380Z
estimatedTokens: 473
keywords: [FlowRecordElementOccurrence, execution, metrics, element, flow, version, API, 62.0, later]
---

# FlowRecordElementOccurrence

> Represents the execution metrics for a single element within a flow
         version. This object is available in API version 62.0 and later.

# FlowRecordElementOccurrence

Represents the execution metrics for a single element within a flow version. This object is available in API version 62.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [FlowRecordElementOccurrence](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_flowrecordelementoccurrence.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| DataSpaceId | Data Space ID | reference |  | 18 |  |  |
| Entries | Entries | int | 9 |  |  |  |
| Errors | Errors | int | 9 |  |  |  |
| Exits | Exits | int | 9 |  |  |  |
| FlowRecordElementId | Flow Element ID | reference |  | 18 |  |  |
| FlowRecordId | Flow ID | reference |  | 18 |  |  |
| FlowRecordVersionId | Flow Version ID | reference |  | 18 |  |  |
| FlowRecordVersionOccurrenceId | Flow Version Occurrence ID | reference |  | 18 |  |  |
| Id | Flow Record Element Occurrence ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| Name | Flow Record Element Occurrence Name | string |  | 255 |  |  |
| Paused | Paused | int | 9 |  |  |  |
| Retrying | Retrying | int | 9 |  |  |  |
| Stopped | Stopped | int | 9 |  |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TotalDuration | Total Duration | long | 18 |  |  |  |
| Waiting | Waiting | int | 9 |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
