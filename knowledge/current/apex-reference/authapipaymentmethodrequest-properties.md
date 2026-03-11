---
title: "AuthApiPaymentMethodRequest Properties"
domain: apex-reference
topic: authapipaymentmethodrequest-properties
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:34.831Z
keywords: [AuthApiPaymentMethodRequest, Properties, card, payment, method, object, used, request., cardPaymentMethod, Signature, Property, Value]
---

# AuthApiPaymentMethodRequest Properties

> The card payment method object used in a payment method
    request.

## AuthApiPaymentMethodRequest Properties

The following are properties for AuthApiPaymentMethodRequest.

-   **[cardPaymentMethod](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AuthApiPaymentMethodRequest.htm#apex_commercepayments_AuthApiPaymentMethodRequest_cardPaymentMethod)**  
    The card payment method object used in a payment method request.

### cardPaymentMethod

The card payment method object used in a payment method request.

#### Signature

global commercepayments.CardPaymentMethodRequest cardPaymentMethod {get; set;}

#### Property Value

Type: [commercepayments.CardPaymentMethodRequest](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_CardPaymentMethodRequest.htm#apex_class_commercepayments_CardPaymentMethodRequest "Sends data related to a card payment method to a gateway adapter during a service call.")