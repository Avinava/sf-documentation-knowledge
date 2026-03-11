---
title: "setPaymentMethodTokenizationResponse(paymentMethodTokenizationResponse)"
domain: apex-reference
topic: setpaymentmethodtokenizationresponsepaymentmethodtokenizationresponse
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:36.670Z
keywords: [setPaymentMethodTokenizationResponse, paymentMethodTokenizationResponse, Signature, Parameters, Return, Value]
---

# setPaymentMethodTokenizationResponse(paymentMethodTokenizationResponse)

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