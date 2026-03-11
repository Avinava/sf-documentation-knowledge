---
title: "Commerce: Order Payment Summary Mapping"
domain: data-cloud
topic: commerce-order-payment-summary-mapping
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:17:42.898Z
keywords: [Commerce, Order, Payment, Summary, Mapping, DLO, DMO]
---

# Commerce: Order Payment Summary Mapping

# Commerce: Order Payment Summary Mapping

After a data stream is deployed, the Commerce starter data bundle automatically maps data from Commerce Cloud to data model objects (DMO)s in Data Cloud. Order Payment Summary data is about one or more payments that have the same payment method applied to a single sales order.

## DLO to DMO Mapping

These data mappings relate to the OrderPaymentSummary object included in the Salesforce Commerce connector and how that data connects to DMOs.

| DLO Field | DLO Field Data Type | DMO | DMO Field Name |
| --- | --- | --- | --- |
| Id | ID | SalesOrderPaymentSummary | id |
| OrderSummaryId | reference | SalesOrderPaymentSummary | SalesOrderId |
| CurrencyIsoCode | picklist | SalesOrderPaymentSummary | PaymentAmountCurrency |
| Method | string | SalesOrderPaymentSummary | Name |
| PaymentMethodId | reference | SalesOrderPaymentSummary | PaymentMethodId |
| SystemModstamp | dateTime | SalesOrderPaymentSummary | SystemModstamp |
| AuthorizationReversalAmount | currency | SalesOrderPaymentSummary | AuthorizationReversalAmount |
| AuthorizationAmount | currency | SalesOrderPaymentSummary | AuthorizationAmount |
| CapturedAmount | currency | SalesOrderPaymentSummary | CapturedAmount |
| BalanceAmount | currency | SalesOrderPaymentSummary | AvailableToApplyBalanceAmount |