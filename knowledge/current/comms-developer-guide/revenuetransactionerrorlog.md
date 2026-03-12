---
title: "RevenueTransactionErrorLog"
domain: comms-developer-guide
topic: revenuetransactionerrorlog
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:23.220Z
estimatedTokens: 565
keywords: [RevenueTransactionErrorLog, row, errors, occurred, processing, error, record, persists, until, another, category, primary, necessary, occurs, API]
---

# RevenueTransactionErrorLog

> Each row represents information about errors that occurred while processing a
         request. The error record persists until another error with the same category, primary
         record, and, if necessary, related record occurs. This object is available in API
      version 66.0 and later.

# RevenueTransactionErrorLog

Each row represents information about errors that occurred while processing a request. The error record persists until another error with the same category, primary record, and, if necessary, related record occurs. This object is available in API version 66.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete()

## Special Access Rules

The RevenueTransactionErrorLog object is available with CMERLMB2CAddOn license.

## Fields

| Field | Details |
| --- | --- |
| PrimaryRecord2Id | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionThe ID of the record that’s associated with this error.This field is a polymorphic relationship field.Relationship NamePrimaryRecord2Refers ToAccount, CreditMemoInvApplication, CreditMemoLine, CreditMemoLineInvoiceLine, CreditMemoLineTax, DebitMemo, DebitMemoLine, InvoiceLine, InvoiceLineTax, LegalEntyAccountingPeriod, Order, PaymentLineInvoice, PaymentLineInvoiceLine, RefundLinePayment, WebCart |
| RelatedRecord2Id | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionThe ID of a record that can provide additional context about the error. For example, if PrimaryRecordId is the ID of an order, this field could be the ID of an invoice line.This field is a polymorphic relationship field.Relationship NameRelatedRecord2Refers ToCartItem, CreditMemoLine, CreditMemoLineInvoiceLine, CreditMemoLineTax, DebitMemo, GeneralLedgerAccount, GeneralLedgerAcctAsgntRule, InvoiceLine, InvoiceLineTax, Payment, PaymentLineInvoice, PaymentLineInvoiceLine, Refund, RefundLinePayment |

#### See Also

-   [Revenue Cloud Developer Guide: RevenueTransactionErrorLog](https://developer.salesforce.com/docs/atlas.en-us.260.0.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_revenuetransactionerrorlog.htm "Revenue Cloud Developer Guide: RevenueTransactionErrorLog - HTML (New Window)")

-   [RevenueTransactionErrorLog](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_revenuetransactionerrorlog.htm "RevenueTransactionErrorLog - HTML (New Window)")
