---
title: "AsyncOperationTracker"
domain: object-reference
topic: asyncoperationtracker
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:05.132Z
estimatedTokens: 1253
keywords: [AsyncOperationTracker, status, asynchronous, initiated, Quote, Order, CreditMemo, entities, API, version, 61.0, later, Calls]
---

# AsyncOperationTracker

> Represents the status of an asynchronous request initiated from the Quote,
         Order, and CreditMemo entities. This object is available in API version 61.0 and
      later.

# AsyncOperationTracker

Represents the status of an asynchronous request initiated from the Quote, Order, and CreditMemo entities. This object is available in API version 61.0 and later.

## Supported Calls

delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

## Fields

| Field | Details |
| --- | --- |
| AsyncOperationNumber | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionA string that identifies the operation being tracked in AsyncOperationTracker. |
| CorrelationIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionA string that identifies an operation across services. |
| ExpiresAt | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp indicating when this record will be deleted. |
| FailedJobItems | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of items within the job that have failed. |
| FinishedAt | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp indicating when the asynchronous process completed. |
| JobType | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe type of job.Possible values are:AssetizationAsyncJobAutomatedNegativeInvoiceLineConversion—Automated Negative Invoice Line ConversionAutomaticRefunds—Automatic RefundsCommerceVariationsUpsertContextPersistenceCreateCPQContractsJobDeltaCatalogSyndicationAsyncJobFullCatalogSyndicationAsyncJobInvoiceDocgenJobInvoiceDocgenPostProcessJobInvoiceDocgenRetryJobInvoiceDraftToPostedPearAmendQtyAssets—Initiate Amend QuantityPearCancelAssets—Initiate CancellationPearRenewAssets—Initiate RenewalPlaceOrderPlaceOrderPersistSyncPlaceOrderPriceAsyncPlaceOrderTaxAsyncPlaceQuote—Place QuotePlaceQuotePersistAndPriceSyncPlaceQuotePersistSyncPlaceQuotePriceAsyncPlaceQuoteTaxAsyncPriceRuleDeployment—Price Rule DeploymentPriceSheetDeployJobQuoteToOrderJobRuleLibraryDeploymentTransactionLineBom—Create Material Lines |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record, a record related to this record, or a list view. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, the user might have only accessed this record or list view (LastReferencedDate) but not viewed it. |
| OwnerId | TypereferencePropertiesFilter, Group, SortDescriptionThe ID of the user or group that owns the job.,This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| ParentOperationId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThis field is a relationship field.Relationship NameParentOperationRefers ToAsyncOperationTracker |
| ReferenceEntityId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionContains the ID of a record associated with the asynchronous request. For example, if the asynchronous request is associated with a credit memo, this field contains the ID of the credit memo.This field is a polymorphic relationship field.Relationship NameReferenceEntityRefers ToCreditMemo, InvoiceBatchRun, Order, Product2, Quote |
| StartedAt | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp indicating when Salesforce started the asynchronous process. |
| Status | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe status of the asynchronous request.Possible values are:CompletedCompletedWithFailures—Completed With FailuresFailureInProgress—In ProgressSubmitted |
| StepName | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionPossible values are:AssetizationAsyncJobAutomatedNegativeInvoiceLineConversion—Automated Negative Invoice Line ConversionAutomaticRefunds—Automatic RefundsCommerceVariationsUpsertContextPersistenceCreateCPQContractsJobDeltaCatalogSyndicationAsyncJobFullCatalogSyndicationAsyncJobInvoiceDocgenJobInvoiceDocgenPostProcessJobInvoiceDocgenRetryJobInvoiceDraftToPostedPSTCommonSyncStepPSTConfigAndPersistPSTOrderTaxAsyncPSTPriceAndPersistPSTQuoteTaxAsyncPearAmendQtyAssets—Initiate Amend QuantityPearCancelAssets—Initiate CancellationPearRenewAssets—Initiate RenewalPlaceOrderPlaceOrderPersistSyncPlaceOrderPriceAsyncPlaceOrderTaxAsyncPlaceQuote—Place QuotePlaceQuotePersistAndPriceSyncPlaceQuotePersistSyncPlaceQuotePriceAsyncPlaceQuoteTaxAsyncPriceRuleDeployment—Price Rule DeploymentPriceSheetDeployJobQuoteToOrderJobRuleLibraryDeploymentTransactionLineBom—Create Material Lines |
| SubmittedAt | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp indicating when the asynchronous process was submitted by the REST request. |
| SuccessfulJobItems | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of successful items in this job. |
| TotalJobItems | TypeintPropertiesFilter, Group, Nillable, SortDescriptionTotal number of items in this job. |
