---
title: "RevenueAsyncOperation"
domain: sfFieldRef
topic: revenueasyncoperation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:12.708Z
estimatedTokens: 532
keywords: [RevenueAsyncOperation, status, asynchronous, process, initiated, REST, Subscription, Management, API, versions, 57.0, 59.0, AsyncOperationTracker, instead, RevenueSyncOperation]
---

# RevenueAsyncOperation

> Represents the status of an asynchronous process initiated by a REST
         request in Subscription Management. This object is available in API versions 57.0 to
      59.0. Use AsyncOperationTracker instead of RevenueSyncOperation in API version 59.0 and
      later.

# RevenueAsyncOperation

Represents the status of an asynchronous process initiated by a REST request in Subscription Management. This object is available in API versions 57.0 to 59.0. Use AsyncOperationTracker instead of RevenueSyncOperation in API version 59.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [RevenueAsyncOperation](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_revenueasyncoperation.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

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
| ParentOperationId | Revenue Async Operation ID | reference |  | 18 |  |  |
| ReferenceEntityId | Reference Entity ID | reference |  | 18 |  |  |
| Response | Response | textarea |  | 131072 |  |  |
| StartedAt | Started At | datetime |  |  |  |  |
| Status | Status | picklist |  | 255 |  |  |
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
