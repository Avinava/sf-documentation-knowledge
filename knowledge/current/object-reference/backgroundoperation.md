---
title: "BackgroundOperation"
domain: object-reference
topic: backgroundoperation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:05.476Z
estimatedTokens: 1326
keywords: [BackgroundOperation, background, operation, asynchronous, job, queue, API, version, 35.0, later, Calls, Special, Access, Rules, Usage]
---

# BackgroundOperation

> Represents a background operation in an asynchronous job queue.
		This object is available in API version 35.0 and later.

# BackgroundOperation

Represents a background operation in an asynchronous job queue. This object is available in API version 35.0 and later.

## Supported Calls

describeSObjects(), getDeleted(), getUpdated(), retrieve()

## Special Access Rules

-   BackgroundOperation doesn’t support search.

## Fields

| Field Name | Details |
| --- | --- |
| Error | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe error message for the operation. Applies only if the operation has an error status. |
| ExecutionGroup | TypestringPropertiesFilter, Group, Nillable, SortDescriptionApplies only if the operation is merged with other operations into an execution group to be processed in bulk. Identifies the execution group. |
| ExpiresAt | TypedateTimePropertiesFilter, Nillable, SortDescriptionAfter this time, the operation is removed from the asynchronous job queue. Applies only if the operation has a status of complete, canceled, error, or merged. |
| FinishedAt | TypedateTimePropertiesFilter, Nillable, SortDescriptionWhen the operation reached the status of completed or error. |
| GroupLeaderId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionApplies only if the operation is merged with other operations into an execution group to be processed in bulk. Identifies the operation that’s selected as the leader of the execution group.This field is a relationship field.Relationship NameGroupLeaderRelationship TypeLookupRefers ToBackgroundOperation |
| Name | TypestringPropertiesFilter, Group, idLookup, SortDescriptionIdentifies the background operation. |
| NumFollowers | TypeintPropertiesFilter, Group, Nillable, SortDescriptionApplies only if the operation is merged with other operations into an execution group to be processed in bulk. Number of other operations that are in the execution group. |
| ParentKey | TypestringPropertiesFilter, Group, idLookup, Nillable, SortDescriptionTag that identifies related sets of operations, if any. |
| ProcessAfter | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe operation is scheduled to be processed after this time. |
| RetryBackoff | TypeintPropertiesFilter, Group, Nillable, SortDescriptionApplies only if the operation has an error status. The first retry is attempted immediately. Each subsequent retry is increasingly delayed according to an exponential expression that’s multiplied by the RetryBackoff, in milliseconds.Specifically, the delay time is (2n-1)×R, where n is the RetryCount, and R is the RetryBackoff.The default value for RetryBackoff depends on the type of operation. For example, the RetryBackoff default for write operations on external objects is 1,000 milliseconds. For write operations, retries are attempted immediately, after 3 seconds, after 7 seconds, after 15 seconds, and so on. |
| RetryCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionNumber of attempted retries. Applies only if the operation has an error status. |
| RetryLimit | TypeintPropertiesFilter, Group, Nillable, SortDescriptionMaximum number of retries to attempt. Applies only if the operation has an error status. |
| SequenceGroup | TypestringPropertiesFilter, Group, Nillable, SortDescriptionIdentifies the sequence group. Applies only if the operation is merged with other operations into an execution group to be processed in bulk. Within an execution group, operations can be placed into a sequence group to be executed in a specific order. |
| SequenceNumber | TypeintPropertiesFilter, Group, Nillable, SortDescriptionOrder position within the sequence group. Applies only if the operation is merged with other operations into an execution group to be processed in bulk. Within an execution group, operations can be placed into a sequence group to be run in a specific order. |
| StartedAt | TypedateTimePropertiesFilter, Nillable, SortDescriptionWhen the operation started running. |
| Status | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionStatus of the background operation. The options are:NewScheduledCanceledMergedWaitingRunningErrorComplete |
| SubmittedAt | TypedateTimePropertiesFilter, Nillable, SortDescriptionWhen the operation was added to the job queue. |
| Timeout | TypeintPropertiesFilter, Group, Nillable, SortDescriptionMaximum time in milliseconds to wait for results after the operation started running. |
| Type | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionType of the background operation. The options are:ApiCatalogPollerBlockchainEventPollerCdpMetadataDeployExternalChangeDataCaptureExternalConnectivityPollerExternalObjectExternalObjectSyncExternalServiceCallbackMetadataChangesetOperationMfgBulkUpdatePrivateConnectMigrationSingularityAutoSyncSingularityMDSSyncSingularitySchemaEvolutionTriggerSiteTaskCreateSiteTaskPublishSweeperWebCartXClean |
| WorkerUri | TypestringPropertiesFilter, Group, idLookup, Nillable, SortDescriptionURI of the worker that performed the operation.Example for a Salesforce Connect OData operation:services/data/v35.0/xds/upsert |

## Usage

Use the BackgroundOperation object to:

-   Monitor the job status of asynchronous operations.
-   View errors that are related to the asynchronous operations.
-   Extract statistics for the asynchronous job queue.
