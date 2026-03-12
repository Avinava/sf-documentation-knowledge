---
title: "FlowInterviewLogEntry"
domain: sfFieldRef
topic: flowinterviewlogentry
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:58.259Z
estimatedTokens: 433
keywords: [FlowInterviewLogEntry, log, specific, element, that’s, executed, screen, flow, interview, instance, running, previously, run, API, version]
---

# FlowInterviewLogEntry

> Represents the log of a specific element that’s executed by a screen
         flow interview. An interview is an instance of a running or previously run
         flow. This object is available in API version 49.0 and later.

# FlowInterviewLogEntry

Represents the log of a specific element that’s executed by a screen flow interview. An interview is an instance of a running or previously run flow. This object is available in API version 49.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [FlowInterviewLogEntry](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_flowinterviewlogentry.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| DurationSinceStartInMinutes | Duration In Minutes Since Flow Start | double |  |  | 18 | 2 |
| ElementApiName | Element API Name | string |  | 80 |  |  |
| ElementDurationInMinutes | Element Duration in Minutes | double |  |  | 18 | 2 |
| ElementLabel | Element Label | string |  | 255 |  |  |
| FlowInterviewLogId | Flow Interview Log ID | reference |  | 18 |  |  |
| Id | Flow Interview Log Entry ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LogEntryTimestamp | Log Entry Timestamp | datetime |  |  |  |  |
| LogEntryType | Log Entry Type | picklist |  | 255 |  |  |
| Name | Name | string |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
