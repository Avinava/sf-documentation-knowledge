---
title: "AsyncOperationLog"
domain: object-reference
topic: asyncoperationlog
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:05.119Z
estimatedTokens: 620
keywords: [AsyncOperationLog, async, operations, log, containing, progress, status, external, synchronizations, Omnichannel, Inventory, service, API, version, 51.0]
---

# AsyncOperationLog

> Represents an async operations log containing progress and status information
      about external synchronizations to the Omnichannel Inventory service. This object is
    available in API version 51.0 and later.

# AsyncOperationLog

Represents an async operations log containing progress and status information about external synchronizations to the Omnichannel Inventory service. This object is available in API version 51.0 and later.

## Supported Calls

delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete()

## Special Access Rules

This object is only available in Omnichannel Inventory orgs.

## Fields

| Field | Details |
| --- | --- |
| AsyncOperationNumber | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe auto-generated number assigned to the operation. |
| Description | TypestringPropertiesFilter, Group, Nillable, SortDescriptionDescription of the operation. |
| Error | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe error message for the operation. Applies only if the operation has an error. |
| ExternalReference | TypestringPropertiesFilter, Group, idLookup, Nillable, SortDescriptionThe unique external reference ID per type. |
| FinishedAt | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time the operation finished. |
| LastStatusUpdateAt | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time the status of the operation was last updated. |
| RelatedRecordId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe related record ID for the async request. This field is available in API version 60.0 and later.This field is a polymorphic relationship field.Relationship NameRelatedRecordRelationship TypeLookupRefers ToAsset, OrderItemSummary |
| Request | TypetextareaPropertiesNillableDescriptionThe request sent to the external service. |
| Response | TypetextareaPropertiesNillableDescriptionThe full response from the external service. |
| StartedAt | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time the operation started. |
| Status | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe status of the operation.Possible values are:CompletedErrorIn ProgressNew |
| Type | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe type of operation that is being tracked.Possible values are:CancelAsset—This value is available in API version 60.0 and later.CreateAsset—This value is available in API version 60.0 and later.CancelOrderItemSummariesImportInventoryLocationManagementOrderSummaryAdjustmentAggregate |
