---
title: "setPaymentMethodTokenizationResponse(paymentMethodTokenizationResponse)"
domain: apex-reference
topic: setpaymentmethodtokenizationresponsepaymentmethodtokenizationresponse
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:24.440Z
estimatedTokens: 206
keywords: [setPaymentMethodTokenizationResponse, paymentMethodTokenizationResponse, gateway, tokenized, payment]
---

# setPaymentMethodTokenizationResponse(paymentMethodTokenizationResponse)

> Sets information from the gateway about the tokenized payment
      method.

# setPaymentMethodTokenizationResponse(paymentMethodTokenizationResponse)

Sets information from the gateway about the tokenized payment method.

## Signature

global void setPaymentMethodTokenizationResponse(commercepayments.PaymentMethodTokenizationResponse paymentMethodTokenizationResponse)

## Parameters

paymentMethodTokenizationResponse

[PaymentMethodTokenizationResponse](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_PaymentMethodTokenizationResponse.htm#apex_class_commercepayments_PaymentMethodTokenizationResponse "Gateway response sent by payment gateway adapters for the payment method tokenization request. The response includes the payment method’s token ID value.")

Gateway response sent by payment gateway adapters for the payment method tokenization request.

## Return Value

Type: void

## Related Topics

- PaymentMethodTokenizationResponse (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_PaymentMethodTokenizationResponse.htm)
