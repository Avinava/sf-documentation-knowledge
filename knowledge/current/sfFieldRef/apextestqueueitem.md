---
title: "ApexTestQueueItem"
domain: sfFieldRef
topic: apextestqueueitem
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:47.229Z
estimatedTokens: 301
keywords: [ApexTestQueueItem, Apex, job, queue, API, version, 23.0, later]
---

# ApexTestQueueItem

> Represents a single Apex class in the Apex job queue. This object
  is available in API version 23.0 and later.

# ApexTestQueueItem

Represents a single Apex class in the Apex job queue. This object is available in API version 23.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [ApexTestQueueItem](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_apextestqueueitem.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ApexClassId | Class ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| ExtendedStatus | Status Detail | string |  | 1000 |  |  |
| Id | Apex Test Queue Item ID | id |  | 18 |  |  |
| ParentJobId | Apex Job ID | reference |  | 18 |  |  |
| ShouldSkipCodeCoverage | Should Skip Code Coverage | boolean |  |  |  |  |
| Status | Status | picklist |  | 40 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TestRunResultId | Apex Test Run Result ID | reference |  | 18 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
