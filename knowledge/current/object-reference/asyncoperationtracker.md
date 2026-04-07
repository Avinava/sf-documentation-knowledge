---
title: "AsyncOperationTracker"
domain: object-reference
topic: asyncoperationtracker
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T09:04:35.331Z
estimatedTokens: 2722
keywords: [AsyncOperationTracker, status, asynchronous, initiated, Quote, Order, CreditMemo, objects, API, version, 61.0, later, Calls, Associated]
---

# AsyncOperationTracker

> Represents the status of an asynchronous request initiated from the Quote,
         Order, and CreditMemo objects. This object is available in API version 61.0 and later.

# AsyncOperationTracker

Represents the status of an asynchronous request initiated from the Quote, Order, and CreditMemo objects. This object is available in API version 61.0 and later.

## Supported Calls

delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

## Fields

| Field | Details |
| --- | --- |
| AsyncOperationNumber | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionA string that identifies the operation tracked in AsyncOperationTracker. |
| CorrelationIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionA string that identifies an operation across services. |
| ExpiresAt | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp indicating when this record will be deleted. |
| FailedJobItems | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of items within the job that have failed. |
| FinishedAt | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp indicating when the asynchronous process completed. |
| JobType | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe type of job.Possible values are:ASMAdServerCheckAvailability. This field is available in API version 66.0 and later.ASMAdServerIntegration. This field is available in API version 66.0 and later.ASMAddRelatedEntityToAQL. This field is available in API version 66.0 and later.ASMApplyMediaPlanTemplateJob. This field is available in API version 66.0 and later.ASMApplyTargetingTemplateJob. This field is available in API version 66.0 and later.ASMCalcLinearMediaSpotPrc. This field is available in API version 66.0 and later.ASMCreateAmendQuoteJob. This field is available in API version 66.0 and later.ASMFileProcessorJob. This field is available in API version 66.0 and later.ASMMediaPlanAsTemplate. This field is available in API version 66.0 and later.ASMMediaPlanClone. This field is available in API version 66.0 and later.ASMMediaPlanCopyJob. This field is available in API version 66.0 and later.AssetizationAsyncJobAutomatedNegativeInvoiceLineConversionAutomaticRefundsCommerceVariationsUpsertContextPersistenceCreateCPQContractsJobCreditMemoDraftToPosted. This field is available in API version 66.0 and later.CreditMemoRecovery. This field is available in API version 66.0 and later.DeltaCatalogSyndicationAsyncJobenergyAgreementSetup. This field is available in API version 66.0 and later.FullCatalogSyndicationAsyncJobInvoiceBatchRunEmailJob. This field is available in API version 66.0 and later.InvoiceDocgenJobInvoiceDocgenPostProcessJobInvoiceDocgenRetryJobInvoiceDraftToPostedInvoiceEstimatedTaxCallout. This field is available in API version 66.0 and later.LoadSalesRecipientData. This field is available in API version 66.0 and later.MultisiteAutoQuote. This field is available in API version 66.0 and later.PearAmendQtyAssets—Initiate Amend QuantityPearCancelAssets—Initiate CancellationPearRenewAssets—Initiate RenewalPlaceOrderPlaceOrderPersistSyncPlaceOrderPriceAsyncPlaceOrderTaxAsyncPlaceQuotePlaceQuotePersistAndPriceSyncPlaceQuotePersistSyncPlaceQuotePriceAsyncPlaceQuoteTaxAsyncPreprocessOrder. This field is available in API version 66.0 and later.PriceRuleDeploymentPriceSheetDeployJobPSTBaseJob—Top-Level. This field is available in API version 66.0 and later.PSTConfig—Configuration. This field is available in API version 66.0 and later.PSTPersist—Save. This field is available in API version 66.0 and later.PSTPrice. This field is available in API version 66.0 and later.QuoteToOrderJobRuleLibraryDeploymentSmsDltTemplateIngestion. This field is available in API version 66.0 and later.StandaloneBillingSchedulesCreation. This field is available in API version 66.0 and later.StatementOfAccountGeneration. This field is available in API version 66.0 and later.StoreRetrieveSyncJob. This field is available in API version 66.0 and later.TestSerialMessageStepJob. This field is available in API version 66.0 and later.TransactionLineBom—Create Material LinesVoidCreditMemo. This field is available in API version 66.0 and later. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record, a record related to this record, or a list view. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, the user only accessed this record or list view (LastReferencedDate) but not viewed it. |
| OwnerId | TypereferencePropertiesFilter, Group, SortDescriptionThe ID of the user or group that owns the job.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| ParentOperationId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThis field is a relationship field.Relationship NameParentOperationRefers ToAsyncOperationTracker |
| ReferenceEntityId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionContains the ID of a record associated with the asynchronous request. For example, if the asynchronous request is associated with a credit memo, this field contains the ID of the credit memo.This field is a polymorphic relationship field.Relationship NameReferenceEntityRefers ToCreditMemo, InvoiceBatchRun, Order, Product2, Quote |
| Request | TypetextareaPropertiesNillableDescriptionThe payload required to process the async request that’s populated by internal Salesforce services that use the async framework. This field is available in API version 66.0 and later. |
| Response | TypetextareaPropertiesNillableDescriptionStores the response for each step in the async flow, used in the next steps of the flow until its completion. This field is available in API version 66.0 and later. |
| SequenceNumber | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe sequence number associated with each step of a multiple step job, to define the execution order for the async job flow. This field is available in API version 66.0 and later. |
| StartedAt | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp indicating when Salesforce started the asynchronous process. |
| Status | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe status of the asynchronous request.Possible values are:CompletedCompletedWithFailuresFailureInProgressSubmitted |
| StepName | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionPossible values are:ASMAdServerCheckAvailability. This field is available in API version 66.0 and later.ASMAdServerIntegration. This field is available in API version 66.0 and later.ASMAddRelatedEntityToAQL. This field is available in API version 66.0 and later.ASMApplyMediaPlanTemplateJob. This field is available in API version 66.0 and later.ASMApplyTargetingTemplateJob. This field is available in API version 66.0 and later.ASMCalcLinearMediaSpotPrc. This field is available in API version 66.0 and later.ASMCreateAmendQuoteJob. This field is available in API version 66.0 and later.ASMFileProcessorJobASMMediaPlanAsTemplate. This field is available in API version 66.0 and later.ASMMediaPlanClone. This field is available in API version 66.0 and later.ASMMediaPlanCopyJob. This field is available in API version 66.0 and later.AssetizationAsyncJobAutomatedNegativeInvoiceLineConversionAutomaticRefundsCommerceVariationsUpsertContextPersistenceCreateCPQContractsJobCreditMemoDraftToPosted. This field is available in API version 66.0 and later.CreditMemoRecovery. This field is available in API version 66.0 and later.DeltaCatalogSyndicationAsyncJobenergyAgreementSetup. This field is available in API version 66.0 and later.FullCatalogSyndicationAsyncJobInvoiceBatchRunEmailJob. This field is available in API version 66.0 and later.InvoiceDocgenJobInvoiceDocgenPostProcessJobInvoiceDocgenRetryJobInvoiceDraftToPostedInvoiceEstimatedTaxCallout. This field is available in API version 66.0 and later.LoadSalesRecipientData. This field is available in API version 66.0 and later.MultisiteAutoQuote. This field is available in API version 66.0 and later.PearAmendQtyAssets—Initiate Amend QuantityPearCancelAssets—Initiate CancellationPearRenewAssets—Initiate RenewalPlaceOrderPlaceOrderPersistSyncPlaceOrderPriceAsyncPlaceOrderTaxAsyncPlaceQuotePlaceQuotePersistAndPriceSyncPlaceQuotePersistSyncPlaceQuotePriceAsyncPlaceQuoteTaxAsyncPreprocessOrder. This field is available in API version 66.0 and later.PriceRuleDeploymentPriceSheetDeployJobPSTBaseJob—Top-Level. This field is available in API version 66.0 and later.PSTCommonSyncStepPSTConfig. This field is available in API version 66.0 and later.PSTConfigAndPersist. This field is available in API version 66.0 and later.PSTOrderTaxAsync. This field is available in API version 66.0 and later.PSTPersist—Save. This field is available in API version 66.0 and later.PSTPrice. This field is available in API version 66.0 and later.PSTPriceAndPersist. This field is available in API version 66.0 and later.PSTQuoteTaxAsync. This field is available in API version 66.0 and later.QuoteToOrderJobRuleLibraryDeploymentSmsDltTemplateIngestion. This field is available in API version 66.0 and later.StandaloneBillingSchedulesCreation. This field is available in API version 66.0 and later.StatementOfAccountGeneration. This field is available in API version 66.0 and later.StoreRetrieveSyncJob. This field is available in API version 66.0 and later.TestSerialMessageStepJob. This field is available in API version 66.0 and later.TransactionLineBom—Create Material LinesVoidCreditMemo |
| SubmittedAt | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp indicating when the asynchronous process was submitted by the REST request. |
| SuccessfulJobItems | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of successful items in this job. |
| TotalJobItems | TypeintPropertiesFilter, Group, Nillable, SortDescriptionTotal number of items in this job. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[AsyncOperationTrackerOwnerSharingRule](https://developer.salesforce.com/docs/atlas.en-us.260.0.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_ownersharingrule.htm "HTML (New Window)")

Sharing rules are available for the object.

[AsyncOperationTrackerShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_share.htm "HTML (New Window)")

Sharing is available for the object.
