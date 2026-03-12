---
title: "ApexLog"
domain: sfFieldRef
topic: apexlog
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:47.211Z
estimatedTokens: 337
keywords: [ApexLog, debug, log, containing, transaction, including, Apex, Visualforce, workflow, validation, rules, API, version, 19.0, later]
---

# ApexLog

> Represents a debug log containing information about a transaction,
      including information about Apex, Visualforce, and workflow and validation rules. This
    object is available in API version 19.0 and later.

# ApexLog

Represents a debug log containing information about a transaction, including information about Apex, Visualforce, and workflow and validation rules. This object is available in API version 19.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [ApexLog](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_apexlog.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| Application | Application | string |  | 64 |  |  |
| DurationMilliseconds | Duration (ms) | int | 9 |  |  |  |
| Id | Log ID | id |  | 18 |  |  |
| LastModifiedDate | Date | datetime |  |  |  |  |
| Location | Location | picklist |  | 40 |  |  |
| LogLength | Log Size (bytes) | int | 9 |  |  |  |
| LogUserId | Log User ID | reference |  | 18 |  |  |
| Operation | Operation | string |  | 128 |  |  |
| Request | Request Type | string |  | 16 |  |  |
| RequestIdentifier | Request ID | string |  | 84 |  |  |
| StartTime | Start Time | datetime |  |  |  |  |
| Status | Status | string |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
