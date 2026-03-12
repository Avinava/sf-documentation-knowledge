---
title: "SalesTransactionFulfillReq"
domain: revenue-cloud
topic: salestransactionfulfillreq
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:11.483Z
estimatedTokens: 896
keywords: [SalesTransactionFulfillReq, Represents, statuses, sub-orders, belong, selected, commercial, technical, product., API, version, 62.0, later., Supported, Calls, Fields, Associated, Objects]
---

# SalesTransactionFulfillReq

> Represents the statuses of all the sub-orders that belong to the selected
         commercial or technical product. This object is available in API version 62.0 and
      later.

# SalesTransactionFulfillReq

Represents the statuses of all the sub-orders that belong to the selected commercial or technical product. This object is available in API version 62.0 and later.

## Supported Calls

describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

## Fields

| Field | Details |
| --- | --- |
| AssetizationStatus | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionSpecifies the status of the assetization.Valid values are:CompletedFailedInProgressNotStartedRejectedNotApplicable- Available in API version 64.0 and later. |
| DecompositionStatus | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionSpecifies the status of the decomposition.Valid values are:CompletedFailedInProgressNotStartedRejectedNotApplicable- Available in API version 64.0 and later. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the sales transaction fulfillment request. |
| OrchestrationGroupKey | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe identifier of the group of sales transactions that require synchronization before processing. This field is available in API version 63.0 and later. |
| OwnerId | TypereferencePropertiesFilter, Group, SortDescriptionThe ID of the user who created the request record.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| PlanCompositionStatus | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionFor internal use only.Valid values are:CompletedFailedInProgressNotStartedRejectedNotApplicable - Available in API version 64.0 and later. |
| PlanExecutionStatus | TypepicklistPropertiesFilter, Group, Nillable, SortDescriptionSpecifies the status of the plan execution.Valid values are:InProgressFrozenFreezing |
| PlanId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe identifier of the plan.This field is a relationship field.Relationship NamePlanRefers ToFulfillmentPlan |
| PreviousRequestId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe identifier of the previous fulfillment request.This field is a relationship field.Relationship NamePreviousRequestRefers ToSalesTransactionFulfillReq |
| ReferenceObjectIdentifier | TypereferencePropertiesFilter, Group, idLookup, Nillable, SortDescriptionThe ID of the sales transaction record. This field is available in API version 64.0 and later. |
| SalesTransactionType | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionSpecifies the type of sales transaction that's processed by the fulfillment request.Valid values are:StandardOrderGenericAdapter—Available in API version 64.0 and later. |
| Status | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionSpecifies the overall status of the fulfillment.Valid values are:CreatedFreezingFrozenFulfilledFulfillingRejectedSuperseded |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[SalesTransactionFulfillReqShare](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- SalesTransactionFulfillReqShare (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_share.htm)
