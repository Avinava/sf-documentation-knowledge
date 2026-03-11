---
title: "PostAuthApiPaymentMethodRequest(AlternativePaymentMethodRequest)"
domain: apex-reference
topic: postauthapipaymentmethodrequestalternativepaymentmethodrequest
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:36.628Z
keywords: [PostAuthApiPaymentMethodRequest, AlternativePaymentMethodRequest, Signature, Parameters]
---

# PostAuthApiPaymentMethodRequest(AlternativePaymentMethodRequest)

# PostAuthApiPaymentMethodRequest(AlternativePaymentMethodRequest)

Constructs a sample alternativePaymentMethodRequest. This constructor is intended for test usage and throws an exception if used outside of the Apex test context.

## Signature

global PostAuthApiPaymentMethodRequest(commercepayments.AlternativePaymentMethodRequestPaymentMethodRequest)

## Parameters

alternativePaymentMethodRequest

Type: [commercepayments.AlternativePaymentMethodRequest](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_CardPaymentMethodRequest.htm#apex_class_commercepayments_CardPaymentMethodRequest "Sends data related to a card payment method to a gateway adapter during a service call.")

Contains information about the alternative payment method. Used to send information to a gateway adapter during a service call.