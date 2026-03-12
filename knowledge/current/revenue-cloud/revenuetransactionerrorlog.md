---
title: "RevenueTransactionErrorLog"
domain: revenue-cloud
topic: revenuetransactionerrorlog
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T05:14:11.472Z
estimatedTokens: 993
keywords: [RevenueTransactionErrorLog, Represents, details, errors, occurred, during, processing, request., error, record, persists, until, new, same, category, primary, necessary, related, occurs., API]
---

# RevenueTransactionErrorLog

> Represents the details of errors that occurred during the processing of a
         request. The error record persists until a new error with the same category, primary
         record, and, if necessary, related record occurs. This object is available in API
      version 62.0 and later.

# RevenueTransactionErrorLog

Represents the details of errors that occurred during the processing of a request. The error record persists until a new error with the same category, primary record, and, if necessary, related record occurs. This object is available in API version 62.0 and later.

## Supported Calls

describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

## Special Access Rules

You need the Billing Operations User permission set to access this object.

## Fields

| Field | Details |
| --- | --- |
| AsyncOperationTrackerId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the async operation tracker record created by the request. Async operation tracker records contain information about the status of the asynchronous process initiated by the request.This field is a relationship field.Relationship NameAsyncOperationTrackerRefers ToAsyncOperationTracker |
| Category | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionSpecifies the context of the source of error. |
| ErrorCode | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe error code shown during the request processing, such as INVALID_INPUT. |
| ErrorLogNumber | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionRequired. An auto-generated unique ID that identifies the error. |
| ErrorMessage | TypetextareaPropertiesCreateDescriptionThis field contains information about the error and how to resolve it. |
| OwnerId | TypereferencePropertiesFilter, Group, SortDescriptionRequired. The ID of the user who made the request that resulted in the creation of the error log.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| PrimaryRecord2Id | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the record that’s associated with this error.This field is a polymorphic relationship field.Relationship NamePrimaryRecord2Refers ToLegalEntyAccountingPeriod |
| PrimaryRecordId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the record that’s associated with this error. For example, if the error occurred while creating an invoice from an order, the primary ID is the ID of the order.This field is a polymorphic relationship field.Relationship NamePrimaryRecordRefers ToAsset, AsyncOperationTracker, BillingBatchScheduler, BillingSchedule, CreditMemo, InvBatchDraftToPostedRun, Invoice, InvoiceBatchRun, InvoiceBatchRunRecovery, Order, OrderItem, RevenueAsyncOperation, RuleLibraryVersion |
| PrimaryTextRecord | TypestringPropertiesCreate, Filter, Group, Nillable, SortDescriptionThe identifier of the primary record associated with the error log. Available in API version 63.0 and later. |
| RelatedRecord2Id | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of a record that can provide additional context about the error. For example, if PrimaryRecordId is the ID of an order, this field could be the ID of an invoice line.This field is a polymorphic relationship field.Relationship NameRelatedRecord2Refers ToCreditMemoLine, CreditMemoLineInvoiceLine, CreditMemoLineTax, InvoiceLine, InvoiceLineTax |
| RelatedRecordId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of a record that can provide additional context about the error. For example, if PrimaryRecordId is the ID of an order, this field could be the ID of an order item.This field is a polymorphic relationship field.Relationship NameRelatedRecordRefers ToAsset, BillingBatchScheduler, BillingSchedule, BillingScheduleGroup, CreditMemo, CreditMemoLine, InvBatchDraftToPostedRun, Invoice, InvoiceBatchRun, InvoiceLine, OrderItem |
| RequestIdentifier | TypestringPropertiesFilter, Group, idLookup, Nillable, SortDescriptionA unique ID returned by the request. Use this ID to identify the revenue transaction error log records for a specific request. |
