---
title: "AsyncOperationTracker"
domain: sfFieldRef
topic: asyncoperationtracker
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:48.849Z
estimatedTokens: 563
keywords: [AsyncOperationTracker, status, asynchronous, initiated, Quote, Order, CreditMemo, entities, API, version, 61.0, later]
---

# AsyncOperationTracker

> Represents the status of an asynchronous request initiated from the Quote,
         Order, and CreditMemo entities. This object is available in API version 61.0 and
      later.

# AsyncOperationTracker

Represents the status of an asynchronous request initiated from the Quote, Order, and CreditMemo entities. This object is available in API version 61.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [AsyncOperationTracker](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_asyncoperationtracker.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AsyncOperationNumber | Async Operation Number | string |  | 255 |  |  |
| CorrelationIdentifier | Correlation Identifier | string |  | 80 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| ExpiresAt | Expires At | datetime |  |  |  |  |
| FailedJobItems | Failed Job Items | int | 9 |  |  |  |
| FinishedAt | Finished At | datetime |  |  |  |  |
| Id | Revenue Async Operation ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| JobType | Job Type | picklist |  | 255 |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| ParentOperationId | Revenue Async Operation ID | reference |  | 18 |  |  |
| ReferenceEntityId | Reference Entity ID | reference |  | 18 |  |  |
| Request | Request | textarea |  | 131072 |  |  |
| Response | Response | textarea |  | 131072 |  |  |
| SequenceNumber | Sequence Number | int | 9 |  |  |  |
| StartedAt | Started At | datetime |  |  |  |  |
| Status | Status | picklist |  | 255 |  |  |
| StepName | Step Name | picklist |  | 255 |  |  |
| SubmittedAt | Submitted At | datetime |  |  |  |  |
| SuccessfulJobItems | Successful Job Items | int | 9 |  |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TotalJobItems | Total Job Items | int | 9 |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
