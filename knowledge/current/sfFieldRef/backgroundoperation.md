---
title: "BackgroundOperation"
domain: sfFieldRef
topic: backgroundoperation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:49.373Z
estimatedTokens: 529
keywords: [BackgroundOperation, background, operation, asynchronous, job, queue, API, version, 35.0, later]
---

# BackgroundOperation

> Represents a background operation in an asynchronous job queue.
		This object is available in API version 35.0 and later.

# BackgroundOperation

Represents a background operation in an asynchronous job queue. This object is available in API version 35.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [BackgroundOperation](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_backgroundoperation.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| Error | Error Message | string |  | 255 |  |  |
| ExecutionGroup | Execution Group | string |  | 255 |  |  |
| ExpiresAt | Expires | datetime |  |  |  |  |
| FinishedAt | Finished | datetime |  |  |  |  |
| GroupLeaderId | Background Operation ID | reference |  | 18 |  |  |
| Id | Background Operation ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| NumFollowers | Num Followers | int | 9 |  |  |  |
| ParentKey | Parent Key | string |  | 255 |  |  |
| ProcessAfter | Process After | datetime |  |  |  |  |
| RetryBackoff | Retry Backoff | int | 9 |  |  |  |
| RetryCount | Retry Count | int | 9 |  |  |  |
| RetryLimit | Retry Limit | int | 9 |  |  |  |
| SequenceGroup | Sequence Group | string |  | 255 |  |  |
| SequenceNumber | Sequence Number | int | 9 |  |  |  |
| StartedAt | Started | datetime |  |  |  |  |
| Status | Status | picklist |  | 255 |  |  |
| SubmittedAt | Submitted | datetime |  |  |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| Timeout | Timeout | int | 9 |  |  |  |
| Type | Type | picklist |  | 255 |  |  |
| WorkerUri | Worker URI | string |  | 255 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
