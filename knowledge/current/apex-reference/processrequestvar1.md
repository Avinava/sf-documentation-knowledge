---
title: "processRequest(var1)"
domain: apex-reference
topic: processrequestvar1
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:40.738Z
keywords: [processRequest, var1, entry, point, processing, payment, requests., Returns, response, gateway., Signature, Parameters, Return, Value]
---

# processRequest(var1)

> The entry point for processing payment requests. Returns the
      response from the payment gateway.

### processRequest(var1)

The entry point for processing payment requests. Returns the response from the payment gateway.

#### Signature

global commercepayments.GatewayResponse processRequest(commercepayments.PaymentGatewayContext var1)

#### Parameters

var1

Type: [commercepayments.PaymentGatewayContext](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_class_commercepayments_PaymentGatewayContext.htm#apex_class_commerce_payments_PaymentGatewayContext)

You can retrieve the request type and the request from the Context object.

#### Return Value

Type: commercepayments.GatewayResponse

The response from the payment gateway.