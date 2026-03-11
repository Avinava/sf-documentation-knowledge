---
title: "sale(sale)"
domain: apex-reference
topic: salesale
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.516Z
keywords: [sale, Captures, payment, without, any, prior, authorization, creates, entity., transaction, combination, Authorize, Capture, transaction., method, allows, merchants, request, funds, transferred]
---

# sale(sale)

> Captures a payment without any prior authorization and creates a
      payment entity. The payment sale transaction is a combination of an Authorize
      transaction and Capture transaction. This payment sale method allows merchants to request that the
      funds are transferred to the merchant account in a single command, with no further action
      (such as charging a credit card) from the merchant.

### sale(sale)

Captures a payment without any prior authorization and creates a payment entity. The payment sale transaction is a combination of an [Authorize](#apex_ConnectAPI_Payments_authorize_1 "Authorize a payment.") transaction and [Capture](#apex_ConnectAPI_Payments_capture_1 "Capture an authorized payment.") transaction. This payment sale method allows merchants to request that the funds are transferred to the merchant account in a single command, with no further action (such as charging a credit card) from the merchant.

#### API Version

54.0

#### Requires Chatter

No

#### Signature

global static ConnectApi.SaleResponse sale(ConnectApi.SaleRequest sale)

#### Parameters

sale

Type: [ConnectApi.SaleRequest](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_sale.htm "Payment sale input consumed by the payment sale service.")

Payment sale input class.

#### Return Value

Type: [ConnectApi.SaleResponse](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_sale_output.htm "Payment sale response.")