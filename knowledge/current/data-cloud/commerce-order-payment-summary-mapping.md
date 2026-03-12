---
title: "Commerce: Order Payment Summary Mapping"
domain: data-cloud
topic: commerce-order-payment-summary-mapping
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:13.203Z
estimatedTokens: 331
keywords: [Commerce, Order, Payment, Summary, Mapping, After, data, stream, deployed, starter, bundle, automatically, maps, Cloud, model, objects, DMO, Data, Cloud., payments]
---

# Commerce: Order Payment Summary Mapping

> After a data stream is deployed, the Commerce starter data bundle
         automatically maps data from Commerce Cloud to data model objects (DMO)s in Data Cloud. Order Payment Summary data is about one or more
         payments that have the same payment method applied to a single sales
      order.

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
