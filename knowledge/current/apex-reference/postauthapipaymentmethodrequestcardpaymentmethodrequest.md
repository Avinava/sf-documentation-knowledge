---
title: "PostAuthApiPaymentMethodRequest(cardPaymentMethodRequest)"
domain: apex-reference
topic: postauthapipaymentmethodrequestcardpaymentmethodrequest
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:36.625Z
keywords: [PostAuthApiPaymentMethodRequest, cardPaymentMethodRequest, Signature, Parameters]
---

# PostAuthApiPaymentMethodRequest(cardPaymentMethodRequest)

# PostAuthApiPaymentMethodRequest(cardPaymentMethodRequest)

Constructs a sample cardPaymentMethodRequest. This constructor is intended for test usage and throws an exception if used outside of the Apex test context.

## Signature

global PostAuthApiPaymentMethodRequest(commercepayments.CardPaymentMethodRequest cardPaymentMethodRequest)

## Parameters

cardPaymentMethodRequest

Type: [commercepayments.CardPaymentMethodRequest](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_CardPaymentMethodRequest.htm#apex_class_commercepayments_CardPaymentMethodRequest "Sends data related to a card payment method to a gateway adapter during a service call.")

Contains information about the card payment method. Used to send information to a gateway adapter during a service call.