---
title: "RevenueTransactionErrorLog"
domain: object-reference
topic: revenuetransactionerrorlog
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:16.385Z
estimatedTokens: 1393
keywords: [RevenueTransactionErrorLog, errors, occurred, processing, error, record, persists, until, another, category, primary, optionally, occurs, API, version]
---

# RevenueTransactionErrorLog

> Contains information about errors that occurred while processing a request.
         The error record persists until another error with the same category, primary record, and
         (optionally) related record occurs. This object is available in API version 55.0 and
      later.

# RevenueTransactionErrorLog

Contains information about errors that occurred while processing a request. The error record persists until another error with the same category, primary record, and (optionally) related record occurs. This object is available in API version 55.0 and later.

## Supported Calls

describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

## Special Access Rules

This object is available with Subscription Management and Billing (Revenue Cloud).

For information about this object that's available with Billing (Revenue Cloud), including its special access rules, see the [Revenue Cloud Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_revenuetransactionerrorlog.htm "HTML (New Window)").

## Fields

| Field | Details |
| --- | --- |
| AsyncOperationTrackerId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the async operation tracker record created by the request. Async operation tracker records contain information about the status of the asynchronous process initiated by the request. This field is available in API version 60.0 and later.This field is a relationship field.Relationship NameAsyncOperationTrackerRelationship TypeLookupRefers ToAsyncOperationTracker |
| Category | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionProvides context about the source of error. For example, if an error occurs while processing an /assets/collection/actions/initiate-cancellation request, the category is InitiateCancel.Possible values are:ApplyAPIAutomatedNegativeInvoiceLineConversionAutomaticRefundsConvertNegativeInvoiceLineToCredit—available in API version 56.0 and laterCore Invoice Generation FailureCreditInvoiceAPICreditTaxIntegrationAPIInitiateAmendment—available in API version 56.0 and laterInitiateCancelInitiateRenewalInsufficientAccess—Insufficient Access to start Invoice runInvoiceBatchRunInvoiceBatchRunInvoiceGenerationInvoiceBatchRunPostProcessorInvoiceBatchRunPreProcessorInvoiceBatchRunRecoveryInvoiceBatchRunSelectionStepInvoiceBatchRunSummarizerInvoiceBatchRunTaxProcessorMaterialLineGeneration—available in API version 58.0 and laterInvalid Tax API InputInvalid Tax Integration InputOrderTaxCalculationFailure—available in API version 61.0 and later of Revenue Cloud.OrderToAssetOrderItemToAsset—available in API version 59.0 and laterOrderToBillingSchedulePaymentSalePaymentScheduleGeneration—available in API version 56.0 and laterQuotePriceCalculationFailure—available in API version 61.0 and later of Revenue Cloud.QuoteTaxCalculationFailure—available in API version 61.0 and later of Revenue Cloud.QuoteToOrder—available in API version 56.0 and laterPost Tax API FailurePost-Credit Tax FailurePre-Credit Tax FailureStandaloneCreditAPITax API FailureTransactionToContract—available in API version 59.0 and laterUnknown Failure—available in API version 56.0 and laterVoidPostedInvoiceAPI |
| ErrorCode | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe error code; for example, INVALID_INPUT. |
| ErrorLogNumber | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionAn auto-generated unique ID that identifies the error. |
| ErrorMessage | TypetextareaDescriptionContains information about the error and how to resolve it. |
| OwnerId | TypereferencePropertiesFilter, Group, SortDescriptionThe ID of the user who made the request that resulted in the creation of the error log.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| PrimaryRecordId | TypereferencePropertiesFilter, Group, SortDescriptionThe ID of the record that’s associated with this error. For example, if the error occurred while creating an invoice from an order, the primary ID is the ID of the order.This field is a polymorphic relationship field.Relationship NamePrimaryRecordRelationship TypeLookupRefers ToAsset, BillingBatchScheduler, BillingSchedule, CardPaymentMethod, CreditMemo, Invoice, InvoiceBatchRun, InvoiceBatchRunRecovery, Order, Payment, PaymentBatchRun, PaymentGateway, Quote, Refund |
| RelatedRecordId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionOptional. The ID of a record that can provide additional context about the error. For example, if PrimaryRecordId is the ID of an order, this field could be the ID of an order item.This field is a polymorphic relationship field.Relationship NameRelatedRecordRelationship TypeLookupRefers ToBillingBatchScheduler, BillingSchedule, BillingScheduleGroup, CreditMemo, CreditMemoLine, Invoice, InvoiceLine, OrderItem, Payment, PaymentSchedule, PaymentScheduleItem, QuoteLineItem, Refund |
| RequestIdentifier | TypestringPropertiesFilter, Group, idLookup, Nillable, SortDescriptionThe unique ID returned by the request. Use this ID to identify the revenue transaction error log records for a specific request. This field is available in API version 57.0 and later. |
| RevenueAsyncOperationId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the revenue async operation record created by the request. Revenue async operation records contain information about the status of the asynchronous process initiated by the request. This field is available in API version 57.0 and later.This field is a relationship field.Relationship NameRevenueAsyncOperationRelationship TypeLookupRefers ToRevenueAsyncOperation |
