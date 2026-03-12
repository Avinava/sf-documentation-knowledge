---
title: "RevenueAsyncOperation"
domain: object-reference
topic: revenueasyncoperation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:16.376Z
estimatedTokens: 1149
keywords: [RevenueAsyncOperation, status, asynchronous, process, initiated, REST, Subscription, Management, API, versions, 57.0, 59.0, AsyncOperationTracker, instead, RevenueSyncOperation]
---

# RevenueAsyncOperation

> Represents the status of an asynchronous process initiated by a REST
         request in Subscription Management. This object is available in API versions 57.0 to
      59.0. Use AsyncOperationTracker instead of RevenueSyncOperation in API version 59.0 and
      later.

# RevenueAsyncOperation

Represents the status of an asynchronous process initiated by a REST request in Subscription Management. This object is available in API versions 57.0 to 59.0. Use AsyncOperationTracker instead of RevenueSyncOperation in API version 59.0 and later.

For example, asset-management/assets/collection/actions/initiate-amend-quantity creates a RevenueAsyncOperation record when it initiates an asynchronous process. The ID of the record is returned in the REST response.

## Supported Calls

delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

## Special Access Rules

This object is available with Subscription Management.

## Fields

| Field | Details |
| --- | --- |
| AsyncOperationNumber | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionA unique identifier for this revenue async operation record. |
| CorrelationIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionA unique identifier for the API request associated with this revenue async operation. |
| ExpiresAt | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp indicating when this record will be deleted. |
| FailedJobItems | TypeintegerPropertiesFilter, Group, Nillable, SortDescriptionThe number of items that weren’t successfully processed by the sync operation. |
| FinishedAt | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp indicating when the asynchronous process was completed. |
| JobType | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe REST request that initiated the asynchronous process.Valid values are:ASMAdServerCheckAvailabilityASMAdServerIntegrationASMApplyMediaPlanTemplateJobASMApplyTargetingTemplateJobASMCreateAmendQuoteJobASMMediaPlanAsTemplateASMMediaPlanCloneASMMediaPlanCopyJobAssetizationAsyncJobAutomatedNegativeInvoiceLineConversionAutomaticRefundsCommerceVariationsUpsertContextPersistenceCreateCPQContractsJobDeltaCatalogSyndicationAsyncJobFullCatalogSyndicationAsyncJobInvoicedDocgenJobInvoicedDocgenPostProcessJobInvoicedDocfenRetryJobInvoiceDraftToPostedInvoiceEstimatedTaxCalloutPST Base Job - Top-LevelPSTConfig - ConfigurationPSTPersist - SavePSTPrice - PricePearAmendQtyAssetsPearCancelAssetsPearRenewAssetsPlaceOrderPlaceOrderPersistSyncPlaceOrderPriceAsyncPlaceOrderTaxAsyncPlaceQuotePlaceQuotePersistAndPriceSyncPlaceQuotePersistSyncPlaceQuotePriceAsyncPlaceQuoteTaxAsyncPriceRuleDeploymentPriceSheetDeployJobQuoteToOrderJobRuleLibraryDeploymentStandaloneBillingSchedulesCreationTestSerialMessageStepJobTransactionLineBom |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record, a record related to this record, or a list view. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, the user might have only accessed this record or list view (LastReferencedDate) but not viewed it. |
| ParentOperationId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionReserved for future use.This field is a relationship field.Relationship NameParentOperationRelationship TypeLookupRefers ToRevenueAsyncOperation |
| ReferenceEntityId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionContains the ID of a record associated with the asynchronous request. For example, if the asynchronous request is associated with a credit memo, this field contains the ID of the credit memo.This field is a polymorphic field.Relationship NameReferenceEntityRelationship TypeLookupRefers ToCreditMemo, Order, Product2, Quote |
| StartedAt | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp indicating when Salesforce started the asynchronous process. |
| Status | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe status of the asynchronous process.Possible values are:CompletedCompletedWithFailuresFailureInProgressSubmitted |
| SubmittedAt | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp indicating when the asynchronous process was submitted by the REST request. |
| SuccessfulJobItems | TypeintegerPropertiesFilter, Group, Nillable, SortDescriptionThe number of items successfully processed by the sync operation. |
| TotalJobItems | TypeintegerPropertiesFilter, Group, Nillable, SortDescriptionThe total number of items processed by the sync operation, including both successfully processed items and failed items. |
