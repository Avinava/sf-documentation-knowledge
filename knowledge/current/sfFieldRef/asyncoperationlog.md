---
title: "AsyncOperationLog"
domain: sfFieldRef
topic: asyncoperationlog
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:48.839Z
estimatedTokens: 493
keywords: [AsyncOperationLog, async, operations, log, containing, progress, status, external, synchronizations, Omnichannel, Inventory, service, API, version, 51.0]
---

# AsyncOperationLog

> Represents an async operations log containing progress and status information
      about external synchronizations to the Omnichannel Inventory service. This object is
    available in API version 51.0 and later.

# AsyncOperationLog

Represents an async operations log containing progress and status information about external synchronizations to the Omnichannel Inventory service. This object is available in API version 51.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [AsyncOperationLog](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_asyncoperationlog.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AsyncOperationNumber | Async Operation Number | string |  | 255 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| Description | Description | string |  | 255 |  |  |
| Error | Error | string |  | 255 |  |  |
| ExternalReference | External Reference | string |  | 255 |  |  |
| FinishedAt | Finished At | datetime |  |  |  |  |
| Id | Async Operation Log ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastStatusUpdateAt | Last Status Update At | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| RelatedRecordId | Related Record ID | reference |  | 18 |  |  |
| Request | Request | textarea |  | 131072 |  |  |
| Response | Response | textarea |  | 131072 |  |  |
| StartedAt | Started At | datetime |  |  |  |  |
| Status | Status | picklist |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| Type | Type | picklist |  | 255 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
